import React from 'react';
import { Code, Users, Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { content } from '../data/content';

const Skills: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const skillsContent = content[currentLanguage.code].skills;

  const skillCategories = [
    {
      title: skillsContent.technical.title,
      icon: Code,
      skills: skillsContent.technical.skills,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      title: skillsContent.soft.title,
      icon: Users,
      skills: skillsContent.soft.skills,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      title: skillsContent.languages.title,
      icon: Globe2,
      skills: skillsContent.languages.skills,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {skillsContent.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${category.color} text-white`}>
                  <div className="flex items-center space-x-3">
                    <category.icon className="w-8 h-8" />
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="p-6">
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`flex items-center space-x-3 p-3 rounded-lg ${category.bgColor} hover:shadow-sm transition-all duration-200`}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full flex-shrink-0`}></div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download CV Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Download Full CV</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;