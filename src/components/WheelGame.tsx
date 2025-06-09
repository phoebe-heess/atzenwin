import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import chainTurn from '../assets/chain_turn.png';

interface Point {
  x: number;
  y: number;
}

interface PlusOne {
  id: number;
  x: number;
  y: number;
}

const WheelGame: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [plusOnes, setPlusOnes] = useState<PlusOne[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);
  const lastPoint = useRef<Point | null>(null);
  const plusOneCounter = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    lastPoint.current = { x: touch.clientX, y: touch.clientY };
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!lastPoint.current || !wheelRef.current) return;

    const touch = e.touches[0];
    const currentPoint = { x: touch.clientX, y: touch.clientY };
    const wheelRect = wheelRef.current.getBoundingClientRect();
    const wheelCenter = {
      x: wheelRect.left + wheelRect.width / 2,
      y: wheelRect.top + wheelRect.height / 2,
    };

    // Calculate angle between last point and current point
    const lastAngle = Math.atan2(
      lastPoint.current.y - wheelCenter.y,
      lastPoint.current.x - wheelCenter.x
    );
    const currentAngle = Math.atan2(
      currentPoint.y - wheelCenter.y,
      currentPoint.x - wheelCenter.x
    );
    let angleDiff = currentAngle - lastAngle;

    // Normalize angle difference
    if (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
    if (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

    // Update rotation
    const newRotation = rotation + (angleDiff * 180) / Math.PI;
    setRotation(newRotation);

    // Add +1 animation every 45 degrees
    if (Math.abs(newRotation - rotation) > 45) {
      const plusOne: PlusOne = {
        id: plusOneCounter.current++,
        x: currentPoint.x - wheelRect.left,
        y: currentPoint.y - wheelRect.top,
      };
      setPlusOnes((prev) => [...prev, plusOne]);
    }

    lastPoint.current = currentPoint;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    lastPoint.current = null;
  };

  // Remove +1 animations after they complete
  useEffect(() => {
    const timer = setInterval(() => {
      setPlusOnes((prev) => prev.slice(1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        ref={wheelRef}
        className="relative w-80 h-80"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.img
          src={chainTurn}
          alt="Wheel"
          className="w-full h-full"
          style={{ rotate: rotation }}
          animate={{ rotate: rotation }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
        
        <AnimatePresence>
          {plusOnes.map((plusOne) => (
            <motion.div
              key={plusOne.id}
              className="absolute text-2xl font-bold text-orange-500"
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -50 }}
              exit={{ opacity: 0 }}
              style={{
                left: plusOne.x,
                top: plusOne.y,
              }}
            >
              +1
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WheelGame; 