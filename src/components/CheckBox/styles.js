import styled, { css } from 'styled-components';

import IconCheck from '~/assets/img/svg/icones/icon-check-white.icone.svg';

export const CheckIcon = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 24px;
  height: 24px;
  background-color: #fff;
  background-image: none;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const CheckWrap = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 24px;
  height: 24px;
  border: 1px solid #43bccd;
  border-radius: 3px;
  transition: all 0.2s ease-in-out;

  &:hover ${CheckIcon} {
    background-image: none;
    box-shadow: inset 0 0 0 1px #43bccd;
  }
`;

export const Container = styled.div`
  float: left;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;

      ${CheckWrap} {
        &:hover ${CheckIcon} {
          box-shadow: unset;
        }
      }

      ${CheckIcon} {
        cursor: not-allowed;
      }
    `}
`;

export const Check = styled.input`
  display: none;
  padding: 0;

  &:checked + ${CheckIcon} {
    background-color: #43bccd;
    background-image: url(${IconCheck});
    background-size: 12px;
  }
`;
