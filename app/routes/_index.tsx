import type { MetaFunction } from "@remix-run/node";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaExternalLinkAlt } from 'react-icons/fa';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiPython, SiPhp, SiMysql, SiMongodb, SiTailwindcss, SiGit, SiDocker } from 'react-icons/si';
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
    { icon: SiTypescript, name: 'TypeScript', color: 'from-blue-400 to-blue-600' },
    { icon: SiJavascript, name: 'JavaScript', color: 'from-yellow-400 to-yellow-600' },
    { icon: SiReact, name: 'React', color: 'from-cyan-400 to-cyan-600' },
    { icon: SiNodedotjs, name: 'Node.js', color: 'from-green-400 to-green-600' },
    { icon: SiPython, name: 'Python', color: 'from-blue-500 to-yellow-500' },
    { icon: SiPhp, name: 'PHP', color: 'from-indigo-400 to-indigo-600' },
    { icon: SiMysql, name: 'MySQL', color: 'from-orange-400 to-orange-600' },
    { icon: SiMongodb, name: 'MongoDB', color: 'from-green-500 to-green-700' },
    { icon: SiTailwindcss, name: 'Tailwind', color: 'from-teal-400 to-teal-600' },
    { icon: SiGit, name: 'Git', color: 'from-red-400 to-red-600' },
    { icon: SiDocker, name: 'Docker', color: 'from-blue-400 to-blue-700' },
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
    <div className="content">
      <section className="relative flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
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
      <section className="relative flex items-center justify-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 parallax" data-speed="0.3"></div>
        
        <div className="floating-elements">
          <div className="absolute top-[10%] right-[10%] w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl floating-slow"></div>
          <div className="absolute bottom-[10%] left-[10%] w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl floating-medium"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12 reveal">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2 animate-fade-in">
              <div className="relative group">
                {/* Decorative elements */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-25 group-hover:opacity-50 transition duration-500 animate-pulse"></div>
                
                {/* Image container */}
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-lg border-2 border-slate-700/50 bg-[#1E293B]">
                    <img 
                      src="/revan.jpg" 
                      alt="Revan Pratama" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-out"
                    />
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Text Content */}
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text animate-fade-in">
                About Me
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                  My journey in software engineering started with a curiosity about how things work on the internet. Now, I&apos;m passionate about building scalable web applications and exploring new technologies.
                </p>
                <p className="text-lg leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
                  When I&apos;m not coding, you&apos;ll find me:
                </p>
                <ul className="space-y-3 list-none">
                  {[
                    "📚 Reading tech blogs and documentation",
                    "🎮 Playing strategic games",
                    "🎧 Listening to programming podcasts",
                    "🌱 Learning new technologies"
                  ].map((item, index) => (
                    <li 
                      key={index} 
                      className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300 animate-slide-up opacity-0" 
                      style={{ 
                        animationDelay: `${600 + (index * 150)}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <span className="transform hover:translate-x-2 transition-transform duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] overflow-hidden py-20">
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
                <div className="relative flex flex-col items-center p-6 bg-[#1E293B] rounded-lg border border-slate-700/50 transition duration-300 group-hover:border-cyan-400/50">
                  <skill.icon size={48} className={`mb-4 bg-gradient-to-r ${skill.color} text-transparent fill-current transition-transform duration-300 group-hover:scale-110`} />
                  <span className="text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#1E293B] overflow-hidden py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 parallax" data-speed="0.4"></div>
        
        <div className="floating-elements">
          <div className="absolute top-[25%] right-[20%] w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-xl floating-slow"></div>
          <div className="absolute bottom-[25%] left-[20%] w-40 h-40 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl floating-medium"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text animate-fade-in">
              Portfolio
            </h2>
            <p className="text-slate-300 mt-4 animate-fade-in">
              Showcasing {portfolios.length}+ projects and counting
            </p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <button 
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-slate-800/80 p-3 rounded-full text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <BsChevronLeft size={24} />
            </button>
            <button 
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-slate-800/80 p-3 rounded-full text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <BsChevronRight size={24} />
            </button>

            {/* Portfolio Grid */}
            <div className="relative overflow-hidden">
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-transform duration-500 ease-out p-8"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {portfolios.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative animate-slide-up opacity-0"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative bg-[#1E293B] rounded-lg overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-400 mt-2 line-clamp-2">
                          {item.description}
                        </p>
                        <div className="flex gap-2 mt-3">
                          {item.tags.map(tag => (
                            <span 
                              key={tag}
                              className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={item.link}
                          className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          View Project <FaExternalLinkAlt size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index 
                      ? 'w-8 bg-cyan-400' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section style={{ background: '#ff0' }}>Section 4</section> */}
    </div>
  );
}
