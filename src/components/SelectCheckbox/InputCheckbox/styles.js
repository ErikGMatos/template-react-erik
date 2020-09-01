import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${({ theme }) => theme.$color_4};
  stroke-width: 3px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  clip-path: inset(50%);
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  margin: 0 0.9rem 0 0;
  border: 1px solid ${props => props.theme.lightGray};
  border-radius: 2px;
  background: #fff;
  transition: all 150ms;
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;
