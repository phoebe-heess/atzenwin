import React from 'react';
import PageLayout from '../components/PageLayout';
import { openBurgerMenu } from '../components/BurgerMenu';

export default function Impressum() {
  return (
    <PageLayout title="IMPRESSUM" onOpenMenu={() => openBurgerMenu && openBurgerMenu()}>
      <div style={{ fontSize: 18, color: '#03855c', marginBottom: 12, maxWidth: 600, padding: '0 20px' }}>
        <div><b>Atzengold</b></div>
        <div>Atzenhofer Str. 76</div>
        <div>90768 Fürth</div>
        <div>Deutschland</div>
        <div>Telefon: +49 152 160 84 775</div>
        <div>E-Mail: gp@atzengold.net</div>
      </div>
    </PageLayout>
  );
} 