'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiImage, FiZoomIn } from 'react-icons/fi';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyScreenshotsProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyScreenshots({ caseStudy }: CaseStudyScreenshotsProps) {
  if (!caseStudy.screenshots || caseStudy.screenshots.length === 0) {
    return null;
  }

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
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Project Screenshots</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Visual showcase of the application interface and key features
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudy.screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
             <div className="relative h-56 md:h-64 overflow-hidden">
  <Image
    src={screenshot.url}
    alt={screenshot.alt}
    width={680} 
    height={580} 
    className="object-cover transition-transform duration-700 group-hover:scale-105"
    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
  />
</div>

              {/* Caption */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FiImage className="text-blue-600" size={16} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Screenshot {index + 1}
                  </h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {screenshot.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Screenshots Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <p className="text-slate-600 mb-6">
              Additional screenshots and detailed interface views are available in the live demo.
            </p>
            <motion.a
              href={caseStudy.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              View Live Demo
            </motion.a>
           
          </div>
        </motion.div>
      </div>
    </section>
  );
}