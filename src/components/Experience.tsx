import React, { useState } from 'react';
import { Briefcase, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Experience: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const experienceContent = content[currentLanguage.code].experience;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {experienceContent.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>

            {experienceContent.positions.map((position, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

                {/* Content Card */}
                <div className="ml-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleExpanded(index)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {position.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <div className="flex items-center text-blue-600 dark:text-blue-400">
                            <Briefcase className="w-4 h-4 mr-2" />
                            <span className="font-medium">{position.company}</span>
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{position.period}</span>
                          </div>
                        </div>
                      </div>
                      <button className="ml-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        {expandedIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                    </div>

                    {/* Expanded Content */}
                    {expandedIndex === index && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                        <ul className="space-y-2">
                          {position.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;