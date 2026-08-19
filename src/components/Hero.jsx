import { motion } from 'framer-motion'
import {
  ArrowRight,
  Cloud,
  Code2,
  Cpu,
  Mail,
  Smartphone,
  Sparkles,
  Download,
} from 'lucide-react'

const badges = [
  { label: 'React', color: 'from-cyan-400/20 to-blue-500/20 border-cyan-400/40' },
  { label: 'AWS', color: 'from-orange-400/15 to-amber-500/20 border-orange-400/35' },
  { label: 'Android', color: 'from-emerald-400/15 to-green-500/20 border-emerald-400/35' },
  { label: 'Node.js', color: 'from-lime-400/15 to-green-600/20 border-lime-400/35' },
  { label: 'DynamoDB', color: 'from-purple-400/20 to-fuchsia-500/20 border-purple-400/40' },
]

const floatCards = [
  {
    title: 'Cloud stack',
    icon: Cloud,
    accent: 'from-cyan-500/30 to-blue-600/20',
    lines: ['API Gateway → Lambda', 'DynamoDB streams', 'Cognito auth'],
  },
  {
    title: 'Admin / Web',
    icon: Code2,
    accent: 'from-violet-500/25 to-purple-600/20',
    lines: ['React dashboards', 'REST integration', 'CI/CD pipelines'],
  },
  {
    title: 'Android',
    icon: Smartphone,
    accent: 'from-emerald-500/25 to-teal-600/20',
    lines: ['Kotlin + Compose', 'Location flows', 'Production debugging'],
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 animate-blob rounded-full bg-gradient-to-br from-cyan-500/25 via-blue-600/10 to-purple-600/25 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] animate-blob-slow rounded-full bg-gradient-to-tr from-purple-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200/90"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            Command center online
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-6 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Sachila{' '}
            <span className="text-gradient">Dissanayake</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-400 sm:text-base"
          >
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2 py-1 font-medium text-slate-300">
              <Cpu className="h-4 w-4 text-cyan-400" />
              Computer Science Undergraduate
            </span>
            <span className="text-slate-600">|</span>
            <span className="font-medium text-slate-300">Software Engineer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.55 }}
            className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-200 sm:text-xl"
          >
            I build cloud-powered, mobile-first, and full-stack digital systems that solve real-world
            problems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base"
          >
            I enjoy working with backend systems, AWS cloud services, Android apps, modern frontend
            interfaces, and production-ready software solutions. My focus is to build practical systems
            with clean architecture, good user experience, and reliable deployment workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-cyan-300" />
              Contact Me
            </a>
            <a
              href="/cv.pdf"
              download="Sachila_Dissanayake_CV.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-sm font-semibold text-purple-100 transition hover:border-purple-400/50 hover:bg-purple-500/15"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[340px] w-[340px] animate-orbit rounded-full border border-dashed border-cyan-500/20" />
            <div className="absolute h-[260px] w-[260px] rounded-full border border-purple-500/15 shadow-glow-purple" />
          </div>

          <div className="relative space-y-4">
            {floatCards.map((card, i) => {
              const Icon = card.icon
              return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.55 }}
                className={`glass border-glow relative overflow-hidden rounded-2xl p-4 shadow-xl ${
                  i === 1 ? 'ml-0 sm:ml-8' : i === 2 ? 'ml-0 sm:ml-4' : ''
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${card.accent} blur-2xl`}
                />
                <div className="relative flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-xs uppercase tracking-wider text-cyan-300/90">
                      {card.title}
                    </p>
                    <ul className="mt-2 space-y-1 font-mono text-[11px] leading-relaxed text-slate-400 sm:text-xs">
                      {card.lines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              )
            })}
          </div>

          <div className="relative mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {badges.map((b, i) => (
              <motion.span
                key={b.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 + i * 0.05 }}
                className={`rounded-full border bg-gradient-to-r px-3 py-1.5 font-mono text-[11px] font-semibold text-slate-100 shadow-sm sm:text-xs ${b.color}`}
              >
                {b.label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
