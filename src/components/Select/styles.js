import styled, { css } from 'styled-components';

import Search from '~/assets/img/svg/icones/icon-search.icone.svg';
import CaretDown from '~/assets/img/svg/inline/icon-caret-down.inline.svg';

function getHeight(h) {
  const height = (h + 5) * -1;
  return `${height}px`;
}

function getWidth(w) {
  const width = w - 18;
  return `${width}px !important`;
}

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 8px;
  z-index: -10;
  width: 20px;
  height: 20px;
  margin-top: 10px;
`;

export const Divlabel = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  align-items: center;
  overflow: hidden;
  overflow: unset;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  min-height: 30px;
  padding-right: 50px;
  ${({ label }) =>
    label &&
    css`
      top: 28px;
    `}
`;

export const LabelSelect = styled.div`
  overflow: hidden;
  width: auto;
  max-width: 450px;
  color: #4d4c59;
  line-height: 25px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Container = styled.div`
  position: relative;
  margin: ${({ defaultform }) => (defaultform ? '0 0 8px 0' : '0')};
  padding: ${({ defaultform }) => (defaultform ? '0 0 20px 0' : '0')};

  ${Divlabel} {
    ${({ defaultform }) =>
      defaultform
        ? css`
            left: 0;
          `
        : css`
            left: 5px;
            padding-left: 8px;
          `}
  }

  ${LabelSelect} {
    ${({ defaultform }) =>
      defaultform
        ? css`
            font-weight: 400;
            font-size: 1.6rem;
          `
        : css`
            font-weight: 500;
            font-size: 1.2rem;
          `}
  }

  [class$='-menu'] {
    z-index: 6;
    margin-top: 3px;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  }

  [class$='-indicatorContainer'] {
    position: absolute;
    right: 0;
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
  ${({ error, defaultform }) =>
    error &&
    defaultform &&
    css`
      [class$='-container'] [class$='-control'] {
        border-color: ${({ theme }) => theme.$color_1};
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

  ${({ showSingleValue }) =>
    showSingleValue &&
    css`
      [class^='Divlabel'] {
        z-index: 0;
      }
    `}

  [class$='-control'] {
    + div {
      [class^='WrapperMenuList'] {
        ${({ isSearchable, isDisabled, isLoading }) =>
          isSearchable &&
          !isDisabled &&
          !isLoading &&
          css`
            padding-top: 4rem;
          `}
      }
    }

    > div:first-child {
      overflow: unset;
      width: 100%;
      padding-right: 30px;

      > div:last-child {
        position: absolute;
        top: 3.4rem;
        left: 0;
        z-index: -10;
        height: 34px;
        border-bottom: 1px solid #ecedf2 !important;
        background-color: #fff !important;
        line-height: 30px;
        opacity: 0;

        > div {
          width: 100%;
          height: 100%;

          &:before {
            content: '';
            position: absolute;
            top: 8px;
            width: 16px;
            height: 16px;
            background-image: url(${Search});
            background-repeat: no-repeat;
          }
        }

        input {
          position: relative;
          z-index: 1;
          box-sizing: border-box !important;
          width: 100% !important;
          height: 100%;
          padding-left: 20px !important;
        }
        ${({ showMenu, widthInput, isDisabled, isLoading }) =>
          showMenu &&
          !isDisabled &&
          !isLoading &&
          css`
            z-index: 20;
            width: ${getWidth(widthInput)};
            opacity: 1;
          `}
        ${({ menuPlacement, heightTop }) =>
          menuPlacement === 'top' &&
          css`
            top: ${getHeight(heightTop)};
          `}
      }
    }
  }
`;

export const WrapperMenuList = styled.div`
  /* ${({ isSearchable }) =>
    isSearchable &&
    css`
      padding-top: 5rem;
    `} */
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
