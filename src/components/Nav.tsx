import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToId } from "../lib/scroll";

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "lab", label: "Lab" },
  { id: "resume", label: "Resume" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <header className="nav">
      <div className="nav-inner">
        <a
          href="#top"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setOpen(false);
          }}
        >
          Rebecca Chery
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul id="primary-nav" className={`nav-links${open ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-mobile-cta">
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => {
                e.preventDefault();
                go("contact");
              }}
            >
              Contact →
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="nav-cta nav-desktop-cta"
          onClick={(e) => {
            e.preventDefault();
            go("contact");
          }}
        >
          Contact →
        </a>
      </div>
    </header>
  );
}
