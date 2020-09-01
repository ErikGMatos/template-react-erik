import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-left: 24px;

  :first-child {
    margin-left: 0;
  }

  ${({ column }) =>
    column &&
    css`
      margin-left: 0;
    `}
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 16px;

  span:last-child {
    position: absolute;
    top: 22px;
    left: 0;
    width: 100%;
    margin: 0.6rem 0 0.4rem;
    border-radius: 4px;
    color: ${({ theme }) => theme.$color_1};
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.3;
    text-align: left;
    transform: none;
    animation: fadeIn 350ms ease-in-out 1;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  [type='radio'] {
    display: none;

    + label {
      color: #4d4c59;
      font-size: 1.6rem;
      line-height: 24px;

      &::before {
        content: '';
        position: relative;
        top: 4px;
        display: inline-block;
        width: 17px;
        height: 17px;
        margin-right: 8px;
        border: 1px solid #c5c6d0;
        border-radius: 50%;
        background-color: #fff;
        cursor: pointer;
      }
    }

    &:checked {
      + label {
        &::before {
          content: '';
          background-color: #43bccd;
          box-shadow: 0px 0px 1px 3px #fff inset;
          transition: opacity 0.2s ease-in-out;
        }
      }
    }
  }

  ${({ column }) =>
    column &&
    css`
      display: flex;
      flex-direction: column;
    `}
`;

export const Radio = styled.input``;

export const Label = styled.label``;
