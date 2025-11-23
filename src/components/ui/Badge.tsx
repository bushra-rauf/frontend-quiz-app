import React from 'react';

interface BadgeProps {
  className?: string;
  children: React.ReactNode;
}

export const Badge = ({ className = '', children }: BadgeProps) => {
  return (
    <div className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors ${className}`}>
      {children}
    </div>
  );
};
