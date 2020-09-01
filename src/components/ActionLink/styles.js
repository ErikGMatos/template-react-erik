import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

export const ContainerLinkButton = styled.button`
  position: relative;
  display: inline-block;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.$color_4};
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 2;
    width: 0%;
    height: 1px;
    background-color: transparent;
    transition: width 0.2s ease-in-out, background-color 0.2s ease-in-out,
      left 0.2s ease-in-out;
  }

  &:hover {
    &::after {
      left: 0;
      width: 100%;
      background-color: currentColor;
    }
  }

  :disabled {
    color: ${({ theme }) => theme.$color_gray_4};

    &::after {
      display: none;
    }
  }
`;

export const ContainerLink = styled(Link)`
  position: relative;
  display: inline-block;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.$color_4};
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 2;
    width: 0%;
    height: 1px;
    background-color: transparent;
    transition: width 0.2s ease-in-out, background-color 0.2s ease-in-out,
      left 0.2s ease-in-out;
  }

  &:hover {
    &::after {
      left: 0;
      width: 100%;
      background-color: currentColor;
    }
  }
`;

export const ContainerLinkHref = styled.a`
  position: relative;
  display: inline-block;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.$color_4};
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    z-index: 2;
    width: 0%;
    height: 1px;
    background-color: transparent;
    transition: width 0.2s ease-in-out, background-color 0.2s ease-in-out,
      left 0.2s ease-in-out;
  }

  &:hover {
    &::after {
      left: 0;
      width: 100%;
      background-color: currentColor;
    }
  }
`;

export const IconCaret = styled.i`
  display: inline-block;
  width: 5px;
  height: 5px;
  margin-left: 8px;
  border: solid ${({ theme }) => theme.$color_4};
  transition: transform 0.2s ease-in-out;
  transform: rotate(45deg);

  ${({ caretActive }) =>
    !caretActive &&
    css`
      margin-bottom: 3px;
      border-width: 0 1px 1px 0;
    `}

  ${({ caretActive }) =>
    caretActive &&
    css`
      margin-bottom: 0px;
      border-width: 1px 0 0 1px;
    `}
`;
