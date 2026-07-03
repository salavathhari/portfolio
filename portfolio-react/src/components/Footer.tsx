import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiHeart } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/salavathhari', label: 'GitHub' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:salavathhari286@gmail.com', label: 'Email' },
  { icon: FiPhone, href: 'tel:6303949544', label: 'Phone' },
]

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#050510] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="text-3xl font-black gradient-text tracking-tighter">SH</span>
            <p className="text-white/30 text-sm leading-relaxed mt-4 max-w-xs">
              B.Tech CSE student at IIITDM Jabalpur. Building innovative solutions with
              full-stack development and AI/ML.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.15em] text-white/50 uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/30 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.15em] text-white/50 uppercase mb-5">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass rounded-xl hover:bg-white/10 transition-all duration-300 text-white/30 hover:text-white"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm flex items-center gap-1">
            Built with <FiHeart className="text-[#007bff] text-xs" /> by Salavath Haricharan
          </p>
          <p className="text-white/15 text-xs">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
