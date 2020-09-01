import React from 'react';

import PropTypes from 'prop-types';

import { InputSearchComponent, Icon } from './styles';

export default function InputSearch({ name, placeholder, onChange, ...rest }) {
  return (
    <InputSearchComponent
      {...rest}
      name={name}
      noLabel
      placeholder={placeholder}
      icon={Icon}
      autoComplete="off"
      onChange={onChange}
    />
  );
}

InputSearch.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
};

InputSearch.defaultProps = () => ({
  placeholder: 'Buscar',
  noLabel: false,
  onChange: () => {},
});
