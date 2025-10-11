'use client';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { Suspense } from 'react';

// Import components
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudyOverview from '@/components/case-study/CaseStudyOverview';
import CaseStudyProcess from '@/components/case-study/CaseStudyProcess';
import CaseStudyTechnologies from '@/components/case-study/CaseStudyTechnologies';
import CaseStudyResults from '@/components/case-study/CaseStudyResults';
import CaseStudyScreenshots from '@/components/case-study/CaseStudyScreenshots';
import CaseStudyLearnings from '@/components/case-study/CaseStudyLearnings';
import CaseStudyNextSteps from '@/components/case-study/CaseStudyNextSteps';

// Import data
import { caseStudies } from '@/data/caseStudies';

function CaseStudyContent() {
  const params = useParams();
  const slug = params?.slug as string;
  
 
  if (!slug) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Invalid URL</h1>
          <p className="text-slate-600 mb-8">No case study ID provided.</p>
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  const caseStudy = caseStudies.find(study => study.id === slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
          <p className="text-slate-600 mb-8">The case study you&apos;re looking for does&apos;t exist.</p>
          <p className="text-sm text-slate-500 mb-4">Requested ID: {slug}</p>
          <p className="text-sm text-slate-500 mb-8">Available IDs: {caseStudies.map(s => s.id).join(', ')}</p>
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back Navigation */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <FiArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Case Study Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <CaseStudyHero caseStudy={caseStudy} />
        <CaseStudyOverview caseStudy={caseStudy} />
        <CaseStudyProcess caseStudy={caseStudy} />
        <CaseStudyTechnologies caseStudy={caseStudy} />
        <CaseStudyResults caseStudy={caseStudy} />
        <CaseStudyScreenshots caseStudy={caseStudy} />
        <CaseStudyLearnings caseStudy={caseStudy} />
        <CaseStudyNextSteps caseStudy={caseStudy} />
      </motion.div>
    </div>
  );
}

export default function CaseStudyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading case study...</p>
        </div>
      </div>
    }>
      <CaseStudyContent />
    </Suspense>
  );
}
