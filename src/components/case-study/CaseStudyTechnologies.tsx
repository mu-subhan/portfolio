'use client';
import { CaseStudy } from '@/data/caseStudies';
import { motion } from 'framer-motion';
import { FiMonitor, FiServer, FiDatabase, FiCloud, FiTool } from 'react-icons/fi';

interface CaseStudyTechnologiesProps {
  caseStudy: CaseStudy;
}

const techCategories = [
  {
    key: 'frontend' as const,
    title: 'Frontend',
    icon: FiMonitor,
    color: 'blue',
    description: 'User interface and user experience technologies',
  },
  {
    key: 'backend' as const,
    title: 'Backend',
    icon: FiServer,
    color: 'green',
    description: 'Server-side logic and API development',
  },
  {
    key: 'database' as const,
    title: 'Database',
    icon: FiDatabase,
    color: 'purple',
    description: 'Data storage and management solutions',
  },
  {
    key: 'deployment' as const,
    title: 'Deployment',
    icon: FiCloud,
    color: 'orange',
    description: 'Cloud infrastructure and hosting platforms',
  },
  {
    key: 'tools' as const,
    title: 'Tools',
    icon: FiTool,
    color: 'red',
    description: 'Development and productivity tools',
  }
];

export default function CaseStudyTechnologies({ caseStudy }: CaseStudyTechnologiesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Technology Stack</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive overview of technologies and tools used in this project
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => {
            const technologies = caseStudy.technologies[category.key as keyof typeof caseStudy.technologies];
            if (!technologies || technologies.length === 0) return null;

            const Icon = category.icon;
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600',
              green: 'bg-green-100 text-green-600',
              purple: 'bg-purple-100 text-purple-600',
              orange: 'bg-orange-100 text-orange-600',
              red: 'bg-red-100 text-red-600'
            };

            return (
              <motion.div
                key={category.key as string}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  {technologies.map((tech: string, techIndex: number) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: techIndex * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full ${colorClasses[category.color as keyof typeof colorClasses].replace('bg-', 'bg-').replace('text-', '')}`} />
                      <span className="text-slate-700 font-medium">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            System Architecture
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            This project follows modern architectural patterns ensuring scalability, 
            maintainability, and performance across all layers of the application.
          </p>
          
          {/* Simple Architecture Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="text-blue-600 font-semibold mb-2">Frontend Layer</div>
              <div className="text-sm text-slate-600">
                {caseStudy.technologies.frontend.slice(0, 3).join(', ') as string}
                {caseStudy.technologies.frontend.length > 3 && '...'}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="text-green-600 font-semibold mb-2">Backend Layer</div>
              <div className="text-sm text-slate-600">
                {caseStudy.technologies.backend.slice(0, 3).join(', ') as string}
                {caseStudy.technologies.backend.length > 3 && '...'}
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
              <div className="text-purple-600 font-semibold mb-2">Data Layer</div>
              <div className="text-sm text-slate-600">
                {caseStudy.technologies.database.slice(0, 3).join(', ') as string}
                {caseStudy.technologies.database.length > 3 && '...'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
