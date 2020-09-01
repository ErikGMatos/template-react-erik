import MaskedInput from 'react-text-mask';

import styled, { css } from 'styled-components';

export const InputLabel = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin-top: 20px;
  color: ${({ theme }) => theme.$color_gray_5};
  font-size: 1.6rem;
  line-height: 24px;
  text-align: left;
  transition: all 0.2s ease-in-out;
`;

export const StyledInput = styled(MaskedInput)`
  position: relative;
  z-index: 2;
  width: 100%;
  padding-left: ${({ icon }) => (icon ? '2.5rem' : '0')};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.$color_gray_3};
  background: 0 0;
  color: #4d4c59;
  outline: 0;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 24px;

  :focus {
    border-bottom: 1px solid ${({ theme }) => theme.$color_4};
    + ${InputLabel} {
      margin-top: 0;
      color: ${({ theme }) => theme.$color_4};
      font-size: 1.2rem;
      line-height: 16px;
    }
  }

  &:valid:not(:placeholder-shown) {
    + ${InputLabel} {
      margin-top: 0;
      color: ${({ theme }) => theme.$color_gray_5};
      font-size: 1.2rem;
      line-height: 16px;
    }
  }

  &:invalid:not(:placeholder-shown) {
    border-color: ${({ theme }) => theme.$color_1};
    + ${InputLabel} {
      margin-top: 0;
      color: ${({ theme }) => theme.$color_1};
      font-size: 1.2rem;
      line-height: 16px;
    }
  }

  :disabled {
    color: #c5c6d0;

    + span {
      color: #c5c6d0;
    }
  }

  &:read-only:not(:placeholder-shown) {
    color: #c5c6d0;

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.$color_gray_3};
    }

    + span {
      margin-top: 0;
      color: ${({ theme }) => theme.$color_gray_5};
      font-size: 1.2rem;
      line-height: 16px;
    }
  }

  ~ svg {
    position: absolute;
    bottom: 15px;
    left: 0;
    width: 18px;
    transform: translateY(-50%);
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.$color_1};
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 8px;
  padding: 20px 0;

  > button {
    position: absolute;
    top: 4.5rem;
    right: 1.6rem;
    z-index: 2;
    padding: 0;

    :hover {
      transform: scale(1.1);
    }
  }

  ${({ error }) =>
    error &&
    css`
      ${StyledInput} {
        border-color: ${({ theme }) => theme.$color_1};
        color: ${({ theme }) => theme.$color_1};

        &:valid:not(:placeholder-shown) {
          + ${InputLabel} {
            color: ${({ theme }) => theme.$color_1};
          }
        }
      }

      ${Error} {
        position: absolute;
        bottom: 0;
        left: 0px;
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
    `}
`;
