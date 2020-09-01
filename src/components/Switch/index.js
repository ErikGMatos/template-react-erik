import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import {
  Container,
  SwitchCheckbox,
  SwitchLabel,
  SwitchLabelButton,
} from './styles';

export default function Switch({ name, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  useEffect(() => {
    if (!ref.current) return;
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'checked',
    });
  }, [fieldName, registerField]);
  return (
    <Container data-testid="swith-test-id">
      <SwitchCheckbox
        type="checkbox"
        name={fieldName}
        ref={ref}
        id={fieldName}
        aria-label={fieldName}
        defaultValue={defaultValue}
        {...rest}
      />
      <SwitchLabel htmlFor={name}>
        <SwitchLabelButton />
      </SwitchLabel>
      {error && <span>{error}</span>}
    </Container>
  );
}

Switch.propTypes = {
  name: PropTypes.string.isRequired,
};
