import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Hero from "./sections/Hero.tsx";
import Navbar from "./sections/Navbar.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToHero from "./components/ScrollToHero.tsx";


function App() {

  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <ScrollToHero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
