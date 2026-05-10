import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Built a full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1569693799105-4eb645d89aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0fGVufDF8fHx8MTc2MjkxNDAyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Task Management SaaS",
    description: "Collaborative task management tool with real-time updates, team workspaces, and advanced filtering capabilities.",
    image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mjk4NDIzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with customizable widgets, data visualization, and export functionality.",
    image: "https://images.unsplash.com/photo-1569693799105-4eb645d89aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0fGVufDF8fHx8MTc2MjkxNDAyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Vue.js", "Python", "FastAPI", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="text-slate-600">{project.description}</p>
              
              <div className="skill-tags">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-actions">
              <button className="btn btn-outline" style={{ width: '100%' }}>
                <Github size={16} />
                Code
              </button>
              <button className="btn btn-outline" style={{ width: '100%' }}>
                <ExternalLink size={16} />
                Live
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}