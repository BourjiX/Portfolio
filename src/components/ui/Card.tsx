import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-[32px] border border-slate-200/80 shadow-[0_22px_90px_-42px_rgba(15,23,42,0.25)] transition-transform duration-300 ${hover ? 'hover:-translate-y-1 hover:shadow-[0_25px_120px_-50px_rgba(15,23,42,0.2)]' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
