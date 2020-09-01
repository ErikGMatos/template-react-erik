import styled, { css } from 'styled-components';

export const Container = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 0;
  padding: 7px 16px;
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: ${props => props.theme.$color_1};
  background-position: 16px center;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.$color_gray_1};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  will-change: opacity;

  &:hover {
    opacity: 0.7;

    ${props =>
      props.secondary &&
      css`
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.$color_4};
        opacity: 1;
      `}

    ${props =>
      props.tertiary &&
      css`
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.$color_gray_5};
        opacity: 1;
      `}

    ${props =>
      props.disabled &&
      css`
        opacity: 0.2;
      `}
  }

  ${({ icon }) =>
    icon &&
    css`
      svg {
        vertical-align: middle;
        width: 1.4rem;
        margin: 0 0.8rem;
        fill: ${({ theme }) => theme.$color_gray_1};
      }
    `}

  ${({ rtl }) =>
    rtl &&
    css`
      flex-direction: row-reverse;
    `}

  ${props =>
    props.secondary &&
    css`
      border-color: ${props.theme.$color_4};
      background-color: ${({ theme }) => theme.$color_gray_1};
      color: ${props.theme.$color_4};
    `}


  ${props =>
    props.tertiary &&
    css`
      border-color: ${props.theme.$color_gray_5};
      background-color: ${({ theme }) => theme.$color_gray_1};
      color: ${props.theme.$color_gray_5};
    `}

  ${props =>
    props.big &&
    css`
      padding: 13px 24px;
    `}

  ${props =>
    props.disabled &&
    css`
      opacity: 0.2;
      cursor: not-allowed;
    `}
`;
