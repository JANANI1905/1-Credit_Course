import { motion } from 'framer-motion'

const profiles = [
  { name: 'GitHub', href: 'https://github.com/JANANI1905' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/janani-arunachalam-9b60b7292' },
  { name: 'LeetCode', href: 'https://leetcode.com/u/I8DgOBGhYv/' },
  { name: 'HackerRank', href: 'https://www.hackerrank.com/profile/janaruna1905' },
  { name: 'Email', href: 'mailto:janaruna1905@gmail.com' },
  { name: 'Phone', href: 'tel:+916383555141' },
]

export default function Connect() {
  return (
    <section id="connect" className="section">
      <div className="section-inner">
        <p className="section-title">Connect</p>
        <p className="text-cyan-200 mb-4">Reach out for internships, AI projects, or collaboration.</p>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
          {profiles.map((profile) => (
            <motion.a
              key={profile.href}
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              className="skill-pill"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ justifyContent: 'center' }}
            >
              {profile.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
