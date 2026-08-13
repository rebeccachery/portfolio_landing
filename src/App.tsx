import { Toaster } from "sonner";
import { Nav } from "./components/Nav";
import { ScrollMotif } from "./components/ScrollMotif";
import { Reveal } from "./components/Reveal";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Polyflow } from "./components/Polyflow";
import { Projects } from "./components/Projects";
import { UnderTheHood } from "./components/UnderTheHood";
import { Lab } from "./components/Lab";
import { Experience } from "./components/Experience";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <a href="#top" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <ScrollMotif />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Polyflow />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <UnderTheHood />
        </Reveal>
        <Reveal>
          <Lab />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Resume />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App;
