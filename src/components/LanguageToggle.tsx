import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageOption {
  countryCode: string;
  languageCode: string;
  fullCode: 'en' | 'sq';
  label: string;
}

const LanguageToggle: React.FC = () => {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage();

  const languageOptions: LanguageOption[] = [
    {
      countryCode: 'GB',
      languageCode: 'EN',
      fullCode: 'en',
      label: 'English'
    },
    {
      countryCode: 'AL',
      languageCode: 'SH',
      fullCode: 'sq',
      label: 'Shqip'
    }
  ];

  const handleLanguageChange = (option: LanguageOption) => {
    const language = availableLanguages.find(lang => lang.code === option.fullCode);
    if (language) {
      setLanguage(language);
    }
  };

  return (
    <div className="relative inline-flex bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full p-1 transition-colors duration-200 border border-white/60 dark:border-gray-700 shadow-lg">
      {/* Background slider */}
      <div
        className={`absolute top-1 bottom-1 bg-white dark:bg-gray-700 rounded-full shadow-sm transition-all duration-300 ease-in-out ${
          currentLanguage.code === 'en' 
            ? 'left-1 right-1/2 mr-0.5' 
            : 'right-1 left-1/2 ml-0.5'
        }`}
      />

      {languageOptions.map((option) => {
        const isActive = currentLanguage.code === option.fullCode;
        
        return (
          <button
            key={option.fullCode}
            onClick={() => handleLanguageChange(option)}
            className={`relative z-10 flex items-center space-x-1.5 px-3 py-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
              isActive
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
            }`}
            aria-label={`Switch to ${option.label}`}
            role="radio"
            aria-checked={isActive}
          >
            {/* Country Code */}
            <span className={`text-xs font-medium transition-colors duration-200 ${
              isActive 
                ? 'text-gray-700 dark:text-gray-300' 
                : 'text-gray-500 dark:text-gray-400'
            }`}>
              {option.countryCode}
            </span>
            
            {/* Language Code */}
            <span className={`text-sm font-bold transition-all duration-200 ${
              isActive 
                ? 'text-gray-900 dark:text-white scale-105' 
                : 'text-gray-600 dark:text-gray-300'
            }`}>
              {option.languageCode}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;