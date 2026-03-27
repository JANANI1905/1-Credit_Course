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
    <section id="connect" className="animate-in">
      <h2 className="section-title">Digital Profiles / Connect</h2>
      <p className="text-cyan-200 mb-4">Connect with me for opportunities in AI, machine learning, cloud, and automation.</p>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
        {profiles.map((profile, idx) => (
          <motion.a
            key={profile.href}
            href={profile.href}
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * idx, duration: 0.25 }}
          >
            {profile.name}
          </motion.a>
        ))}
      </div>
    </section>
  )
}
