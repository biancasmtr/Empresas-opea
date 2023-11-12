import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import CompanyDetail from '../components/CompanyDetail';
import api from '../services/api';

jest.mock('../services/api');

test('renders company detail', async () => {
  const mockCompany = {
    id: 1,
    name: 'Company 1',
    email: 'company1@example.com',
    cnpj: '12345678901234',
  };

  api.get.mockResolvedValue({ data: mockCompany });

  render(
    <MemoryRouter initialEntries={['/companies/1']}>
      <Routes>
        <Route path="/companies/:companyId" element={<CompanyDetail />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText('Company Detail')).toBeInTheDocument();
    expect(screen.getByText(`Name: ${mockCompany.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Email: ${mockCompany.email}`)).toBeInTheDocument();
    expect(screen.getByText(`CNPJ: ${mockCompany.cnpj}`)).toBeInTheDocument();
  });
});
