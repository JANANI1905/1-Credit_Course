import { motion } from 'framer-motion'

const certs = [
  'Udemy — Python for Beginners',
  'Udemy — AI Introduction',
  'Udemy — Full Stack Java Web Development',
  'Google Cloud Generative AI Virtual Internship (AICTE & Eduskills)',
  'Infosys — Java, Python',
  'MATLAB — Onramp, Linear Algebra',
  'Published Contribution — Hope’s Tapestry',
  'Oracle — AI Foundations Associate',
  'Oracle — DevOps Professional',
  'NPTEL Elite — IoT, Entrepreneurship, Cyber Security',
  'AWS Workshop Certifications',
  'ZENAI 24hrs Hackathon',
]

export default function Certifications() {
  return (
    <section id="certifications" className="animate-in">
      <h2 className="section-title">Certifications</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {certs.map((cert, idx) => (
          <motion.article
            key={cert}
            className="glass-card"
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <h3 className="text-cyan-100 font-semibold text-base">{cert}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
