import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { content } from '../data/content';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
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
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-colors backdrop-blur-sm ${
                  isScrolled
                    ? 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    : 'hover:bg-white/20 dark:hover:bg-white/10'
                }`}
              >
                <Globe className={`w-5 h-5 drop-shadow-lg ${
                  isScrolled 
                    ? 'text-black dark:text-gray-300' 
                    : 'text-black dark:text-white'
                }`} />
                <span className={`text-sm font-medium drop-shadow-lg ${
                    isScrolled 
                        ? 'text-gray-700 dark:text-gray-300' 
                        : 'text-white dark:text-white'
                    }`}>
                    {currentLanguage.flag}
                </span>
                <ChevronDown className={`w-4 h-4 drop-shadow-lg ${
                  isScrolled 
                    ? 'text-gray-500 dark:text-gray-400' 
                    : 'text-gray-700 dark:text-white'
                }`} />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                        currentLanguage.code === lang.code ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {lang.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

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