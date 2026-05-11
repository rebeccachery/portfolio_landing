import { Code2, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <Code2 size={16} color="var(--primary)" />
          <span>Full-Stack Engineer</span>
        </div>
        
        <h1>
          Where AI meets Language &<br />
          Storytelling
        </h1>
        
        <p>
          Full-stack engineer and founder of PolyFlow, designing intelligent systems for language learning, 
          animated content, and global communication.
        </p>
        
        <div className="hero-actions">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection("contact")}
          >
            <Mail size={16} />
            Get in Touch
          </button>
          <button 
            className="btn btn-outline"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
