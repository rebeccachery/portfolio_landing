import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

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
    
    try {
      if (!isSupabaseConfigured || !supabase) {
        toast.error("Contact form is not configured yet.");
        return;
      }

      const { error } = await supabase
        .from("collaborations")
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message
        }]);
      if (error) {
        console.error(error);
        toast.error("Failed to send message. Please try again.");
        return;
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });

    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    } 
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
            <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>Open to Collaborations & Select Work</h3>
            <p className="text-slate-600">
              Building something in AI, language, or storytelling? I’m always open to connecting, collaborating, or contributing to projects that push those spaces forward
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
