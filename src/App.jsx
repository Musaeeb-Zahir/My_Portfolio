import Hero from "./components/Hero";
import ProjectContainer from "./components/ProjectContainer";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <ProjectContainer />
      <Skills />
      <Education />
      <Certifications/>
      <Experience/>
      <About/>
      <Contact/>
      <Footer/> 
    </>
  );
}

export default App;
