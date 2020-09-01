import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Button from '~/components/Button';

describe('Componente Button ', () => {
  it('deve ser possivel clicar no botão e receber onumero de chamadas, o valor que foi passado por parametro e o valor da função chamada', () => {
    const onClick = jest.fn(x => x + 1);
    const { getByText, rerender } = render(
      <Button onClick={() => onClick(10)}>Meu botão</Button>
    );

    fireEvent.click(getByText('Meu botão'));
    expect(onClick.mock.calls.length).toBe(1);
    expect(onClick.mock.calls[0][0]).toBe(10);
    expect(onClick.mock.results[0].value).toBe(11);

    rerender(<Button disabled>Meu botão disabled</Button>);

    expect(getByText('Meu botão disabled')).toBeDisabled();
  });
});
