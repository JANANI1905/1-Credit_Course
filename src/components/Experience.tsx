import { motion } from 'framer-motion'

const experience = [
  {
    title: 'UiPath Studio RPA Projects',
    details: 'Designed and deployed automation pipelines that simplified data retrieval and reporting workflows.',
  },
  {
    title: 'Google Lab Tools',
    details: 'Hands-on experimentation with AI/ML notebook workflows, generative model prototypes and dataset pipelines.',
  },
  {
    title: 'AWS Workshops',
    details: 'Completed workshops on cloud architecture, serverless deployment and AI / automation integrations.',
  },
  {
    title: 'Python & AI Mini-Projects',
    details: 'Implemented classification models, NLP pipelines and dashboard automation for small-scale production-ready demos.',
  },
  {
    title: 'Event Organizing',
    details: 'Coordinated technical workshops and student-led AI events for knowledge sharing and team collaboration.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="glass-panel p-6 md:p-8 animate-in">
      <h2 className="section-title">Experience & Profile</h2>
      <div className="space-y-4">
        {experience.map((item, idx) => (
          <motion.div
            key={item.title}
            className="p-4 border border-cyan-300/25 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
          >
            <h3 className="text-cyan-100 font-semibold">• {item.title}</h3>
            <p className="text-cyan-200 mt-1">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
