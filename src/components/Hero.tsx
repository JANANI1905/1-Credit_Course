import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const roles = ['AI Developer', 'Cloud Enthusiast', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [inProgress, setInProgress] = useState(true)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let i = 0
    const timer = setInterval(() => {
      setDisplayText(currentRole.slice(0, i + 1))
      i += 1
      if (i > currentRole.length) {
        clearInterval(timer)
        setInProgress(false)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [roleIndex])

  useEffect(() => {
    if (!inProgress) {
      const next = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length)
        setInProgress(true)
      }, 1300)
      return () => clearTimeout(next)
    }
  }, [inProgress])

  const typed = useMemo(() => `${displayText}${inProgress ? '|' : ''}`, [displayText, inProgress])

  return (
    <section id="hero" className="section">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <p className="section-title">Hi, I&apos;m Janani A 👋</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight text-white">Aspiring AI & ML Engineer</h1>
          <p className="mt-4 text-cyan-100 text-lg">K.S. Rangasamy College of Technology, CSE AI & ML (2023–2027)</p>

          <p className="mt-4 text-xl text-cyan-200">{typed}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#connect" className="btn">View Work</a>
            <a href="/JananiA_Resume.pdf" className="btn">Download Resume</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
