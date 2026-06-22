import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      title: 'Agricultural Management System (Capstone)',
      subtitle: 'Real-world solution for United Palanas Farmers Irrigators Association',
      description: 'Designed and deployed a comprehensive agricultural management platform serving 10+ active farmers. Features include mobile app for expense tracking with offline-first sync, admin dashboard with predictive analytics, and automated government compliance reports.',
      impact: '95% reduction in data collection time (3 days → real-time)',
      tech: ['Flutter', 'Laravel', 'Supabase', 'SQLite', 'Android Studio'],
      link: 'https://github.com/SiHarv',
      color: '#10b981'
    },
    {
      id: 2,
      title: 'POST/CRM System',
      subtitle: 'Retail management system that replaced SaaS platform',
      description: 'Architected a complete POS system for GOP Marketing with offline-first architecture, real-time profit tracking, and automated reporting. Replaced Loyverse SaaS, adding critical features like receipt editing with automatic database corrections and customer analytics.',
      impact: '4 hours/day saved • Eliminated SaaS subscription costs',
      tech: ['WAMP Stack', 'MySQL', 'PHP', 'Google Drive Sync'],
      link: 'https://github.com/SiHarv',
      color: '#3b82f6'
    },
    {
      id: 3,
      title: 'OpenCore Hackintosh Configuration',
      subtitle: 'System-level bootloader setup on LG Gram 15Z980',
      description: 'Deep dive into system-level configuration through OpenCore bootloader setup on complex hardware. Managed kernel extensions, ACPI patching, multi-boot partition setup (Windows 11 + Ubuntu + macOS), and hardware-level troubleshooting.',
      impact: 'Working: iGPU, Battery Display, FN Keys, Sleep/Wake, Bluetooth',
      tech: ['OpenCore', 'ACPI', 'Kexts', 'BIOS Configuration', 'Hardware Debugging'],
      link: 'https://github.com/SiHarv',
      color: '#f59e0b'
    }
  ];

  const skills = {
    'Languages': ['JavaScript', 'PHP', 'Ruby', 'Python', 'Dart', 'TypeScript'],
    'Frameworks': ['Laravel', 'Rails', 'React Native', 'Flutter', 'MERN', 'Tailwind CSS'],
    'Databases': ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'SQLite'],
    'Tools': ['Git/GitHub', 'VS Code', 'Android Studio', 'Digital Ocean', 'Vercel']
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">HC</div>
          <ul className="nav-links">
            <li><a href="#" onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#" onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#" onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#" onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="hero">
          <div className="hero-content">
            <h1 className="title">Harvey Casane</h1>
            <p className="subtitle">Full-Stack Developer | Mobile Developer | Problem Solver</p>
            <p className="description">
              Fresh graduate with 1+ year of experience building production systems that solve real business problems. 
              Specialized in Laravel, Rails, React Native, and Flutter.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={() => setActiveSection('projects')}>View My Work</button>
              <a href="https://github.com/SiHarv" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub</a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>1+ Year</h3>
                <p>Professional Experience</p>
              </div>
              <div className="stat">
                <h3>3</h3>
                <p>Production Projects</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Active Users (Capstone)</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section className="projects">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Building real solutions that deliver measurable impact</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card" style={{borderTopColor: project.color}}>
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-impact" style={{backgroundColor: project.color + '15', borderLeftColor: project.color}}>
                  <strong>Impact:</strong> {project.impact}
                </div>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="about">
          <div className="section-header">
            <h2>About Me</h2>
            <p>My journey from exploration to specialization</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <h3>My Journey</h3>
              <p>
                I'm a recent graduate from Eastern Visayas State University with a B.S. in Information Technology. 
                During my studies, I explored multiple IT disciplines—robotics, networking, hardware, video production—
                before deciding to specialize in software development.
              </p>
              <p>
                This decision came from both passion and pragmatism: software development offers the most accessible 
                path to building meaningful solutions without expensive hardware dependencies. More importantly, I found 
                the combination of problem-solving, system design, and immediate tangible results deeply satisfying.
              </p>
              <p>
                Rather than waiting until graduation, I pursued professional opportunities during my studies. I worked 
                on production systems, maintained real-world applications under user feedback, and led full-stack development 
                on a startup ride-hailing app. This integrated approach to education and experience gave me both theoretical 
                knowledge and practical production-ready skills.
              </p>
            </div>

            <div className="skills-section">
              <h3>Technical Skills</h3>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h4>{category}</h4>
                  <div className="skill-list">
                    {items.map((skill, i) => (
                      <span key={i} className="skill-item">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="achievements">
              <h3>Achievements</h3>
              <ul>
                <li>3rd Place - Line Following Robot Competition (EVSU 2026)</li>
                <li>Built 2 active production systems serving real users</li>
                <li>Full-stack development across multiple companies</li>
                <li>95% improvement in operational efficiency (Capstone)</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="contact">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Let's build something great together</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <h3>Email</h3>
                <a href="mailto:HDCasane.it@gmail.com">HDCasane.it@gmail.com</a>
              </div>
              <div className="info-item">
                <h3>Phone</h3>
                <p>09944988781</p>
              </div>
              <div className="info-item">
                <h3>Location</h3>
                <p>Albuera, Leyte, Philippines</p>
              </div>
              <div className="info-item">
                <h3>💻 GitHub</h3>
                <a href="https://github.com/SiHarv" target="_blank" rel="noopener noreferrer">github.com/SiHarv</a>
              </div>
            </div>

            <div className="contact-message">
              <h3>Available For</h3>
              <ul>
                <li>Full-time Software Development positions</li>
                <li>Startup opportunities</li>
                <li>Mobile app development</li>
                <li>Freelance projects</li>
                <li>Collaborations and partnerships</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Harvey Casane. Built with React.</p>
      </footer>
    </div>
  );
}