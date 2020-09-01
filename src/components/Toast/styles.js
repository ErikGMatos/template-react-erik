import { ToastContainer } from 'react-toastify';

import styled from 'styled-components';

import IconClose from '~/assets/img/svg/inline/icon-close.inline.svg';

const ButtonClose = styled(IconClose)`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 16px;
  cursor: pointer;
  fill: #4d4c59;
`;

export const Container = styled(ToastContainer)`
  top: 1em;
  left: 50%;
  width: 96%;
  margin-left: -48%;
  padding: 4px;

  .Toastify__toast {
    ${ButtonClose}
    border-radius: 4px;
  }

  .Toastify__close-button {
    width: 16px;
    height: 16px;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 16px;
  }

  .Toastify__progress-bar {
    bottom: 4px;
    left: 50%;
    width: 98%;
    height: 4px;
    margin-left: -49%;
    border-radius: 4px;
    background-color: #fff;
  }

  .Toastify__toast--error {
    background-color: #f3123c;
  }

  .Toastify__toast--warning {
    background-color: #ff6d00;
  }

  .Toastify__toast--success {
    background-color: #00d6a6;
  }
`;
