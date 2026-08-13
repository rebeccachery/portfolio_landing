import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!isSupabaseConfigured || !supabase) {
        toast.error("Contact form is not configured yet.");
        return;
      }

      const { error } = await supabase.from("collaborations").insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message,
        },
      ]);

      if (error) {
        console.error(error);
        toast.error("Failed to send message. Please try again.");
        return;
      }

      toast.success("Message sent — I'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section">
      <div className="contact-hero">
        <p className="section-index">07 / Contact</p>
        <h2>Have an interesting problem?</h2>
        <p className="section-lead">
          I'm always interested in ambitious products, difficult technical problems,
          and people building something from scratch.
        </p>
      </div>

      <div className="contact-actions">
        <a className="btn btn-primary" href="mailto:rebecca.rebeccachery.chery198@gmail.com">
          <Mail size={16} />
          Email me →
        </a>
        <a
          className="btn btn-outline"
          href="https://linkedin.com/in/rebeccachery"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={16} />
          LinkedIn ↗
        </a>
        <a
          className="btn btn-outline"
          href="https://github.com/rebeccachery"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={16} />
          GitHub ↗
        </a>
      </div>

      <div className="contact-form-wrap">
        <h3>Send a note</h3>
        <p>Prefer a form? It goes straight to my inbox workflow.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Name *
              </label>
              <input
                className="input"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email *
              </label>
              <input
                className="input"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="company">
              Company / Organization
            </label>
            <input
              className="input"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Optional"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">
              Message *
            </label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="What's the problem you're working on?"
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-accent"
            disabled={isSubmitting}
          >
            <Send size={16} />
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
