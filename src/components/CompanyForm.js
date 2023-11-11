import React, { useState } from 'react';
import api from '../services/api';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cnpj: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/clients', formData);
      console.log('Company created:', response.data);
    } catch (error) {
      console.error('Error creating company:', error);
    }
  };

  return (
    <div>
      <h1>Company Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          CNPJ:
          <input type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CompanyForm;
