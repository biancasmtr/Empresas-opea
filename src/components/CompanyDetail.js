
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const CompanyDetail = () => {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompanyDetail = async () => {
      try {
        const response = await api.get(`/clients/${companyId}`);
        setCompany(response.data);
      } catch (error) {
        console.error('Error fetching company detail:', error);
      }
    };

    fetchCompanyDetail();
  }, [companyId]);

  if (!company) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Company Detail</h1>
      <p>Name: {company.name}</p>
      <p>Email: {company.email}</p>
      <p>CNPJ: {company.cnpj}</p>
    </div>
  );
};

export default CompanyDetail;