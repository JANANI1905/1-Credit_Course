import { motion } from 'framer-motion'

const techSkills = ['C', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Google Cloud AI']
const softSkills = ['Adaptability', 'Leadership', 'Teamwork']
const languages = ['English', 'Tamil']

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="section-title">About</p>
          <p className="text-cyan-100 text-lg leading-relaxed max-w-3xl">
            Computer Science Engineering student specializing in AI & ML with hands-on experience in Python, cloud automation, and AI projects. Completed Google Cloud Generative AI internship and actively building AI automation and RPA solutions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card">
              <h3 className="text-cyan-200 font-semibold mb-3">Technical Skills</h3>
              <div className="flex flex-wrap">{techSkills.map((skill) => <span key={skill} className="skill-pill">{skill}</span>)}</div>
            </div>

            <div className="card">
              <h3 className="text-cyan-200 font-semibold mb-3">Soft Skills</h3>
              <div className="flex flex-wrap">{softSkills.map((skill) => <span key={skill} className="skill-pill">{skill}</span>)}</div>
              <h3 className="text-cyan-200 font-semibold mt-4 mb-2">Languages</h3>
              <div className="flex flex-wrap">{languages.map((language) => <span key={language} className="skill-pill">{language}</span>)}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
