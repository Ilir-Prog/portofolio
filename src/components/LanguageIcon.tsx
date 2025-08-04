import React from 'react';

interface LanguageIconProps {
  isAnimating?: boolean;
  className?: string;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ isAnimating = false, className = "" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-all duration-300 ${isAnimating ? 'animate-pulse scale-110' : ''} ${className}`}
    >
      {/* Globe base */}
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="transition-all duration-300"
      />
      
      {/* Vertical meridian */}
      <path
        d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="transition-all duration-300"
      />
      
      <path
        d="M12 2C12 2 16 6 16 12C16 18 12 22 12 22"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="transition-all duration-300"
      />
      
      {/* Horizontal parallels */}
      <path
        d="M2 12H22"
        stroke="currentColor"
        strokeWidth="1.5"
        className="transition-all duration-300"
      />
      
      <path
        d="M3 8H21"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
        className="transition-all duration-300"
      />
      
      <path
        d="M3 16H21"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.7"
        className="transition-all duration-300"
      />
      
      {/* Language indicator dots */}
      <circle
        cx="7"
        cy="9"
        r="1"
        fill="currentColor"
        className={`transition-all duration-300 ${isAnimating ? 'animate-ping' : ''}`}
        opacity="0.8"
      />
      
      <circle
        cx="17"
        cy="15"
        r="1"
        fill="currentColor"
        className={`transition-all duration-300 ${isAnimating ? 'animate-ping animation-delay-200' : ''}`}
        opacity="0.8"
      />
      
      <circle
        cx="9"
        cy="16"
        r="0.8"
        fill="currentColor"
        className={`transition-all duration-300 ${isAnimating ? 'animate-ping animation-delay-400' : ''}`}
        opacity="0.6"
      />
    </svg>
  );
};

export default LanguageIcon;