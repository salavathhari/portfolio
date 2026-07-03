import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import FeaturedProjects from '../components/FeaturedProjects'
import Education from '../components/Certificates'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Education />
    </>
  )
}
