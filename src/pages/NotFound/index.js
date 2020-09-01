import React from 'react';

import { Container, Wrapper, Button } from './styles';

export default function NotFound() {
  return (
    <Container>
      <Wrapper>
        <h1>Not found</h1>
        <Button to="/">go to dashboard</Button>
      </Wrapper>
    </Container>
  );
}
