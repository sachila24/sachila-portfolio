import { motion } from 'framer-motion'
import { Orbit } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'

const milestones = [
  'Started with Java fundamentals and OOP',
  'Built academic backend and REST API projects',
  'Learned Android development with Kotlin',
  'Worked on real-world Android and cloud-connected systems',
  'Improved React/Next.js frontend and sales websites',
  'Gained hands-on AWS deployment and CI/CD experience',
  'Currently focusing on backend, cloud engineering, and production-ready systems',
]

export default function Timeline() {
  return (
    <section id="journey" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm font-medium text-cyan-400">
            Path
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-2 flex flex-wrap items-center gap-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            My Developer Journey
            <Orbit className="hidden h-9 w-9 text-purple-400 sm:inline" aria-hidden />
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-slate-400">
            A concise arc from fundamentals to production-minded engineering.
          </motion.p>
        </motion.div>

        <div className="relative mt-16 max-w-3xl">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/60 via-purple-500/40 to-transparent sm:left-[15px]" />

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={staggerContainer}
            className="space-y-10"
          >
            {milestones.map((text, i) => (
              <motion.li key={text} variants={fadeUp} custom={i} className="relative flex gap-6 pl-2">
                <span className="relative z-10 mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-cyan-400/60 bg-surface shadow-[0_0_12px_rgba(34,211,238,0.45)] sm:h-5 sm:w-5">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-300 to-purple-400" />
                </span>
                <div className="glass border-glow flex-1 rounded-xl border px-4 py-4 sm:px-5 sm:py-5">
                  <p className="text-sm font-medium leading-relaxed text-slate-200 sm:text-base">{text}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
