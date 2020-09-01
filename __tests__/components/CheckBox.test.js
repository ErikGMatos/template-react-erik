import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { useField } from '@unform/core';

import CheckBox from '~/components/CheckBox';

jest.mock('@unform/core');

describe('Componente CheckBox ', () => {
  it('deve ser possivel renderizar o CheckBox', () => {
    useField.mockReturnValue({
      fieldName: 'teste',
      registerField: () => {},
      defaultValue: undefined,
      error: undefined,
    });
    const { container } = render(<CheckBox name="teste" />);

    const checkbox = container.querySelector('[type="checkbox"]');

    expect(checkbox).toBeTruthy();
    expect(checkbox.checked).toBeFalsy();
  });

  it('deve ser possivel clicar o CheckBox e receber true', () => {
    useField.mockReturnValue({
      fieldName: 'teste',
      registerField: () => {},
      defaultValue: undefined,
      error: undefined,
    });
    const { container } = render(<CheckBox name="teste" />);

    const checkbox = container.querySelector('[type="checkbox"]');
    const label = container.querySelector('label');

    fireEvent.click(label);

    expect(checkbox.checked).toBeTruthy();
  });

  it('deve ser possivel renderizar o CheckBox porém esta desabilitado e deve retornar false', () => {
    useField.mockReturnValue({
      fieldName: 'teste',
      registerField: () => {},
      defaultValue: undefined,
      error: undefined,
    });
    const { container } = render(<CheckBox name="teste" disabled />);

    const checkbox = container.querySelector('[type="checkbox"]');
    const label = container.querySelector('label');

    fireEvent.click(label);

    expect(checkbox.checked).toBeFalsy();
  });
});
