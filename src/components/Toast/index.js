import React from 'react';
import { toast } from 'react-toastify';

import Alert from '~/components/Alert';

import { Container } from './styles';

export default function Toastify(params) {
  const {
    position,
    hideProgressBar,
    autoClose,
    newestOnTop,
    closeOnClick,
    draggable,
    rtl,
  } = params;
  return (
    <Container
      position={position}
      hideProgressBar={hideProgressBar}
      autoClose={autoClose}
      newestOnTop={newestOnTop}
      closeOnClick={closeOnClick}
      draggable={draggable}
      rtl={rtl}
    />
  );
}

export function showToast({ type, message }) {
  const Msg = () => <Alert type={type}>{message}</Alert>;

  const messageType = () => {
    const toastType = {
      success: () => toast.success(<Msg />),
      error: () => toast.error(<Msg />),
      warning: () => toast.warning(<Msg />),
      info: () => toast.info(<Msg />),
    };

    return toastType[type]() || null;
  };
  return messageType();
}
