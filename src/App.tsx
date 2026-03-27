import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Experience from './components/Experience'
import Connect from './components/Connect'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="text-text bg-[var(--bg)] min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4 md:px-10 pt-20 pb-16 space-y-14">
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Experience />
        <Connect />
      </main>
      <Footer />
    </div>
  )
}

export default App
