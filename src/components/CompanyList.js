
import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../services/api';
import '../styles/styles.scss'

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchCompanies(searchText)
      .then((data) => setCompanies(data))
      .catch((error) => console.error('Error fetching companies:', error));
  }, [searchText]);

  return (
    <div>
      <h1>Company List</h1>
      <div className="filter-bar">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search by company name"
      />
      </div>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            <p>Name: {company.name}</p>
            <p>Email: {company.email}</p>
            <p>CNPJ: {company.cnpj}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
