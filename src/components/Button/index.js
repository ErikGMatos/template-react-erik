import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children, onClick, icon, rtl, ...rest }) {
  const Icon = icon;
  return (
    <Container {...rest} icon={icon} rtl={rtl} onClick={onClick}>
      {icon && <Icon />}
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func,
  icon: PropTypes.func,
  rtl: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  onClick: () => {},
  icon: null,
  rtl: false,
};
