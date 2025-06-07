import React, { useState } from 'react';

const BG_COLOR = '#EDD1B2';
const GREEN = '#17904A';
const ORANGE = '#E6A12D';

const medal = '/assets/medal.svg'; // Placeholder path
const goldBar = '/assets/goldbar.svg'; // Placeholder path
const coin = '/assets/coin.svg'; // Placeholder path
const logo = '/assets/atzengold-logo.svg'; // Placeholder path
const userIcon = '/assets/user.svg'; // Placeholder path
const sadFace = '/assets/sadface.svg'; // Placeholder path

export default function Winsite() {
  const [result, setResult] = useState<'none' | 'gold' | 'booster' | 'lose'>('none');

  const handleSpin = () => {
    // Placeholder: random result
    const outcomes = ['gold', 'booster', 'lose'];
    const random = outcomes[Math.floor(Math.random() * outcomes.length)] as typeof result;
    setResult(random);
  };

  return (
    <div style={{ background: BG_COLOR, minHeight: '100vh', fontFamily: 'monospace' }} className="relative flex flex-col items-center justify-center">
      {/* User Icon */}
      <div className="absolute top-8 right-8">
        <div style={{ background: GREEN, borderRadius: '8px', padding: '8px' }}>
          <img src={userIcon} alt="User" style={{ width: 32, height: 32 }} />
        </div>
      </div>
      {/* Title */}
      <h1 style={{ color: ORANGE }} className="text-4xl font-bold mb-8 mt-8">WINSITE</h1>
      {/* Main Wheel Area */}
      <div className="flex flex-col items-center">
        <div className="relative flex flex-col items-center justify-center">
          {/* Spin Circle */}
          <div className="flex items-center justify-center" style={{ width: 220, height: 220, borderRadius: '50%', background: '#fff', border: `6px solid ${ORANGE}` }}>
            <img src={logo} alt="Atzengold Logo" style={{ width: 180, height: 180 }} />
            {/* Coin animation placeholder */}
            {result === 'gold' && (
              <img src={coin} alt="Atzencoin" style={{ position: 'absolute', top: 10, right: 10, width: 40, height: 40, animation: 'fly 1s linear' }} />
            )}
          </div>
          {/* Spin Button */}
          {result === 'none' && (
            <button
              onClick={handleSpin}
              style={{ background: GREEN, color: ORANGE, fontWeight: 'bold', fontSize: 24, borderRadius: 8, padding: '12px 32px', marginTop: 32 }}
            >
              Spin
            </button>
          )}
        </div>
        {/* Result Area */}
        <div className="mt-8 flex flex-col items-center">
          {result === 'gold' && (
            <>
              <div className="flex flex-col items-center">
                <span style={{ color: GREEN, fontSize: 24, fontWeight: 'bold' }}>Won Gold</span>
                <img src={goldBar} alt="Gold Bar" style={{ width: 80, height: 40, margin: '16px 0' }} />
              </div>
            </>
          )}
          {result === 'booster' && (
            <>
              <div className="flex flex-col items-center">
                <span style={{ color: GREEN, fontSize: 24, fontWeight: 'bold' }}>Won Booster NFT</span>
                <img src={medal} alt="Booster NFT" style={{ width: 80, height: 80, margin: '16px 0' }} />
              </div>
            </>
          )}
          {result === 'lose' && (
            <>
              <div className="flex flex-col items-center">
                <span style={{ color: GREEN, fontSize: 24, fontWeight: 'bold' }}>No Win</span>
                <img src={sadFace} alt="No Win" style={{ width: 80, height: 80, margin: '16px 0' }} />
                <span style={{ color: ORANGE, fontSize: 18, marginTop: 8 }}>Maybe it's time to stop drinking</span>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Atzengold Logo Bottom Right */}
      <div className="absolute bottom-8 right-8">
        <img src={logo} alt="Atzengold Logo" style={{ width: 120, height: 60 }} />
      </div>
      <style>{`
        @keyframes fly {
          0% { opacity: 0; transform: translateY(0); }
          100% { opacity: 1; transform: translateY(-120px); }
        }
      `}</style>
    </div>
  );
} 