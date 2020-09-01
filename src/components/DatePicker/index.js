import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';
import { Container, Label } from './styles';

export default function DatePicker({ name, label, customInput, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      {label && <Label htmlFor={fieldName}>{label}</Label>}
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        fixedHeight
        showPopperArrow={false}
        autoComplete="off"
        {...rest}
        customInput={customInput}
      />

      {error && !customInput && <span>{error}</span>}
    </Container>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  customInput: PropTypes.oneOfType([PropTypes.object]),
};

DatePicker.defaultProps = {
  label: '',
  customInput: null,
};
