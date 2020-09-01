import styled, { css } from 'styled-components';

import IconClose from '~/assets/img/svg/inline/icon-close.inline.svg';

function getWidth(big, small, customWidth) {
  if (customWidth) return `${customWidth}px`;
  if (big) return '80%';
  if (small) return '50%';
  return '60%';
}

export const ModalWrapDad = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  visibility: hidden;
  backface-visibility: hidden;
  will-change: transform;
  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
    `}
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backface-visibility: hidden;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  backface-visibility: hidden;
  will-change: transform;

  ${({ isOpen, animation }) =>
    isOpen &&
    animation &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const ModalCrm = styled.div`
  position: relative;
  top: 0;
  z-index: 9999;
  width: ${({ big, small, customWidth }) => getWidth(big, small, customWidth)};
  min-width: ${({ customWidth }) => (customWidth ? 'auto' : '600px')};
  height: auto;
  min-height: 80px;
  max-height: ${({ maxHeight }) => maxHeight};
  margin: auto;
  padding: 32px;
  border-radius: 4px;
  background: ${({ theme }) => theme.$color_gray_1};
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: top 0.3s, opacity 0.4s, visibility 5s ease-in-out;
  transform: translateY(-50%) perspective(1px) translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;

  ${({ isOpen, animation }) =>
    isOpen &&
    animation &&
    css`
      top: 50%;
      opacity: 1;
      visibility: visible;
    `}
`;

export const ButtonClose = styled(IconClose)`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 16px;
  cursor: pointer;
  fill: #4d4c59;
`;

export const Header = styled.div``;

export const Title = styled.h2`
  margin: 0 auto 16px;
  color: ${({ theme }) => theme.$color_gray_7};
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 32px;
`;
