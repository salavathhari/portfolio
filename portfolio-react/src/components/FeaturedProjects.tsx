import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCpu, FiWifi } from 'react-icons/fi'
import { SiReact, SiTypescript, SiNodedotjs, SiMongodb, SiRedis, SiDocker, SiTailwindcss } from 'react-icons/si'

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
    featured: true,
  },
]

export default function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-[#050510]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[0.2em] text-[#007bff] uppercase mb-4 block">Work</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link to={`/projects/${project.slug}`} className="block group">
                <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#007bff]/30">
                  <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
                  <div className="p-6 sm:p-8 sm:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          {project.featured && (
                            <span className="px-2.5 py-0.5 bg-[#007bff]/10 border border-[#007bff]/20 rounded-full text-[#007bff] text-[10px] font-bold tracking-wider uppercase">
                              Flagship
                            </span>
                          )}
                          <h3 className="text-2xl font-bold text-white group-hover:text-[#007bff] transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-sm text-white/40 mb-2">{project.subtitle}</p>
                        <p className="text-white/50 text-sm leading-relaxed mb-4 max-w-3xl">{project.description}</p>

                        {project.highlights && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.highlights.map((h) => (
                              <span key={h} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-white/60">
                                ✔ {h}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill) => (
                            <span key={skill.name} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold" style={{ color: skill.color, backgroundColor: `${skill.color}10`, border: `1px solid ${skill.color}15` }}>
                              <skill.icon size={12} /> {skill.name}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm text-[#007bff] font-semibold shrink-0 group-hover:gap-3 transition-all">
                        View <FiArrowRight />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="text-center mt-10">
          <Link to="/projects" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium">
            View All Projects <FiArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
