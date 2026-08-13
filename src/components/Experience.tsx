const experiences = [
  {
    role: "Founder",
    org: "Polyflow",
    period: "Apr 2026 – Present",
    body: "Building AI speech infrastructure for under-resourced languages — datasets, production SaaS, and Echo for pronunciation practice. Grew a 1,000+ waitlist through interviews and early pilots.",
  },
  {
    role: "Software Engineer (Contract)",
    org: "TEKsystems & Independent Clients",
    period: "Aug 2023 – Present",
    body: "Led 15+ engagements from architecture to production — full-stack apps, AI tools, and cloud data pipelines that accelerated large-scale processing by 5×.",
  },
  {
    role: "Software Engineer Intern",
    org: "WarnerMedia",
    period: "Jun – Aug 2021",
    body: "Upgraded HBO Max deployment tooling for live branch builds and continuous deployment, cutting deployment request times by over 50 minutes.",
  },
  {
    role: "Software Development Engineer Intern",
    org: "Amazon / Amazon Music",
    period: "2019 & 2020",
    body: "Shipped a send-to-curator playlist feature (+20% submissions) and built services for music station performance metrics in Java and MySQL.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-header">
        <p className="section-index">05 / Experience</p>
        <h2 className="section-title">Where I've shipped.</h2>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <article key={`${exp.org}-${exp.period}`} className="timeline-item">
            <h3 className="timeline-role">{exp.role}</h3>
            <p className="timeline-org">{exp.org}</p>
            <p className="timeline-period">{exp.period}</p>
            <p>{exp.body}</p>
          </article>
        ))}
      </div>

      <div className="education-block">
        <div>
          <h3>UC Berkeley</h3>
          <p>B.S. Electrical Engineering & Computer Science · August 2023</p>
        </div>
        <p>Operating systems · Architecture · Embedded systems · Databases</p>
      </div>
    </section>
  );
}
