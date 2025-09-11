'use client';

import React from 'react';
import { BRAND_COLORS } from '../lib/colors';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: ButtonProps) {
  const baseClasses = 'font-medium transition-colors inline-block text-center rounded-md';
  
  const variantClasses = {
    primary: 'text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2 text-sm',
    lg: 'px-8 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const primaryStyle = variant === 'primary' ? {
    backgroundColor: BRAND_COLORS.secondary,
    ':hover': {
      backgroundColor: BRAND_COLORS.secondaryHover
    }
  } : {};

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        style={variant === 'primary' ? {backgroundColor: BRAND_COLORS.secondary} : {}}
        onMouseEnter={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.backgroundColor = BRAND_COLORS.secondaryHover;
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.backgroundColor = BRAND_COLORS.secondary;
          }
        }}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick} 
      className={classes}
      style={variant === 'primary' ? {backgroundColor: BRAND_COLORS.secondary} : {}}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = BRAND_COLORS.secondaryHover;
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = BRAND_COLORS.secondary;
        }
      }}
    >
      {children}
    </button>
  );
}