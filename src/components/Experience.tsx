import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Contract Full-Stack Engineer",
    company: "Consulting Clients (via TEKsystems & Upwork)",
    period: "2023 - Present",
    description: "Delivered end-to-end full-stack applications and AI-powered tools for nonprofits and mission-driven organizations, completing 15+ projects from ideation to production with consistent on-time delivery. Collaborated with RUXAILAB on AI-supported usability evaluation tooling for remote user testing, and built accessible WordPress platforms and custom digital solutions for advocacy and nonprofit organizations, including Out in Tech.",
    skills: ["React", "TypeScript", "Python", "AWS", "Docker", "PostgreSQL", "Data Pipelines"]
  },
  {
    title: "Software Engineer Intern",
    company: "WarnerMedia",
    period: "2021 - 2021",
    description: "Enhanced internal deployment tooling for the HBO Max platform, enabling live branch builds and continuous deployment workflows that reduced deployment request times by more than 50 minutes.",
    skills: ["TypeScript", "Python", "AWS", "Node.js", "CI/CD", "Kubernetes"]
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon",
    period: "2020 - 2020",
    description: "Implemented a send-to-curator playlist feature for an internal playlist publishing platform, contributing to a 20% increase in playlist submissions within the first month.",
    skills: ["Ruby on Rails", "React", "MySQL", "Redis", "REST APIs"]
  },
  {
    title: "Software Development Engineer Intern",
    company: "Amazon",
    period: "2019 - 2019",
    description: "Developed scalable internal services for analyzing performance metrics across Amazon Music stations, enabling teams to better evaluate station quality and listener engagement.",
    skills: ["Java","MySQL", "REST APIs", "Agile Methodologies", "Data Analytics"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="card card-primary">
            <div className="exp-header">
              <div>
                <h3>{exp.title}</h3>
                <p className="text-slate-600">{exp.company}</p>
              </div>
              <div className="exp-period">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </div>
            </div>
            
            <p>{exp.description}</p>
            
            <div className="skill-tags">
              {exp.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}