
import React, { useEffect, useState } from 'react';
import { fetchCompanies, createCompany, updateCompany, deleteCompany } from '../services/api';
import Header from './Header';
import ActionsCompany from './ActionsCompany';
import ActionsCompanyModal from './ActionsCompanyModal';
import icon from '../images/icon-list.svg';
import search from '../images/icon-search.svg';
import '../styles/styles.scss';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCompanies(searchText);
        if (data) {
          setCompanies(data);
        }
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchData();
  }, [searchText]);

  useEffect(() => {
    let timeout;
    if (showDeletePopup) {
      timeout = setTimeout(() => setShowDeletePopup(false), 3000);
    }
    return () => clearTimeout(timeout);
  }, [showDeletePopup]);

  const handleAddCompany = async (newCompany) => {
    try {
      const createdCompany = await createCompany(newCompany);
      setCompanies([...companies, createdCompany]);
      return createdCompany;
    } catch (error) {
      console.error('Error creating company:', error);
      return null;
    }
  };

  const handleEditCompany = (companyId, updatedData) => {
    const updatedCompanies = companies.map((company) =>
      company.id === companyId ? { ...company, ...updatedData } : company
    );
    setCompanies(updatedCompanies);

    updateCompany(companyId, updatedData)
      .then((updatedCompany) => {
        const finalUpdatedCompanies = companies.map((company) =>
          company.id === companyId ? updatedCompany : company
        );
        setCompanies(finalUpdatedCompanies);
      })
      .catch((error) => {
        console.error('Error updating company:', error);
      });

    setEditingCompany(null);
  };

  const handleEditButtonClick = (company) => {
    setEditingCompany(company);
    setShowAddCompanyModal(true);
  };

  const handleDeleteCompany = async (companyId) => {
    await deleteCompany(companyId);
    setShowDeletePopup(true);

    const updatedCompanies = companies.filter((company) => company.id !== companyId);
    setCompanies(updatedCompanies);
  };

  return (
    <div>
      <Header userName="Nome do Usuário" />
      <ul>
        <li>
          <div className="filter-bar">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Buscar empresa..."
            />
            <img src={search} alt="icon list" />
          </div>
        </li>
        <ActionsCompany onClick={() => setShowAddCompanyModal(true)} />

        {companies.map((company) => (
          <li key={company.id} onClick={() => handleEditButtonClick(company)} id='li'>
            <img src={icon} alt="icon list" />
            <div className="text">
              <p>Name: {company.name}</p>
              <p>CNPJ: {company.cnpj} - Email: {company.email}</p>
            </div>
          </li>
        ))}
      </ul>

      {showAddCompanyModal && (
        <ActionsCompanyModal
          onClose={() => {
            setShowAddCompanyModal(false);
            setEditingCompany(null);
          }}
          onAddCompany={handleAddCompany}
          onEditCompany={handleEditCompany}
          onDeleteCompany={handleDeleteCompany}
          editingCompany={editingCompany}
        />
      )}

      {showDeletePopup && (
        <div className="delete-popup">
          Empresa excluída com sucesso!
        </div>
      )}
    </div>
  );
};

export default CompanyList;


