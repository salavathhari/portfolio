import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiSend, FiMail, FiUser, FiMessageSquare, FiMapPin, FiPhone } from 'react-icons/fi'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('https://formspree.io/f/xjkonwar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      // silent
    }
  }

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-[0.2em] text-[#007bff] uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Get in Touch</h3>
              <p className="text-white/40 leading-relaxed">
                Have a project in mind or want to collaborate? I'd love to hear from you.
                Let's build something amazing together.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: FiMail, label: 'Email', value: 'salavathhari286@gmail.com', href: 'mailto:salavathhari286@gmail.com' },
                { icon: FiPhone, label: 'Phone', value: '6303949544', href: 'tel:6303949544' },
                { icon: FiMapPin, label: 'Location', value: 'Banswada, Telangana', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl group"
                >
                  <div className="p-3 rounded-xl bg-[#007bff]/10 group-hover:bg-[#007bff]/20 transition-colors">
                    <Icon size={18} className="text-[#007bff]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider font-semibold">{label}</p>
                    <p className="text-sm text-white/70 group-hover:text-white transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#007bff]/50 focus:border-[#007bff]/50 outline-none transition-all text-white placeholder:text-white/20"
                />
              </div>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#007bff]/50 focus:border-[#007bff]/50 outline-none transition-all text-white placeholder:text-white/20"
                />
              </div>

              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-white/20" />
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#007bff]/50 focus:border-[#007bff]/50 outline-none transition-all text-white placeholder:text-white/20 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-[#007bff] to-[#00c6ff] text-white font-bold rounded-xl shadow-lg shadow-[#007bff]/25 hover:shadow-[#007bff]/40 transition-shadow flex items-center justify-center gap-2.5 text-sm tracking-wide"
              >
                <FiSend size={16} />
                Send Message
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-center text-sm font-medium"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
