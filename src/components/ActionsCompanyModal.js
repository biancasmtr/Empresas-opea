import React, { useState, useEffect } from 'react';
import icon from '../images/icon-close.svg';
import iconDelete from '../images/icon-delete.svg';
import '../styles/ActionsCompany.scss';

const ActionsCompanyModal = ({ onClose, onAddCompany, onEditCompany, editingCompany, onDeleteCompany }) => {
  const [name, setName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingCompany) {
      setName(editingCompany.name || '');
      setCnpj(editingCompany.cnpj || '');
      setEmail(editingCompany.email || '');
    }
  }, [editingCompany]);

  const handleCompanyAction = async () => {
    const companyData = { name, cnpj, email };

    if (editingCompany) {
      await onEditCompany(editingCompany.id, companyData);
    } else {
      const newCompany = await onAddCompany(companyData);

      if (newCompany && newCompany.id) {
        onClose();
      } else {
        // Handle error
      }
    }

    setName('');
    setCnpj('');
    setEmail('');
    onClose();
  };

  const handleDeleteCompany = () => {
    if (editingCompany) {
      onDeleteCompany(editingCompany.id);
      onClose();
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{editingCompany ? 'Editar Empresa' : 'Cadastrar Empresa'}</h2>
          <span className="close" onClick={onClose}><img src={icon} alt="icon close" /></span>
        </div>
        <div className='modal-form'>
          <label>Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>CNPJ:</label>
          <input type="number" maxLength={14} value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
          <label>E-mail:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='modal-buttons'>
          <div className='delete-button'>
            {editingCompany && <button onClick={handleDeleteCompany}><img src={iconDelete} alt="icon delete" /></button>}
          </div>
          <div className='action-buttons'>
            <button onClick={onClose} id="cancel">Cancelar</button>
            <button onClick={handleCompanyAction}>
              {editingCompany ? 'Editar Empresa' : 'Adicionar Empresa'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionsCompanyModal;
