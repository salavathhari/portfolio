import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-[#007bff] uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Building the Future,
            <span className="block gradient-text">One Line at a Time</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <h3 className="text-3xl font-bold text-white">
                Hi, I'm <span className="gradient-text">Haricharan</span>
              </h3>
              <p className="text-lg text-white/50 leading-relaxed">
                A <strong className="text-white/80">B.Tech CSE student at IIITDM Jabalpur</strong> with
                a passion for building scalable applications and exploring the frontiers of AI/ML.
                I transform complex problems into elegant, efficient solutions.
              </p>
              <p className="text-lg text-white/50 leading-relaxed">
                From architecting real-time collaboration platforms to building AI-powered interview systems,
                I push the boundaries of what's possible with modern technology stacks.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { icon: FiGithub, href: 'https://github.com/salavathhari', label: 'GitHub' },
                { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:salavathhari286@gmail.com', label: 'Email' },
                { icon: FiPhone, href: 'tel:6303949544', label: 'Call' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2.5 px-5 py-3 glass rounded-xl hover:border-[#007bff]/30 transition-all duration-300 text-white/60 hover:text-white text-sm font-medium"
                >
                  <Icon size={16} />
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: '2+', label: 'Years Coding', color: '#007bff' },
              { value: '10+', label: 'Projects Built', color: '#00c6ff' },
              { value: '6+', label: 'Technologies', color: '#a855f7' },
              { value: '5+', label: 'Certifications', color: '#10b981' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl p-6 text-center group cursor-default"
              >
                <div
                  className="text-3xl sm:text-4xl font-black mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
