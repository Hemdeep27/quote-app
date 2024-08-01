import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import QuoteListPage from './Pages/QuoteListPage';
import QuoteCreationPage from './Pages/QuoteCreationPage';
import './styles.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/quotes" element={<QuoteListPage />} />
        <Route path="/create-quote" element={<QuoteCreationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
