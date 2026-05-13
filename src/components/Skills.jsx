import { motion } from 'framer-motion'
import {
  Cloud,
  Code2,
  Layers,
  MonitorSmartphone,
  Wrench,
} from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'

const groups = [
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    skills: ['React', 'Vite', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    icon: Layers,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Java', 'JAX-RS', 'Authentication', 'API integration'],
  },
  {
    title: 'Mobile',
    icon: Code2,
    skills: [
      'Android',
      'Kotlin',
      'Jetpack Compose basics',
      'Mobile UI flows',
      'Location-based features',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      'AWS S3',
      'AWS CloudFront',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'Cognito',
      'Route 53',
      'GitHub Actions',
      'CI/CD',
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['GitHub', 'Jira', 'Cursor', 'VS Code', 'Android Studio', 'Postman', 'CloudWatch'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm font-medium text-cyan-400">
            Skills
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Tech <span className="text-gradient">stack & tooling</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-4 max-w-2xl text-slate-400"
          >
            Grouped by domain — each chip is a capability I use to ship reliable software.
          </motion.p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {groups.map((g) => {
            const GroupIcon = g.icon
            return (
            <motion.div
              key={g.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} custom={0} className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <GroupIcon className="h-5 w-5 text-purple-300" />
                </span>
                <h3 className="text-lg font-semibold text-white">{g.title}</h3>
              </motion.div>
              <motion.div
                variants={staggerContainer}
                className="flex flex-wrap gap-2.5"
              >
                {g.skills.map((s, si) => (
                  <motion.span
                    key={s}
                    variants={fadeUp}
                    custom={si}
                    className="inline-flex cursor-default rounded-full border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 px-3.5 py-2 font-mono text-xs font-medium text-slate-100 shadow-sm ring-1 ring-white/5 transition hover:border-cyan-400/40 hover:shadow-glow sm:text-sm"
                  >
                    {s}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
