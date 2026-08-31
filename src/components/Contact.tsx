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
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20" />
      <div className="absolute inset-0 overflow-hidden opacity-40 dark:opacity-25">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-indigo-200/50 dark:bg-indigo-900/20 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-fuchsia-200/50 dark:bg-fuchsia-900/20 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-3">Contato</span>
          <h2 className={`text-3xl md:text-4xl font-heading font-bold mb-4 text-secondary-900 dark:text-white transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block pb-2">Entre em <span className="text-gradient">Contato</span></span>
          </h2>
          <p className={`text-secondary-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-100 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Tem alguma pergunta ou está interessado em trabalhar comigo?
            Vou adorar conversar com você.
          </p>
        </div>

        {/* CTA banner */}
        <div
          className={`mb-16 rounded-2xl gradient-border shadow-card p-8 md:p-12 text-center bg-white dark:bg-secondary-900/60 transition-all duration-700 delay-150 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 dark:text-white mb-3">
            Vamos construir algo <span className="text-gradient">incrível</span> juntos?
          </h3>
          <p className="text-secondary-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
            Estou disponível para projetos freelance, oportunidades em tempo
            integral ou apenas para trocar ideias sobre tecnologia.
          </p>
          <a
            href="mailto:luizsantosleventi19901@gmail.com"
            className="group inline-flex items-center px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-primary-600 to-fuchsia-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-glow hover:shadow-glow-blue hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Enviar um e-mail
          </a>
        </div>

        {/* Cards de contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              label: 'Email',
              value: 'luizsantosleventi19901@gmail.com',
              href: 'mailto:luizsantosleventi19901@gmail.com',
              icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
            },
            {
              label: 'Telefone / WhatsApp',
              value: '(65) 99815-3854',
              href: 'https://wa.me/5565998153854',
              icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
            },
            {
              label: 'Localização',
              value: 'Cuiabá, MT — Brasil',
              href: 'https://www.google.com/maps/place/Cuiab%C3%A1,+MT',
              icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
            },
          ].map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`group glass dark:glass-dark rounded-2xl p-6 hover:-translate-y-1.5 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${250 + index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-primary-600 to-fuchsia-600 flex items-center justify-center mb-4 shadow-glow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-secondary-900 dark:text-white">
                {item.label}
              </h4>
              <p className="text-secondary-600 dark:text-gray-400 text-sm break-all">
                {item.value}
              </p>
              <span className="inline-flex items-center mt-3 text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:gap-2 gap-1 transition-all duration-300">
                Acessar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Redes sociais */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h4 className="text-lg font-medium mb-6 text-secondary-800 dark:text-white">
            Me encontre nas redes sociais
          </h4>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/LzGuimaraes" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all p-3 bg-white dark:bg-secondary-800/50 rounded-full shadow-custom hover:scale-110 hover:shadow-glow border border-gray-100 dark:border-secondary-700/50">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/luiz-fernando-dos-santos-guimar%C3%A3es-11996b273/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all p-3 bg-white dark:bg-secondary-800/50 rounded-full shadow-custom hover:scale-110 hover:shadow-glow border border-gray-100 dark:border-secondary-700/50">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="https://wa.me/5565998153854" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-secondary-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-all p-3 bg-white dark:bg-secondary-800/50 rounded-full shadow-custom hover:scale-110 hover:shadow-glow border border-gray-100 dark:border-secondary-700/50">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.763.462 3.487 1.34 5.003l-1.42 5.187 5.31-1.393a9.96 9.96 0 004.767 1.213h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.671-1.04-5.182-2.929-7.07a9.935 9.935 0 00-7.072-2.94zm0 18.166h-.003a8.15 8.15 0 01-4.157-1.14l-.298-.177-3.15.826.842-3.07-.194-.315a8.155 8.155 0 01-1.256-4.373c0-4.512 3.672-8.183 8.22-8.183a8.15 8.15 0 015.78 2.4 8.14 8.14 0 012.404 5.787c0 4.512-3.672 8.184-8.188 8.184z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;