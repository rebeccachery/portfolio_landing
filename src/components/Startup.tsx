import { Film, Users, Target } from "lucide-react";

export function Startup() {
  return (
    <section id="startup" className="section">
      <h2 className="section-title">My Startup</h2>
      
      <div className="startup-grid">
        <div>
          <h3>Creating Animated Short Films for Learning</h3>
          <p className="text-slate-600" style={{ marginBottom: 'var(--space-4)' }}>
            As founder of an edutainment startup, I combine my passion for technology 
            and storytelling to create engaging animated short films that make learning 
            fun and accessible for all ages.
          </p>
          
          <div className="startup-features">
            <div className="feature-item">
              <div className="feature-icon">
                <Film size={24} />
              </div>
              <div>
                <h4>Quality Animation</h4>
                <p className="text-slate-600">Professional-grade animations that captivate and educate audiences</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <Target size={24} />
              </div>
              <div>
                <h4>Educational Focus</h4>
                <p className="text-slate-600">Content designed to make complex topics accessible and engaging</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <div>
                <h4>For All Ages</h4>
                <p className="text-slate-600">Stories that resonate with children and adults alike</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="startup-visual">
          <img 
            src="https://images.unsplash.com/photo-1648014613911-e355dc51e2e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMGZpbG0lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2Mjk4NDIzMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Animation production"
          />
        </div>
      </div>
    </section>
  );
}