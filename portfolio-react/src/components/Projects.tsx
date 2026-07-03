import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiPython,
  SiDocker,
  SiFastapi,
} from 'react-icons/si'

const projects = [
  {
    title: 'Developer Collaboration Platform',
    subtitle: 'Real-Time Team Workspace',
    description:
      'A full-stack real-time collaboration platform with JWT auth, role-based access control, Kanban boards with drag-and-drop, pull request workflows with code review, and real-time chat with @mentions.',
    features: [
      'WebRTC video calling & S3-based file sharing',
      'AI assistant with OpenAI and Ollama integration',
      '27+ Mongoose schemas and 30+ RESTful API endpoints',
      'Real-time notifications, presence tracking & activity logging',
    ],
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    ],
    gradient: 'from-[#007bff] via-[#00c6ff] to-[#007bff]',
    github: 'https://github.com/salavathhari/Developer-Collaboration-Platform',
    accent: '#007bff',
  },
  {
    title: 'AI Interview Platform',
    subtitle: 'AI-Powered Technical Interview & Analytics',
    description:
      'A full-stack platform for adaptive AI-driven technical interviews with real-time WebSocket, voice integration, and secure code sandboxing.',
    features: [
      'OpenAI GPT-3.5 for question generation & answer evaluation',
      'Whisper & TTS for voice I/O integration',
      'ML pipeline with scikit-learn, XGBoost, FAISS, spaCy',
      'AES-256-GCM encryption, JWT auth with RBAC & anti-cheating',
    ],
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
    gradient: 'from-[#a855f7] via-[#ec4899] to-[#a855f7]',
    github: 'https://github.com/salavathhari/ai-interview',
    accent: '#a855f7',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-[#007bff] uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -5 }}
              className="group glass-card rounded-3xl overflow-hidden"
            >
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8 sm:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1 space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#007bff] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/40 mt-1">{project.subtitle}</p>
                    </div>

                    <p className="text-white/50 leading-relaxed">{project.description}</p>

                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: project.accent }}
                          />
                          <span className="text-sm text-white/45">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                          style={{
                            color: skill.color,
                            backgroundColor: `${skill.color}10`,
                            border: `1px solid ${skill.color}20`,
                          }}
                        >
                          <skill.icon size={13} />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex lg:flex-col gap-3 shrink-0">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl hover:bg-white/10 transition-all text-sm font-semibold text-white/70 hover:text-white"
                    >
                      <FiGithub size={16} /> Code
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                      className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl hover:bg-white/10 transition-all text-sm font-semibold text-white/70 hover:text-white"
                    >
                      <FiExternalLink size={16} /> Live
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
