
import React, { useEffect, useState } from 'react';
import { fetchCompanies } from '../services/api';
import Header from './Header';
import AddCompany from './AddCompany';
import icon from '../images/icon-list.svg'
import search from '../images/icon-search.svg'
import '../styles/styles.scss'

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showAddCompany, setShowAddCompany] = useState(false);

  useEffect(() => {
    fetchCompanies(searchText)
      .then((data) => setCompanies(data))
      .catch((error) => console.error('Error fetching companies:', error));
  }, [searchText]);

  const handleAddCompanyClick = () => {
    setShowAddCompany(true);
  };

  return (
    <div>
      <Header userName="Nome do Usuário" />
      <ul>
        <li >
          <div className="filter-bar">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by company name"
            />
            <img src={search} alt="icon list" />
          </div>
        </li>
        <AddCompany onClick={handleAddCompanyClick} />

        {companies.map((company) => (
          <li key={company.id} id='li'>
            <img src={icon} alt="icon list" />
            <div className="text">
              <p>Name: {company.name}</p>
              <p>CNPJ: {company.cnpj} - Email: {company.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
