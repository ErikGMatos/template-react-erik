import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import usePortal from '~/components/Portal';

import {
  ModalCrm,
  Overlay,
  ButtonClose,
  ModalWrap,
  ModalWrapDad,
  Header,
  Title,
} from './styles';

export default function Modal({
  id,
  children,
  handleClose,
  closeOverlay,
  hasCloseButton,
  title,
  icon: IconHeader,
  maxHeight,
  open,
  successCallback,
  errorCallback,
  closeCallbackType,
  setCloseCallbackType,
  ...rest
}) {
  const containerId = id || 'AppModal';
  const target = usePortal(containerId);
  const [animation, setAnimation] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [close, setClose] = useState(false);

  useEffect(() => {
    if (!closeCallbackType) return;
    setClose(true);
    setCloseCallbackType(false);
    setTimeout(() => {
      if (closeCallbackType === 'error') return errorCallback();
      if (closeCallbackType === 'success') return successCallback();
      if (closeCallbackType === 'close') return handleClose();
    }, 200);
  }, [
    setCloseCallbackType,
    closeCallbackType,
    errorCallback,
    successCallback,
    handleClose,
  ]);

  useEffect(() => {
    if (!close) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        setShouldRender(true);
        setIsOpenModal(true);
        setAnimation(true);
      }, 50);
      return;
    }
    setAnimation(false);
    setIsOpenModal(false);
    document.body.style.overflow = '';
  }, [close]);

  function closeModal() {
    setClose(true);
    setCloseCallbackType(false);
    setTimeout(() => {
      handleClose();
    }, 200);
  }

  return createPortal(
    <>
      <ModalWrapDad isOpen={isOpenModal}>
        <ModalWrap isOpen={isOpenModal}>
          <Overlay
            isOpen={isOpenModal}
            animation={animation}
            onClick={closeOverlay ? closeModal : null}
          />
          <ModalCrm
            isOpen={isOpenModal}
            animation={animation}
            maxHeight={maxHeight}
            {...rest}
          >
            {hasCloseButton && <ButtonClose onClick={closeModal} />}
            {title || IconHeader ? (
              <Header>
                {IconHeader && (
                  <IconHeader
                    style={{ width: '64px', margin: '0 auto 16px' }}
                  />
                )}
                {title && <Title>{title}</Title>}
              </Header>
            ) : null}
            {shouldRender && children}
          </ModalCrm>
        </ModalWrap>
      </ModalWrapDad>
    </>,
    target
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  handleClose: PropTypes.func,
  closeOverlay: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string,
  ]),
  maxHeight: PropTypes.string,
  closeCallbackType: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  setCloseCallbackType: PropTypes.func,
};

Modal.defaultProps = {
  children: null,
  handleClose: () => {},
  closeOverlay: true,
  hasCloseButton: true,
  title: '',
  icon: null,
  maxHeight: '98%',
  closeCallbackType: false,
  setCloseCallbackType: () => {},
};
