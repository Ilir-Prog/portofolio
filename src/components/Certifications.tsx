import React, { useState } from 'react';
import { Award, Calendar, Filter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Certifications: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const certificationsContent = content[currentLanguage.code].certifications;
  const [selectedYear, setSelectedYear] = useState<string>('all');

  const years = ['all', ...new Set(certificationsContent.items.map(item => item.year))].sort();
  const filteredItems = selectedYear === 'all' 
    ? certificationsContent.items 
    : certificationsContent.items.filter(item => item.year === selectedYear);

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {certificationsContent.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Filter */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-900 rounded-lg p-2 shadow-lg">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-transparent text-gray-700 dark:text-gray-300 font-medium outline-none cursor-pointer"
              >
                <option value="all">All Years</option>
                {years.slice(1).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{cert.year}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-blue-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;