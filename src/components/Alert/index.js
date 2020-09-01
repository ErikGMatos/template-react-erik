import React from 'react';

import PropTypes from 'prop-types';

import {
  Container,
  WrapperContent,
  IconSuccess,
  IconError,
  IconWarning,
  IconInfo,
} from './styles';

export default function Alert({ type, children }) {
  return (
    <Container type={type}>
      {type === 'success' && <IconSuccess />}
      {type === 'error' && <IconError />}
      {type === 'warning' && <IconWarning />}
      {type === 'info' && <IconInfo />}
      <WrapperContent>{children}</WrapperContent>
    </Container>
  );
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Alert.defaultProps = {
  children: '',
};
