import { motion } from 'framer-motion'
import { Briefcase, Github, Linkedin, Mail } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'

const social = [
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: Linkedin },
  { label: 'Fiverr', href: 'https://www.fiverr.com/yourusername', icon: Briefcase },
]

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm font-medium text-cyan-400">
            Contact
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Let&apos;s Build <span className="text-gradient">Something</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            I am open to internship opportunities, freelance web development work, backend projects,
            cloud deployment work, and collaboration on practical software ideas.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={0}
          className="mx-auto mt-14 max-w-xl"
        >
          <div className="border-glow glass relative overflow-hidden rounded-2xl p-8 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />
            <div className="relative space-y-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500">Email</p>
                <a
                  href="mailto:sathmika7@gmail.com"
                  className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white transition hover:text-cyan-300"
                >
                  <Mail className="h-5 w-5 text-cyan-400" />
                  sathmika7@gmail.com
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {social.map((s) => {
                  const SocIcon = s.icon
                  return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
                  >
                    <SocIcon className="h-4 w-4 text-cyan-300" />
                    {s.label}
                  </a>
                  )
                })}
              </div>

              <a
                href="mailto:sathmika7@gmail.com"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 sm:w-auto sm:px-10"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
