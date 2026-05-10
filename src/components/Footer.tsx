import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>Rebecca Chery</h3>
          <p style={{ color: '#CBD5E1', fontSize: '0.875rem' }}>
            © {currentYear} Full-Stack Engineer. Available for contract work.
          </p>
        </div>
        
        <div className="footer-col">
          <h3>Links</h3>
          <div className="footer-links">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#startup">Startup</a>
          </div>
        </div>
        
        <div className="footer-col">
          <h3>Socials</h3>
          <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-2)' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: '#CBD5E1' }}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: '#CBD5E1' }}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              style={{ color: '#CBD5E1' }}
            >
              <Twitter size={24} />
            </a>
            <a 
              href="mailto:your@email.com"
              aria-label="Email"
              style={{ color: '#CBD5E1' }}
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
