import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Semantic Mind Map from Voice Memos",
    description: "Built an AI tool that converts voice memos into structured mind maps by transcribing audio and extracting key ideas into editable nodes.",
    image: "https://images.unsplash.com/photo-1569693799105-4eb645d89aea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9qZWN0fGVufDF8fHx8MTc2MjkxNDAyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "OpenAI API"],
    githubUrl: "https://github.com/rebeccachery/semantic_mind_map_tool",
    liveUrl: "https://github.com/rebeccachery/semantic_mind_map_tool"
  },
  {
    title: "ISTWA: History in Motion",
    description: "Developed ISTWA as an animated historical narrative, using the landing page to frame the Haitian Revolution through story and visual design.",
    image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mjk4NDIzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Blender", "C", "Python", "Adobe After Effects", "CLI Tools", "WebGL"],
    githubUrl: "https://github.com/rebeccachery/istwa-landing",
    liveUrl: "https://istwa-site.vercel.app"
  },
  {
    title: "SandwichBot: Autonomous PB&J-Making Robot",
    description: "Built an autonomous robotic system that used LLM-based task planning and control systems to execute multi-step sandwich-making with reliable real-world manipulation under tight constraints.",
    image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2Mjk4NDIzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Python", "Hugging Face", "PyTorch",  "Computer Vision", "LeRobot", "RunPod", "LLM Orchestration"],
    githubUrl: "https://devpost.com/software/sandwichbot",
    liveUrl: "https://www.youtube.com/watch?v=Cmi9NBAELjs&source_ve_path=OTY3MTQ&embeds_referring_euri=https%3A%2F%2Fdevpost.com%2F"
  },
  {
    title: "Haitian Translator Audio Splitter",
    description: "Developed a Haitian Creole audio segmentation pipeline using speech recognition and audio processing techniques to transform raw recordings into structured, translatable clips for downstream NLP tasks.",
    image: "https://images.pexels.com/photos/34804003/pexels-photo-34804003.jpeg",
    tech: ["Python", "Whisper / ASR", "Audio Processing",  "NLP", "Hugging Face", "PyDub"],
    githubUrl: "https://github.com/rebeccachery/haitian-translator-audiosplitter",
    liveUrl: "https://github.com/rebeccachery/haitian-translator-audiosplitter"
  },
  {
    title: "Play-by-Ear Music Instrument Tutor",
    description: "Created an AI-powered music tutor that listens to a student's performance and provides real-time feedback on pitch, rhythm, and technique using audio processing and machine learning models.",
    image: "https://images.pexels.com/photos/34804003/pexels-photo-34804003.jpeg",
    tech: ["Python", "Audio Processing", "Machine Learning", "Hugging Face", "PyTorch"],
    githubUrl: "https://github.com/rebeccachery/play-by-ear-music-tutor",
    liveUrl: "https://github.com/rebeccachery/play-by-ear-music-tutor"
  },
  {
    title: "Audio Memory Map",
    description: "Spatial audio mapping app for recording, transcribing, and attaching voice memories to real-world locations on an interactive map, using ASR and geolocation technologies to create a personalized audio diary experience.",
    image: "https://images.pexels.com/photos/34804003/pexels-photo-34804003.jpeg",
    tech: ["React Native", "FastAPI", "Python", "ASR", "PostgreSQL", "Audio Processing"],
    githubUrl: "https://github.com/rebeccachery/audio-memory-map",
    liveUrl: "https://github.com/rebeccachery/audio-memory-map"
  },
  {
    title: "Interactive Maps",
    description: "Interactive NYC map highlighting Haitian population density and educational support gaps using Census and NYC Open Data, built with React and Mapbox GL to visualize disparities and inform community advocacy efforts.",
    image: "https://images.pexels.com/photos/34804003/pexels-photo-34804003.jpeg",
    tech: ["React", "Next.js", "Plotly", "JavaScript", "Data Visualization", "GeoJSON"],
    githubUrl: "https://github.com/rebeccachery/nyc_map",
    liveUrl: "https://github.com/rebeccachery/nyc_map"
  },
  {
    title: "PolyFlow Demos",
    description: "Demos showcasing PolyFlow's capabilities in multi-agent coordination, task planning, and LLM orchestration for complex workflows, including voice-based learning, automated flashcard generation, and lesson plan transformation.",
    image: "https://images.pexels.com/photos/34804003/pexels-photo-34804003.jpeg",
    tech: ["Python", "JavaScript", "LLM Orchestration", "Multi-Agent Systems", "Task Planning"],
    githubUrl: "https://github.com/rebeccachery/polyflow-demo",
    liveUrl: "https://github.com/rebeccachery/polyflow-demo"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="text-slate-600">{project.description}</p>
              
              <div className="skill-tags">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-actions">
              <a
                className="btn btn-outline"
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                style={{ width: '100%' }}
                aria-label={`View code for ${project.title}`}
              >
                <Github size={16} />
                Code
              </a>
              <a
                className="btn btn-outline"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                style={{ width: '100%' }}
                aria-label={`View live project for ${project.title}`}
              >
                <ExternalLink size={16} />
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
