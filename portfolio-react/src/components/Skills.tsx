import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiPython,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiGit,
  SiDocker,
  SiNextdotjs,
  SiFastapi,
  SiRedis,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
    ],
  },
  {
    title: 'Frontend & Backend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
    ],
  },
  {
    title: 'Data & DevOps',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-[#050510]" />
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-[#007bff] uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="space-y-14">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
            >
              <h3 className="text-sm font-bold tracking-[0.15em] text-white/30 uppercase mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIdx * 0.15 + i * 0.04 }}
                    whileHover={{ scale: 1.08, y: -8 }}
                    className="glass-card rounded-2xl p-5 flex flex-col items-center gap-3 cursor-default group"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl transition-all duration-300"
                      style={{ color: skill.color }}
                    >
                      <skill.icon />
                    </motion.div>
                    <span className="text-xs font-semibold text-white/50 group-hover:text-white/90 transition-colors text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
