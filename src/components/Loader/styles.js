import styled, { css, keyframes } from 'styled-components';

const loading = keyframes`
   from {left: -450px; width: 30%;}

    50% {width: 30%;}

    70% {width: 70%;}

    80% { left: 50%;}

    95% {left: 120%;}

    to {left: 100%;}
  `;

export const ContainerLoadBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.$color_gray_3};
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease-in-out;

  &.loadingActive {
    opacity: 1;
    visibility: visible;
  }

  ${props =>
    props.active &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const Loadbar = styled.div`
  content: '';
  position: absolute;
  left: -200px;
  display: block;
  width: 200px;
  height: 4px;

  ${props =>
    props.active &&
    css`
      background-color: ${({ theme }) => theme.$color_1};
      animation: ${loading} 2s linear infinite;
    `}

  &.loadingActive {
    background-color: ${({ theme }) => theme.$color_1};
    animation: ${loading} 2s linear infinite;
  }
`;
