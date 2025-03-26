import  { useState, useEffect, useRef } from 'react';

const Contact = () => {

  // Estado para animação de entrada
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
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-secondary-900 dark:to-secondary-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary-100 dark:bg-primary-900/20 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-100 dark:bg-primary-900/20 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-secondary-900 dark:text-white transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block border-b-4 border-primary-500 pb-2">Entre em Contato</span>
        </h2>
        <p className={`text-secondary-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12 transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Tem alguma pergunta ou está interessado em trabalhar comigo?     Meus contatos estão logo abaixo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Informações de contato */}
          <div className={`space-y-6 transition-all duration-700 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-heading font-semibold text-secondary-800 dark:text-white relative inline-block">
              <span className="relative z-10">Informações de Contato</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary-200 dark:bg-primary-900/30 -z-10 transform -rotate-1"></span>
            </h3>
            <p className="text-secondary-600 dark:text-gray-400">
              Estou disponível para projetos freelance, oportunidades de trabalho em tempo integral ou apenas para trocar ideias sobre tecnologia.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-secondary-800 dark:text-white">Email</h4>
                  <p className="text-secondary-600 dark:text-gray-400">luizsantosleventi19901@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-secondary-800 dark:text-white">Telefone</h4>
                  <p className="text-secondary-600 dark:text-gray-400">(65) 99815-3854</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-secondary-800 dark:text-white">Localização</h4>
                  <p className="text-secondary-600 dark:text-gray-400">Cuiabá, Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-lg font-medium mb-4 text-secondary-800 dark:text-white">Me encontre nas redes sociais</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/LzGuimaraes" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors p-2 bg-gray-100 dark:bg-secondary-800/50 rounded-full hover:shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/luiz-fernando-dos-santos-guimar%C3%A3es-11996b273/" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors p-2 bg-gray-100 dark:bg-secondary-800/50 rounded-full hover:shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors p-2 bg-gray-100 dark:bg-secondary-800/50 rounded-full hover:shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;