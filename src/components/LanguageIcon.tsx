import React from 'react';

interface LanguageIconProps {
  isAnimating?: boolean;
  className?: string;
  currentLanguage?: string;
}

const LanguageIcon: React.FC<LanguageIconProps> = ({ 
  isAnimating = false, 
  className = "",
  currentLanguage = "en"
}) => {
  return (
    <div
      className={`
        relative inline-flex items-center justify-center
        w-12 h-6 rounded-full border-2 border-current
        transition-all duration-300 ease-in-out
        ${isAnimating ? 'scale-110 rotate-12' : ''}
        ${className}
      `}
    >
      {/* Background slider */}
      <div
        className={`
          absolute top-0.5 w-5 h-4 rounded-full
          bg-current opacity-20
          transition-transform duration-300 ease-in-out
          ${currentLanguage === 'en' ? 'translate-x-[-8px]' : 'translate-x-[8px]'}
        `}
      />
      
      {/* EN text */}
      <span
        className={`
          absolute left-1 text-[10px] font-bold
          transition-all duration-300
          ${currentLanguage === 'en' 
            ? 'text-current opacity-100 scale-100' 
            : 'text-current opacity-60 scale-90'
          }
        `}
      >
        EN
      </span>
      
      {/* SH text */}
      <span
        className={`
          absolute right-1 text-[10px] font-bold
          transition-all duration-300
          ${currentLanguage === 'sq' 
            ? 'text-current opacity-100 scale-100' 
            : 'text-current opacity-60 scale-90'
          }
        `}
      >
        SH
      </span>
      
      {/* Center divider */}
      <div className="absolute w-px h-3 bg-current opacity-30" />
    </div>
  );
};

export default LanguageIcon;