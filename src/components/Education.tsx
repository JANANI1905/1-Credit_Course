import { motion } from 'framer-motion'

const educationData = [
  {
    title: 'K.S. Rangasamy College of Technology, Tiruchengode',
    subtitle: 'B.E. Computer Science and Engineering (AI & ML)',
    duration: 'Sep 2023 – Jul 2027',
    description: 'Current AI & ML specialization with project work in cloud and automation.',
  },
  {
    title: 'Sri Vidya Mandir Matriculation HSS, Gurusamipalayam',
    subtitle: 'School Graduation',
    duration: 'March 2023',
    description: 'Strong foundations in science and mathematics with competitive achievements.',
  },
]

export default function Education() {
  return (
    <section id="education" className="animate-in">
      <h2 className="section-title">Education</h2>
      <div className="space-y-6">
        {educationData.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.1 }}
            className="timeline-item glass-panel p-5"
          >
            <h3 className="text-cyan-100 font-semibold">{item.title}</h3>
            <p className="text-sm text-cyan-200 mb-1">{item.subtitle}</p>
            <p className="text-xs text-cyan-300/80 mb-2">{item.duration}</p>
            <p className="text-cyan-100">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
