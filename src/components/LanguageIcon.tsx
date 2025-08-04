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
      className={`transition-all duration-300 ${isAnimating ? 'rotate-180 scale-110' : ''} ${className}`}
    >
      {/* "A" character (left side) */}
      <text
        x="5"
        y="16"
        fontSize="10"
        fill="currentColor"
        fontFamily="sans-serif"
      >
        A
      </text>

      {/* "文" character (right side) */}
      <text
        x="13"
        y="16"
        fontSize="10"
        fill="currentColor"
        fontFamily="sans-serif"
      >
        文
      </text>
    </svg>
  );
};

export default LanguageIcon;
