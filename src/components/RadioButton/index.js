import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, Radio, Label, Wrapper } from './styles';

export default function RadioButton({ name, options, column, ...rest }) {
  const inputRefs = useRef([]);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRefs.current,
      getValue(refs) {
        const checked = refs.find(ref => ref.checked);
        return checked ? checked.value : null;
      },
      setValue(refs, value) {
        const item = refs.find(ref => ref.value === value);
        const itemsRefs = refs.filter(ref => ref.value !== value);

        if (item) {
          item.checked = true;
        }

        if (itemsRefs) {
          itemsRefs.forEach(itemRef => {
            itemRef.checked = false;
          });
        }
      },
    });
  }, [fieldName, registerField]);
  return (
    <Container column={column} {...rest}>
      {options.map((option, index) => (
        <Wrapper
          column={column}
          key={String(`${fieldName}-${index}-${option.id}`)}
        >
          <Radio
            ref={elRef => {
              const input = inputRefs.current;
              input[index] = elRef;
              return input;
            }}
            type="radio"
            name={fieldName}
            id={`${fieldName}-${index}`}
            value={option.id}
            defaultChecked={defaultValue === option.id}
          />
          <Label htmlFor={`${fieldName}-${index}`}>{option.label}</Label>
        </Wrapper>
      ))}
      {error && <span>{error}</span>}
    </Container>
  );
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.array]).isRequired,
  column: PropTypes.bool,
};

RadioButton.defaultProps = {
  id: '',
  column: false,
};
