import { Film, Users, Target } from "lucide-react";

export function Startup() {
  return (
    <section id="startup" className="section">
      <h2 className="section-title">PolyFlow</h2>
      
      <div className="startup-grid">
        <div className="startup-content">
          <h3>Real-time Intelligence Layer for Human Communication</h3>
          <p className="text-slate-600" style={{ marginBottom: 'var(--space-4)' }}>
            An early-stage AI speech + alignment system exploring multilingual learning and pronunciation feedback for under-resourced language learners
          </p>
          
          <div className="startup-features">
            <div className="feature-item">
              <div className="feature-icon">
                <Film size={24} />
              </div>
              <div>
                <h4>Context-Aware Language Intelligence</h4>
                <p className="text-slate-600">Adapts translation and learning to real usage, domain vocabulary, and learner context instead of treating every word the same</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <Target size={24} />
              </div>
              <div>
                <h4>Speech-Native Learning Loop</h4>
                <p className="text-slate-600">Combines listening, pronunciation, and conversational practice in one feedback loop so learners build usable speaking skills, not just recognition</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <Users size={24} />
              </div>
              <div>
                <h4>Low-Bandwidth and Real-World Infrastructure</h4>
                <p className="text-slate-600">Built for mobile-first, constrained environments with lightweight delivery that works where connectivity, devices, and resources are limited</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="startup-visual">
          <img 
            src="/polyflow_graphic.png"
            alt="Abstract 3D Multilingual AI Speech processing visualization"
          />
        </div>
      </div>
    </section>
  );
}