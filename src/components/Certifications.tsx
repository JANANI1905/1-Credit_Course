import { motion } from 'framer-motion'

const certificates = [
  'Udemy — Python for Beginners',
  'Udemy — AI Introduction',
  'Udemy — Full Stack Java Web Development',
  'Google Cloud Generative AI Virtual Internship (AICTE & Eduskills)',
  'Infosys — Java, Python',
  'MATLAB — Onramp, Linear Algebra',
  'Oracle — AI Foundations Associate',
  'Oracle — DevOps Professional',
  'NPTEL Elite — IoT, Entrepreneurship, Cyber Security',
  'AWS Workshop Certifications',
  'Published Contribution — Hope’s Tapestry',
]

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <p className="section-title">Certifications</p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert}
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <p className="text-cyan-100 font-semibold">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
