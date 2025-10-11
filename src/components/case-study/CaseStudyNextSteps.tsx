'use client';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTarget, FiZap } from 'react-icons/fi';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyNextStepsProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyNextSteps({ caseStudy }: CaseStudyNextStepsProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Future Roadmap</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Planned enhancements and future development opportunities
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-6">
          {caseStudy.nextSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    Phase {index + 1}
                  </span>
                  <div className="flex items-center gap-1 text-slate-500">
                    <FiArrowRight size={16} />
                    <span className="text-sm">Upcoming</span>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {step}
                </p>
              </div>

              {/* Icon */}
              <div className="flex-shrink-0 p-3 bg-slate-100 rounded-xl">
                {/* Replace FiRocket with a generic SVG rocket icon to fix missing import */}
                <svg
                  className="text-slate-600"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M10 2C13.866 2 17 5.13401 17 9C17 10.6569 16.3284 12.1566 15.2426 13.2426L13.5 15H11.5L10.5 17H9.5L8.5 15H6.5L4.75736 13.2426C3.67157 12.1566 3 10.6569 3 9C3 5.13401 6.13401 2 10 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="10"
                    cy="9"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Roadmap Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 text-green-800 rounded-full text-lg font-semibold mb-4">
              <FiTarget size={24} />
              Development Roadmap
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Continuous Improvement
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 bg-blue-50 rounded-xl mb-4">
                <FiZap className="text-blue-600 mx-auto" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Performance
              </h4>
              <p className="text-slate-600 text-sm">
                Ongoing optimization for better speed and efficiency
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-green-50 rounded-xl mb-4">
                <FiTarget className="text-green-600 mx-auto" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Features
              </h4>
              <p className="text-slate-600 text-sm">
                New functionality based on user feedback and market needs
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-purple-50 rounded-xl mb-4">
                <svg
                  className="text-purple-600 mx-auto"
                  width={32}
                  height={32}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M10 2C13.866 2 17 5.13401 17 9C17 10.6569 16.3284 12.1566 15.2426 13.2426L13.5 15H11.5L10.5 17H9.5L8.5 15H6.5L4.75736 13.2426C3.67157 12.1566 3 10.6569 3 9C3 5.13401 6.13401 2 10 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="10"
                    cy="9"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">
                Innovation
              </h4>
              <p className="text-slate-600 text-sm">
                Exploring cutting-edge technologies and methodologies
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-6">
              Interested in contributing to this project or have suggestions for improvements?
            </p>
            <motion.a
              href={caseStudy.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors"
            >
                <svg
                width={18}
                height={18}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 2C13.866 2 17 5.13401 17 9C17 10.6569 16.3284 12.1566 15.2426 13.2426L13.5 15H11.5L10.5 17H9.5L8.5 15H6.5L4.75736 13.2426C3.67157 12.1566 3 10.6569 3 9C3 5.13401 6.13401 2 10 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle
                  cx="10"
                  cy="9"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              Contribute on GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
