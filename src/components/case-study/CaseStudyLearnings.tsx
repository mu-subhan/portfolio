'use client';
import { motion } from 'framer-motion';
import { FiBookOpen, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyLearningsProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyLearnings({ caseStudy }: CaseStudyLearningsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Key Learnings</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Valuable insights and lessons learned during the development process
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-8">
          {caseStudy.learnings.map((learning, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-start gap-6 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors"
            >
              {/* Icon */}
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl">
                <FiBookOpen className="text-blue-600" size={24} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    Learning {index + 1}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {learning}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-100 text-blue-800 rounded-full text-lg font-semibold mb-4">
              <FiBookOpen size={24} />
              Learning Summary
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Growth Through Experience
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 bg-white rounded-xl shadow-sm mb-4">
                <FiTarget className="text-blue-600 mx-auto" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Problem-Solving
              </h4>
              <p className="text-slate-600 text-sm">
                Enhanced ability to break down complex challenges into manageable solutions
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-white rounded-xl shadow-sm mb-4">
                <FiTrendingUp className="text-green-600 mx-auto" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Technical Growth
              </h4>
              <p className="text-slate-600 text-sm">
                Deepened understanding of modern development practices and technologies
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-white rounded-xl shadow-sm mb-4">
                <FiBookOpen className="text-purple-600 mx-auto" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Innovation
              </h4>
              <p className="text-slate-600 text-sm">
                Developed creative approaches to user experience and system architecture
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
