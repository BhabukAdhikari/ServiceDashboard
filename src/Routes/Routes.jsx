import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from '../Hero/components/Hero';
import LoginPage from '../Auth-Page/LoginPage';
import SignUpPage from '../Auth-Page/SignUpPage';

const AppRoutes = () => {
  return (
    <div>
      <Router>
        <Hero />
        <Routes>
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/signUp' element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
