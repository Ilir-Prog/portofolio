import React, { useState } from 'react';
import { Presentation, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Projects: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const projectsContent = content[currentLanguage.code].projects;
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {projectsContent.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            {projectsContent.items.map((project, index) => (
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
                      <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg">
                        <Presentation className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="font-medium">{project.year}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <button className="ml-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                      {expandedIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  {expandedIndex === index && (
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
                      <ul className="space-y-3 ml-16">
                        {project.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
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

export default Projects;