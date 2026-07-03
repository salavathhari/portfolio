import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiCheck,
  FiPlay,
  FiMessageSquare,
  FiGitPullRequest,
  FiVideo,
  FiFileText,
  FiCpu,
  FiUsers,
  FiBarChart2,
  FiDatabase,
  FiLayers,
  FiShield,
  FiZap,
  FiActivity,
} from 'react-icons/fi'
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiTailwindcss,
  SiNginx,
} from 'react-icons/si'

const coreFeatures = [
  {
    icon: FiMessageSquare,
    title: 'Real-Time Chat',
    description: 'Multi-room chat with threading, @mentions, typing indicators, read receipts, and 15-min edit window.',
    color: '#007bff',
  },
  {
    icon: FiActivity,
    title: 'Task Management',
    description: 'Kanban boards with drag-and-drop, custom columns, filters, priority levels, and analytics.',
    color: '#10b981',
  },
  {
    icon: FiGitPullRequest,
    title: 'Pull Requests',
    description: 'Git-like PR system with inline code review, thread resolution, and conflict detection.',
    color: '#a855f7',
  },
  {
    icon: FiVideo,
    title: 'Video Calls',
    description: 'WebRTC peer-to-peer video via Simple-Peer with Socket.io signaling.',
    color: '#ef4444',
  },
  {
    icon: FiFileText,
    title: 'File Management',
    description: 'Upload/attach files to tasks/PRs, S3 pre-signed URLs, local storage fallback.',
    color: '#f59e0b',
  },
  {
    icon: FiCpu,
    title: 'AI Assistant',
    description: 'OpenAI/Ollama integration for code help and project summaries.',
    color: '#10a37f',
  },
  {
    icon: FiZap,
    title: 'Issue Tracking',
    description: 'Context-aware issues linked to PRs/files/comments with priority & status workflow.',
    color: '#6366f1',
  },
  {
    icon: FiUsers,
    title: 'Presence System',
    description: 'Real-time online status, per-room tracking, live cursor sync in code review.',
    color: '#ec4899',
  },
  {
    icon: FiBarChart2,
    title: 'Analytics Dashboard',
    description: 'Project insights and team performance metrics.',
    color: '#06b6d4',
  },
]

const techStack = [
  { category: 'Frontend', items: ['React 19', 'TypeScript', 'Vite', 'Zustand', 'TailwindCSS', 'Framer Motion', 'Monaco Editor', 'React Router v7'], icon: SiReact, color: '#61DAFB' },
  { category: 'Backend', items: ['Node.js 22', 'Express 5', 'MongoDB 7', 'Mongoose 9', 'Redis 7', 'Socket.io 4.8', 'Pino', 'Helmet'], icon: SiNodedotjs, color: '#339933' },
  { category: 'Infrastructure', items: ['Docker Compose', 'Nginx', 'AWS S3', 'Sentry', 'Firebase'], icon: SiDocker, color: '#2496ED' },
  { category: 'Testing', items: ['Jest + Supertest', 'MongoDB Memory Server', 'Cypress E2E', 'Artillery'], icon: FiShield, color: '#a855f7' },
]

const apiEndpoints = [
  { category: 'Auth', count: 6, items: ['register', 'login', 'logout', 'refresh', 'forgot-password', 'reset-password'] },
  { category: 'Projects', count: 4, items: ['CRUD', 'invite members', 'list members'] },
  { category: 'Tasks', count: 5, items: ['CRUD', 'comments', 'file attachments', 'analytics'] },
  { category: 'PRs', count: 5, items: ['CRUD', 'review', 'merge', 'close'] },
  { category: 'Chat', count: 4, items: ['send', 'history', 'read', 'edit'] },
  { category: 'Issues', count: 5, items: ['create', 'get', 'list', 'status', 'assign'] },
]

const highlights = [
  '48 React components across pages and shared UI',
  '6+ Mongoose models (User, Project, Task, PullRequest, Message, File)',
  'RESTful API with consistent error format and pagination',
  '30+ Socket.io events for real-time features',
  'Full security audit (rate limiting, CORS, XSS prevention, JWT)',
  'Docker Compose with health checks for all services',
  'Seed script for demo data',
]

export default function DeveloperCollaboration() {
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
            <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold tracking-wider uppercase">
              Production-Ready
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Developer <span className="gradient-text">Collaboration</span> Platform
          </h1>

          <p className="text-xl sm:text-2xl text-white/40 font-light max-w-3xl mb-8">
            A production-grade full-stack application enabling development teams to collaborate in real-time
          </p>

          <p className="text-white/50 leading-relaxed max-w-3xl mb-8 text-lg">
            Combining features from GitHub, Discord, and Jira into one unified workspace.
            Built with the MERN stack with TypeScript support.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { icon: FiGithub, label: 'Source Code', href: 'https://github.com/salavathhari/Developer-Collaboration-Platform' },
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
            {['React 19', 'TypeScript', 'Node.js 22', 'MongoDB', 'Redis', 'Socket.io', 'WebRTC', 'Docker'].map((t) => (
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
            <div className="min-w-[700px]">
              <div className="text-center mb-6">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#007bff] to-[#00c6ff] rounded-xl text-white font-bold text-lg">
                  Developer Collaboration Platform
                </div>
                <p className="text-xs text-white/30 mt-2">Microservices-ready monolith</p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-center text-sm text-white/70 font-medium">
                  React 19 + TypeScript
                </div>
                <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-center text-sm text-white/70 font-medium">
                  Express 5 + Socket.io
                </div>
                <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-center text-sm text-white/70 font-medium">
                  Nginx Reverse Proxy
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="px-4 py-3 bg-[#007bff]/10 border border-[#007bff]/20 rounded-xl text-center text-sm text-[#007bff] font-medium">
                  MongoDB 7 + Mongoose 9
                </div>
                <div className="px-4 py-3 bg-[#DC382D]/10 border border-[#DC382D]/20 rounded-xl text-center text-sm text-[#DC382D] font-medium">
                  Redis 7 (Caching + Sessions)
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 mb-6">
                {['WebSocket Events', 'REST API', 'WebRTC', 'S3 Storage'].map((m) => (
                  <div key={m} className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-center text-xs text-white/60">
                    {m}
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-block px-4 py-2 bg-[#2496ED]/10 border border-[#2496ED]/20 rounded-lg text-[#2496ED] text-sm font-medium">
                  Docker Compose (4 Containers)
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Features */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FiZap className="text-[#007bff]" /> Core Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.06 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl" style={{ backgroundColor: `${feature.color}15` }}>
                    <feature.icon size={20} style={{ color: feature.color }} />
                  </div>
                  <h3 className="font-bold text-white text-sm">{feature.title}</h3>
                </div>
                <p className="text-sm text-white/45 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FiDatabase className="text-[#007bff]" /> Technology Stack
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
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

        {/* API Endpoints */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.35 }} className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FiZap className="text-[#007bff]" /> API Endpoints (30+)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {apiEndpoints.map((ep) => (
              <div key={ep.category} className="glass-card rounded-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white text-sm">{ep.category}</span>
                  <span className="px-2 py-0.5 bg-[#007bff]/10 rounded-full text-[#007bff] text-xs font-bold">{ep.count}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {ep.items.map((item) => (
                    <span key={item} className="px-2 py-1 bg-white/5 rounded text-xs text-white/40 font-mono">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }} className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FiBarChart2 className="text-[#007bff]" /> Key Metrics & Highlights
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

        {/* Folder Structure */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.45 }} className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <FiFileText className="text-[#007bff]" /> Folder Structure
          </h2>
          <div className="glass-card rounded-2xl p-6 sm:p-8 font-mono text-sm text-white/50 leading-relaxed overflow-x-auto">
            <pre>{`├── client/                  # React frontend
│   └── src/
│       ├── components/      # 48 UI components
│       ├── pages/           # 17 page views
│       ├── services/        # API & socket services
│       ├── hooks/           # Custom React hooks
│       └── context/         # Auth & Video contexts
├── server/                  # Node.js backend
│   └── src/
│       ├── controllers/     # Route handlers
│       ├── models/          # Mongoose schemas
│       ├── routes/          # API routes
│       ├── middleware/       # Auth, validation, rate-limit
│       ├── services/        # Business logic
│       ├── socket/          # WebSocket handlers
│       └── utils/           # Helpers, validators, logger
├── scripts/                 # Seed & smoke scripts
├── docker-compose.yml       # 4-service orchestration
└── *.md                     # 20+ documentation files`}</pre>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }} className="text-center">
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
