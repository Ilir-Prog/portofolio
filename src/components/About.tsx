import React from 'react';
import { Cloud, Shield, Award, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const About: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const aboutContent = content[currentLanguage.code].about;

  const features = [
    { icon: Cloud, title: 'Weather Expertise', color: 'text-blue-500' },
    { icon: Shield, title: 'Aviation Safety', color: 'text-green-500' },
    { icon: Award, title: 'ICAO Certified', color: 'text-yellow-500' },
    { icon: Users, title: 'Team Leadership', color: 'text-purple-500' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {aboutContent.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              {aboutContent.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4`} />
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {aboutContent.coreSkills.title}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aboutContent.coreSkills.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;