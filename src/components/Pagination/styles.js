import styled, { css } from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 32px;
`;

export const WrapperList = styled.div`
  display: flex;
  ${props =>
    props.isLoading &&
    css`
      opacity: 0.6;
    `}
`;

export const Dots = styled.div`
  padding: 0 4px;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.6rem;
`;

const sharedButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 24px;
  border-radius: 2px;
  background: none;
  color: #8b8c99;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  ${props =>
    props.active &&
    css`
      cursor: default;
    `}
  ${props =>
    !props.active &&
    css`
      &:hover {
        color: #43bccd;
      }
    `}
`;

export const ControlButton = styled.button`
  ${sharedButtonStyle}
  font-size: 1.6rem;
  ${props =>
    props.disabled &&
    css`
      opacity: 0;
      cursor: default;
    `}
`;

export const PageButton = styled.button`
  ${sharedButtonStyle}
  font-size: 1.4rem;
  ${props =>
    props.active &&
    css`
      background-color: #43bccd;
      color: #fff;
    `}
`;
