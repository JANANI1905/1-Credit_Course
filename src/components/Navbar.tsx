import { useState, useEffect } from 'react'

const links = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Experience', href: '#experience' },
  { name: 'Connect', href: '#connect' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [blur, setBlur] = useState(false)

  useEffect(() => {
    const onScroll = () => setBlur(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-30 transition-all backdrop-blur-lg ${
        blur ? 'bg-[#0a0f1e]/70 border-b border-cyan-500/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-10">
        <a href="#hero" className="flex items-center gap-3 text-cyan-300">
          <span className="h-9 w-9 rounded-full border border-cyan-300/65 bg-cyan-500/15 flex items-center justify-center text-sm font-bold shadow-[0_0_16px_rgba(0,245,255,0.24)]">
            JA
          </span>
          <span className="font-bold tracking-wider text-white">Janani</span>
        </a>

        <nav className="hidden lg:flex gap-6 text-sm text-cyan-200 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden p-2 rounded-md border border-cyan-400/35 text-cyan-300"
          aria-label="open menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="lg:hidden pb-3 px-4 border-t border-cyan-300/20 bg-[#091128]/95">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cyan-100 hover:text-white py-2 rounded-lg text-base"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
