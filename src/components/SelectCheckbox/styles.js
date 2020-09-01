import { Form as FormRocket } from '@unform/web';
import styled, { css } from 'styled-components';

import CaretDown from '~/assets/img/svg/inline/icon-caret-down.inline.svg';
import ActionLink from '~/components/ActionLink';

export const Container = styled.div`
  position: relative;
  margin: ${({ defaultform }) => (defaultform ? '0 0 8px 0' : '0')};
  padding: ${({ defaultform }) => (defaultform ? '0 0 20px 0' : '0')};

  [class$='-menu'] {
    z-index: 6;
    margin-top: 3px;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  }

  [class$='-loadingIndicator'] {
    margin: 0;
    padding: 0;
  }

  ${({ error }) =>
    error &&
    css`
      [class$='-Placeholder'] {
        color: ${({ theme }) => theme.$color_1};
      }

      label {
        color: ${({ theme }) => theme.$color_1};
      }

      [class$='-indicatorContainer'] path {
        fill: ${({ theme }) => theme.$color_1};
      }

      span:last-child {
        color: ${({ theme }) => theme.$color_1};
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.3;
        width: 100%;
        margin: 0.6rem 0 0.4rem;
        border-radius: 4px;
        transform: none;
        animation: fadeIn 350ms ease-in-out 1;
        position: absolute;
        bottom: 0;
        left: ${({ defaultform }) => (defaultform ? '0' : '15px')};
        text-align: left;
        @keyframes fadeIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    `}

  .scrollbar-container {
    max-height: 0;
    margin: 6px 0;
    transition: max-height 0.3s ease-in-out;

    ${({ showMenu, maxHeight }) =>
      showMenu
        ? css`
            max-height: ${maxHeight || 200}px;
          `
        : css`
            max-height: 0;
          `}
  }
`;

export const WrapperMenuList = styled.div`
  /* max-height: 0;
  transition: all 0.3s ease-in-out;
  ${({ showMenu, maxHeight }) =>
    showMenu
      ? css`
          max-height: ${maxHeight || 200}px;
        `
      : css`
          max-height: 0;
        `} */


  /* ${({ maxHeight }) =>
    maxHeight
      ? css`
          max-height: ${maxHeight}px;
        `
      : css`
          max-height: 200px;
        `} */

  /* max-height: 0;
  height: 0;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
      visibility: visible;
      opacity: 1;
      transition: visibility 0.9s, max-height 0.4s, opacity 0.2s linear;
      ${({ maxHeight }) =>
        maxHeight
          ? css`
              max-height: ${maxHeight}px;
            `
          : css`
              max-height: 230px;
            `}
    `} */
`;

export const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.$color_gray_5};
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 28px;
  text-align: left;

  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.$color_gray_1};
    `}
`;

export const Icon = styled(CaretDown)`
  width: 16px;
  height: 16px;

  path {
    fill: ${({ defaultform, theme }) =>
      defaultform === 'true' ? theme.$color_gray_7 : theme.$color_4};

    ${({ disabled }) =>
      disabled &&
      css`
        fill: ${({ theme }) => theme.$color_gray_4};
      `}
  }
`;

export const TagImg = styled.img`
  width: 17px;
  margin: auto;
`;

export const LineCheckbox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-size: 1.4rem;

  &:hover {
    background-color: ${({ theme }) => theme.$color_gray_3};
  }

  &input[type='checkbox']:checked {
    color: green;
    opacity: 1;
    filter: alpha(opacity=100);
  }

  label {
    display: flex;
    padding: 6px 0;
  }
`;

export const ApplyWrapper = styled.div`
  width: 100%;
  border-top: 1px solid #ecedf2;
`;

export const ApplyButton = styled(ActionLink)`
  display: block;
  margin-bottom: 8px;
  margin-left: 8px;
  padding-top: 8px;
  font-size: 1.4rem;
`;

export const InputCheckBox = styled.input``;

export const Form = styled(FormRocket)``;
