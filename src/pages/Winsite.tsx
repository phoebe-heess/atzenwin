import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Corporate colors
const BG_COLOR = '#EDD1B2';
const GREEN = '#17904A';
const ORANGE = '#FF6B00'; // Adding orange color for +1 animations

const logo = '/src/assets/atzengold-logo.png';
const chainTurn = '/src/assets/chain_turn.png';

interface PlusOne {
  id: number;
  x: number;
  y: number;
}

export default function Winsite() {
  const [result, setResult] = useState<'none' | 'gold' | 'booster' | 'lose'>('none');
  const [rotation, setRotation] = useState(0);
  const [plusOnes, setPlusOnes] = useState<PlusOne[]>([]);
  const BASE_WHEEL_SIZE = 256;
  const BASE_LOGO_SIZE = 275;
  const SCALE = 1.47; // Locked scale as specified by the user
  const startAngleRef = useRef<number | null>(null);
  const startRotationRef = useRef(0);
  const plusOneCounter = useRef(0);
  const lastPlusOneAngle = useRef(0);
  const logoSize = 389; // Locked logo size as specified by the user
  const [chainYOffset, setChainYOffset] = React.useState(-6); // Locked at -6

  // Touch event handlers for 360° swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * 180 / Math.PI;
    startAngleRef.current = angle;
    startRotationRef.current = rotation;
    lastPlusOneAngle.current = rotation;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent page scrolling while swiping the wheel
    if (startAngleRef.current === null) return;
    const touch = e.touches[0];
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(touch.clientY - centerY, touch.clientX - centerX) * 180 / Math.PI;
    let delta = angle - startAngleRef.current;
    // Normalize delta to [-180, 180]
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const newRotation = startRotationRef.current + delta;
    setRotation(newRotation);

    // Trigger +1 every time we pass another 45° increment
    const last = lastPlusOneAngle.current;
    const step = 45;
    const diff = newRotation - last;
    if (Math.abs(diff) >= step) {
      const stepsPassed = Math.floor(Math.abs(diff) / step);
      for (let i = 1; i <= stepsPassed; i++) {
        const plusOne: PlusOne = {
          id: plusOneCounter.current++,
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        };
        setPlusOnes((prev) => [...prev, plusOne]);
      }
      // Update lastPlusOneAngle to the last triggered increment
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

  return (
    <div className="mobile-container mx-auto min-h-screen flex flex-col items-center justify-center relative" style={{ background: BG_COLOR, fontFamily: 'monospace' }}>
      {/* User Icon */}
      <div className="absolute top-4 right-4 z-10">
        <div style={{ background: GREEN, borderRadius: '8px', padding: '8px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="white"/>
            <path d="M12 14.5C6.99 14.5 3 17.86 3 22H21C21 17.86 17.01 14.5 12 14.5Z" fill="white"/>
          </svg>
        </div>
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
              top: chainYOffset,
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.2s cubic-bezier(.4,2,.6,1)',
              objectFit: 'cover',
            }}
            draggable={false}
          />
          {/* Center overlay logo (PNG) with NO background or shadow */}
          <div
            style={{
              width: Math.max(logoSize + 24 * SCALE, 48 * SCALE), // container a bit larger than logo
              height: Math.max(logoSize + 24 * SCALE, 48 * SCALE),
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              left: (BASE_WHEEL_SIZE * SCALE) / 2 - (Math.max(logoSize + 24 * SCALE, 48 * SCALE) / 2),
              top: (BASE_WHEEL_SIZE * SCALE) / 2 - (Math.max(logoSize + 24 * SCALE, 48 * SCALE) / 2),
              background: 'transparent',
            }}
          >
            <img
              src={logo}
              alt="Atzengold Logo"
              style={{ width: logoSize, height: logoSize, objectFit: 'contain', borderRadius: '50%', background: 'transparent' }}
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
                animate={{ opacity: 0, y: -50, scale: 1.2 }}
                exit={{ opacity: 0 }}
                style={{
                  left: plusOne.x,
                  top: plusOne.y,
                  color: ORANGE
                }}
              >
                +1
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {/* Chain Y offset controls (desktop) */}
        {/* Removed controls as chainYOffset is locked at -6 */}
        {/* Scale locked at 1.47 as requested */}
      </div>
      {/* Logo size locked at 389px as requested */}
    </div>
  );
} 