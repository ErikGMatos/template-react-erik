import React from 'react';

import { ContainerLoadBar, Loadbar } from './styles';

export default function Loader() {
  return (
    <ContainerLoadBar active={false}>
      <Loadbar active={false} />
    </ContainerLoadBar>
  );
}
