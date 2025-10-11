'use client';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyProcessProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyProcess({ caseStudy }: CaseStudyProcessProps) {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Development Process</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A systematic approach to building scalable and maintainable solutions
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden lg:block" />

          <div className="space-y-12">
            {caseStudy.process.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative lg:pl-24"
              >
                {/* Phase Number */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg hidden lg:flex">
                  {index + 1}
                </div>

                {/* Phase Content */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                      <FiCheckCircle className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {phase.title}
                      </h3>
                      <p className="text-slate-600 text-lg leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="ml-16">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">
                      Key Steps:
                    </h4>
                    <div className="space-y-3">
                      {phase.steps.map((step, stepIndex) => (
                        <motion.div
                          key={stepIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: stepIndex * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-slate-600 leading-relaxed">
                            {step}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow (except for last item) */}
                {index < caseStudy.process.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute left-8 top-16 text-blue-400 hidden lg:block"
                  >
                    <FiArrowRight size={20} className="rotate-90" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
