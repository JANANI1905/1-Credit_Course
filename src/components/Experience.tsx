import { motion } from 'framer-motion'

const experiences = [
  { title: 'UiPath RPA Projects', description: 'Automated data workflows and task orchestration.' },
  { title: 'Google Lab Tools', description: 'Explored AI prototypes and experiments in cloud notebooks.' },
  { title: 'AWS Workshops', description: 'Built cloud solutions and automated pipelines in hands-on labs.' },
  { title: 'Python & AI Mini Projects', description: 'Created classification and automation projects using AI models.' },
  { title: 'Event Organizing', description: 'Coordinated workshops and student-led technology events.' },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <p className="section-title">Experience / Profile</p>
        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.title}
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <h3 className="text-cyan-100 font-semibold">{item.title}</h3>
              <p className="text-cyan-200 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
