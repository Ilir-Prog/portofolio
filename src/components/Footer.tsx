import React from 'react';
import { Github, Linkedin, Mail, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { content } from '../data/content';

const Footer: React.FC = () => {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const footerContent = content[currentLanguage.code].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Ilir Isufi
            </button>
            <p className="text-gray-300 leading-relaxed">
              {footerContent.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(content[currentLanguage.code].nav).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    const element = document.getElementById(key);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Controls & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{footerContent.connectSettings}</h3>
            
            {/* Social Links Placeholder */}
            <div className="flex space-x-4">
              <a
                href="mailto:iliri.isufi@gmail.com"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </button>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-gray-400" />
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      currentLanguage.code === lang.code
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            {footerContent.copyright}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;