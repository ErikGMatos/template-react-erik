import styled, { css } from 'styled-components';

import IconSuccessInline from '~/assets/img/svg/inline/check-animate.inline.svg';
import IconErrorInline from '~/assets/img/svg/inline/icon-error.inline.svg';
import IconWarningInline from '~/assets/img/svg/inline/icon-warning.inline.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-radius: 4px;

  ${props =>
    props.type === 'success' &&
    css`
      background-color: #00d6a6;
    `}
  ${props =>
    props.type === 'error' &&
    css`
      background-color: #f3123c;
    `}
  ${props =>
    props.type === 'warning' &&
    css`
      background-color: #ff6d00;
    `}
`;

export const WrapperContent = styled.div`
  padding-left: 16px;
  font-size: 1.4rem;
`;

const iconSharedStyles = css`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
`;

export const IconSuccess = styled(IconSuccessInline)`
  ${iconSharedStyles}
  stroke: #fff;
  stroke-width: 6;
`;
export const IconError = styled(IconErrorInline)`
  ${iconSharedStyles}
  fill: #fff;
`;
export const IconWarning = styled(IconWarningInline)`
  ${iconSharedStyles}
  fill: #fff;
`;
export const IconInfo = styled(IconWarningInline)`
  ${iconSharedStyles}
  fill: #fff;
`;
