import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GREEN = '#03855c';
const BG_COLOR = '#EDD1B2';

interface DSGVOModalProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function DSGVOModal({ onAccept, onDecline }: DSGVOModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: 20,
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          style={{
            background: BG_COLOR,
            borderRadius: 16,
            padding: 24,
            maxWidth: 500,
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
          }}
        >
          <h2 style={{ 
            color: GREEN, 
            fontSize: 24, 
            fontWeight: 'bold',
            marginBottom: 16,
            textAlign: 'center'
          }}>
            Datenschutzhinweis
          </h2>
          
          <div style={{ 
            color: GREEN,
            fontSize: 16,
            lineHeight: 1.5,
            marginBottom: 24
          }}>
            <p style={{ marginBottom: 12 }}>
              Willkommen bei Atzenwin! Um Ihnen das bestmögliche Erlebnis zu bieten, verwenden wir Cookies und ähnliche Technologien.
            </p>
            <p style={{ marginBottom: 12 }}>
              Mit Ihrer Einwilligung können wir:
            </p>
            <ul style={{ 
              listStyle: 'disc',
              paddingLeft: 20,
              marginBottom: 12
            }}>
              <li>Die Nutzung unserer App analysieren</li>
              <li>Personalisierte Inhalte anbieten</li>
              <li>Die Funktionalität unserer App verbessern</li>
            </ul>
            <p style={{ marginBottom: 12 }}>
              Sie können Ihre Einwilligung jederzeit widerrufen. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
            <button
              onClick={onAccept}
              style={{
                background: GREEN,
                color: BG_COLOR,
                fontWeight: 'bold',
                fontSize: 16,
                padding: '12px 24px',
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Akzeptieren
            </button>
            <button
              onClick={onDecline}
              style={{
                background: 'transparent',
                color: GREEN,
                fontWeight: 'bold',
                fontSize: 16,
                padding: '12px 24px',
                border: `2px solid ${GREEN}`,
                borderRadius: 8,
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Ablehnen
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 