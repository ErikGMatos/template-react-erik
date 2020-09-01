import styled from 'styled-components';

import ActionLink from '~/components/ActionLink';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: #ecedf2;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9.6rem;

  h1 {
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 4rem;
    text-transform: uppercase;
  }

  p {
    position: relative;
    display: inline;
    color: #8b8c99;
    font-size: 2.4rem;
    line-height: 3.2rem;
  }

  svg {
    display: inline-block;
    width: 128px;
    height: 128px;
    margin-bottom: 3.2rem;
    stroke: #c5c6d0;
    stroke-width: 1px;
    stroke-dashoffset: 260px;
    stroke-dasharray: 260px;
  }
`;

export const Button = styled(ActionLink).attrs({
  link: true,
})`
  margin-top: 1.6rem;
  font-size: 1.4rem;
`;
