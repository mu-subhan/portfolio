'use client';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/data/caseStudies';

export default function CaseStudyIndexPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-6"
          >
            <FiArrowLeft size={20} />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Detailed exploration of my projects, showcasing the development process, 
              technical decisions, and outcomes achieved.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-xs font-semibold border border-slate-200">
                    {study.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed text-sm line-clamp-3">
                  {study.shortDescription}
                </p>

                {/* Key Highlights */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {study.highlights.slice(0, 3).map((highlight, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium border border-blue-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Tech Stack Preview */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {study.tags.slice(0, 4).map((tag, i) => (
                      <span
                        key={i}
                        className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {study.tags.length > 4 && (
                      <span className="text-slate-500 text-xs px-2 py-1">
                        +{study.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link
                    href={`/case-study/${study.id}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group/link"
                  >
                    <span>View Case Study</span>
                    <FiExternalLink 
                      size={14} 
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" 
                    />
                  </Link>

                  <div className="flex items-center gap-2">
                    <Link
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-50"
                      title="Live Demo"
                    >
                      <FiExternalLink size={14} />
                    </Link>
                    <Link
                      href={study.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-lg hover:bg-slate-50"
                      title="Source Code"
                    >
                      <FiGithub size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to discuss new projects and opportunities. 
              Let&apos;s create something amazing together!
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              <FiExternalLink size={18} />
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
