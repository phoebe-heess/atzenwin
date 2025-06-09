import React from 'react';
import PageLayout from '../components/PageLayout';
import { openBurgerMenu } from '../components/BurgerMenu';

export default function Login() {
  return (
    <PageLayout title="LOGIN" onOpenMenu={() => openBurgerMenu && openBurgerMenu()}>
      <div style={{ fontSize: 18, color: '#03855c', marginBottom: 12, maxWidth: 600, padding: '0 20px', textAlign: 'center', fontFamily: 'monospace' }}>
        Login Page
      </div>
    </PageLayout>
  );
} 