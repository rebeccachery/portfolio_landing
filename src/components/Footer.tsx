import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <p className="footer-brand">Rebecca Chery</p>
            <p className="footer-note">
              Currently building Polyflow, learning Rust, and making questionable
              decisions involving robots and audio pipelines.
            </p>
          </div>
          <ul className="footer-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#lab">Lab</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>© {year} Rebecca Chery</p>
          <div className="footer-socials">
            <a
              href="https://github.com/rebeccachery"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/rebeccachery"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com/rebecca_builds"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:rebecca.rebeccachery.chery198@gmail.com"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
