import { useEffect, useState } from 'react';

const ROLES = [
  'Desenvolvedor Full Stack',
  'Java & Spring Boot',
  'React & TypeScript',
  'AWS & Cloud',
];

// Efeito de máquina de escrever
const useTypingEffect = (words: string[], typeSpeed = 70, deleteSpeed = 40, pause = 1800) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = window.setTimeout(
        () => {
          setText(
            deleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
};

// Badges de tecnologia flutuando ao redor da foto
const FLOATING_TECH = [
  { label: 'Java', className: 'top-2 -left-4 md:-left-10', delay: '0s', color: 'text-orange-400' },
  { label: 'Spring Boot', className: '-top-3 right-2 md:right-0', delay: '0.8s', color: 'text-green-400' },
  { label: 'React', className: '-bottom-2 -left-6 md:-left-12', delay: '1.6s', color: 'text-cyan-400' },
  { label: 'TypeScript', className: 'bottom-10 -right-4 md:-right-10', delay: '2.4s', color: 'text-blue-400' },
  { label: 'AWS', className: 'top-1/3 -right-2 md:-right-14', delay: '3.2s', color: 'text-amber-400' },
];

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const typed = useTypingEffect(ROLES);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const reveal = (delay: string) =>
    `transition-all duration-700 ${delay} transform ${
      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950 text-white overflow-hidden"
    >
      {/* Fundo: grade + blobs animados */}
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-600/30 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary-600/25 blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 rounded-full bg-fuchsia-600/20 blur-3xl animate-blob" style={{ animationDelay: '6s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Badge de disponibilidade */}
        <div className={`mb-8 ${reveal('delay-0')}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-sm font-medium text-gray-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            Disponível para oportunidades
          </span>
        </div>

        {/* Foto com anel gradiente animado + badges flutuantes */}
        <div className={`relative mb-8 ${reveal('delay-100')}`}>
          <div className="relative w-44 h-44 md:w-52 md:h-52">
            {/* Anel giratório */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-primary-500 to-fuchsia-500 animate-spin-slow opacity-80" />
            <div className="absolute -inset-4 rounded-full border border-white/10" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary-900 bg-secondary-800 shadow-glow">
              <img
                src="/img.jpg"
                alt="Luiz Guimarães"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badges flutuantes */}
            {FLOATING_TECH.map((tech) => (
              <span
                key={tech.label}
                className={`absolute ${tech.className} animate-float px-3 py-1.5 rounded-xl glass-dark text-xs md:text-sm font-semibold ${tech.color} shadow-lg`}
                style={{ animationDelay: tech.delay }}
              >
                {tech.label}
              </span>
            ))}
          </div>
        </div>

        {/* Nome */}
        <h1
          className={`font-heading text-4xl md:text-6xl font-bold mb-3 ${reveal('delay-200')}`}
        >
          <span className="text-gradient">Luiz Guimarães</span>
        </h1>

        {/* Cargo com efeito de digitação */}
        <div className={`flex items-center justify-center gap-1 mb-6 h-8 ${reveal('delay-300')}`}>
          <h2 className="text-xl md:text-3xl text-white font-medium">
            {typed}
          </h2>
          <span className="inline-block w-0.5 h-6 md:h-8 bg-primary-400 animate-blink" />
        </div>

        <p
          className={`text-lg md:text-xl max-w-2xl mb-10 text-gray-300 leading-relaxed ${reveal('delay-400')}`}
        >
          Transformando ideias em soluções digitais com{' '}
          <span className="text-white font-medium">código limpo</span>,{' '}
          <span className="text-white font-medium">arquitetura sólida</span> e{' '}
          <span className="text-white font-medium">design intuitivo</span> — do
          backend ao deploy na nuvem.
        </p>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-12 ${reveal('delay-500')}`}>
          <a
            href="#projects"
            className="group inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-primary-600 to-fuchsia-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-glow hover:shadow-glow-blue hover:-translate-y-0.5"
          >
            Ver meus projetos
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="/assets/Luiz_Guimaraes_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white glass-dark hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Baixar currículo
          </a>
        </div>

        {/* Redes sociais */}
        <div className={`flex justify-center space-x-5 ${reveal('delay-600')}`}>
          {[
            {
              href: 'https://github.com/LzGuimaraes',
              label: 'GitHub',
              path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
            },
            {
              href: 'https://www.linkedin.com/in/lzguimaraes/',
              label: 'LinkedIn',
              path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
            },
            {
              href: 'mailto:luizsantosleventi19901@gmail.com',
              label: 'Email',
              path: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
            },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-gray-400 hover:text-white transition-all duration-300 p-2.5 glass-dark rounded-full hover:scale-110 hover:border-primary-400/50"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={social.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* Indicador de scroll */}
        <a
          href="#about"
          aria-label="Rolar para a próxima seção"
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-xs mb-2 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary-400 animate-scroll-hint" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
