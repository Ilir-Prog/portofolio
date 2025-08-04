import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { content } from '../data/content';
import LanguageIcon from './LanguageIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageAnimating, setIsLanguageAnimating] = useState(false);
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navContent = content[currentLanguage.code].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLanguageToggle = () => {
    setIsLanguageAnimating(true);
    const currentIndex = availableLanguages.findIndex(lang => lang.code === currentLanguage.code);
    const nextIndex = (currentIndex + 1) % availableLanguages.length;
    setLanguage(availableLanguages[nextIndex]);
    
    // Reset animation after duration
    setTimeout(() => setIsLanguageAnimating(false), 600);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-2xl font-bold transition-colors ${
                  isScrolled 
                      ? 'text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300' 
                      : 'text-white hover:text-blue-200 dark:text-white dark:hover:text-blue-300'
              }`}
            >
              II
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {Object.entries(navContent).map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`font-medium transition-colors drop-shadow-lg ${
                  isScrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400' 
                    : 'text-white dark:text-white hover:text-blue-300 dark:hover:text-blue-200'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Theme & Language Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button
              onClick={handleLanguageToggle}
              className={`group flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 backdrop-blur-sm transform hover:scale-105 ${
                isScrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md'
                  : 'hover:bg-white/20 dark:hover:bg-white/10 hover:shadow-lg'
              }`}
              title={`Switch to ${availableLanguages.find((_, index) => index === (availableLanguages.findIndex(lang => lang.code === currentLanguage.code) + 1) % availableLanguages.length)?.name}`}
            >
              <LanguageIcon 
                isAnimating={isLanguageAnimating}
               currentLanguage={currentLanguage.code}
                className={`drop-shadow-lg group-hover:scale-110 transition-transform duration-200 ${
                  isScrolled 
                      ? 'text-white dark:text-white' 
                      : 'text-white dark:text-white'
                  }`}
              />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 backdrop-blur-sm ${
                isScrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'hover:bg-white/20 dark:hover:bg-white/10'
              }`}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className={`w-5 h-5 drop-shadow-lg ${
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-400' 
                    : 'text-white dark:text-white'
                }`} />
              ) : (
                <Sun className={`w-5 h-5 drop-shadow-lg ${
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-400' 
                    : 'text-gray-800 dark:text-white'
                }`} />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors backdrop-blur-sm ${
                isScrolled
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'hover:bg-white/20 dark:hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 drop-shadow-lg ${
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-400' 
                    : 'text-gray-800 dark:text-white'
                }`} />
              ) : (
                <Menu className={`w-6 h-6 drop-shadow-lg ${
                  isScrolled 
                    ? 'text-gray-600 dark:text-gray-400' 
                    : 'text-gray-800 dark:text-white'
                }`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-16 left-0 right-0 backdrop-blur-md border-b ${
            isScrolled
              ? 'bg-white/95 dark:bg-gray-900/95 border-gray-200 dark:border-gray-700'
              : 'bg-white/90 dark:bg-black/50 border-white/20 dark:border-white/10'
          }`}>
            <div className="px-4 py-4 space-y-3">
              {Object.entries(navContent).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`block w-full text-left px-3 py-2 transition-colors font-medium drop-shadow-lg ${
                    isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400'
                      : 'text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-300'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;