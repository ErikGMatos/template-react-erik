import React from 'react';
import { Link } from 'react-router-dom';

import commom from '~/services/commom';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <p>##NOW##</p>
      <p>
        Seja bem vindo <strong>##USERNAME##</strong>,
      </p>
      <p>este é o template de app ReactJS.By @Erik Matos</p>
      <Link to={commom.CONFIG_ROUTE_PRIVATE}>Link para rota privada</Link>
    </Container>
  );
}
