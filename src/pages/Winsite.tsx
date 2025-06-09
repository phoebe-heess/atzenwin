import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import schriftGif from '../assets/schrift.gif';
import RegisterOverlay from '../components/RegisterOverlay';
import logo from '../assets/atzengold-logo.png';
import chainTurn from '../assets/chain_turn.png';
import { useNavigate } from 'react-router-dom';
import userIcon from '../assets/user.svg';

// Corporate colors
const BG_COLOR = '#EDD1B2';
const GREEN = '#03855c';
const ORANGE = '#d69229'; // Updated orange color for +1 animations

interface PlusOne {
  id: number;
  x: number;
  y: number;
}

interface WinsiteProps {
  atzencoins: number;
  setAtzencoins: React.Dispatch<React.SetStateAction<number>>;
}

export default function Winsite({ atzencoins, setAtzencoins }: WinsiteProps) {
  const [result, setResult] = useState<'none' | 'gold' | 'booster' | 'lose'>('none');
  const [rotation, setRotation] = useState(0);
  const [plusOnes, setPlusOnes] = useState<PlusOne[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [showRegisterOverlay, setShowRegisterOverlay] = useState(false);
  const BASE_WHEEL_SIZE = 256;
  const BASE_LOGO_SIZE = 275;
  const SCALE = 1.47; // Locked scale as specified by the user
  const startAngleRef = useRef<number | null>(null);
  const startRotationRef = useRef(0);
  const plusOneCounter = useRef(0);
  const lastPlusOneAngle = useRef(0);
  const logoSize = 389; // Locked logo size as specified by the user
  const [chainYOffset, setChainYOffset] = React.useState(-6); // Locked at -6
  const [fullTurns, setFullTurns] = useState(0); // State for full turns
  const [spins, setSpins] = useState(0); // Number of full 360° spins
  const maxSpins = 3;
  const pointsPerSpin = 16;
  const maxPoints = maxSpins * pointsPerSpin; // 560

  // Debug overlay locked values
  const overlayX = 28;
  const overlayY = 100;
  const overlaySize = 320;
  const overlayColor = '#ff00ff';

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // --- Schrift overlay controls (for dev fitting) ---

  // Touch event handlers for 360° swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setHasStarted(true);
    const touch = e.touches[0];
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * 180 / Math.PI;
    startAngleRef.current = angle;
    startRotationRef.current = rotation;
    lastPlusOneAngle.current = rotation;
  };

  // Helper to check if a point is inside the logo (not the wheel)
  function isInsideLogo(x: number, y: number, rect: DOMRect) {
    const centerX = (BASE_WHEEL_SIZE * SCALE) / 2;
    const centerY = (BASE_WHEEL_SIZE * SCALE) / 2;
    const dx = x - centerX;
    const dy = y - centerY;
    const radius = logoSize / 2;
    return dx * dx + dy * dy <= radius * radius;
  }

  // Touch event handlers for 360° swipe
  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    if (startAngleRef.current === null) return;
    const touch = e.touches[0];
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    if (!isInsideLogo(x, y, rect)) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * 180 / Math.PI;
    let delta = angle - startAngleRef.current;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const newRotation = startRotationRef.current + delta;
    setRotation(newRotation);
    const last = lastPlusOneAngle.current;
    const step = 90;
    const diff = newRotation - last;
    if (Math.abs(diff) >= step) {
      const stepsPassed = Math.floor(Math.abs(diff) / step);
      for (let i = 1; i <= stepsPassed; i++) {
        if (spins < maxSpins) {
          setSpins((prev) => prev + 0.25); // 90° = 0.25 spin
          setAtzencoins((prev) => Math.min(prev + pointsPerSpin / 4, maxPoints));
        }
        for (let j = 0; j < 16; j++) {
          // Only spawn +1s if inside wheel
          if (isInsideLogo(x, y, rect)) {
            const plusOne: PlusOne = {
              id: plusOneCounter.current++,
              x,
              y,
            };
            setPlusOnes((prev) => [...prev, plusOne]);
          }
        }
      }
      lastPlusOneAngle.current = last + step * stepsPassed * Math.sign(diff);
    }
  };

  const handleTouchEnd = () => {
    // If rotated more than 300°, trigger spin
    if (Math.abs(rotation) > 300) {
      const outcomes = ['gold', 'booster', 'lose'];
      const random = outcomes[Math.floor(Math.random() * outcomes.length)] as typeof result;
      setResult(random);
    }
    setTimeout(() => setRotation(0), 500); // Reset rotation for next spin
  };

  // Remove +1 animations after they complete
  React.useEffect(() => {
    const timer = setInterval(() => {
      setPlusOnes((prev) => prev.slice(1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Update full turns when rotation exceeds 360 degrees
  React.useEffect(() => {
    const turns = Math.floor(Math.abs(rotation) / 360);
    setFullTurns(turns);
  }, [rotation]);

  // Calculate progress for the bar
  const progress = Math.max(0, Math.min(1, 1 - atzencoins / maxPoints));

  // Mouse event handlers for desktop
  const isMouseDown = useRef(false);
  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;
    startAngleRef.current = angle;
    startRotationRef.current = rotation;
    lastPlusOneAngle.current = rotation;
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current) return;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (!isInsideLogo(x, y, rect)) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * 180 / Math.PI;
    let delta = angle - (startAngleRef.current ?? 0);
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const newRotation = startRotationRef.current + delta;
    setRotation(newRotation);
    const last = lastPlusOneAngle.current;
    const step = 90;
    const diff = newRotation - last;
    if (Math.abs(diff) >= step) {
      const stepsPassed = Math.floor(Math.abs(diff) / step);
      for (let i = 1; i <= stepsPassed; i++) {
        if (spins < maxSpins) {
          setSpins((prev) => prev + 0.25);
          setAtzencoins((prev) => Math.min(prev + pointsPerSpin / 4, maxPoints));
        }
        for (let j = 0; j < 16; j++) {
          if (isInsideLogo(x, y, rect)) {
            const plusOne: PlusOne = {
              id: plusOneCounter.current++,
              x,
              y,
            };
            setPlusOnes((prev) => [...prev, plusOne]);
          }
        }
      }
      lastPlusOneAngle.current = last + step * stepsPassed * Math.sign(diff);
    }
  };
  const handleMouseUp = () => {
    isMouseDown.current = false;
    if (Math.abs(rotation) > 300) {
      const outcomes = ['gold', 'booster', 'lose'];
      const random = outcomes[Math.floor(Math.random() * outcomes.length)] as typeof result;
      setResult(random);
    }
    setTimeout(() => setRotation(0), 500);
  };

  // Add this effect to show the register overlay when spins are exhausted
  React.useEffect(() => {
    if (spins >= maxSpins) {
      setShowRegisterOverlay(true);
    }
  }, [spins]);

  useEffect(() => {
    // Check if user is logged in (Firebase Auth)
    import('../services/firebase').then(({ auth }) => {
      import('firebase/auth').then(({ onAuthStateChanged }) => {
        onAuthStateChanged(auth, (user) => {
          setIsLoggedIn(!!user);
        });
      });
    });
  }, []);

  return (
    <div className="mobile-container" style={{ position: 'relative', minHeight: '100vh', width: '100%', maxWidth: 430, margin: '0 auto', background: BG_COLOR, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Atzencoins Counter and User Icon Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'absolute', top: 16, left: 0, right: 0, zIndex: 100 }}>
        <div style={{ background: GREEN, color: '#EDD1B2', fontFamily: 'Montserrat, monospace', fontWeight: 700, fontSize: 28, borderRadius: 18, padding: '8px 18px', minWidth: 120, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0001' }}>
          Atzencoins: {atzencoins}
        </div>
        {isLoggedIn && (
          <button onClick={() => navigate('/scoreboard')} style={{ background: GREEN, border: 'none', borderRadius: 18, marginLeft: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px #0001', cursor: 'pointer', height: 56, width: 56 }}>
            <img src={userIcon} alt="User" style={{ width: 36, height: 36 }} />
          </button>
        )}
      </div>
      {/* Main Wheel Area */}
      <div className="flex flex-col items-center justify-center w-full px-4">
        {/* Wheel with swipe gesture */}
        <div
          className="relative mb-8 flex items-center justify-center touch-none"
          style={{ width: BASE_WHEEL_SIZE * SCALE, height: BASE_WHEEL_SIZE * SCALE }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Rotating chain_turn.png */}
          <img
            src={chainTurn}
            alt="Wheel"
            style={{
              width: BASE_WHEEL_SIZE * SCALE,
              height: BASE_WHEEL_SIZE * SCALE,
              borderRadius: '50%',
              position: 'absolute',
              left: 0,
              top: chainYOffset, // Only the chain moves vertically
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.2s cubic-bezier(.4,2,.6,1)',
              objectFit: 'cover',
            }}
            draggable={false}
          />
          {/* Centered logo */}
          <div
            style={{
              position: 'absolute',
              left: (BASE_WHEEL_SIZE * SCALE) / 2 - (logoSize / 2),
              top: (BASE_WHEEL_SIZE * SCALE) / 2 - (logoSize / 2),
              width: logoSize,
              height: logoSize,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          >
            <img
              src={logo}
              alt="Atzengold Logo"
              style={{
                width: logoSize,
                height: logoSize,
                objectFit: 'contain',
                borderRadius: '50%',
                background: 'transparent',
                zIndex: 1,
                pointerEvents: 'none',
                userSelect: 'none',
                WebkitUserSelect: 'none',
              }}
              draggable={false}
            />
            <img
              src={schriftGif}
              alt="schrift"
              style={{
                position: 'absolute',
                left: '50%',
                top: '49%',
                transform: 'translate(-50%, -50%)',
                width: 256,
                pointerEvents: 'none',
                zIndex: 2,
              }}
              draggable={false}
            />
          </div>

          {/* +1 Animations */}
          <AnimatePresence>
            {plusOnes.map((plusOne) => (
              <motion.div
                key={plusOne.id}
                className="absolute text-2xl font-bold"
                initial={{ opacity: 1, y: 0, scale: 1 }}
                animate={{ opacity: 0, y: -BASE_WHEEL_SIZE * SCALE * 0.75, scale: 1.2 }} // Fly upwards 3/4 of the wheel size
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }} // Slower animation
                style={{
                  left: plusOne.x,
                  top: plusOne.y,
                  color: '#d69229' // Updated color
                }}
              >
                +1
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Progress Bar */}
        <div className="w-4/5 max-w-md mb-4" style={{ position: 'relative', height: 20 }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: BG_COLOR,
            borderRadius: 9999,
            border: '3px solid #03855c',
            boxSizing: 'border-box',
          }}></div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${progress * 100}%`,
            height: '100%',
            background: '#03855c',
            borderRadius: 9999,
            transition: 'width 0.3s',
          }}></div>
        </div>
        {/* Scale locked at 1.47 as requested */}
      </div>
      {/* Logo size locked at 389px as requested */}

      {/* Instagram Button Absolute Bottom Right in Container */}
      <button
        aria-label="Instagram"
        style={{
          position: 'absolute',
          bottom: 20,
          right: 24,
          background: BG_COLOR,
          color: GREEN,
          borderRadius: '50%',
          width: 56,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          zIndex: 2000,
          cursor: 'pointer',
        }}
        onClick={() => window.open('https://instagram.com/', '_blank')}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill={GREEN}/>
        </svg>
      </button>
      {/* Register Overlay */}
      <AnimatePresence>{showRegisterOverlay && <RegisterOverlay atzencoins={atzencoins} onClose={() => setShowRegisterOverlay(false)} />}</AnimatePresence>
    </div>
  );
} 