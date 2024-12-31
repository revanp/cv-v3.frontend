import type { MetaFunction } from "@remix-run/node";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight, BsCodeSlash, BsLightbulb, BsRocket, BsHeart } from 'react-icons/bs';
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiPython, SiPhp, SiMysql, SiMongodb, SiTailwindcss, SiGit, SiDocker, SiApache, SiBootstrap, SiCodeigniter, SiCss3, SiSass, SiFlutter, SiJenkins, SiKubernetes, SiPostgresql, SiNginx, SiLinux, SiHtml5 } from 'react-icons/si';
import { useState, useEffect } from 'react';
import '../styles/style.css';

export const meta: MetaFunction = () => {
  return [
    { title: "Revan Pratama | Software Engineer" },
    { name: "description", content: "Personal CV of Revan Pratama" },
  ];
};

export default function Index() {
  const skills = [
    { icon: SiTypescript, name: 'TypeScript', textColor: 'text-blue-400', color: 'blue-400' },
    { icon: SiJavascript, name: 'JavaScript', textColor: 'text-yellow-400', color: 'yellow-400' },
    { icon: SiReact, name: 'React', textColor: 'text-cyan-400', color: 'cyan-400' },
    { icon: SiNodedotjs, name: 'Node.js', textColor: 'text-green-400', color: 'green-400' },
    { icon: SiPython, name: 'Python', textColor: 'text-blue-500', color: 'blue-500' },
    { icon: SiPhp, name: 'PHP', textColor: 'text-indigo-400', color: 'indigo-400' },
    { icon: SiMysql, name: 'MySQL', textColor: 'text-orange-400', color: 'orange-400' },
    { icon: SiMongodb, name: 'MongoDB', textColor: 'text-green-500', color: 'green-500' },
    { icon: SiTailwindcss, name: 'Tailwind', textColor: 'text-teal-400', color: 'teal-400' },
    { icon: SiGit, name: 'Git', textColor: 'text-red-400', color: 'red-400' },
    { icon: SiDocker, name: 'Docker', textColor: 'text-blue-400', color: 'blue-400' },
    { icon: SiApache, name: 'Apache', textColor: 'text-red-500', color: 'red-500' },
    { icon: SiBootstrap, name: 'Bootstrap', textColor: 'text-purple-500', color: 'purple-500' },
    { icon: SiCodeigniter, name: 'CodeIgniter', textColor: 'text-red-600', color: 'red-600' },
    { icon: SiCss3, name: 'CSS', textColor: 'text-blue-500', color: 'blue-500' },
    { icon: SiSass, name: 'Sass', textColor: 'text-pink-500', color: 'pink-500' },
    { icon: SiFlutter, name: 'Flutter', textColor: 'text-blue-400', color: 'blue-400' },
    { icon: SiJenkins, name: 'Jenkins', textColor: 'text-red-500', color: 'red-500' },
    { icon: SiKubernetes, name: 'Kubernetes', textColor: 'text-blue-600', color: 'blue-600' },
    { icon: SiPostgresql, name: 'PostgreSQL', textColor: 'text-blue-500', color: 'blue-500' },
    // { icon: SiMicrosoftsqlserver, name: 'SQL Server', textColor: 'text-red-600', color: 'red-600' },
    { icon: SiNginx, name: 'Nginx', textColor: 'text-green-500', color: 'green-500' },
    // { icon: SiJava, name: 'Java', textColor: 'text-red-500', color: 'red-500' },
    { icon: SiLinux, name: 'Linux', textColor: 'text-yellow-500', color: 'yellow-500' },
    { icon: SiHtml5, name: 'HTML', textColor: 'text-orange-500', color: 'orange-500' }
  ];

  const portfolios = Array(40).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Project ${index + 1}`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ['React', 'TypeScript', 'Node.js'].sort(() => Math.random() - 0.5).slice(0, 2),
    image: `https://picsum.photos/seed/${index}/400/300`,
    link: '#'
  }));

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(portfolios.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const aboutCards = [
    {
      icon: BsCodeSlash,
      title: "Tech Enthusiast",
      description: "Super into clean code and creative solutions",
      gradient: "from-blue-400 to-cyan-400",
      color: "text-blue-400",
    },
    {
      icon: BsLightbulb,
      title: "Problem Solver",
      description: "Loves turning tricky challenges into brilliant ideas",
      gradient: "from-purple-400 to-pink-400",
      color: "text-purple-400",
    },
    {
      icon: BsRocket,
      title: "Fast Learner",
      description: "Always excited to dive into new tech adventures",
      gradient: "from-emerald-400 to-teal-400",
      color: "text-emerald-400",
    },
    {
      icon: BsHeart,
      title: "Team Player",
      description: "Collaborates to create awesome and memorable experiences",
      gradient: "from-orange-400 to-red-400",
      color: "text-orange-400",
    }
  ];

  const timelineEvents = [
    {
      year: "2018",
      title: "Backend Developer",
      company: "Zamasco Mitra Solusindo",
      description: "Developed PHP-based solutions for government projects, focusing on high-security web applications and systems integration"
    },
    {
      year: "2020",
      title: "Full Stack Developer",
      company: "Bank Mega",
      description: "Working in Data Warehouse division, specializing in ETL processes, data warehousing, and reporting systems using Pentaho, PHP, and SQL Server. Developed and maintained critical data integration pipelines and analytics solutions for banking operations"
    },
    {
      year: "2022",
      title: "Backend Developer", 
      company: "Modena Indonesia",
      description: "Developed various digital products including e-commerce systems, company website, chatbots, and internal applications using PHP (Laravel, Hyperf) and other programming languages as needed for specific project requirements"
    },
    {
      year: "2024",
      title: "Lead Software Engineer", 
      company: "Markaz Pulsa",
      description: "Led development of PPOB system with Next.js, managing digital payment transactions, bill payments and financial services. Implemented real-time processing and payment gateway integration while leading the development team."
    },
    {
      year: "Current",
      title: "Backend Developer", 
      company: "Usaha Kreatif Indonesia",
      description: "Develop of both in-house products and client projects. For products, developed Forex trading platforms and SaaS solutions. For projects, built various applications including soccer live-scoring websites and payment gateway integrations. Used diverse frameworks ranging from common stacks like NestJS + NuxtJS to specialized ones like UmiJS"
    }
  ];

  const educationEvents = [
    {
      year: "2018",
      title: "Software Engineering",
      institution: "SMK Wikrama Bogor",
      description: "Specialized in Web and Mobile Development"
    },
    {
      year: "Soon 2028",
      title: "Information Systems",
      institution: "Universitas Terbuka Indonesia",
      description: "Bachelor's degree in Information Systems"
    }
  ];

  useEffect(() => {
    // Reveal animation on scroll
    const observerReveal = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observerReveal.observe(el));

    // Parallax effect
    const handleScroll = () => {
      document.querySelectorAll('.parallax').forEach((el) => {
        const speed = el.getAttribute('data-speed') || '-0.5';
        const yPos = (window.pageYOffset * Number(speed));
        el.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerReveal.disconnect();
    };
  }, []);

  return (
    <div className="content min-h-screen w-full bg-[#0F172A] overflow-x-hidden">
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 parallax" data-speed="0.2"></div>
        
        <div className="floating-elements">
          <div className="absolute top-20 left-[20%] w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl floating-slow"></div>
          <div className="absolute bottom-20 right-[20%] w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl floating-medium"></div>
          <div className="absolute top-1/3 right-[30%] w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-xl floating-fast"></div>
        </div>

        <div className="text-center space-y-5 transform hover:scale-105 transition-transform duration-300 relative z-10 py-8 reveal">
          <h1 className="text-6xl font-bold animate-fade-in bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text leading-relaxed px-4">
            Hello, I&apos;m Revan Pratama
          </h1>
          <p className="text-2xl text-slate-300 animate-slide-up mt-8 px-4">
            Software Engineer crafting digital experiences
          </p>
          
          <div className="flex gap-8 justify-center mt-12 animate-fade-in">
            <a href="https://github.com/revanp" target="_blank" rel="noreferrer"
              className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 p-2">
              <FaGithub size={32} />
            </a>
            <a href="https://linkedin.com/in/revanp0" target="_blank" rel="noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:scale-110 p-2">
              <FaLinkedin size={32} />
            </a>
            <a href="mailto:revanp0@gmail.com" target="_blank" rel="noreferrer"
              className="text-slate-300 hover:text-teal-400 transition-all duration-300 hover:scale-110 p-2">
              <FaEnvelope size={32} />
            </a>
          </div>

          <button 
            onClick={() => document.querySelector('section:nth-child(2)')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce fixed left-0 right-0 mx-auto text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 w-fit"
          >
            <FaChevronDown size={28} />
          </button>
        </div>
      </section>
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B]">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 parallax" data-speed="0.3"></div>
        
        <div className="floating-elements">
          <div className="absolute top-[10%] right-[10%] w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl floating-slow"></div>
          <div className="absolute bottom-[10%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl floating-medium"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16 reveal">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-slate-300 mt-4 text-lg">
              A passionate developer with a creative mindset
            </p>
          </div>

          {/* Personal Info Section - NEW */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 reveal">
            <div className="lg:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-slate-700/50 group-hover:border-cyan-400/50 transition duration-300">
                  <img 
                    src="/revan.jpg" 
                    alt="Revan Pratama"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 space-y-6">
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex-1 min-w-[200px] bg-[#1E293B]/50 p-4 rounded-lg border border-slate-700/50">
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-slate-200">Jakarta, Indonesia</p>
                </div>
                <div className="flex-1 min-w-[200px] bg-[#1E293B]/50 p-4 rounded-lg border border-slate-700/50">
                  <p className="text-slate-400 text-sm">Experience</p>
                  <p className="text-slate-200">6 Years</p>
                </div>
                <div className="flex-1 min-w-[200px] bg-[#1E293B]/50 p-4 rounded-lg border border-slate-700/50">
                  <p className="text-slate-400 text-sm">Specialization</p>
                  <p className="text-slate-200">Full Stack Development</p>
                </div>
              </div>
              
              <div className="space-y-4 text-lg text-slate-300">
                <p className="leading-relaxed">
                  I’m a fullstack developer passionate about creating impactful and memorable digital experiences. Right now, I’m focused on building user-friendly and accessible products using the latest web technologies.
                </p>
                <p className="leading-relaxed">
                  With skills that span both front-end and back-end, I thrive on solving complex problems and turning them into clean, simple, and elegant solutions.
                </p>
                <p className="leading-relaxed">
                  For me, coding isn’t just about the technical side—it’s also about creativity. I’m all about combining technical expertise with creative thinking to deliver work that doesn’t just function but truly stands out.
                </p>
                <p className="leading-relaxed">
                  If you’re looking for someone who can tackle challenges while keeping things fun and laid-back, I’m your person! ✨
                </p>
                <div className="pt-4 flex gap-4">
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
                  >
                    View Resume
                  </a>
                  <a 
                    href="mailto:revanp0@gmail.com"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 reveal">
            {aboutCards.map((card, index) => (
                <div
                key={card.title}
                className="group relative h-full"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.gradient} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                <div className="relative p-6 bg-[#1E293B] rounded-lg border border-slate-700/50 hover:border-transparent transition duration-300 h-full flex flex-col">
                  <card.icon size={32} className={`mb-4 ${card.color}`} />
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">{card.title}</h3>
                  <p className="text-slate-400 flex-grow">{card.description}</p>
                </div>
                </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto reveal">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent"></div>
              
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year}
                  className="relative mb-12 last:mb-0"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                    <div className="flex-1 p-6">
                      <div className={`bg-[#1E293B] p-6 rounded-lg border border-slate-700/50 transform transition duration-300 group-hover:scale-105 group-hover:border-cyan-400/50 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <span className="text-sm text-cyan-400">{event.year}</span>
                        <h3 className="text-xl font-semibold text-slate-200 mt-1">{event.title}</h3>
                        <p className="text-slate-400 mt-1">{event.company}</p>
                        <p className="text-slate-300 mt-2">{event.description}</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-[#1E293B] bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center transform transition duration-300 group-hover:scale-110 group-hover:rotate-180">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] overflow-hidden py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 parallax" data-speed="0.4"></div>
        
        <div className="floating-elements">
          <div className="absolute top-[20%] left-[15%] w-28 h-28 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl floating-slow"></div>
          <div className="absolute bottom-[20%] right-[15%] w-36 h-36 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl floating-medium"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 reveal">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-16 animate-fade-in">
            My Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative animate-slide-up opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                <div className={`relative flex flex-col items-center p-6 bg-[#1E293B] rounded-lg border border-slate-700/50 transition duration-300 group-hover:border-${skill.color}`}>
                  <skill.icon size={48} className={`mb-4 text-${skill.color} fill-current transition-transform duration-300 group-hover:scale-110`} />
                  <span className="text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B]">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 parallax" data-speed="0.4"></div>
        
        <div className="floating-elements">
          <div className="absolute top-[20%] left-[15%] w-28 h-28 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl floating-slow"></div>
          <div className="absolute bottom-[20%] right-[15%] w-36 h-36 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl floating-medium"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 reveal">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-16 animate-fade-in">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto reveal">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-transparent"></div>
              
              {educationEvents.map((event, index) => (
                <div 
                  key={event.year}
                  className="relative mb-12 last:mb-0"
                  style={{
                    animationDelay: `${index * 200}ms`,
                  }}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                    <div className="flex-1 p-6">
                      <div className={`bg-[#1E293B] p-6 rounded-lg border border-slate-700/50 transform transition duration-300 group-hover:scale-105 group-hover:border-cyan-400/50 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <span className="text-sm text-cyan-400">{event.year}</span>
                        <h3 className="text-xl font-semibold text-slate-200 mt-1">{event.title}</h3>
                        <p className="text-slate-400 mt-1">{event.institution}</p>
                        <p className="text-slate-300 mt-2">{event.description}</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-[#1E293B] bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center transform transition duration-300 group-hover:scale-110 group-hover:rotate-180">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F172A] text-slate-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Revan Pratama. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/revanp" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-all duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/revanp0" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-all duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:revanp0@gmail.com" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-all duration-300">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
