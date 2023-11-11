import React from 'react';
import icon from '../images/icon-list-add.svg'

const AddCompany = ({ onClick }) => {
  return (
    <li onClick={onClick} className="add-company-card" id='li'>
      <img src={icon} alt="icon list" />
      <span>Adicionar Empresa</span>
    </li>
  );
};

export default AddCompany;