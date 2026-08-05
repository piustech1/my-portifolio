import React, { useState, useEffect } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'work', 'services', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#work', id: 'work' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Smoky Neon Mesh Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[12%] left-[15%] w-[600px] h-[600px] rounded-full bg-purple-500/35 blur-[100px] animate-pulse"></div>
        <div className="absolute top-[30%] -right-[5%] w-[550px] h-[550px] rounded-full bg-pink-500/30 blur-[100px]"></div>
        <div className="absolute -bottom-[15%] left-[20%] w-[650px] h-[650px] rounded-full bg-blue-500/35 blur-[100px]"></div>
      </div>

      {/* Always Accessible Sticky Navigation Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
          isScrolled
            ? 'bg-white/95 border-b border-purple-100 shadow-lg shadow-purple-500/5'
            : 'bg-white/85 border-b border-slate-200/80'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-xl font-extrabold tracking-tight text-slate-900">
            Pius<span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">.dev</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1.5 text-sm font-medium text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-full transition-all text-xs lg:text-sm ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 text-purple-600 font-semibold shadow-xs border border-purple-200/50'
                        : 'hover:text-purple-600 hover:bg-purple-50/50'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-purple-600 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-4 shadow-xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 px-4 rounded-xl text-center text-sm font-medium ${
                  activeSection === link.id
                    ? 'bg-purple-50 text-purple-600 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section id="hero" className="grid lg:grid-cols-12 gap-10 items-center py-12 lg:py-20 min-h-[calc(100vh-80px)]">
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-200 bg-white/85 backdrop-blur-md text-purple-600 text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping"></span>
              <span>AVAILABLE FOR NEW PROJECTS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Pius</span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-slate-800">
              Frontend Developer & <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">AI-Powered App Builder</span>
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              I create modern websites, mobile applications, and digital experiences using technology and creativity.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#work"
                onClick={(e) => handleNavClick(e, '#work')}
                className="px-7 py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-pink-500/35 hover:-translate-y-0.5 transition-all text-sm"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-7 py-3.5 bg-white/90 text-slate-900 font-semibold rounded-2xl border border-slate-200 shadow-xs hover:border-purple-500 hover:text-purple-600 hover:-translate-y-0.5 transition-all text-sm"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side Visual Profile */}
          <div className="lg:col-span-5 flex justify-center relative my-6 lg:my-0">
            <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-r from-purple-400/40 via-pink-400/30 to-blue-400/20 blur-2xl animate-pulse"></div>

            {/* Skill Tags */}
            <div className="absolute top-2 left-2 z-20 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 text-slate-900 font-bold text-xs shadow-md">
              HTML
            </div>
            <div className="absolute top-2 right-2 z-20 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 text-slate-900 font-bold text-xs shadow-md">
              CSS
            </div>
            <div className="absolute bottom-12 -left-4 z-20 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 text-slate-900 font-bold text-xs shadow-md">
              JavaScript
            </div>
            <div className="absolute bottom-2 right-4 z-20 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 text-slate-900 font-bold text-xs shadow-md">
              Flutter
            </div>
            <div className="absolute top-1/2 -right-4 z-20 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 text-slate-900 font-bold text-xs shadow-md">
              AI
            </div>

            {/* Profile Avatar Frame */}
            <div className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 rounded-full p-2 bg-gradient-to-br from-white via-slate-100 to-white border border-white/80 shadow-xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center text-center">
                <span className="text-6xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-slate-200 bg-clip-text text-transparent">
                  P
                </span>
                <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase mt-1">Pius Tech</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-16 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">ABOUT ME</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Building digital experiences with <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">creativity and technology</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              I am a passionate software developer focused on crafting clean, user-friendly, and modern digital applications. With a strong foundation in frontend technologies and mobile development, I bring ideas to life through code.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              My approach combines modern UI design, clean architecture, and the integration of AI tools to accelerate development and solve complex problems efficiently.
            </p>
            <div className="flex gap-8 pt-4 border-t border-slate-200/80">
              <div>
                <span className="text-3xl font-extrabold text-purple-600 block">3+</span>
                <span className="text-xs text-slate-500 font-medium">Years Learning & Building</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-purple-600 block">10+</span>
                <span className="text-xs text-slate-500 font-medium">Completed Projects</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-purple-600 block">100%</span>
                <span className="text-xs text-slate-500 font-medium">Commitment to Quality</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-xl shadow-purple-500/5">
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold tracking-wide">CORE FOCUS</span>
              <h3 className="text-xl font-bold text-slate-900 mt-4 mb-4">What Drives Me</h3>
              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                  Crafting smooth, responsive user interfaces
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                  Developing cross-platform mobile apps with Flutter
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                  Leveraging AI tools for intelligent solutions
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                  Writing clean, maintainable, and efficient code
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">MY SKILLS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Technologies I <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">work with</span>
            </h2>
            <p className="text-slate-600 text-base">
              A comprehensive overview of my technical stack and expertise across frontend, mobile, and AI development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-lg hover:border-purple-300 hover:shadow-purple-500/10 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3 / Tailwind', 'JavaScript (ES6+)', 'React', 'Responsive Design'].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-semibold text-slate-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-lg hover:border-purple-300 hover:shadow-purple-500/10 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Mobile App Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Dart', 'Android (Java)', 'Cross-Platform UI'].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-semibold text-slate-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-lg hover:border-purple-300 hover:shadow-purple-500/10 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Backend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Firebase', 'REST APIs', 'Git & GitHub', 'Database Integration'].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-semibold text-slate-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-lg hover:border-purple-300 hover:shadow-purple-500/10 transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-4">AI & Modern Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['AI Development Tools', 'Prompt Engineering', 'AI Automation', 'Workflow Optimization'].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-slate-100 rounded-xl text-xs font-semibold text-slate-800">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase Section */}
        <section id="work" className="py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">MY PROJECTS</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Featured <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">projects</span>
            </h2>
            <p className="text-slate-600 text-base">
              A collection of applications and digital experiences I have designed and developed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'MovieMax',
                badge: 'Web Application',
                desc: 'A movie streaming and discovery platform featuring trending titles, detailed insights, and a sleek user interface.',
                tech: ['HTML / CSS', 'JavaScript', 'Movie API'],
              },
              {
                name: 'Wallnote',
                badge: 'Mobile App',
                desc: 'A modern wallpaper application designed to deliver beautiful visual experiences on mobile devices.',
                tech: ['Java', 'Android', 'Firebase'],
              },
              {
                name: 'EasyBoost',
                badge: 'Marketing Platform',
                desc: 'A digital marketing platform designed to simplify social media management and automation.',
                tech: ['Flutter', 'APIs', 'Firebase'],
              },
              {
                name: 'AI Applications',
                badge: 'AI & Automation',
                desc: 'AI-powered tools and experiments focused on improving productivity and solving everyday problems.',
                tech: ['AI Tools', 'Prompt Engineering', 'Automation'],
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 overflow-hidden shadow-lg hover:border-purple-300 hover:shadow-purple-500/15 hover:-translate-y-1 transition-all flex flex-col"
              >
                <div className="h-44 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-blue-500/20 p-6 flex items-start justify-between relative overflow-hidden">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-purple-700 shadow-xs">
                    {p.badge}
                  </span>
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{p.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-medium text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, '#contact')}
                      className="flex-1 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl text-xs text-center shadow-md shadow-purple-500/20 hover:shadow-pink-500/30 transition-all"
                    >
                      View Details
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl text-xs transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">SERVICES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              What I can <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">help you build</span>
            </h2>
            <p className="text-slate-600 text-base">
              I create modern digital solutions that combine creativity, technology, and problem-solving.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Web Development',
                desc: 'Building responsive, modern, and user-friendly websites that provide great experiences across all devices.',
              },
              {
                title: 'Mobile App Development',
                desc: 'Creating beautiful and functional mobile applications using modern development technologies.',
              },
              {
                title: 'AI-Powered Solutions',
                desc: 'Using AI tools, automation, and modern workflows to create smarter digital experiences.',
              },
              {
                title: 'UI/UX Design',
                desc: 'Designing clean, intuitive interfaces focused on usability and visual quality.',
              },
            ].map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-lg hover:border-purple-300 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Timeline Section */}
        <section id="journey" className="py-16 lg:py-20 max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">MY JOURNEY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              My path as a <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">developer</span>
            </h2>
            <p className="text-slate-600 text-base">
              A continuous journey of learning, building, and creating digital products.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-gradient-to-b before:from-purple-200 before:via-purple-500 before:to-pink-200">
            {[
              {
                year: '2024',
                title: 'Started Development Journey',
                text: 'Started learning web technologies and building the foundation of software development.',
              },
              {
                year: '2025',
                title: 'Building Real Projects',
                text: 'Created websites, mobile applications, and explored modern development tools.',
              },
              {
                year: '2026',
                title: 'AI & Advanced Development',
                text: 'Building AI-powered solutions and improving skills through real-world projects.',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-500 bg-white text-purple-600 font-bold text-xs shadow-md z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  {item.year.slice(2)}
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-md hover:border-purple-300 transition-all">
                  <span className="text-xs font-bold text-purple-600 tracking-wider uppercase block mb-1">{item.year}</span>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 lg:py-20 max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">GET IN TOUCH</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Let's build something <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">extraordinary</span>
            </h2>
            <p className="text-slate-600 text-base">
              Whether you have a project in mind, need a developer, or just want to connect — feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-sm flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 font-bold">
                  @
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Direct Email</span>
                  <a href="mailto:piustechdevoff@gmail.com" className="text-sm font-bold text-slate-900 hover:text-purple-600 transition-colors">
                    piustechdevoff@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-sm flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 font-bold">
                  📍
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                  <span className="text-sm font-bold text-slate-900">Worldwide / Remote</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-sm flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 font-bold">
                  ✓
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Availability</span>
                  <span className="text-sm font-bold text-slate-900">Open for Freelance & Roles</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-white/90 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 text-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-xs"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 bg-white/90 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 text-center hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all shadow-xs"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Your message has been sent successfully.');
                (e.target as HTMLFormElement).reset();
              }}
              className="md:col-span-7 p-8 rounded-3xl bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-xl space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Pius, I'd like to discuss a project..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-purple-500 focus:bg-white transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-xl text-sm shadow-lg shadow-purple-500/25 hover:shadow-pink-500/35 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/90 backdrop-blur-md border-t border-slate-200 py-8 text-center mt-12">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="text-lg font-extrabold text-slate-900 inline-block">
            Pius<span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">.dev</span>
          </a>
          <p className="text-xs text-slate-500">Building modern web applications and AI digital experiences.</p>
          <p className="text-xs text-slate-400">&copy; 2026 Pius. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
