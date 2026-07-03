import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub, FiExternalLink, FiStar, FiCpu } from 'react-icons/fi'
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiTailwindcss,
} from 'react-icons/si'
import { FiWifi } from 'react-icons/fi'

const projects = [
  {
    slug: 'developer-collaboration-platform',
    title: 'Developer Collaboration Platform',
    subtitle: 'Production-Grade Real-Time Team Workspace',
    description: 'A full-stack real-time developer collaboration platform combining features from GitHub, Discord, and Jira into one unified workspace. Built with the MERN stack with TypeScript support.',
    highlights: [
      '48 React components',
      '30+ REST API endpoints',
      '30+ Socket.io events',
      'Docker Compose orchestration',
    ],
    skills: [
      { name: 'React 19', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js 22', icon: SiNodedotjs, color: '#339933' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Socket.io', icon: FiWifi, color: '#FFFFFF' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    gradient: 'from-[#007bff] via-[#00c6ff] to-[#a855f7]',
    accent: '#007bff',
    featured: true,
    github: 'https://github.com/salavathhari/Developer-Collaboration-Platform',
    live: '#',
  },
  {
    slug: 'interview-studio-ai',
    title: 'Interview Studio AI',
    subtitle: 'Enterprise AI Career Preparation & Recruitment Platform',
    description: 'An end-to-end AI platform combining resume intelligence, adaptive voice interviews, coding assessments, and recruiter workflows into a single ecosystem.',
    highlights: [
      '12+ integrated modules',
      'Multi-role architecture',
      'AI-powered everything',
    ],
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'PostgreSQL', icon: SiMongodb, color: '#4169E1' },
      { name: 'OpenAI', icon: FiCpu, color: '#10a37f' },
    ],
    gradient: 'from-[#a855f7] via-[#ec4899] to-[#a855f7]',
    accent: '#a855f7',
    featured: true,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="pt-32 pb-20 relative min-h-screen">
      <div className="absolute inset-0 bg-[#050510]" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-[#007bff] uppercase mb-4 block">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h1>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {project.featured ? (
                <Link to={`/projects/${project.slug}`} className="block group">
                  <div className="glass-card rounded-3xl overflow-hidden hover:border-[#007bff]/30 transition-all duration-500">
                    <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />
                    <div className="p-8 sm:p-10">
                      <div className="flex items-start gap-3 mb-4">
                        <span className="px-3 py-1 bg-[#007bff]/10 border border-[#007bff]/20 rounded-full text-[#007bff] text-xs font-bold tracking-wider uppercase">
                          Flagship
                        </span>
                        <FiStar className="text-[#007bff] mt-0.5" size={16} />
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#007bff] transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-sm text-white/40 mb-4">{project.subtitle}</p>
                      <p className="text-white/50 leading-relaxed mb-6 max-w-3xl">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.highlights.map((h) => (
                          <span key={h} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-white/60">
                            ✔ {h}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill) => (
                            <span
                              key={skill.name}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
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
                        <span className="flex items-center gap-1.5 text-sm text-[#007bff] font-semibold ml-auto group-hover:gap-3 transition-all">
                          View Case Study <FiArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-white/40 mb-3">{project.subtitle}</p>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
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

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass rounded-xl hover:bg-white/10 transition-all text-sm font-semibold text-white/60 hover:text-white"
                      >
                        <FiGithub size={16} /> Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass rounded-xl hover:bg-white/10 transition-all text-sm font-semibold text-white/60 hover:text-white"
                      >
                        <FiExternalLink size={16} /> Live
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
