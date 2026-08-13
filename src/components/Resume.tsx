const experienceHighlights = [
  "Founder, Polyflow — AI speech for under-resourced languages",
  "Contract software engineer — 15+ production engagements",
  "WarnerMedia — HBO Max deployment tooling",
  "Amazon Music — playlist & metrics services",
];

const skillHighlights = [
  "Python, TypeScript, Java, C/C++, Go, Rust, SQL",
  "React, Next.js, FastAPI, Docker, Kubernetes",
  "PyTorch, Hugging Face, speech datasets, AWS/GCP",
];

export function Resume() {
  return (
    <section id="resume" className="section">
      <div className="section-header">
        <p className="section-index">06 / Resume</p>
        <h2 className="section-title">Background at a glance.</h2>
      </div>

      <div className="resume-panel">
        <div>
          <h3 className="resume-name">Rebecca Chery</h3>
          <p className="resume-role">Engineer / Builder</p>

          <div className="resume-columns">
            <div className="resume-col">
              <h3>Experience</h3>
              <ul>
                {experienceHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="resume-col">
              <h3>Education & skills</h3>
              <ul>
                <li>UC Berkeley — B.S. EECS (2023)</li>
                {skillHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-actions">
          <a
            className="btn btn-primary"
            href="/Rebecca_Chery_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View Resume ↗
          </a>
          <a
            className="btn btn-outline"
            href="/Rebecca_Chery_Resume.pdf"
            download="Rebecca_Chery_Resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
