import React from 'react';
import { FaCode, FaUsers, FaTrophy, FaHeart, FaMicrochip } from 'react-icons/fa';


const MyStory = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">My Story</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            From curiosity to impact: A journey through software engineering
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* About Me Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FaCode className="text-blue-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-900">About Me</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
          I&apos;m <span className="font-semibold text-slate-900">Muhammad Subhan</span>, a Software Engineer dedicated to building scalable, resilient full-stack applications. Specializing in the <span className="font-semibold text-slate-900">MERN Stack</span> and modern frontend frameworks like <span className="font-semibold text-slate-900">Next.js</span>, I translate complex requirements into clean, high-performance systems.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          My journey is driven by a curiosity for system architecture understanding not just <span className="italic font-semibold">how</span> the code works, but <span className="italic font-semibold">why</span> it works at scale, and its measurable impact on daily operations. This passion fuels my drive to continuously master new technologies and solve real-world engineering challenges.
        </p>
          </div>
        </section>

  {/* Early Inspiration */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <FaHeart className="text-blue-600 mr-3" size={28} />
            <h3 className="text-3xl font-bold text-slate-900">Early Inspiration</h3>
          </div>
          <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg mb-6 shadow-sm">
            <blockquote className="text-lg italic text-slate-800">
              &quot;Be the kind of Software Engineer who creates change and builds something useful for people.&quot;
            </blockquote>
            <p className="text-sm text-gray-600 mt-2"> A teacher who changed my perspective</p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            That single sentence inspired me to view programming not just as a subject, but as a path to create measurable impact and build solutions for real people.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            My foundation started with <span className="font-semibold text-slate-900">C programming</span> during my I.C.S. studies, which immediately instilled principles of logic and foundational computing. This was quickly followed by mentorship at university, guiding me toward the modern landscape of <span className="font-semibold text-slate-900">Web Development</span>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Initially, the complexity of the field was a challenge, but through guided mentorship, I learned the crucial engineering value of consistency and iterative practice. Building my first static pages in HTML/CSS wasn&apos;t just an achievement; it demonstrated that complex problems are solvable through small, disciplined steps a philosophy I apply to system design today.
          </p>
        </section>

        <section>
          <div className="flex items-center mb-6">
            <FaMicrochip className="text-blue-600 mr-3" size={28} />
            <h3 className="text-3xl font-bold text-slate-900">Growing as a Developer</h3>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              After mastering the basics, I moved to <span className="font-semibold text-slate-900">JavaScript</span>, the engine behind modern, dynamic web applications. My focus shifted to understanding the core mechanics and deeper questions of the language. Through intensive experimentation, a university bootcamp, and project-based learning, I transitioned into <span className="font-semibold text-slate-900">React.js</span> for building component-driven, maintainable user interfaces.
            </p>
            <p className="text-gray-700 leading-relaxed">
              I then expanded my expertise to the full stack, integrating <span className="font-semibold text-slate-900">Node.js, Express.js, and MongoDB</span> to master backend architecture and solidify my role as a <span className="font-semibold text-slate-900">MERN Stack developer</span>. As my expertise grew, I embraced <span className="font-semibold text-slate-900">Next.js</span> for server-side rendering and enhanced performance. During this growth phase, I also explored <span className="font-semibold text-slate-900">AI and Machine Learning</span> during a focused 6-week fellowship.
            </p>
            
            {/* Achievement Highlight */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-600 shadow-sm mb-6">
              <div className="flex items-center mb-3">
                <FaTrophy className="text-green-600 mr-2" size={20} />
                <span className="font-semibold text-green-800 text-lg">Achievement Highlight: Collaborative Engineering</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                As a Frontend Developer, I collaborated with a team in a hackathon to engineer a React-based component library from scratch, securing <span className="font-semibold text-green-700">3rd place</span>. This project provided exposure to full-stack integration, Next.js deployment, and crucial API integration tasks essential skills for high-impact team environments.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FaUsers className="text-blue-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-900">Professional Experience</h2>
          </div>
          <div className="space-y-6">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              {/* Wanile Technology */}
              <div className="relative pl-12 pb-8">
                <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full -translate-x-2"></div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">MERN Stack Intern</h3>
                  <p className="text-blue-600 font-medium mb-3">Wanile Technology • 3 months</p>
                   <p className="text-gray-700 leading-relaxed">
            Engineered and integrated scalable modules for a complex <span className="font-semibold text-slate-900">Hospital Management System</span> using <span className="font-semibold text-slate-900">React.js and Next.js</span>. I <span className="font-semibold text-slate-900">optimized component rendering</span> and streamlined key user workflows, resulting in a <span className="font-semibold text-blue-700">noticeable improvement in UI responsiveness</span> and overall user experience.
          </p>
                </div>
              </div>

              {/* DigiU */}
              <div className="relative pl-12">
                <div className="absolute left-2 w-4 h-4 bg-blue-600 rounded-full -translate-x-2"></div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Junior Software Engineer</h3>
                  <p className="text-blue-600 font-medium mb-3">DigiU • 6 months</p>
                   <p className="text-gray-700 leading-relaxed">
            Currently contributing as a <span className="font-semibold text-slate-900">Junior Software Engineer</span> on the high-impact <span className="font-semibold text-slate-900">Digi Collect</span> platform. My responsibilities focus on maintaining <span className="font-semibold text-blue-700">production-level reliability</span>, including crucial API integrations, optimizing scheduled cron jobs for efficiency, and resolving critical system bugs. This role provides deep experience with <span className="font-semibold text-slate-900">Python</span> and robust backend architecture under strict operational demands.
          </p>

         
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Community Impact:</strong> I am also a Core Team Member at Dev Weekend, where I mentor juniors, share my learnings, and help guide aspiring developers  a way of giving back the same mentorship that once guided me.
              </p>
            </div>
          </div>
        </section>

        {/* Skills & Strengths */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Skills & Strengths</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Frontend Development</h3>
              <p className="text-gray-700">React.js, Next.js, Tailwind CSS, UI/UX, Framer Motion</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Backend Development</h3>
              <p className="text-gray-700">Node.js, Express.js, Python</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Databases</h3>
              <p className="text-gray-700">MongoDB, MySQL, PostgreSQL, SQLite, MongoDB</p>
            </div>
           <div className="bg-gray-50 px-2 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900">Engineering Principles</h3>
              <p className="text-gray-700">Scalability-First Design, Code Review, Agile Methodologies, Mentorship & Collaboration</p>
            </div>
          </div>
        </section>

        {/* Personal Side */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Personal Side</h2>
          <div className="bg-green-50 p-8 rounded-lg border border-green-200">
            <p className="text-gray-700 leading-relaxed">
              Beyond coding, I&apos;m passionate about cricket. Every Sunday morning, I play matches with different teams. Cricket helps me recharge my energy, clear my mind, and regain focus. Whenever I feel tired or low on motivation, a quick game refreshes me and enables me to return to my work with a fresh mindset and higher productivity.
            </p>
          </div>
        </section>

        {/* Future Goals */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <FaTrophy className="text-blue-600 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-900">Future Goals</h2>
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-lg">
            <p className="text-lg leading-relaxed">
              My long-term goal is not just to become a developer restricted to one stack, but a <span className="text-blue-400 font-semibold">well-rounded Software Engineer</span> who adapts to new technologies, contributes to impactful projects, and helps others grow along the way. I&apos;m passionate about mentorship and want to continue supporting junior developers, just as mentors supported me at the start of my journey.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MyStory;