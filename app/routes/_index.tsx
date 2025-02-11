import type { MetaFunction } from "@remix-run/node";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight, BsCodeSlash, BsLightbulb, BsRocket, BsHeart, BsX } from 'react-icons/bs';
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiPython, SiPhp, SiMysql, SiMongodb, SiTailwindcss, SiGit, SiDocker, SiApache, SiBootstrap, SiCodeigniter, SiCss3, SiSass, SiFlutter, SiJenkins, SiKubernetes, SiPostgresql, SiNginx, SiLinux, SiHtml5 } from 'react-icons/si';
import { useState, useEffect } from 'react';
import '../styles/style.css';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

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

  const portfolios = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
      tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      image: "https://picsum.photos/seed/1/800/600",
      link: '#'
    },
    {
      id: 2,
      title: "Banking Dashboard",
      description: "A comprehensive banking dashboard that provides real-time analytics, transaction monitoring, and reporting tools for financial institutions.",
      tags: ['React', 'Python', 'FastAPI', 'MongoDB'],
      image: "https://picsum.photos/seed/2/800/600",
      link: '#'
    },
    {
      id: 3,
      title: "IoT Management System",
      description: "An IoT device management platform that enables real-time monitoring, data visualization, and remote device control for smart home systems.",
      tags: ['Vue.js', 'Node.js', 'MQTT', 'InfluxDB'],
      image: "https://picsum.photos/seed/3/800/600",
      link: '#'
    },
    {
      id: 4,
      title: "HR Management System",
      description: "A comprehensive HR management system with features for employee tracking, attendance management, and performance evaluation.",
      tags: ['Laravel', 'MySQL', 'React', 'Redux'],
      image: "https://picsum.photos/seed/4/800/600",
      link: '#'
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "A modern real estate platform with virtual tours, property management, and advanced search capabilities.",
      tags: ['Next.js', 'Three.js', 'Node.js', 'MongoDB'],
      image: "https://picsum.photos/seed/5/800/600",
      link: '#'
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "An educational platform featuring course management, student progress tracking, and interactive learning materials.",
      tags: ['React', 'Django', 'PostgreSQL', 'Redis'],
      image: "https://picsum.photos/seed/6/800/600",
      link: '#'
    },
    {
      id: 7,
      title: "Healthcare Management",
      description: "A healthcare management system for hospitals and clinics, featuring patient records, appointment scheduling, and billing management.",
      tags: ['Vue.js', 'FastAPI', 'PostgreSQL', 'Docker'],
      image: "https://picsum.photos/seed/7/800/600",
      link: '#'
    },
    {
      id: 8,
      title: "Inventory System",
      description: "An advanced inventory management system with real-time tracking, barcode scanning, and automated reordering capabilities.",
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: "https://picsum.photos/seed/8/800/600",
      link: '#'
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const itemsPerPage = 4;
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
      year: "soon 2028",
      title: "Information Systems",
      institution: "Universitas Terbuka Indonesia",
      description: "Bachelor's degree in Information Systems"
    }
  ];

  useEffect(() => {
    const initGSAP = async () => {
      gsap.registerPlugin(ScrollTrigger);

      // Hero section scroll animation
      // gsap.to('.hero-section', {
      //   scrollTrigger: {
      //     trigger: '.hero-section',
      //     start: "top top",
      //     end: "bottom top",
      //     scrub: 1,
      //     markers: true,
      //   },
      //   opacity: 0,
      //   y: -100,
      //   scale: 0.9,
      // });
    }

    initGSAP();
  }, []);

  return (
    <div className="content min-h-screen w-full bg-[#0F172A] overflow-x-hidden">
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden hero-section">
        <div className="absolute inset-0 bg-black z-[60] animate-[fadeOut_2s_ease-in-out_forwards]"></div>
        
        <div className="absolute inset-0 flex items-center justify-center z-[60] animate-[welcomeOut_2s_ease-in-out_forwards]">
          <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text opacity-0 animate-[fadeInOut_2s_ease-in-out_forwards]">
            Welcome
          </div>
        </div>

        <div className="absolute inset-0 bg-grid-pattern opacity-0 parallax animate-[fadeIn_2s_ease-in-out_1s_forwards]" data-speed="0.2"></div>
        
        <div className="floating-elements opacity-0 animate-[fadeIn_2s_ease-in-out_1.5s_forwards]">
          <div className="absolute top-20 left-[20%] w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl floating-slow"></div>
          <div className="absolute bottom-20 right-[20%] w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl floating-medium"></div>
          <div className="absolute top-1/3 right-[30%] w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-xl floating-fast"></div>
        </div>

        <div className="text-center space-y-5 relative z-50 py-8 opacity-0 animate-[fadeIn_2s_ease-in-out_2s_forwards] translate-y-10">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text leading-relaxed px-4">
            Hello, I&apos;m Revan Pratama
          </h1>
          <p className="text-2xl text-slate-300 mt-8 px-4">
            Software Engineer crafting digital experiences
          </p>
          
          <div className="flex gap-8 justify-center mt-12">
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
            className="animate-bounce fixed left-0 right-0 mx-auto text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 w-fit opacity-0 animate-[fadeIn_1s_ease-in-out_3s_forwards]"
          >
            <FaChevronDown size={28} />
          </button>
        </div>

        <style jsx>{`
          @keyframes fadeOut {
            from { 
              opacity: 1;
              pointer-events: auto;
            }
            to { 
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
            }
          }
          
          @keyframes welcomeOut {
            0% { 
              opacity: 1;
              pointer-events: auto;
              display: flex;
            }
            99% {
              opacity: 0;
              pointer-events: none;
              display: flex;
            }
            100% { 
              opacity: 0;
              visibility: hidden;
              pointer-events: none;
              display: none;
            }
          }
          
          @keyframes fadeInOut {
            0% { 
              opacity: 0;
              transform: scale(0.8);
            }
            50% { 
              opacity: 1;
              transform: scale(1);
            }
            100% { 
              opacity: 0;
            }
          }
          
          @keyframes fadeIn {
            from { 
              opacity: 0;
              pointer-events: none;
            }
            to { 
              opacity: 1;
              pointer-events: auto;
            }
          }
        `}</style>
      </section>
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B]">
        {/* <div className="absolute inset-0 bg-grid-pattern opacity-5 parallax" data-speed="0.3"></div> */}
        
        <div className="floating-elements">
          <div className="absolute top-[10%] right-[10%] w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl floating-slow"></div>
          <div className="absolute bottom-[10%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl floating-medium"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="animate-on-scroll text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-8">
              About Me
            </h2>
            <p className="animate-on-scroll text-slate-300 mt-4 text-lg">
              A passionate developer with a creative mindset
            </p>
          </div>

          {/* Personal Info Section - NEW */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
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
                  I&apos;m a fullstack developer passionate about creating impactful and memorable digital experiences. Right now, I&apos;m focused on building user-friendly and accessible products using the latest web technologies.
                </p>
                <p className="leading-relaxed">
                  With skills that span both front-end and back-end, I thrive on solving complex problems and turning them into clean, simple, and elegant solutions.
                </p>
                <p className="leading-relaxed">
                  For me, coding isn&apos;t just about the technical side—it&apos;s also about creativity. I&apos;m all about combining technical expertise with creative thinking to deliver work that doesn&apos;t just function but truly stands out.
                </p>
                <p className="leading-relaxed">
                  If you&apos;re looking for someone who can tackle challenges while keeping things fun and laid-back, I&apos;m your person! ✨
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
          <div className="max-w-4xl mx-auto">
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

      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] py-20">
        {/* <div className="absolute inset-0 bg-grid-pattern opacity-5 parallax" data-speed="0.3"></div> */}
        
        <div className="floating-elements">
          <div className="absolute top-[10%] right-[10%] w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl floating-slow"></div>
          <div className="absolute bottom-[10%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl floating-medium"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="animate-on-scroll text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-8">
              Portfolio
            </h2>
            <p className="text-slate-300 text-lg">
              Check out some of my recent projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
            {portfolios.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((project) => (
              <button
                key={project.id}
                className="group bg-[#1E293B]/50 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-slate-700/50 hover:border-cyan-400/50"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedProject(project);
                  }
                }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prevPage}
              className="p-3 text-slate-300 hover:text-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-[#1E293B]/50 rounded-lg hover:bg-[#1E293B] border border-slate-700/50 hover:border-cyan-400/50"
              disabled={currentPage === 0}
            >
              <BsChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'w-10 bg-gradient-to-r from-blue-400 to-cyan-400' 
                      : 'w-2.5 bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className="p-3 text-slate-300 hover:text-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-[#1E293B]/50 rounded-lg hover:bg-[#1E293B] border border-slate-700/50 hover:border-cyan-400/50"
              disabled={currentPage === totalPages - 1}
            >
              <BsChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
      
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] overflow-hidden py-20">
        {/* <div className="absolute inset-0 bg-grid-pattern opacity-5 parallax" data-speed="0.4"></div> */}
        
        <div className="floating-elements">
          <div className="absolute top-[20%] left-[15%] w-28 h-28 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl floating-slow"></div>
          <div className="absolute bottom-[20%] right-[15%] w-36 h-36 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl floating-medium"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <h2 className="animate-on-scroll text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-16">
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
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] py-20">
        {/* <div className="absolute inset-0 bg-grid-pattern opacity-5 parallax" data-speed="0.4"></div> */}
        
        <div className="floating-elements">
          <div className="absolute top-[20%] left-[15%] w-28 h-28 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl floating-slow"></div>
          <div className="absolute bottom-[20%] right-[15%] w-36 h-36 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl floating-medium"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <h2 className="animate-on-scroll text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-16">
            Education
          </h2>
          
          <div className="max-w-4xl mx-auto">
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

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1E293B] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative aspect-video">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <BsX size={24} />
              </button>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-slate-300 mb-6">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105"
              >
                View Project <FaExternalLinkAlt size={14} />
              </a>
            </div>
          </div>
        </div>
      )}

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
