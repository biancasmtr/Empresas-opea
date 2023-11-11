import React from 'react';
import { render } from '@testing-library/react';
import CompanyList from './CompanyList';
import api from '../services/api';

jest.mock('../services/api');

describe('CompanyList', () => {
  test('renders company list', async () => {
    const companies = [
      { id: '1', name: 'Empresa 1', email: 'empresa1@teste.com.br', cnpj: '12345678901234' },
      { id: '2', name: 'Empresa 2', email: 'empresa2@teste.com.br', cnpj: '56789012345678' },
    ];

    api.get.mockResolvedValue({ data: companies });

    const { getByText } = render(<CompanyList />);

    await waitFor(() => {
      expect(getByText('Empresa 1')).toBeInTheDocument();
      expect(getByText('Empresa 2')).toBeInTheDocument();
    });
  });
});
