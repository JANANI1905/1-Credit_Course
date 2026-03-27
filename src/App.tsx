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
    <div className="bg-[#0a0f1e] text-[#d7e1ff] min-h-screen">
      <Navbar />
      <main className="container mx-auto px-6 md:px-8">
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
