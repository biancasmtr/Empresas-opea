import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CompanyList from '../components/CompanyList';

test('renders company list', () => {
  render(<CompanyList />);
  
  expect(screen.getByText('Nome do Usuário')).toBeInTheDocument();
  expect(screen.getByText('Adicionar Empresa')).toBeInTheDocument();
});

