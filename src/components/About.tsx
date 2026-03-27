import { motion } from 'framer-motion'

const techSkills = ['C', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Google Cloud AI']
const softSkills = ['Adaptability', 'Team Collaboration', 'Leadership']
const languages = ['English', 'Tamil']

export default function About() {
  return (
    <section id="about" className="glass-panel p-6 md:p-8 animate-in">
      <h2 className="section-title">About</h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-cyan-100 leading-relaxed"
      >
        Experienced Computer Science student excelling in Python programming and cloud technologies, currently shaping AI & ML solutions through workshops and practical experiments. Completed Google Cloud Generative AI internship and built strong foundations in problem solving, automation, and collaboration.
      </motion.p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <div>
          <h3 className="text-white font-semibold mb-2">Technical Skills</h3>
          <div className="flex flex-wrap">{techSkills.map((skill) => <span key={skill} className="skill-pill">{skill}</span>)}</div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Soft Skills</h3>
          <div className="flex flex-wrap">{softSkills.map((skill) => <span key={skill} className="skill-pill">{skill}</span>)}</div>
          <h3 className="text-white font-semibold mt-4 mb-2">Languages</h3>
          <div className="flex flex-wrap">{languages.map((language) => <span key={language} className="skill-pill">{language}</span>)}</div>
        </div>
      </div>
    </section>
  )
}
