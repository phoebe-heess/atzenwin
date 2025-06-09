import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const GREEN = '#03855c';
const ORANGE = '#d69229';

const collectibles = [1, 2, 3, 4, 5]; // Placeholder for 5 NFTs
const atzencoinBalance = 12345; // Placeholder balance

export default function Scoreboard() {
  const navigate = useNavigate();
  
  return (
    <PageLayout title="SCOREBOARD">
      <div className="flex flex-row items-center justify-center gap-4 mb-8">
        <button
          style={{ background: GREEN, color: ORANGE, fontWeight: 'bold', fontSize: 22, borderRadius: 6, padding: '12px 32px', border: 'none', minWidth: 160 }}
        >
          Atzencoins
        </button>
        <div style={{ border: `2px solid ${GREEN}`, borderRadius: 6, fontSize: 28, fontWeight: 'bold', color: ORANGE, background: 'transparent', minWidth: 120, textAlign: 'center', padding: '10px 24px' }}>
          {atzencoinBalance}
        </div>
        <button
          style={{ background: GREEN, color: ORANGE, fontWeight: 'bold', fontSize: 22, borderRadius: 6, padding: '12px 32px', border: 'none', minWidth: 160 }}
          onClick={() => navigate('/shop')}
        >
          Shop
        </button>
      </div>
      <div className="flex flex-row items-start justify-center gap-8 w-full max-w-lg">
        <div className="flex flex-col items-center gap-4">
          <button
            style={{ background: GREEN, color: ORANGE, fontWeight: 'bold', fontSize: 22, borderRadius: 6, padding: '12px 32px', border: 'none', minWidth: 180 }}
          >
            Collectibles<br />(NFTs)
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 items-center justify-center">
          {collectibles.map((c, i) => (
            <div key={i} style={{ border: `1px solid ${ORANGE}`, borderRadius: 6, padding: 8, background: 'transparent', width: 64, height: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/src/assets/collectible-necklace.png" alt="Collectible" style={{ width: 48, height: 64, objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
} 