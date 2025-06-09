import React from 'react';
import { useNavigate } from 'react-router-dom';

const BG_COLOR = '#EDD1B2';
const GREEN = '#03855c';
const ORANGE = '#d69229';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  onOpenMenu?: () => void;
}

export default function PageLayout({ children, title, onOpenMenu }: PageLayoutProps) {
  return (
    <div style={{ 
      background: BG_COLOR, 
      minHeight: '100vh', 
      fontFamily: 'monospace',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100%',
      maxWidth: 430,
      margin: '0 auto',
    }}>
      <div style={{
        width: 40,
        height: 4,
        background: GREEN,
        borderRadius: 2,
        margin: '16px auto 12px auto',
      }} />
      <button
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          background: 'transparent',
          border: 'none',
          color: GREEN,
          fontWeight: 'bold',
          fontSize: 28,
          cursor: 'pointer',
        }}
        onClick={onOpenMenu}
        aria-label="Open menu"
      >
        &#9776;
      </button>
      <h1 style={{ 
        color: ORANGE, 
        fontWeight: 'bold', 
        fontSize: 36, 
        marginTop: 40,
        marginBottom: 32,
        textAlign: 'center',
        width: '100%',
      }}>
        {title}
      </h1>
      <div style={{ 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
        {children}
      </div>
    </div>
  );
} 