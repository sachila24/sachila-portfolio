import { motion } from 'framer-motion'
import { Layers, Rocket, Smartphone } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'

const highlights = [
  {
    title: 'Real-world project experience',
    desc: 'Shipping features, debugging production issues, and iterating with feedback loops.',
    icon: Rocket,
  },
  {
    title: 'Cloud & backend focused',
    desc: 'Designing APIs, serverless workflows, and dependable deployment patterns on AWS.',
    icon: Layers,
  },
  {
    title: 'Mobile and full-stack development',
    desc: 'Android flows, responsive web experiences, and cohesive end-to-end delivery.',
    icon: Smartphone,
  },
]

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm font-medium text-cyan-400">
            About Me
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Building useful systems with{' '}
            <span className="text-gradient">clarity and craft</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            I am a Computer Science undergraduate from Sri Lanka and a Software Engineering Intern with
            hands-on experience in full-stack development, Android development, backend APIs, cloud
            deployments, and real-world system debugging. I like building useful products, improving UI/UX,
            working with AWS services, and learning technologies through practical implementation.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {highlights.map((h, i) => {
            const Icon = h.icon
            return (
            <motion.div
              key={h.title}
              variants={fadeUp}
              custom={i}
              className="group glass border-glow relative overflow-hidden rounded-2xl p-6 transition hover:border-cyan-400/35"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-cyan-500/15 to-purple-600/10 blur-2xl transition group-hover:opacity-100" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="relative mt-4 text-lg font-semibold text-white">{h.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{h.desc}</p>
            </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
