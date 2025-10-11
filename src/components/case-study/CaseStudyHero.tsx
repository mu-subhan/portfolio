'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink, FiGithub, FiCalendar, FiUser } from 'react-icons/fi';
import { CaseStudy } from '@/data/caseStudies';

interface CaseStudyHeroProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,white,transparent)] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Project Type Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/20">
                {caseStudy.type}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              {caseStudy.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/80 mb-8 leading-relaxed"
            >
              {caseStudy.description}
            </motion.p>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              <div className="flex items-center gap-3">
                <FiCalendar className="text-blue-400" size={20} />
                <div>
                  <p className="text-white/60 text-sm">Timeline</p>
                  <p className="text-white font-semibold">{caseStudy.timeline}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FiUser className="text-blue-400" size={20} />
                <div>
                  <p className="text-white/60 text-sm">Role</p>
                  <p className="text-white font-semibold">{caseStudy.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-white/60 text-sm mb-3">Key Highlights</p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm font-medium border border-blue-400/30"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Action Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href={caseStudy.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                <FiExternalLink size={18} />
                View Live Demo
              </motion.a>
              
              <motion.a
                href={caseStudy.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
              >
                <FiGithub size={18} />
                Source Code
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image */}
         <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className=""
>
  <div className="relative h-72 lg:h-[375px] lg:w-full rounded-2xl overflow-hidden shadow-2xl">
    <Image
      src={caseStudy.imageUrl}
      alt={caseStudy.title}
      fill
      className="object-cover"
      priority
    />
    
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10" />
  </div>
  
  {/* Floating Elements */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1, duration: 0.6 }}
    className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
  />
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.2, duration: 0.6 }}
    className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
  />
</motion.div>

        </div>
      </div>
    </section>
  );
}
