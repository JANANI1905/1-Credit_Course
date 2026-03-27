import { motion } from 'framer-motion'

const educationData = [
  {
    school: 'K.S. Rangasamy College of Technology',
    program: 'B.E. Computer Science and Engineering (AI & ML)',
    date: 'Sep 2023 – Jul 2027',
  },
  {
    school: 'Sri Vidya Mandir Matriculation Higher Secondary School',
    program: 'School Graduation',
    date: 'March 2023',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <p className="section-title">Education</p>
        <div className="space-y-4">
          {educationData.map((education, idx) => (
            <motion.div
              key={education.school}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card"
            >
              <p className="text-cyan-100 font-semibold">{education.school}</p>
              <p className="text-sm text-cyan-200 mt-1">{education.program}</p>
              <p className="text-xs text-cyan-300 mt-1">{education.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
