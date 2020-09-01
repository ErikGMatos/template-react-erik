import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Label, Error, InputLabel, StyledInput } from './styles';

export default function Input({
  label,
  placeholder,
  name,
  icon,
  size,
  iconStyle,
  noLabel,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const renderLabel = label || name;
  const Icon = icon;

  useEffect(() => {
    if (!ref.current) return;
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Label htmlFor={fieldName} icon={icon} error={error}>
      <StyledInput
        name={fieldName}
        ref={ref}
        id={fieldName}
        aria-label={fieldName}
        defaultValue={defaultValue}
        placeholder={placeholder || ' '}
        {...rest}
      />
      {!noLabel && <InputLabel>{renderLabel}</InputLabel>}
      {icon && <Icon width={16} />}
      {error && <Error>{error}</Error>}
    </Label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  noLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  size: PropTypes.number,
  iconStyle: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.element,
};

Input.defaultProps = () => ({
  icon: '',
  label: '',
  size: null,
  iconStyle: null,
  children: null,
  noLabel: false,
});
