import { useEffect, useRef, useState } from 'react';

const About = () => {
  // Lista de habilidades técnicas
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'HTML/CSS', level: 92 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Git', level: 85 },
    { name: 'SQL', level: 75 },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-secondary-900 dark:to-secondary-800"
    >
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-secondary-900 dark:text-white transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block border-b-4 border-primary-500 pb-2">Sobre Mim</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações pessoais */}
          <div className={`space-y-6 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-heading font-semibold text-secondary-800 dark:text-white relative inline-block">
              <span className="relative z-10">Quem sou eu</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary-200 dark:bg-primary-900/30 -z-10 transform -rotate-1"></span>
            </h3>
            <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
              Sou um desenvolvedor full stack apaixonado por criar soluções digitais que resolvem problemas reais. 
              Com experiência em desenvolvimento web e mobile, tenho trabalhado em diversos projetos.
            </p>
            <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
              Minha jornada na programação começou há mais de 2 anos, e desde então venho constantemente 
              aprimorando minhas habilidades e acompanhando as últimas tendências e tecnologias do mercado.
            </p>
            <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
              Além do desenvolvimento, tenho interesse em UX/UI design, o que me permite criar interfaces 
              não apenas funcionais, mas também intuitivas e agradáveis para os usuários.
            </p>
            <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
              Tenho experiencia também na area de projetos com Metologias Agéis Scrum e Kanban.
            </p>
            
            {/* Botão para download do currículo */}
            <div className="pt-6">
              <a 
                href="/assets/Curriculo.pdf" 
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition duration-300 shadow-custom group"
                target="_blank" 
                rel="noopener noreferrer"
                download="Curriculo.pdf"
              >
                <span>Download CV</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Habilidades */}
          <div className={`transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-heading font-semibold text-secondary-800 dark:text-white relative inline-block mb-8">
              <span className="relative z-10">Minhas Habilidades</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary-200 dark:bg-primary-900/30 -z-10 transform -rotate-1"></span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-secondary-800/50 rounded-lg p-4 shadow-custom hover:shadow-custom-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-secondary-800 dark:text-white font-medium">{skill.name}</span>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Tecnologias e ferramentas */}
            <div className="mt-10">
              <h4 className="text-xl font-medium text-secondary-800 dark:text-white mb-4">Tecnologias & Ferramentas</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL','MySql', 'Next.js', 'Tailwind CSS', 'Git'].map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-secondary-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Educação e Experiência */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Educação */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">Educação</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="text-xl font-medium dark:text-white">Analise e Desenvolvimento de Sistemas</h4>
                <p className="text-gray-600 dark:text-gray-400">UNIC - Universidade de Cuiaba</p>
                <p className="text-gray-500 dark:text-gray-500">2024 - 2026</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="text-xl font-medium dark:text-white">Desenvolvimento de Software</h4>
                <p className="text-gray-600 dark:text-gray-400">Seciteci - Cuiaba</p>
                <p className="text-gray-500 dark:text-gray-500">2023 - 2024</p>
              </div>
            </div>
          </div>
          
          {/* Experiência */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 dark:text-white">Experiência</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="text-xl font-medium dark:text-white">Estagio</h4>
                <p className="text-gray-600 dark:text-gray-400">MTI - Empresa Matogrossense de Tecnologia</p>
                <p className="text-gray-500 dark:text-gray-500">2024 - Presente</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  GERENCIAMENTO DE PROJETOS,DESENVOLVIMENTO DE REST API
DENTRO DO SERVICENOW, CRIAÇÃO DE RELATÓRIOS, CRIAÇÃO DE
PAINÉIS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;