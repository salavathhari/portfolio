import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward, FiBookOpen, FiCalendar } from 'react-icons/fi'

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    school: 'Indian Institute of Information Technology, Design and Manufacturing, Jabalpur',
    period: 'AUG 2023 – Present',
    courses: [
      'Data Structures in C',
      'DBMS',
      'OOPS in Java',
      'Computer Architecture & Organization',
      'Cryptography & Network Security',
      'Computer Networks',
      'Operating System',
      'Software Engineering',
      'Artificial Intelligence',
    ],
  },
]

const certificates = [
  {
    title: 'MERN Stack Development',
    issuer: 'Training Program',
    description: 'Comprehensive training in MongoDB, Express.js, React, and Node.js development.',
    image: '/images/mern-certificate.jpg',
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-[#050510]" />
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-[#007bff] uppercase mb-4 block">
            Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Education & <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-[#007bff]/10 border border-[#007bff]/20">
                <FiBookOpen className="text-[#007bff]" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-7"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h4 className="text-lg font-bold text-white leading-snug">
                    {edu.school}
                  </h4>
                  <span className="flex items-center gap-1.5 text-xs text-white/40 shrink-0 bg-white/5 px-3 py-1.5 rounded-full">
                    <FiCalendar size={12} /> {edu.period}
                  </span>
                </div>

                <p className="text-[#007bff] font-semibold text-sm mb-5">{edu.degree}</p>

                <div>
                  <p className="text-xs font-bold tracking-wider text-white/30 uppercase mb-3">
                    Course Work
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 bg-[#007bff]/10 text-[#007bff]/80 border border-[#007bff]/15 rounded-lg text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-[#a855f7]/10 border border-[#a855f7]/20">
                <FiAward className="text-[#a855f7]" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Certificates</h3>
            </div>

            <div className="space-y-4">
              {certificates.map((cert) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <FiAward className="text-[#a855f7]" size={14} />
                      <span className="text-xs font-semibold text-[#a855f7]">{cert.issuer}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                    <p className="text-sm text-white/40 mt-1">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Online Profiles */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20">
                  <FiAward className="text-[#10b981]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">Online Profiles</h3>
              </div>

              <div className="space-y-3">
                {[
                  { name: 'LeetCode', url: '#', desc: 'Competitive Programming' },
                  { name: 'Portfolio', url: '#', desc: 'Personal Website' },
                ].map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 glass-card rounded-xl group"
                  >
                    <div>
                      <p className="font-semibold text-white group-hover:text-[#10b981] transition-colors">
                        {profile.name}
                      </p>
                      <p className="text-xs text-white/40">{profile.desc}</p>
                    </div>
                    <span className="text-white/20 group-hover:text-[#10b981] transition-colors">→</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
