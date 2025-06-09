import React from 'react';
import PageLayout from '../components/PageLayout';
import { openBurgerMenu } from '../components/BurgerMenu';

export default function Kontakt() {
  return (
    <PageLayout title="KONTAKT" onOpenMenu={() => openBurgerMenu && openBurgerMenu()}>
      <div style={{ fontSize: 18, color: '#03855c', marginBottom: 12, maxWidth: 600, padding: '0 20px', textAlign: 'center', fontFamily: 'monospace' }}>
        <div><b>Kontaktformular</b></div>
        <div>Schreib uns eine Nachricht!</div>
        <div>E-Mail: gp@atzengold.net</div>
      </div>
    </PageLayout>
  );
} 