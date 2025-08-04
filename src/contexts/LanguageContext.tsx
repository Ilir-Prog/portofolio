import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  availableLanguages: Language[];
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'sq', name: 'Shqip', flag: '🇦🇱' }
];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    
    // Apply language-specific theme colors to document root
    const root = document.documentElement;
    
    if (language.code === 'sq') {
      // Albanian theme - Red and Black colors
      root.style.setProperty('--primary-color', '#dc2626'); // red-600
      root.style.setProperty('--primary-light', '#fca5a5'); // red-300
      root.style.setProperty('--primary-dark', '#991b1b'); // red-800
      root.style.setProperty('--secondary-color', '#1f2937'); // gray-800
      root.style.setProperty('--accent-color', '#ef4444'); // red-500
      root.style.setProperty('--gradient-from', '#dc2626'); // red-600
      root.style.setProperty('--gradient-to', '#1f2937'); // gray-800
    } else {
      // English theme - Blue and Teal colors (default)
      root.style.setProperty('--primary-color', '#2563eb'); // blue-600
      root.style.setProperty('--primary-light', '#93c5fd'); // blue-300
      root.style.setProperty('--primary-dark', '#1e40af'); // blue-800
      root.style.setProperty('--secondary-color', '#0d9488'); // teal-600
      root.style.setProperty('--accent-color', '#06b6d4'); // cyan-500
      root.style.setProperty('--gradient-from', '#2563eb'); // blue-600
      root.style.setProperty('--gradient-to', '#0d9488'); // teal-600
    }
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      setLanguage,
      availableLanguages: languages
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};