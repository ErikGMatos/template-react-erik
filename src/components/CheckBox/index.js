import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, Check, CheckWrap, CheckIcon } from './styles';

export default function CheckBox({ name, isChecked, disabled, ...rest }) {
  const checkboxRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: checkboxRef.current,
      getValue(refs) {
        const { checked } = refs;
        return !!checked;
      },
      setValue(refs, value) {
        refs.checked = !!value;
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container disabled={disabled} {...rest}>
      <CheckWrap>
        <Check
          ref={checkboxRef}
          type="checkbox"
          name={fieldName}
          defaultChecked={defaultValue || isChecked}
          disabled={disabled}
        />
        <CheckIcon />
      </CheckWrap>
      {error && <span>{error}</span>}
    </Container>
  );
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  disabled: PropTypes.bool,
};

CheckBox.defaultProps = {
  isChecked: false,
  disabled: false,
};
