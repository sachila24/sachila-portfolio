import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Github, Layers, X } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'

const projects = [
  {
    id: 'btanium-tracking',
    title: 'bTanium – Live Vehicle Tracking System',
    type: 'Full-stack / Cloud / Android / Real-time Tracking',
    description:
      'A live vehicle tracking system built with a React admin dashboard, Android driver app, AWS serverless backend, and DynamoDB-based tracking data flow. The Android driver app covers journey assignment, start/stop actions, location tracking, and driver-side workflows, while the admin dashboard handles live vehicle status, routes, and real-time tracking.',
    contribution:
      'Worked on the Android driver app (UI flows, location permissions, state handling, Logcat debugging), backend API integration, admin panel improvements, AWS deployment workflows, CI/CD, and production issue fixing.',
    tags: [
      'React',
      'Node.js',
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'Cognito',
      'S3',
      'CloudFront',
      'Android',
      'Kotlin',
      'Location Services',
      'GitHub Actions',
    ],
    links: { live: 'https://tracking.btanium.com/', github: null },
  },
  {
    id: 'btanium-sales',
    title: 'bTanium Sales Website',
    type: 'Marketing Website / UI Design / Frontend',
    description:
      'A modern product sales website designed to present the bTanium live tracking platform with a clean, premium, and responsive interface. Focused on product storytelling, service sections, landing page structure, and deployment-ready frontend design.',
    contribution:
      'Worked on frontend UI/UX improvements, responsive layout, content sections, visual polish, and deployment support.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'S3', 'CloudFront'],
    links: { live: 'https://btanium.com/', github: null },
  },
  {
    id: 'mtanium-sales',
    title: 'mTanium Sales Website',
    type: 'Sales Website / UI Design / Frontend',
    description:
      'A premium sales website concept and frontend implementation for mTanium, focused on modern enterprise presentation, clean section structure, responsive UI, and strong product branding.',
    contribution:
      'Worked on the sales website design and frontend UI improvements only, including layout polish, responsive sections, visual hierarchy, and deployment support.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'UI/UX', 'S3', 'CloudFront'],
    links: { live: 'https://mtanium.com', github: null },
  },
]

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!project) return null

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <motion.article
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25 }}
        className="border-glow glass relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">{project.type}</p>
        <h3 className="mt-2 pr-10 text-2xl font-bold text-white">{project.title}</h3>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300">
          <div>
            <p className="font-semibold text-white">Overview</p>
            <p className="mt-1 text-slate-400">{project.description}</p>
          </div>
          <div>
            <p className="font-semibold text-white">My contribution</p>
            <p className="mt-1 text-slate-400">{project.contribution}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-purple-500/25 bg-purple-500/10 px-2.5 py-1 font-mono text-[11px] text-purple-100"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} custom={0} className="font-mono text-sm font-medium text-cyan-400">
            Featured work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Projects that feel like{' '}
            <span className="text-gradient">production systems</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-4 text-slate-400">
            Case-study cards with deployable thinking — swap screenshots anytime.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="mt-14 grid gap-8 lg:grid-cols-2"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              custom={i}
              className="group glass border-glow flex flex-col overflow-hidden rounded-2xl transition hover:border-cyan-400/35 hover:shadow-glow"
            >
              <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 bg-grid-fine opacity-40 [background-size:24px_24px]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
                  <Layers className="h-10 w-10 text-cyan-400/80" />
                  <p className="font-mono text-xs text-slate-500">Screenshot placeholder</p>
                  <p className="max-w-xs text-[11px] text-slate-600">Replace with your image in the card markup</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-purple-300/90">{p.type}</p>
                <h3 className="mt-2 text-xl font-bold text-white transition group-hover:text-cyan-100">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{p.description}</p>
                <p className="mt-4 border-l-2 border-cyan-500/40 pl-4 text-sm italic text-slate-500">
                  <span className="font-semibold not-italic text-slate-400">My contribution: </span>
                  {p.contribution}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.slice(0, 6).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-300 sm:text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tags.length > 6 && (
                    <span className="rounded-md border border-white/10 px-2 py-1 font-mono text-[10px] text-slate-500">
                      +{p.tags.length - 6}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 sm:flex-none"
                  >
                    View Details
                  </button>
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10 sm:flex-none"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Site
                    </a>
                  )}
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-purple-500/25 bg-purple-500/10 px-4 py-2.5 text-sm font-semibold text-purple-100 transition hover:border-purple-400/50 sm:flex-none"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-slate-500"
        >
          Some project details are summarized at a high level to respect confidentiality and internal
          project boundaries.
        </motion.p>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}
