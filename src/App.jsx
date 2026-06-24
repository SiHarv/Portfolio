import React, { useState, useEffect } from 'react';
import { Home, FolderGit2, User, Mail, ExternalLink, Menu, X } from 'lucide-react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 }); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && 
            element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false); // Close menu on mobile after clicking
  };

  const projects = [
    {
      id: 1,
      title: 'Spellable Web App',
      subtitle: 'Developer Intern at Innov8trix',
      description: 'One of the Developers for full-stack features for Spellable, a live web app for adult spelling instruction.',
      impact: 'Successfully launched and currently live serving users.',
      tech: ['Rails', 'PostgreSQL', 'Tailwind CSS'],
      link: 'https://spellableapp.com',
      isPrivate: false,
    },
    {
      id: 2,
      title: 'Agricultural Management System',
      subtitle: 'Capstone Project',
      description: 'Designed and deployed a comprehensive agricultural management platform serving 10+ active farmers. Features include mobile app for expense tracking with offline-first sync.',
      impact: '95% reduction in data collection time (3 days → real-time)',
      tech: ['Flutter', 'Laravel', 'Supabase', 'SQLite'],
      link: null,
      isPrivate: true,
    },
    {
      id: 3,
      title: 'POS/CRM System',
      subtitle: 'Retail management system',
      description: 'Architected a complete POS system with offline-first architecture, real-time profit tracking, and automated reporting. Replaced Loyverse SaaS.',
      impact: '4 hours/day saved • Eliminated SaaS subscription costs',
      tech: ['WAMP Stack', 'MySQL', 'PHP'],
      link: null,
      isPrivate: true,
    },
    {
      id: 4,
      title: 'OpenCore Hackintosh Configuration',
      subtitle: 'System-level bootloader setup',
      description: 'Deep dive into system-level configuration through OpenCore bootloader setup on complex hardware. Managed kernel extensions and ACPI patching.',
      impact: 'Flashed in non-Apple hardware/ machine, enabling macOS features and performance.',
      tech: ['OpenCore', 'ACPI', 'Kexts'],
      link: 'https://github.com/SiHarv/OpenCore-LG-Gram-15Z980',
      isPrivate: false,
    }
  ];

  const skills = {
    'Languages': ['JavaScript', 'PHP', 'Ruby', 'Python', 'Dart', 'TypeScript', 'Java'],
    'Frameworks': ['Laravel', 'Rails', 'React Native', 'Flutter', 'Tailwind CSS', 'React', 'MERN'],
    'Databases': ['PostgreSQL', 'MySQL', 'Supabase', 'SQLite', 'Firebase'],
    'Tools': ['Git/GitHub', 'VS Code', 'Digital Ocean', 'Copilot Pro', 'Gemini Pro']
  };

  return (
    <div className="flex min-h-screen font-sans text-[#F8FAFC] relative cursor-none">
      
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <filter id="glass-warp">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <div 
        className="morph-cursor hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      ></div>

      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#D9EAFD] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-[#F8FAFC] rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 w-full glass-panel z-40 p-4 flex justify-between items-center border-b border-[#D9EAFD]/30">
        <h1 className="text-2xl font-bold text-[#D9EAFD] tracking-wider">HC</h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#D9EAFD] z-50">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-[#211E19]/80 z-40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar Navigation */}
      <nav className={`w-64 h-screen fixed left-0 top-0 glass-panel z-50 flex flex-col justify-between py-10 px-6 transition-transform duration-300 ease-in-out md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div>
          <h1 className="text-4xl font-bold text-[#D9EAFD] tracking-wider mb-12 hidden md:block">HC</h1>
          <ul className="space-y-6 mt-10 md:mt-0">
            <li>
              <a href="#home" onClick={() => handleNavClick('home')} className={`flex items-center gap-3 text-lg transition-colors duration-300 ${activeSection === 'home' ? 'text-[#D9EAFD] font-bold' : 'text-[#F8FAFC] hover:text-[#D9EAFD]'}`}>
                <Home size={20} /> Home
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => handleNavClick('projects')} className={`flex items-center gap-3 text-lg transition-colors duration-300 ${activeSection === 'projects' ? 'text-[#D9EAFD] font-bold' : 'text-[#F8FAFC] hover:text-[#D9EAFD]'}`}>
                <FolderGit2 size={20} /> Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => handleNavClick('about')} className={`flex items-center gap-3 text-lg transition-colors duration-300 ${activeSection === 'about' ? 'text-[#D9EAFD] font-bold' : 'text-[#F8FAFC] hover:text-[#D9EAFD]'}`}>
                <User size={20} /> About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => handleNavClick('contact')} className={`flex items-center gap-3 text-lg transition-colors duration-300 ${activeSection === 'contact' ? 'text-[#D9EAFD] font-bold' : 'text-[#F8FAFC] hover:text-[#D9EAFD]'}`}>
                <Mail size={20} /> Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-[#F8FAFC] text-sm">
          <p>© 2026 Harvey Casane</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="md:ml-64 flex-1 relative z-10 px-6 md:px-12 py-10 pt-24 md:pt-10 w-full overflow-hidden">
        
        <section id="home" className="min-h-screen flex flex-col justify-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#D9EAFD] mb-4">
            Harvey Casane
          </h1>
          <h2 className="text-xl md:text-2xl text-[#D9EAFD] font-bold mb-6">
            Full-Stack Developer | IT Student
          </h2>
          <p className="text-[#F8FAFC] text-base md:text-lg mb-10 max-w-2xl leading-relaxed">
            I am a software developer with more than a year of experience in building web and mobile applications that solve real business problems. Specialized in Rails, Laravel, and Flutter.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-[#D9EAFD] text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-opacity-80 transition duration-300 shadow-lg cursor-none text-center w-full sm:w-auto">
              View My Work
            </a>
            <a href="https://github.com/SiHarv" target="_blank" rel="noopener noreferrer" className="glass-panel text-[#D9EAFD] px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition duration-300 cursor-none w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg> GitHub
            </a>
          </div>
        </section>

        <section id="projects" className="min-h-screen py-20 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D9EAFD] mb-2">Featured Projects</h2>
            <p className="text-[#F8FAFC]">Building real solutions that deliver measurable impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-[#D9EAFD] mb-1">{project.title}</h3>
                <p className="text-[#F8FAFC] font-bold text-sm mb-4">{project.subtitle}</p>
                <p className="text-[#F8FAFC] mb-6 h-24 md:h-20 overflow-y-auto">{project.description}</p>
                
                <div className="bg-[#D9EAFD]/10 border-l-4 border-[#D9EAFD] p-3 mb-6 rounded-r-lg">
                  <span className="font-bold text-[#D9EAFD]">Impact: </span>
                  <span className="text-[#F8FAFC]">{project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-bold px-3 py-1 rounded-full bg-[#D9EAFD]/10 border border-[#D9EAFD]/40 text-[#D9EAFD]">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.isPrivate ? (
                  <span className="text-[#F8FAFC] text-sm flex items-center gap-2 cursor-not-allowed opacity-80">
                    Private Repository
                  </span>
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#D9EAFD] hover:text-[#F8FAFC] font-bold text-sm flex items-center gap-2 transition-colors duration-300 cursor-none">
                    <ExternalLink size={16} /> View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="min-h-screen py-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D9EAFD]">About Me</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-panel p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-[#D9EAFD] mb-4">My Journey</h3>
              <p className="text-[#F8FAFC] mb-4 leading-relaxed">
                I am a 4th-year student at Eastern Visayas State University pursuing a B.S. in Information Technology. I build production-ready systems and explore technical boundaries.
              </p>
              <p className="text-[#F8FAFC] mb-4 leading-relaxed">
                I work on full-stack development, mobile apps, and system-level configuration like Hackintosh setups and home servers. I like solving problems and deploying real applications.
              </p>
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-bold text-[#D9EAFD] mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-[#D9EAFD] font-bold mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-[#D9EAFD]/10 border border-[#D9EAFD]/30 rounded-md text-[#F8FAFC] text-sm font-bold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen py-20 max-w-4xl mx-auto">
          <div className="glass-panel p-8 md:p-12 rounded-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D9EAFD] mb-4">Get In Touch</h2>
            <p className="text-[#F8FAFC] mb-10">I am open to new opportunities, collaborations, and projects.</p>
            
            <div className="flex flex-col gap-6 items-center justify-center">
              <a href="mailto:HDCasane.it@gmail.com" className="w-full max-w-md glass-panel p-4 rounded-xl text-[#D9EAFD] font-bold hover:bg-[#D9EAFD]/10 transition-colors duration-300 flex items-center justify-center gap-3 cursor-none">
                <Mail className="text-[#D9EAFD] shrink-0" /> <span className="break-all">HDCasane.it@gmail.com</span>
              </a>
              <div className="w-full max-w-md glass-panel p-4 rounded-xl text-[#F8FAFC] flex items-center justify-center gap-3">
                <span className="font-bold">09944988781</span>
              </div>
              <div className="w-full max-w-md glass-panel p-4 rounded-xl text-[#F8FAFC] flex items-center justify-center gap-3">
                <span className="font-bold text-center">Albuera, Leyte, Philippines</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}