const groups = [
  {
    title: "Languages",
    items: [
      { name: "Python", tip: "Primary language for product prototypes, data pipelines, and AI systems." },
      { name: "TypeScript", tip: "Typed frontend and full-stack product work." },
      { name: "JavaScript", tip: "Web apps, tooling, and interactive prototypes." },
      { name: "Java", tip: "Production services and internships at Amazon." },
      { name: "C/C++", tip: "Systems and embedded coursework and experiments." },
      { name: "Go", tip: "Backend and systems-oriented prototyping." },
      { name: "Rust", tip: "Learning low-level systems programming and performance." },
      { name: "SQL", tip: "Relational modeling and production data access." },
    ],
  },
  {
    title: "Systems",
    items: [
      { name: "Linux", tip: "Day-to-day development and deployment environments." },
      { name: "Docker", tip: "Containerized services for client and product work." },
      { name: "Kubernetes", tip: "Deployment tooling experience from platform work." },
      { name: "AWS", tip: "Production cloud experience across internships and projects." },
      { name: "GCP", tip: "Cloud data pipelines and contract delivery." },
      { name: "CI/CD", tip: "Automation that makes shipping repeatable." },
      { name: "Terraform", tip: "Infrastructure as code for cloud environments." },
    ],
  },
  {
    title: "Data / AI",
    items: [
      { name: "PyTorch", tip: "Model work and speech/ML experimentation." },
      { name: "Hugging Face", tip: "ASR, NLP, and model orchestration." },
      { name: "pandas", tip: "Data wrangling for pipelines and analysis." },
      { name: "NumPy", tip: "Numerical work for audio and ML pipelines." },
      { name: "Speech datasets", tip: "Collecting, aligning, and curating training corpora." },
      { name: "LLMs", tip: "Product prototypes, structured extraction, and orchestration." },
      { name: "Audio processing", tip: "Pitch, rhythm, ASR prep, and speech feedback loops." },
    ],
  },
  {
    title: "Product",
    items: [
      { name: "React", tip: "Interfaces for products, tools, and interactive demos." },
      { name: "Next.js", tip: "Product surfaces for Polyflow and web apps." },
      { name: "FastAPI", tip: "Backend APIs powering products and experiments." },
      { name: "Prototyping", tip: "Getting to a usable artifact before overbuilding." },
      { name: "User research", tip: "Interviews and pilots that shape what ships next." },
    ],
  },
];

export function UnderTheHood() {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <p className="section-index">03 / Under the hood</p>
        <h2 className="section-title">Technical range, mapped.</h2>
        <p className="section-lead">
          Hover a technology for how I actually use it — not a logo wall.
        </p>
      </div>

      <div className="tech-map">
        {groups.map((group) => (
          <div key={group.title} className="tech-group">
            <h3>{group.title}</h3>
            <div className="tech-chips">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="tech-chip"
                  tabIndex={0}
                  data-tip={item.tip}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
