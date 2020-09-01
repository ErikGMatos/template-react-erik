import React from 'react';

import { act, render } from '@testing-library/react';

import Modal from '~/components/Modal';

describe('Componente Modal ', () => {
  jest.useFakeTimers();

  it('deve ser possivel renderizar o Modal e encontrar o texto', () => {
    const text = 'Meu modal';
    const { getByText } = render(
      <Modal>
        <h1>{text}</h1>
      </Modal>
    );

    act(() => {
      jest.runAllTimers();
    });
    expect(getByText(text)).toBeTruthy();
  });
});
