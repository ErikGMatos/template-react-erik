import React from 'react';

import PropTypes from 'prop-types';

import {
  ContainerLink,
  ContainerLinkButton,
  ContainerLinkHref,
  IconCaret,
} from './styles';

export default function ActionLink({
  children,
  onClick,
  linkbutton,
  linkhref,
  link,
  showCaret,
  caretActive,
  ...rest
}) {
  return (
    <>
      {linkbutton && (
        <ContainerLinkButton onClick={onClick} {...rest}>
          {children}
          {showCaret && <IconCaret caretActive={caretActive} />}
        </ContainerLinkButton>
      )}

      {linkhref && <ContainerLinkHref {...rest}>{children}</ContainerLinkHref>}

      {link && <ContainerLink {...rest}>{children}</ContainerLink>}
    </>
  );
}

ActionLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  linkbutton: PropTypes.bool,
  linkhref: PropTypes.bool,
  link: PropTypes.bool,
  showCaret: PropTypes.bool,
  caretActive: PropTypes.bool,
};

ActionLink.defaultProps = {
  children: 'Action link',
  onClick: () => {},
  linkbutton: false,
  linkhref: false,
  link: false,
  showCaret: false,
  caretActive: false,
};
