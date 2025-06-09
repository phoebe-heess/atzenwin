import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Winsite from './pages/Winsite';
import AgeCheckModal from './components/AgeCheckModal';
import BurgerMenu from './components/BurgerMenu';
import Login from './pages/Login';
import Register from './pages/Register';
import Kontakt from './pages/Kontakt';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';
import RegisterOverlay from './components/RegisterOverlay';
import Scoreboard from './pages/Scoreboard';

function App() {
  const [showAgeCheck, setShowAgeCheck] = useState(false);
  const [showLoginRegister, setShowLoginRegister] = useState(false);
  const [atzencoins, setAtzencoins] = useState(0);
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

  useEffect(() => {
    const ageChecked = localStorage.getItem('ageChecked');
    const dsgvoAccepted = localStorage.getItem('dsgvoAccepted');
    setShowAgeCheck(!(ageChecked === 'true' && dsgvoAccepted === 'true'));
  }, []);

  const handleAgeCheckConfirm = (allowed: boolean) => {
    if (allowed) {
      localStorage.setItem('ageChecked', 'true');
      // DSGVO is handled inside AgeCheckModal
      setShowAgeCheck(false);
    } else {
      setShowAgeCheck(true);
    }
  };

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <BrowserRouter>
        <div className="mobile-container" style={{ position: 'relative', minHeight: '100vh' }}>
          {showAgeCheck && <AgeCheckModal onConfirm={handleAgeCheckConfirm} />}
          {!showAgeCheck && (
            <Routes>
              <Route path="/" element={<Winsite atzencoins={atzencoins} setAtzencoins={setAtzencoins} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/scoreboard" element={<Scoreboard atzencoins={atzencoins} />} />
            </Routes>
          )}
          <BurgerMenu onShowLoginRegister={() => setShowLoginRegister(true)} />
          {showLoginRegister && (
            <RegisterOverlay atzencoins={atzencoins} onClose={() => setShowLoginRegister(false)} mode="menu" />
          )}
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App; 