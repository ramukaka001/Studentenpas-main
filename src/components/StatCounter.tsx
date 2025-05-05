import React, { useState, useEffect } from 'react';

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = duration / interval;
    const increment = value / steps;
    let currentCount = 0;
    
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center py-3">
      <div className="text-2xl md:text-3xl font-bold text-white">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-400">{label}</div>
    </div>
  );
};

export default StatCounter;