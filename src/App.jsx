import React, { useState, useEffect } from 'react';
import { Home, FolderGit2, User, Mail, ExternalLink } from 'lucide-react';
import './App.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

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
    'Tools': ['Git/GitHub', 'VS Code', 'Digital Ocean', 'Copilot Pro/ Student Pack', 'Gemini Pro']
  };

  return (
    <div className="flex min-h-screen font-sans text-[#F8FAFC] relative">
      
      {/* Background decorations for glassmorphism */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[#37B7C3] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-[#9AA6B2] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
      </div>

      {/* Left Navigation Bar */}
      <nav className="w-64 h-screen fixed left-0 top-0 glass-panel z-50 flex flex-col justify-between py-10 px-6">
        <div>
          <h1 className="text-3xl font-bold text-[#37B7C3] tracking-wider mb-12">HC</h1>
          <ul className="space-y-6">
            <li>
              <a href="#home" className={`flex items-center gap-3 text-lg transition-colors duration-300 ${activeSection === 'home' ? 'text-[#37B7C3] font-bold' : 'text-[#9AA6B2] hover:text-[#F8FAFC]'}`}>
                <Home size={20} /> Home
              </a>
            </li>
            <li>
              <a href="#projects" className={`flex items-center gap-3 text-lg transition-colors duration-300 ${activeSection === 'projects' ? 'text-[#37B7C3] font-bold' : 'text-[#9AA6B2] hover:text-[#F8FAFC]'}`}>
                <FolderGit2 size={20} /> Projects
              </a>
            </li>
            <li>
              <a href="#about" className={`flex items-center gap-3 text-lg transition-colors duration-300 ${activeSection === 'about' ? 'text-[#37B7C3] font-bold' : 'text-[#9AA6B2] hover:text-[#F8FAFC]'}`}>
                <User size={20} /> About
              </a>
            </li>
            <li>
              <a href="#contact" className={`flex items-center gap-3 text-lg transition-colors duration-300 ${activeSection === 'contact' ? 'text-[#37B7C3] font-bold' : 'text-[#9AA6B2] hover:text-[#F8FAFC]'}`}>
                <Mail size={20} /> Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-[#9AA6B2] text-sm">
          <p>© 2026 Harvey Casane</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="ml-64 flex-1 relative z-10 px-12 py-10">
        
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center max-w-4xl pt-10">
          <h1 className="text-6xl font-extrabold text-[#F8FAFC] mb-4">
            Harvey Casane
          </h1>
          <h2 className="text-2xl text-[#37B7C3] mb-6">
            Full-Stack Developer | IT Student
          </h2>
          <p className="text-[#9AA6B2] text-lg mb-10 max-w-2xl leading-relaxed">
            I am a software developer with more than a year of experience in building web and mobile applications that solve real business problems. Specialized in Rails, Laravel, and Flutter.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-[#37B7C3] text-slate-900 px-6 py-3 rounded-lg font-bold hover:bg-opacity-80 transition duration-300">
              View My Work
            </a>
            <a href="https://github.com/SiHarv" target="_blank" rel="noopener noreferrer" className="glass-panel text-[#F8FAFC] px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-white/10 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg> GitHub
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20 max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-[#F8FAFC] mb-1">Featured Projects</h2>
            <p className="text-[#9AA6B2]">Building real solutions that deliver measurable impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="glass-panel p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-1">{project.title}</h3>
                <p className="text-[#37B7C3] text-sm mb-4">{project.subtitle}</p>
                <p className="text-[#9AA6B2] mb-6 h-20 overflow-y-auto">{project.description}</p>
                
                <div className="bg-[#37B7C3]/10 border-l-4 border-[#37B7C3] p-3 mb-6 rounded-r-lg">
                  <span className="font-bold text-[#F8FAFC]">Impact: </span>
                  <span className="text-[#9AA6B2]">{project.impact}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-[#9AA6B2]/30 text-[#F8FAFC]">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.isPrivate ? (
                  <span className="text-[#9AA6B2] text-sm flex items-center gap-2 cursor-not-allowed">
                    Private Repository
                  </span>
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#37B7C3] hover:text-[#F8FAFC] text-sm flex items-center gap-2 transition-colors duration-300">
                    <ExternalLink size={16} /> View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#F8FAFC]">About Me</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#37B7C3] mb-4">My Journey</h3>
              <p className="text-[#9AA6B2] mb-4 leading-relaxed">
                I am a 4th-year student at Eastern Visayas State University pursuing a B.S. in Information Technology. I build production-ready systems and explore technical boundaries.
              </p>
              <p className="text-[#9AA6B2] mb-4 leading-relaxed">
                I work on full-stack development, mobile apps, and system-level configuration like Hackintosh setups and home servers. I like solving problems and deploying real applications.
              </p>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#37B7C3] mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-[#F8FAFC] font-semibold mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-[#9AA6B2]/20 rounded-md text-[#9AA6B2] text-sm">
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

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 max-w-4xl mx-auto">
          <div className="glass-panel p-12 rounded-2xl text-center">
            <h2 className="text-4xl font-bold text-[#F8FAFC] mb-4">Get In Touch</h2>
            <p className="text-[#9AA6B2] mb-10">I am open to new opportunities, collaborations, and projects.</p>
            
            <div className="flex flex-col gap-6 items-center justify-center">
              <a href="mailto:HDCasane.it@gmail.com" className="w-full max-w-md glass-panel p-4 rounded-xl text-[#F8FAFC] hover:border-[#37B7C3] transition-colors duration-300 flex items-center justify-center gap-3">
                <Mail className="text-[#37B7C3]" /> HDCasane.it@gmail.com
              </a>
              <div className="w-full max-w-md glass-panel p-4 rounded-xl text-[#9AA6B2] flex items-center justify-center gap-3">
                <span>09944988781</span>
              </div>
              <div className="w-full max-w-md glass-panel p-4 rounded-xl text-[#9AA6B2] flex items-center justify-center gap-3">
                <span>Albuera, Leyte, Philippines</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}