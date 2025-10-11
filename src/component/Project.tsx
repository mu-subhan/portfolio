'use client';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { caseStudies } from '@/data/caseStudies';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,transparent,white,transparent)] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-sm font-medium">
              Selected Work
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            Engineering
            <span className="relative mx-3">
              <span className="text-blue-600">Solutions</span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200/60 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of full-stack applications demonstrating scalable architecture, 
            performance optimization, and modern development practices. Each project 
            represents a complete solution built with production-grade standards.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
        >
          {caseStudies.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.shortDescription}
                tags={project.tags}
                link={project.link}
                githubLink={project.githubLink}
                imageUrl={project.imageUrl}
                type={project.type}
                highlights={project.highlights}
                index={index}
                caseStudyId={project.id}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900 text-white rounded-xl shadow-lg">
            <span className="text-lg font-semibold">Interested in collaboration?</span>
            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="text-blue-300 hover:text-blue-200 font-medium flex items-center gap-2 transition-colors"
            >
              Let&apos;s discuss your project →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}