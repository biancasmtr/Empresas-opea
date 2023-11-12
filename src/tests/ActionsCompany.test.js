import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ActionsCompany from '../components/ActionsCompany';

test('renders ActionsCompany', () => {
  const onClickMock = jest.fn();

  const { getByText } = render(
    <ActionsCompany onClick={onClickMock} />
  );

  const addButton = getByText('Adicionar Empresa');

  fireEvent.click(addButton);
  expect(onClickMock).toHaveBeenCalled();
});
