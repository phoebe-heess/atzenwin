import React from 'react';
import PageLayout from '../components/PageLayout';
import { openBurgerMenu } from '../components/BurgerMenu';
import { useNavigate } from 'react-router-dom';

const GREEN = '#03855c';

export default function Kontakt() {
  const navigate = useNavigate();
  return (
    <PageLayout title="KONTAKT" alignTop onClose={() => navigate('/') }>
      <div style={{ fontSize: 16, color: GREEN, marginBottom: 12, maxWidth: 600, padding: '0 20px', textAlign: 'center', fontFamily: 'monospace', lineHeight: 1.6 }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Kontaktformular</div>
        <div>Schreib uns eine Nachricht!</div>
        <div style={{ marginTop: 12 }}>E-Mail: gp@atzengold.net</div>
      </div>
    </PageLayout>
  );
} 