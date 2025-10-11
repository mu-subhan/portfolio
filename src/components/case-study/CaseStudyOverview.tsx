'use client';
import { motion } from 'framer-motion';
import { FiTarget, FiZap } from 'react-icons/fi';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyOverviewProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyOverview({ caseStudy }: CaseStudyOverviewProps) {
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
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Project Overview</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-xl">
                <FiTarget className="text-red-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">The Challenge</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              {caseStudy.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-blue-50 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <FiZap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">The Solution</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              {caseStudy.solution}
            </p>
          </motion.div>
        </div>

        {/* Tech Stack Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Technologies Used</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {caseStudy.tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
