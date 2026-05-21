import './App.css'
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Startup } from "./components/Startup";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Experience />
      <Projects />
      <Startup />
      <Contact />
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default App
