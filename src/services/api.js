const axios = require("axios")

const api = axios.create({
  baseURL: 'https://outros.opea-uat.solutions/prova/front/api',
});

export const fetchCompanies = async (text = '') => {
  const params = text ? { params: { text } } : {};
  const response = await api.get('/clients', params);
  return response.data;
};

export const createCompany = async (companyData) => {
  const response = await api.post('/clients', companyData);
  return response.data;
};

export const updateCompany = async (companyId, companyData) => {
  const response = await api.put(`/clients/${companyId}`, companyData);
  return response.data;
};

export const deleteCompany = async (companyId) => {
  const response = await api.delete(`/clients/${companyId}`);
  return response.data;
};

export default api;