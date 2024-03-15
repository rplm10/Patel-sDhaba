import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import PurchasePage from './components/PurchasePage';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage goToLanding={() => setCurrentPage('landing')} />;
      case 'purchase':
        return <PurchasePage goToLanding={() => setCurrentPage('landing')} />;
      default:
        return <LandingPage goToLogin={() => setCurrentPage('login')} />;
    }
  };

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
