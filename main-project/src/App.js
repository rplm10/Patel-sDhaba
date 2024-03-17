import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import PurchasePage from './components/PurchasePage';
import LoginPageAlpha from './components/LoginPageAlpha';
import LandingPageAlpha from './components/LandingPageAlpha';
import PurchasePageAlpha from './components/PurchasePageAlpha';
import LoginPageDelta from './components/LoginPageDelta';
import LandingPageDelta from './components/LandingPageDelta';
import PurchasePageDelta from './components/PurchasePageDelta';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [branch] = useState('delta'); // TO RUN THE PAGES CHANGE TO 'hq','alpha' or 'delta//

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return branch === 'hq' ? <LoginPage goToLanding={() => setCurrentPage('landing')} /> : 
                                  (branch === 'alpha' ? <LoginPageAlpha goToLanding={() => setCurrentPage('landing_alpha')} /> : <LoginPageDelta goToLanding={() => setCurrentPage('landing_delta')} />);
      case 'landing':
        return branch === 'hq' ? <LandingPage goToLogin={() => setCurrentPage('login')} /> : 
                                  (branch === 'alpha' ? <LandingPageAlpha goToLogin={() => setCurrentPage('login_alpha')} /> : <LandingPageDelta goToLogin={() => setCurrentPage('login_delta')} />);
      case 'purchase':
        return branch === 'hq' ? <PurchasePage goToLanding={() => setCurrentPage('landing')} /> : 
                                  (branch === 'alpha' ? <PurchasePageAlpha goToLanding={() => setCurrentPage('landing_alpha')} /> : <PurchasePageDelta goToLanding={() => setCurrentPage('landing_delta')} />);
      case 'login_alpha':
        return <LoginPageAlpha goToLanding={() => setCurrentPage('landing_alpha')} />;
      case 'landing_alpha':
        return <LandingPageAlpha goToLogin={() => setCurrentPage('login_alpha')} />;
      case 'purchase_alpha':
        return <PurchasePageAlpha goToLanding={() => setCurrentPage('landing_alpha')} />;
      case 'login_delta':
        return <LoginPageDelta goToLanding={() => setCurrentPage('landing_delta')} />;
      case 'landing_delta':
        return <LandingPageDelta goToLogin={() => setCurrentPage('login_delta')} />;
      case 'purchase_delta':
        return <PurchasePageDelta goToLanding={() => setCurrentPage('landing_delta')} />;
      default:
        return null; // Return null for any unknown page
    }
  };
  

  return (
    <div>
      {renderPage()}
    </div>
  );
}

export default App;
