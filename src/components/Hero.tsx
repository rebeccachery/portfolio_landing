import { scrollToId } from "../lib/scroll";
import { HeroGraph } from "./HeroGraph";

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-copy-block">
        <p className="hero-brand">Rebecca Chery</p>
        <h1>I build things that turn ideas into working systems.</h1>
        <p className="hero-copy">
          I'm an engineer and builder interested in software, AI, language technology,
          and systems. I like working close to the problem — from understanding what
          people need to shipping the thing that solves it.
        </p>
        <div className="hero-actions">
          <button type="button" className="btn btn-primary" onClick={() => scrollToId("work")}>
            View my work →
          </button>
          <a className="btn btn-outline" href="#resume" onClick={(e) => { e.preventDefault(); scrollToId("resume"); }}>
            Resume ↗
          </a>
          <button type="button" className="btn btn-ghost" onClick={() => scrollToId("contact")}>
            Let's talk →
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <HeroGraph />
      </div>
    </section>
  );
}
