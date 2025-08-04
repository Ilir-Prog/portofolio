import React, { useState } from 'react';
import { GraduationCap, Award, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Education: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const educationContent = content[currentLanguage.code].education;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {educationContent.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Education Items */}
          <div className="space-y-6">
            {educationContent.items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        {index === 0 ? (
                          <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        ) : (
                          <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <span className="text-blue-600 dark:text-blue-400 font-medium">
                            {item.institution}
                          </span>
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{item.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {item.description && (
                      <button className="ml-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        {expandedIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Expanded Content */}
                  {expandedIndex === index && item.description && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed ml-16">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;