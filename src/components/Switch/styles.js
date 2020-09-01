import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitchCheckbox = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked {
    + label {
      background: #43bccd;

      span {
        left: calc(100% - 2px);
        transform: translateX(-100%);
      }
    }
  }

  &:disabled {
    + label {
      background: #c5c6d0;
      cursor: not-allowed;
    }
  }
`;

export const SwitchLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40px;
  height: 24px;
  border-radius: 100px;
  background: grey;
  cursor: pointer;
  transition: background-color 0.2s;

  &:active {
    span {
      width: 22px;
    }
  }
`;

export const SwitchLabelButton = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  transition: 0.2s;
`;
