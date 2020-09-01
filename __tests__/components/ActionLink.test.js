import React from 'react';
import { Router } from 'react-router-dom';

import { render } from '@testing-library/react';

import ActionLink from '~/components/ActionLink';
import history from '~/services/history';

describe('Componente ActionLink ', () => {
  it('não deve ser possivel renderizar o nome do link', () => {
    const { queryByTestId } = render(<ActionLink>Meu link null</ActionLink>);

    expect(queryByTestId('Meu link null')).toBeNull();
  });
  it('deve ser possivel renderizar link react router dom', () => {
    const { getByText } = render(
      <Router history={history}>
        <ActionLink link to="/">
          Meu link
        </ActionLink>
      </Router>
    );

    expect(getByText('Meu link')).toBeTruthy();
  });
  it('deve ser possivel renderizar link ancora', () => {
    const { getByText } = render(
      <ActionLink linkhref href="https://google.com.br">
        Meu link
      </ActionLink>
    );

    expect(getByText('Meu link')).toBeTruthy();
  });
  it('deve ser possivel renderizar link em forma de button', () => {
    const { getByText } = render(<ActionLink linkbutton>Meu link</ActionLink>);

    expect(getByText('Meu link')).toBeTruthy();
  });
});
