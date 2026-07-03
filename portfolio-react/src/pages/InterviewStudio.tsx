import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiCheck,
  FiPlay,
  FiShield,
  FiUsers,
  FiCpu,
  FiDatabase,
  FiLayers,
  FiMessageSquare,
  FiFileText,
  FiCode,
  FiTrendingUp,
  FiBarChart2,
  FiSettings,
} from 'react-icons/fi'
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
} from 'react-icons/si'

const techStack = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'], icon: SiReact, color: '#61DAFB' },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'], icon: SiNodedotjs, color: '#339933' },
  { category: 'Database', items: ['PostgreSQL', 'SQLAlchemy'], icon: SiPostgresql, color: '#4169E1' },
  { category: 'AI/ML', items: ['OpenAI API', 'Whisper STT', 'TTS'], icon: FiCpu, color: '#10a37f' },
  { category: 'Auth', items: ['JWT', 'RBAC', 'Role-based Access'], icon: FiShield, color: '#a855f7' },
  { category: 'Infra', items: ['Docker', 'Vercel', 'Railway', 'Neon'], icon: SiDocker, color: '#2496ED' },
]

const modules = [
  {
    icon: FiFileText,
    title: 'AI Resume Intelligence',
    items: ['Resume parsing & extraction', 'ATS score generation', 'Resume optimization', 'Resume-job matching'],
    color: '#007bff',
  },
  {
    icon: FiMessageSquare,
    title: 'AI Interview Engine',
    items: ['Voice-based interviews', 'Adaptive questioning', 'Follow-up questions', 'Real-time evaluation'],
    color: '#00c6ff',
  },
  {
    icon: FiCode,
    title: 'Coding Assessment',
    items: ['Role-based challenges', 'AI code review', 'Runtime & memory analysis', 'Multi-language support'],
    color: '#a855f7',
  },
  {
    icon: FiTrendingUp,
    title: 'Career Intelligence',
    items: ['Skill-gap analysis', 'Learning roadmaps', 'Readiness scoring', 'Progress tracking'],
    color: '#10b981',
  },
  {
    icon: FiUsers,
    title: 'Recruiter Portal',
    items: ['Job management', 'Candidate evaluation', 'Interview scheduling', 'Hiring pipeline'],
    color: '#f59e0b',
  },
  {
    icon: FiSettings,
    title: 'Admin Portal',
    items: ['Platform monitoring', 'AI usage analytics', 'User management', 'System health dashboard'],
    color: '#ef4444',
  },
]

const highlights = [
  'Multi-role Authentication (Candidate, Recruiter, Admin)',
  '12+ major integrated modules',
  'AI-powered resume analysis',
  'AI voice interviewer',
  'Adaptive interview engine',
  'Coding assessment platform',
  'Career readiness engine',
  'Real-time analytics dashboard',
  'Enterprise RBAC architecture',
  'RESTful API backend',
]

export default function InterviewStudio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="pt-28 pb-20 relative">
      <div className="absolute inset-0 bg-[#050510]" />
      <div className="absolute inset-0 mesh-gradient opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
          <Link to="/projects" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium">
            <FiArrowLeft /> Back to Projects
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-[#007bff]/10 border border-[#007bff]/20 rounded-full text-[#007bff] text-xs font-bold tracking-wider uppercase">
              Flagship Project
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Interview Studio <span className="gradient-text">AI</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/40 font-light max-w-3xl mb-8">
            Enterprise AI Career Preparation & Recruitment Platform
          </p>

          <p className="text-white/50 leading-relaxed max-w-3xl mb-10 text-lg">
            An end-to-end AI platform that helps candidates prepare for technical interviews while
            enabling recruiters to evaluate applicants through AI-powered resume analysis,
            adaptive voice interviews, coding assessments, and hiring analytics.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { icon: FiGithub, label: 'Source Code', href: '#' },
              { icon: FiExternalLink, label: 'Live Demo', href: '#' },
              { icon: FiPlay, label: 'Watch Demo', href: '#' },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl hover:bg-white/10 transition-all text-sm font-semibold text-white/70 hover:text-white"
              >
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'OpenAI', 'Tailwind CSS', 'Docker'].map((t) => (
              <span key={t} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold text-white/50">
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FiLayers className="text-[#007bff]" /> System Architecture
          </h2>
          <div className="glass-card rounded-2xl p-8 sm:p-10 overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="text-center mb-8">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#007bff] to-[#00c6ff] rounded-xl text-white font-bold text-lg">
                  Interview Studio AI
                </div>
              </div>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 text-sm">
                  Authentication (JWT + RBAC)
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {['Candidate Portal', 'Recruiter Portal', 'Admin Portal'].map((p) => (
                  <div key={p} className="px-4 py-3 bg-[#007bff]/10 border border-[#007bff]/20 rounded-xl text-center text-sm text-white/80 font-medium">
                    {p}
                  </div>
                ))}
              </div>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-lg text-[#a855f7] text-sm font-medium">
                  AI Intelligence Engine
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-6">
                {['Resume AI', 'ATS Scoring', 'Skill Gap', 'Voice AI'].map((m) => (
                  <div key={m} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-center text-xs text-white/60">
                    {m}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-[#4169E1]/10 border border-[#4169E1]/20 rounded-lg text-[#4169E1] text-sm font-medium">
                  PostgreSQL Database
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Modules */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FiCpu className="text-[#007bff]" /> Key Modules
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl" style={{ backgroundColor: `${mod.color}15` }}>
                    <mod.icon size={20} style={{ color: mod.color }} />
                  </div>
                  <h3 className="font-bold text-white text-sm">{mod.title}</h3>
                </div>
                <ul className="space-y-2">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/45">
                      <FiCheck size={12} className="text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FiDatabase className="text-[#007bff]" /> Technology Stack
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div key={tech.category} className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <tech.icon size={20} style={{ color: tech.color }} />
                  <span className="font-bold text-white text-sm">{tech.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-white/5 rounded-md text-xs text-white/50 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Highlights */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }} className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FiBarChart2 className="text-[#007bff]" /> Project Highlights
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3 glass-card rounded-xl px-5 py-3.5">
                <FiCheck size={16} className="text-emerald-500 shrink-0" />
                <span className="text-sm text-white/70">{h}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case Study */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }} className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">Case Study</h2>
          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-3">Problem</h3>
              <p className="text-white/50 leading-relaxed">
                Candidates often need to use multiple platforms for resume optimization, interview practice,
                coding assessments, and career planning, while recruiters use separate systems for hiring.
                This fragmented approach leads to inefficiency and data silos.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-3">Solution</h3>
              <p className="text-white/50 leading-relaxed">
                Built a unified AI platform integrating career preparation and recruitment workflows
                into one ecosystem. The platform combines AI resume intelligence, adaptive voice
                interviews, coding assessments, and recruiter hiring pipelines into a single
                cohesive experience.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-3">My Contributions</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  'Designed the system architecture',
                  'Built frontend interfaces (React + TypeScript)',
                  'Developed backend REST APIs (Node.js + Express)',
                  'Designed PostgreSQL database schema',
                  'Integrated OpenAI, Whisper, and TTS services',
                  'Implemented JWT authentication and RBAC',
                  'Built analytics dashboards',
                  'Created career readiness scoring engine',
                ].map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-white/50">
                    <FiCheck size={12} className="text-[#007bff] shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.6 }} className="text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#007bff] to-[#00c6ff] text-white font-bold rounded-2xl shadow-lg shadow-[#007bff]/25 hover:shadow-[#007bff]/40 transition-all text-sm"
          >
            Interested in this project? Let's talk
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
