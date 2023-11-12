import React from 'react';
import icon from '../images/icon-list-add.svg';

const ActionsCompany = ({ onClick, onEditClick }) => {
  const handleEditClick = (event) => {
    if (onEditClick) {
      onEditClick(event);
    }
  };

  return (
    <li onClick={onClick} onEditClick={handleEditClick} className="add-company-card" id='li'>
      <img src={icon} alt="icon list" />
      <span>Adicionar Empresa</span>
    </li>
  );
};

export default ActionsCompany;
