const principles = [
  {
    title: "Understand the problem.",
    body: "Talk to users. Inspect the system. Ask better questions before writing code.",
  },
  {
    title: "Build quickly.",
    body: "Get something working before over-engineering it — then refine with real signal.",
  },
  {
    title: "Go deeper when it matters.",
    body: "Understand the infrastructure, not just the abstraction. Especially around data, speech, and deployment.",
  },
  {
    title: "Ship and learn.",
    body: "Real usage is better feedback than speculation. Pilots and interviews beat hypotheticals.",
  },
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <p className="section-index">01 / About</p>
        <h2 className="section-title">I work best where the problem isn't fully defined yet.</h2>
      </div>

      <div className="about-grid">
        <div className="about-narrative">
          <p>
            <strong>I like hard problems.</strong> Give me a vague brief, an unfamiliar codebase,
            a new technology, or a user who isn't getting what they need — that's usually where
            I'm most interested.
          </p>
          <p>
            I've built production software in startup and contract environments, shipped internal
            tools at Amazon and WarnerMedia, and I'm currently founding Polyflow — speech
            infrastructure for languages AI has overlooked. Across software and hardware experiments,
            I move between technical implementation and product thinking without losing the plot.
          </p>
        </div>

        <div className="principles">
          {principles.map((item) => (
            <article key={item.title} className="principle">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
