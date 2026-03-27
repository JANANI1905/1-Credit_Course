import './App.css'

function App() {
  return (
    <main className="portfolio">   
      <div className="graphic-layers" aria-hidden="true">
        <span className="blob blob-a" />
        <span className="blob blob-b" />
        <span className="grid" />
      </div>

      <header className="top-bar">
        <div>
          <p className="subtitle">Janani A, B.E. (AI/ML) | Aspiring AI & ML Engineer</p>
          <h1>Janani Arunachalam</h1>
          <p className="tagline">Innovative AI Portfolio with animated design and interactive sections</p>
          <div className="contact">
            <a href="tel:+916383555141">📞 6383555141</a>
            <a href="mailto:janaruna1905@gmail.com">✉️ janaruna1905@gmail.com</a>
          </div>
        </div>
        <div className="pill">Premium</div>
      </header>

      <section className="split-section">
        <div className="panel panel-left">
          <h2>Profile</h2>
          <p>
            Computer Science student with strong Python, AI/ML, cloud and RPA foundations. Active contributor and workshop participant with a focus on real-world automation and intelligent systems.
          </p>
          <ul>
            <li>Google Cloud Virtual Internship</li>
            <li>AWS workshop and hands-on labs</li>
            <li>RPA projects in UiPath, Python automation</li>
            <li>Team leadership, event coordination</li>
          </ul>
        </div>
        <div className="panel panel-right">
          <h2>Impact</h2>
          <p>
            Delivered projects with quality and on-time performance. Developed strong communication and problem solving for collaborative engineering teams.
          </p>
          <ul>
            <li>Hope’s Tapestry contribution certificate</li>
            <li>Oracle AI and DevOps certifications</li>
            <li>NPTEL Elite achievements in IoT and Cyber Security</li>
            <li>Multiple language and framework experience</li>
          </ul>
        </div>
      </section>

      <section className="cards-container">
        <article className="card animated-card">
          <h3>Education</h3>
          <p><strong>K.S. Rangasamy CT</strong> | B.E. CSE (AI/ML) | 2023–2027</p>
          <p><strong>Sri Vidya Mandir Matriculation</strong> | School Graduation 2023</p>
        </article>

        <article className="card animated-card delay-1">
          <h3>Certifications</h3>
          <ul>
            <li>Google Generative AI + Udemy Python/AI + Full Stack Java</li>
            <li>Infosys Java/Python, MATLAB Onramp/Linear Algebra</li>
            <li>Oracle AI Foundations, Oracle DevOps</li>
            <li>NPTEL Elite (IoT, Entrepreneurship, Cyber Security), AWS</li>
          </ul>
        </article>

        <article className="card animated-card delay-2">
          <h3>Skills</h3>
          <p>Languages: C, Python, Java, SQL</p>
          <p>Web: HTML, CSS, JavaScript, React, TypeScript</p>
          <p>Cloud: Google Cloud AI tools, AWS labs</p>
          <p>RPA: UiPath Studio</p>
        </article>
      </section>

      <section className="contact-page" id="contact">
        <h2>Contact</h2>
        <p>Let's connect for collaboration, internships, or AI projects.</p>
        <div className="contact-grid">
          <a href="https://github.com/JANANI1905" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/janani-arunachalam-9b60b7292" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/I8DgOBGhYv/" target="_blank" rel="noreferrer">LeetCode</a>
          <a href="https://www.hackerrank.com/profile/janaruna1905" target="_blank" rel="noreferrer">HackerRank</a>
          <a href="mailto:janaruna1905@gmail.com" className="btn-connect">Email Me</a>
          <a href="tel:+916383555141" className="btn-connect">Call Me</a>
        </div>
      </section>

      <footer className="footer">
        <p>React + TypeScript | Vercel ready | Dynamic innovation focused design</p>
      </footer>
    </main>
  )
}

export default App
