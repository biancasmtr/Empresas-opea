
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CompanyForm from './CompanyForm';
import api from '../services/api';

jest.mock('../services/api');

describe('CompanyForm', () => {
  test('submits company form', async () => {
    const { getByLabelText, getByText } = render(<CompanyForm />);

    fireEvent.change(getByLabelText(/name/i), { target: { value: 'Nova Empresa' } });
    fireEvent.change(getByLabelText(/email/i), { target: { value: 'novaempresa@teste.com.br' } });
    fireEvent.change(getByLabelText(/cnpj/i), { target: { value: '98765432101234' } });

    api.post.mockResolvedValue({ data: { id: '3', name: 'Nova Empresa', email: 'novaempresa@teste.com.br', cnpj: '98765432101234' } });

    fireEvent.click(getByText('Submit'));

    await waitFor(() => {
      expect(api.post).toHaveBeenCalledWith('/clients', {
        name: 'Nova Empresa',
        email: 'novaempresa@teste.com.br',
        cnpj: '98765432101234',
      });
    });
  });
});