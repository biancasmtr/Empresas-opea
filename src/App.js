import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CompanyList from './components/CompanyList';
import CompanyForm from './components/CompanyForm';
import CompanyDetail from './components/CompanyDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyList />} />
        <Route path="/create" element={<CompanyForm />} />
        <Route path="/detail/:companyId" element={<CompanyDetail />} />
      </Routes> 
    </Router>
  );
};

export default App;