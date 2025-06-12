import React from 'react';
import PageLayout from '../components/PageLayout';
import { openBurgerMenu } from '../components/BurgerMenu';
import { useNavigate } from 'react-router-dom';

const GREEN = '#03855c';

export default function Impressum() {
  const navigate = useNavigate();
  return (
    <PageLayout title="IMPRESSUM" onOpenMenu={() => openBurgerMenu && openBurgerMenu()} alignTop onClose={() => navigate('/')}>
      <div style={{ fontSize: 16, color: GREEN, marginBottom: 12, maxWidth: 600, padding: '0 20px', textAlign: 'center', fontFamily: 'monospace', lineHeight: 1.6 }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Atzengold</div>
        <div>Atzenhofer Str. 76</div>
        <div>90768 Fürth</div>
        <div>Deutschland</div>
        <div style={{ marginTop: 12 }}>Telefon: +49 152 160 84 775</div>
        <div>E-Mail: gp@atzengold.net</div>
      </div>
    </PageLayout>
  );
} 