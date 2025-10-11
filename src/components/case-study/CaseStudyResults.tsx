'use client';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiCheckCircle } from 'react-icons/fi';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyResultsProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyResults({ caseStudy }: CaseStudyResultsProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Project Results</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Measurable outcomes and impact achieved through this project
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
        </motion.div>

       

        {/* Success Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 bg-green-100 rounded-full">
              <FiCheckCircle className="text-green-600" size={32} />
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <FiTrendingUp className="text-blue-600" size={20} />
                Impact Summary
              </h4>
              <p className="text-slate-600 leading-relaxed">
                This project successfully delivered measurable improvements across all key performance indicators. 
                The combination of modern technologies, thoughtful architecture, and user-centered design resulted 
                in significant positive outcomes that exceeded initial expectations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
