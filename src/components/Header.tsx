import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contato', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [progress, setProgress] = useState(0);

  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Barra de progresso
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Destacar a seção ativa (scroll spy)
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkClass = (href: string) =>
    `font-medium transition duration-300 ${
      activeSection === href.slice(1)
        ? 'text-primary-500'
        : isScrolled
          ? 'text-secondary-800 hover:text-primary-600'
          : 'text-white hover:text-primary-400'
    }`;

  return (
    <>
      {/* Barra de progresso de scroll */}
      <div className="fixed top-0 left-0 h-1 z-[60] bg-gradient-to-r from-indigo-500 via-primary-500 to-fuchsia-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 dark:bg-secondary-900/85 backdrop-blur-md shadow-custom py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a
            href="#home"
            className="font-heading text-xl md:text-2xl font-bold flex items-center group"
          >
            <span
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-secondary-900 dark:text-white' : 'text-white'
              } group-hover:text-primary-500`}
            >
              Luiz<span className="text-gradient">.</span>Guimarães
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none group"
            onClick={toggleMenu}
            aria-label="Alternar menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled
                  ? 'text-primary-600 hover:text-primary-700'
                  : 'text-primary-400 hover:text-primary-300'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </a>
            ))}
            <a
              href="/assets/Luiz_Guimaraes_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Luiz_Guimaraes_CV.pdf"
              className="inline-flex items-center px-5 py-2 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-primary-600 to-fuchsia-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-glow hover:shadow-glow-blue text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Currículo
            </a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-secondary-900 shadow-custom-lg px-4 py-4 absolute top-full left-0 w-full">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`py-2 border-b border-gray-100 dark:border-secondary-800 transition duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-primary-600 font-semibold'
                      : 'text-secondary-800 dark:text-gray-200 hover:text-primary-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/assets/Luiz_Guimaraes_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Luiz_Guimaraes_CV.pdf"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-primary-600 to-fuchsia-600 shadow-glow"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Baixar currículo
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;