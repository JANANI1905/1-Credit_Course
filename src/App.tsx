import './App.css'

function App() {
  return (
    <main className="portfolio">
      <header className="top-bar">
        <div>
          <p className="subtitle">Janani A, B.E. (AI/ML) | Aspiring AI & ML Engineer</p>
          <h1>Janani Arunachalam</h1>
          <div className="contact">
            <a href="tel:+916383555141">📞 6383555141</a>
            <a href="mailto:janaruna1905@gmail.com">✉️ janaruna1905@gmail.com</a>
          </div>
        </div>
        <div className="pill">
          <span>Premium Portfolio</span>
        </div>
      </header>

      <section className="section intro">
        <h2>Summary</h2>
        <p>
          Experienced and adaptable Computer Science student with growing expertise in Python programming and cloud technologies.
          Actively enhancing skills through AWS workshops and hands-on labs. Successfully completed Google virtual internship.
          Strong fundamentals in AI, and committed to continuous learning and solving real-world challenges.
        </p>
      </section>

      <section className="section">
        <h2>Profile Highlights</h2>
        <ul>
          <li>Delivered reliable project milestones through collaboration and ownership.</li>
          <li>Hands-on with Google Lab tools, AWS workshops, RPA automation (UiPath), and AI concepts.</li>
          <li>Published contribution cert (Hope’s Tapestry) and Oracle AI Foundations/DevOps certifications.</li>
          <li>Strong problem-solving ability, communication growth, and team leadership mindset.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="card">
          <strong>K.S. Rangasamy College of Technology, Tiruchengode</strong>
          <span>B.E. Computer Science & Engineering (AI & ML) | Sep 2023 – Present (Expected Jul 2027)</span>
        </div>
        <div className="card">
          <strong>Sr. Vidya Mandir Matriculation HSS, Gurusamipalayam</strong>
          <span>School Graduation | March 2023</span>
        </div>
      </section>

      <section className="section">
        <h2>Certifications</h2>
        <ul>
          <li>Google Cloud Generative AI Virtual Internship</li>
          <li>Udemy: Python, AI Intro, Full Stack Java Web Dev</li>
          <li>Infosys: Java, Python | MATLAB Onramp + Linear Algebra</li>
          <li>Oracle: AI Foundations Associate, DevOps Professional</li>
          <li>NPTEL Elite: IoT, Entrepreneurship, Cyber Security | AWS workshops</li>
        </ul>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <p>Programming: C, Python, Java, SQL</p>
        <p>Web: HTML, CSS, JavaScript, React, TypeScript</p>
        <p>Cloud & AI: Google Cloud AI tools, AWS workshop experience</p>
        <p>RPA: UiPath Studio</p>
      </section>

      <section className="section">
        <h2>Digital Profiles</h2>
        <div className="links">
          <a href="https://github.com/JANANI1905" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/janani-arunachalam-9b60b7292" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/I8DgOBGhYv/" target="_blank" rel="noreferrer">LeetCode</a>
          <a href="https://www.hackerrank.com/profile/janaruna1905" target="_blank" rel="noreferrer">HackerRank</a>
        </div>
      </section>

      <footer className="footer">
        <p>Built with React + TypeScript. Ready for Vercel deployment.</p>
      </footer>
    </main>
  )
}

export default App
