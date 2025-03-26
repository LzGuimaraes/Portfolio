import  { useEffect, useRef, useState } from 'react';

const Projects = () => {
  // Lista de projetos
  const projects = [
    {
      id: 1,
      title: 'Landding page de advocacia',
      description: 'Landing page para uma empresa de advocacia.',
      image: '/src/assets/Adv.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoLink: 'https://ademir-ten.vercel.app/',
      codeLink: 'https://github.com/LzGuimaraes/SiteAdemir',
    },
    {
      id: 2,
      title: 'Gerenciador-Tarefas',
      description: 'Plataforma para gerenciamento de tarefas.',
      image: '/src/assets/gerenciador-tarefas.png',
      tags: ['React', 'JavaScript'],
      demoLink: 'https://gerenciador-tarefas-nine-lyart.vercel.app',
      codeLink: 'https://github.com/LzGuimaraes/Gerenciador-Tarefas',
    },
    {
      id: 3,
      title: 'Yield-Sync ',
      description: 'Plataforma para verificar ações do mercado financeiro com muitos indicadores.',
      image: '/src/assets/Yield.png',
      tags: ['TypeScript', 'React'],
      demoLink: 'https://yield-sync.vercel.app/',
      codeLink: 'https://github.com/LzGuimaraes/Yield-Sync',
    },
    
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [, setActiveProject] = useState<number | null>(null);
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
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-secondary-800 dark:to-secondary-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-50 dark:opacity-20">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-100 dark:bg-primary-900/20 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-primary-100 dark:bg-primary-900/20 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-secondary-900 dark:text-white transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block border-b-4 border-primary-500 pb-2">Meus Projetos</span>
        </h2>
        <p className={`text-secondary-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Aqui estão alguns dos projetos que desenvolvi utilizando diversas tecnologias e frameworks.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group bg-white dark:bg-secondary-800/50 rounded-xl overflow-hidden shadow-custom hover:shadow-custom-lg transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${150 * index}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.demoLink} 
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Ver demo"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                      </svg>
                    </a>
                    <a 
                      href={project.codeLink} 
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 transition-colors duration-300"
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Ver código"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white group-hover:text-primary-600 transition-colors duration-300">{project.title}</h3>
                <p className="text-secondary-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://github.com/LzGuimaraes" 
            className="inline-flex items-center px-6 py-3 bg-secondary-800 dark:bg-secondary-700 text-white rounded-md hover:bg-secondary-700 dark:hover:bg-secondary-600 transition duration-300 font-medium shadow-custom"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Ver mais projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;