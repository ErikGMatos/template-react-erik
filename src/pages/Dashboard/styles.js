import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);

  p {
    font-size: 3rem;
  }
`;
