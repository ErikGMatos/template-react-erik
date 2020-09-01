import React, { forwardRef, useRef } from 'react';

import PropTypes from 'prop-types';

import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from './styles';

const Checkbox = forwardRef(({ checked, ...props }, parentRef) => {
  const ref = useRef(null);
  const checkboxRef = parentRef || ref;
  return (
    <CheckboxContainer>
      <HiddenCheckbox ref={checkboxRef} checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
});

Checkbox.propTypes = {
  checked: PropTypes.bool,
};

Checkbox.defaultProps = {
  checked: false,
};

export default React.memo(Checkbox);
