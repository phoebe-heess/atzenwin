import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { authService } from '../services/auth';

const GREEN = '#03855c';
const BG_COLOR = '#EDD1B2';
const ORANGE = '#d69229';
const GOOGLE_BLUE = '#4285F4';

interface SocialAuthProps {
  atzencoins: number;
  onSuccess: () => void;
  onError: (error: string) => void;
  buttonStyle?: React.CSSProperties;
}

export default function SocialAuth({ atzencoins, onSuccess, onError, buttonStyle }: SocialAuthProps) {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Only send the access token, as required by the backend
        await authService.registerWithGoogle(tokenResponse.access_token);
        onSuccess();
      } catch (error: any) {
        onError(error.message || 'Google authentication failed');
      }
    },
    onError: () => {
      onError('Google authentication failed');
    },
    scope: 'openid email profile',
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <button
        onClick={() => login()}
        style={{
          background: GOOGLE_BLUE,
          color: '#fff',
          fontFamily: 'Montserrat, Arial, sans-serif',
          fontWeight: 600,
          fontSize: '17px',
          borderRadius: '10px',
          padding: '14px',
          width: '100%',
          marginBottom: '10px',
          boxShadow: '0 2px 8px #0001',
          transition: 'background 0.2s',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          cursor: 'pointer',
          ...buttonStyle,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
          <g>
            <path fill="#fff" d="M21.35 11.1h-9.18v2.92h5.98c-.26 1.38-1.56 4.06-5.98 4.06-3.6 0-6.54-2.98-6.54-6.66s2.94-6.66 6.54-6.66c2.05 0 3.43.82 4.22 1.52l2.88-2.8C17.1 2.98 14.98 2 12.17 2 6.7 2 2.13 6.58 2.13 12s4.57 10 10.04 10c5.8 0 9.63-4.06 9.63-9.78 0-.66-.07-1.16-.17-1.62z"/>
            <path fill="#4285F4" d="M3.55 7.65l2.4 1.76c.66-1.3 2.01-2.8 4.22-2.8 1.23 0 2.36.48 3.23 1.41l2.42-2.35C13.98 3.98 12.17 3.34 10.17 3.34c-3.6 0-6.54 2.98-6.54 6.66 0 1.04.23 2.03.64 2.9z"/>
            <path fill="#34A853" d="M12.17 22c2.81 0 5.17-.92 6.9-2.5l-3.18-2.6c-.89.6-2.04.98-3.72.98-2.97 0-5.48-2.01-6.38-4.7l-3.23 2.5C4.13 19.02 7.7 22 12.17 22z"/>
            <path fill="#FBBC05" d="M21.35 11.1h-9.18v2.92h5.98c-.26 1.38-1.56 4.06-5.98 4.06-3.6 0-6.54-2.98-6.54-6.66 0-1.04.23-2.03.64-2.9l3.23 2.5c.9 2.69 3.41 4.7 6.38 4.7 1.68 0 2.83-.38 3.72-.98l3.18 2.6c-1.73 1.58-4.09 2.5-6.9 2.5z"/>
            <path fill="#EA4335" d="M3.55 7.65l2.4 1.76c.66-1.3 2.01-2.8 4.22-2.8 1.23 0 2.36.48 3.23 1.41l2.42-2.35C13.98 3.98 12.17 3.34 10.17 3.34c-3.6 0-6.54 2.98-6.54 6.66 0 1.04.23 2.03.64 2.9z"/>
          </g>
        </svg>
        Weiter mit Google
      </button>
    </div>
  );
} 