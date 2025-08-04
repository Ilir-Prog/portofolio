import React from 'react';

interface LanguageIconProps {
  isAnimating?: boolean;
  className?: string;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ isAnimating = false, className = "" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${isAnimating ? 'rotate-180 scale-110' : ''} ${className}`}
    >
      {/* First block representing a language/content */}
      <rect x="4" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />

      {/* Second block, slightly offset, representing another language/content */}
      <rect x="6" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />

      {/* Arrows indicating a switch or toggle between the two */}
      <path d="M12 10L15 13L12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 14L9 11L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default LanguageIcon;