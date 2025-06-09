import React from 'react';
import PageLayout from '../components/PageLayout';
import { openBurgerMenu } from '../components/BurgerMenu';

export default function Register() {
  return (
    <PageLayout title="REGISTER" onOpenMenu={() => openBurgerMenu && openBurgerMenu()}>
      <div style={{ fontSize: 18, color: '#03855c', marginBottom: 12, maxWidth: 600, padding: '0 20px', textAlign: 'center', fontFamily: 'monospace' }}>
        Register Page
      </div>
    </PageLayout>
  );
} 