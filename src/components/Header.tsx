import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled 
        ? 'bg-white text-secondary-900 shadow-custom py-3' 
        : 'bg-transparent text-white py-5'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
      <a href="#home" className="font-heading text-xl md:text-2xl font-bold flex items-center group">
          <span className={`transition-colors duration-300 ${isScrolled ? 'text-secondary-900' : 'text-white'} group-hover:text-primary-500`}>Luiz Guimarães</span>
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none group"
          onClick={toggleMenu}
          aria-label="Toggle menu"
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
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#home" 
            className={`font-medium hover:text-primary-500 transition duration-300 ${isScrolled ? 'text-secondary-800' : 'text-white'}`}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`font-medium hover:text-primary-500 transition duration-300 ${isScrolled ? 'text-secondary-800' : 'text-white'}`}
          >
            Sobre
          </a>
          <a 
            href="#projects" 
            className={`font-medium hover:text-primary-500 transition duration-300 ${isScrolled ? 'text-secondary-800' : 'text-white'}`}
          >
            Projetos
          </a>
          <a 
            href="#contact" 
            className={`font-medium hover:text-primary-500 transition duration-300 ${isScrolled ? 'text-secondary-800' : 'text-white'}`}
          >
            Contato
          </a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-custom-lg px-4 py-4 absolute top-full left-0 w-full">
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-secondary-800 hover:text-primary-600 transition duration-300 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-secondary-800 hover:text-primary-600 transition duration-300 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#projects" 
              className="text-secondary-800 hover:text-primary-600 transition duration-300 py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Projetos
            </a>
            <a 
              href="#contact" 
              className="text-secondary-800 hover:text-primary-600 transition duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;