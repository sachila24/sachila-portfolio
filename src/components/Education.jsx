import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'

export default function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm font-medium text-cyan-400">
            Education
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Academic <span className="text-gradient">foundation</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={0}
          className="mt-12"
        >
          <div className="glass border-glow relative overflow-hidden rounded-2xl p-8 sm:p-10">
            <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-gradient-to-tr from-purple-500/20 to-cyan-500/10 blur-3xl" />
            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/25 to-fuchsia-600/20 ring-1 ring-white/10">
                <GraduationCap className="h-7 w-7 text-purple-300" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold text-white">BSc Computer Science Undergraduate</h3>
                <p className="mt-1 text-slate-400">
                  Informatics Institute of Technology / University of Westminster pathway
                </p>
                <p className="mt-2 font-mono text-sm text-cyan-200/80">Sri Lanka</p>
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400">
                  Currently studying Computer Science with a focus on software engineering, backend
                  development, cloud technologies, mobile development, and practical project
                  implementation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
