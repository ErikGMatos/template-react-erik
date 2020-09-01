import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { useField } from '@unform/core';

import ReactSelect from '~/components/Select';

jest.mock('@unform/core');

describe('Componente Select', () => {
  const options = [
    { id: '1', title: 'Emanuel Ribeiro' },
    { id: '2', title: 'Carlos Almeida' },
    { id: '3', title: 'Maria A. de Andrade' },
    { id: '4', title: 'João Carlos da Silva' },
  ];
  it('deve ser possivel encontrar as options no select', () => {
    useField.mockReturnValue({
      fieldName: 'select',
      registerField: () => {},
      defaultValue: undefined,
      error: undefined,
    });

    const { getByText } = render(
      <ReactSelect
        name="select"
        options={options}
        placeholder="placeholder"
        menuIsOpen
      />
    );
    fireEvent.click(getByText('placeholder'));

    expect(getByText('Emanuel Ribeiro')).toBeTruthy();
    expect(getByText('Carlos Almeida')).toBeTruthy();
    expect(getByText('Maria A. de Andrade')).toBeTruthy();
    expect(getByText('João Carlos da Silva')).toBeTruthy();
  });
});
