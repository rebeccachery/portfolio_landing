const experiments = [
  {
    label: "Hardware",
    title: "SandwichBot",
    body: "LLM planning meets real-world manipulation — failure modes included.",
  },
  {
    label: "Audio",
    title: "Sound as interface",
    body: "Pitch feedback, spatial memories, and speech pipelines as product material.",
  },
  {
    label: "Systems",
    title: "Rust",
    body: "Learning low-level programming and performance with intention.",
  },
  {
    label: "Structure",
    title: "Semantic / spatial audio",
    body: "Turning messy recordings into graphs, maps, and something you can act on.",
  },
];

export function Lab() {
  return (
    <section id="lab" className="section">
      <div className="section-header">
        <p className="section-index">04 / Lab</p>
        <h2 className="section-title">Outside the main project</h2>
        <p className="section-lead">
          A personal engineering lab — experiments that keep the builder muscle sharp.
        </p>
      </div>

      <div className="lab-grid">
        {experiments.map((item) => (
          <article key={item.title} className="lab-card">
            <p className="lab-label">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
