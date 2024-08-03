// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import QuoteListPage from './Pages/QuoteListPage';
import QuoteCreationPage from './Pages/QuoteCreationPage';
import './styles.css';

function App() {
  const authToken = localStorage.getItem('authToken');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/quotes" element={authToken ? <QuoteListPage /> : <Navigate to="/login" />} />
        <Route path="/create-quote" element={authToken ? <QuoteCreationPage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
