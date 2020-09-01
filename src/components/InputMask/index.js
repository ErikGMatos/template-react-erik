import React, { useRef, forwardRef, useEffect } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Label, Error, InputLabel, StyledInput } from './styles';

const InputMaskComponent = forwardRef(
  ({ name, mask, label, placeholder, noLabel, ...rest }, parentRef) => {
    const { fieldName, defaultValue, registerField, error } = useField(name);

    const ref = useRef(null);
    const inputRef = parentRef || ref;
    const renderLabel = label || name;

    useEffect(() => {
      if (!inputRef.current) return;
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'inputElement.value',
        getValue(reference) {
          const { textMaskInputElement } = reference;
          if (fieldName === 'date') {
            return textMaskInputElement.state.previousConformedValue;
          }
          let unmasked = textMaskInputElement.state.previousConformedValue
            .replace(/\.+/g, '')
            .replace(/-/g, '')
            .replace(/\//g, '')
            .replace(/\(/g, '')
            .replace(/\)/g, '')
            .replace(/ /g, '');
          if (fieldName === 'whatsapp') {
            unmasked = unmasked.replace('+55', '');
          }
          return unmasked;
        },
      });
    }, [inputRef, registerField, fieldName]);

    return (
      <Label htmlFor={fieldName} error={error}>
        <StyledInput
          ref={inputRef}
          name={fieldName}
          id={fieldName}
          defaultValue={defaultValue}
          placeholder={placeholder}
          mask={mask}
          guide={false}
          {...rest}
        />
        {!noLabel && <InputLabel>{renderLabel}</InputLabel>}
        {error && <Error>{error}</Error>}
      </Label>
    );
  }
);

InputMaskComponent.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  noLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  mask: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),
  ]),
  error: PropTypes.string,
};

InputMaskComponent.defaultProps = {
  mask: null,
  error: null,
  label: '',
  placeholder: ' ',
  noLabel: false,
};

export default InputMaskComponent;
