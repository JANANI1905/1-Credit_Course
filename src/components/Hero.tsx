import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const phrases = ['AI Developer', 'Cloud Enthusiast', 'Problem Solver']

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [text, setText] = useState('')
  const [writing, setWriting] = useState(true)

  useEffect(() => {
    const phrase = phrases[current]
    let index = 0
    const interval = setInterval(() => {
      setText(phrase.slice(0, index + 1))
      index += 1
      if (index > phrase.length) {
        clearInterval(interval)
        setWriting(false)
        setTimeout(() => setWriting(true), 1200)
      }
    }, 90)
    return () => clearInterval(interval)
  }, [current])

  useEffect(() => {
    if (!writing) {
      const timeout = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % phrases.length)
      }, 700)
      return () => clearTimeout(timeout)
    }
  }, [writing])

  const typed = useMemo(() => `${text}${writing && text.length < phrases[current].length ? '|' : ''}`, [text, writing, current])

  return (
    <section id="hero" className="relative overflow-hidden pt-20">
      <div className="halo-bg" />
      <div className="grid-overlay" />
      <div className="container mx-auto relative z-10 px-4 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12"
        >
          <p className="mb-3 text-sm tracking-widest uppercase text-cyan-300">Hi, I&apos;m Janani A 👋</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight glow-text">Aspiring AI & ML Engineer</h1>
          <p className="mt-3 text-cyan-100 text-lg md:text-xl">Python | Cloud | Automation</p>

          <p className="mt-4 text-cyan-100 text-lg">
            <span className="text-cyan-300 font-bold">{typed}</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#connect" className="cta-btn">View My Work</a>
            <a href="/JananiA_Resume.pdf" className="cta-btn">Download Resume</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
