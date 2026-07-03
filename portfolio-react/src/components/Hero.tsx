import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowDown, FiMapPin, FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'

function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(${Math.random() > 0.5 ? '0, 123, 255' : '168, 85, 247'}, ${Math.random() * 0.5 + 0.1})`,
          }}
          animate={{
            y: [0, -(Math.random() * 100 + 50), 0],
            x: [0, (Math.random() - 0.5) * 60, 0],
            opacity: [0.1, 0.8, 0.1],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#050510]" />
      <div className="absolute inset-0 mesh-gradient" />
      <ParticleField />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#007bff] rounded-full mix-blend-screen filter blur-[150px] opacity-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a855f7] rounded-full mix-blend-screen filter blur-[150px] opacity-10" />

      <motion.div style={{ opacity, y }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full glass border border-white/10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-sm text-white/70 font-medium tracking-wide">
              Open to opportunities
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block"
            >
              Salavath
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block gradient-text"
            >
              Haricharan
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/50 mb-10 h-12 font-light tracking-wide"
          >
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2500,
                'AI/ML Engineer',
                2500,
                'Problem Solver',
                2500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-white/70"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/40 text-sm mb-10"
          >
            {[
              { icon: FiMapPin, text: 'Banswada, Telangana' },
              { icon: FiMail, text: 'salavathhari286@gmail.com' },
              { icon: FiPhone, text: '6303949544' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-2">
                <Icon size={14} className="text-[#007bff]" /> {text}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#007bff] to-[#00c6ff] text-white font-semibold rounded-2xl overflow-hidden shadow-lg shadow-[#007bff]/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#00c6ff] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center justify-center gap-2">
                View My Work
                <FiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
              </span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 glass border border-white/10 text-white font-semibold rounded-2xl hover:border-[#007bff]/50 hover:bg-white/5 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="flex justify-center gap-4 mt-12"
          >
            {[
              { icon: FiGithub, href: 'https://github.com/salavathhari', label: 'GitHub' },
              { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="p-3.5 glass rounded-xl hover:bg-white/10 transition-all duration-300 text-white/50 hover:text-white"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-white/60 transition-colors"
        >
          <FiArrowDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  )
}
