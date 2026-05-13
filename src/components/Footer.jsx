import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:text-left sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-sm text-slate-500"
        >
          <Sparkles className="h-4 w-4 text-cyan-500/80" />
          © 2026 Sachila Dissanayake. Built with React, Tailwind CSS, and AWS-ready deployment.
        </motion.p>
      </div>
    </footer>
  )
}
