import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section bg-slate-50">
      <h2 className="section-title">Get in Touch</h2>
      
      <div className="contact-container">
        <div className="card">
          <div style={{ marginBottom: 'var(--space-4)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>Available for Contract Work</h3>
            <p className="text-slate-600">
              Looking for a full-stack engineer for your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name *</label>
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
                <label className="form-label" htmlFor="email">Email *</label>
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
              <label className="form-label" htmlFor="company">Company / Organization</label>
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
              <label className="form-label" htmlFor="message">Message *</label>
              <textarea 
                className="textarea"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary"
              style={{ width: '100%', marginTop: 'var(--space-2)' }}
              disabled={isSubmitting}
            >
              <Send size={16} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}