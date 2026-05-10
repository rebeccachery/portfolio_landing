import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Engineer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "Led development of cloud-native applications using React, Node.js, and AWS. Architected microservices handling millions of requests daily.",
    skills: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },
  {
    title: "Full-Stack Developer",
    company: "Startup Inc.",
    period: "2020 - 2022",
    description: "Built scalable web applications from scratch. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
    skills: ["Vue.js", "Python", "MongoDB", "GCP", "Kubernetes"]
  },
  {
    title: "Software Engineer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Developed custom web solutions for clients across various industries. Collaborated with design teams to create pixel-perfect implementations.",
    skills: ["JavaScript", "React", "Express", "MySQL", "Redis"]
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