import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'

const points = [
  'Developed and improved Android app features',
  'Integrated frontend and backend APIs',
  'Worked with AWS services including S3, CloudFront, Lambda, API Gateway, DynamoDB, Cognito, and CloudWatch',
  'Supported CI/CD deployment workflows using GitHub Actions',
  'Debugged real issues across local, staging, and deployed environments',
  'Improved frontend UI/UX and responsive layouts',
]

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm font-medium text-cyan-400">
            Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Where I ship <span className="text-gradient">real software</span>
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
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/10 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/25 to-blue-600/20 ring-1 ring-white/10">
                  <Briefcase className="h-7 w-7 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Software Engineering Intern</h3>
                  <p className="mt-1 text-slate-400">Sri Lanka / Remote</p>
                  <p className="mt-2 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-cyan-200/90">
                    July 2025 – Present
                  </p>
                </div>
              </div>
            </div>
            <p className="relative mt-8 max-w-3xl text-base leading-relaxed text-slate-400">
              Worked on real-world software systems involving Android development, backend API integration,
              frontend improvements, AWS cloud deployment, CI/CD workflows, debugging, testing, and
              production issue investigation.
            </p>
            <ul className="relative mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400/90" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
