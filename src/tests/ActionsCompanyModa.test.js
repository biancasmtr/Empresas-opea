import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ActionsCompanyModal from '../components/ActionsCompanyModal';

test('renders company modal', () => {
  const mockOnClose = jest.fn();
  const mockOnAddCompany = jest.fn();
  const mockOnEditCompany = jest.fn();
  const mockOnDeleteCompany = jest.fn();

  render(
    <ActionsCompanyModal
      onClose={mockOnClose}
      onAddCompany={mockOnAddCompany}
      onEditCompany={mockOnEditCompany}
      onDeleteCompany={mockOnDeleteCompany}
    />
  );

  expect(screen.getByText('Cadastrar Empresa')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Cancelar'));

  expect(mockOnClose).toHaveBeenCalledTimes(1);
});
