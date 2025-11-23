import React from 'react';

interface ProgressProps {
  value: number;
  className?: string;
}

export const Progress = ({ value, className = '' }: ProgressProps) => {
  return (
    <div className={`relative w-full overflow-hidden rounded-full bg-secondary ${className}`}>
      <div
        className="h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  );
};
