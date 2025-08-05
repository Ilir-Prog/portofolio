import React from 'react';
import { Cloud, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Hero: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const heroContent = content[currentLanguage.code].hero;

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://vkgtzzojdjchrzzymotm.supabase.co/storage/v1/object/public/iliri.isufi/Images/hero_section_image_ready.png")',
          backgroundSize: '100% 120%'
        }}
      ></div>
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/50 to-teal-700/40 dark:from-gray-900/90 dark:via-blue-900/85 dark:to-gray-800/80"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Animated Clouds */}
      <div className="absolute inset-0 overflow-hidden">
        <Cloud className="absolute top-20 left-10 w-16 h-16 text-white/30 animate-float" />
        <Cloud className="absolute top-40 right-20 w-12 h-12 text-white/25 animate-float-delayed" />
        <Cloud className="absolute bottom-40 left-1/4 w-20 h-20 text-white/20 animate-float-slow" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Profile Image Placeholder */}
        <div className="mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-teal-500 flex items-center justify-center shadow-2xl border-4 border-white/30 backdrop-blur-sm">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/20 dark:bg-gray-800/40 flex items-center justify-center backdrop-blur-sm">
              <span className="text-3xl sm:text-4xl font-bold text-gray-600 dark:text-gray-300">II</span>
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
          {heroContent.title}
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-200 dark:text-blue-300 mb-6 animate-fade-in-up animation-delay-200">
          {heroContent.subtitle}
        </h2>
        
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          {heroContent.description}
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToAbout}
          className="inline-flex items-center space-x-2 bg-white/25 hover:bg-white/35 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-md border border-white/40 hover:border-white/60 animate-fade-in-up animation-delay-600 shadow-lg hover:shadow-xl"
        >
          <span>{heroContent.cta}</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;