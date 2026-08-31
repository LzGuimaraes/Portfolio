import { useEffect, useRef, useState } from "react";

// ============================================================
// COMO DEIXAR AS IMAGENS DE UM PROJETO EM CARROSSEL
// ------------------------------------------------------------
// 1. Coloque os arquivos de imagem na pasta `public/`
//    (ex.: public/projects/focus-1.png).
// 2. No array `images` de cada projeto, adicione o caminho de
//    CADA imagem que quiser mostrar.
//    Ex.: images: ["/projects/focus-1.png", "/projects/focus-2.png"]
// 3. O carrossel (setas + pontos + swipe) aparece automaticamente
//    quando o projeto tiver MAIS DE UMA imagem (images.length > 1).
// ------------------------------------------------------------
const projects = [
  {
    id: 1,
    title: "Focus Life",
    description:
      "Plataforma fullstack de gestão pessoal, integrando finanças, estudos, tarefas, metas, aulas e treinos, com cotações de ações e ETFs em tempo real.",
    images: ["/projects/focus-1.png", "/projects/focus-2.png", "/projects/focus-3.png"],
    tags: ["Java", "Spring Boot", "React", "TypeScript"],
    demoLink: "https://focus.lzguimaraes.com.br/",
    codeLink: "https://github.com/LzGuimaraes/FocusLife",
  },
  {
    id: 2,
    title: "Kung Fu Wushu",
    description:
      "Plataforma de gestão da escola Kung Fu Cuiabá, usada por alunos e professores em produção: turmas, alunos, pagamentos e controle de acesso por perfil.",
    images: ["/projects/wushu-1.png", "/projects/wushu-2.png", "/projects/wushu-3.png"],
    tags: ["NestJS", "React", "TypeScript", "Vite"],
    demoLink: "https://wushu.lzguimaraes.com.br",
    codeLink: "https://github.com/LzGuimaraes/wushu-front",
  },
  {
    id: 3,
    title: "Show do Milhão",
    description: 'Jogo "Show do Milhão" para se divertir e passar o tempo.',
    images: ["/projects/show-1.png", "/projects/show-2.png"],
    tags: ["JavaScript", "React"],
    demoLink: "https://show-do-milhao-gamma.vercel.app/",
    codeLink: "https://github.com/LzGuimaraes/Show-do-Milhao",
  },
];

// Carrossel de imagens de um único card de projeto
const ProjectImageCarousel = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const hasMultiple = images.length > 1;

  const goTo = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrent((index + images.length) % images.length);
  };

  const goToIndex = (index: number) => {
    setCurrent((index + images.length) % images.length);
  };

  // Suporte a swipe (arrastar) em telas de toque
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goToIndex(current + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative overflow-hidden group/carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <img
        src={images[current]}
        alt={`${title} - imagem ${current + 1}`}
        className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {hasMultiple && (
        <>
          {/* Contador de imagens */}
          <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur-sm select-none">
            {current + 1} / {images.length}
          </div>

          <button
            type="button"
            onClick={(e) => goTo(e, current - 1)}
            aria-label="Imagem anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-primary-600 active:scale-90"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => goTo(e, current + 1)}
            aria-label="Próxima imagem"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-primary-600 active:scale-90"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => goTo(e, index)}
                aria-label={`Ir para imagem ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-white w-5" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
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
      { threshold: 0.1 },
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
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20" />
      <div className="absolute inset-0 overflow-hidden opacity-60 dark:opacity-25">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-200/50 dark:bg-indigo-900/20 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-fuchsia-200/50 dark:bg-fuchsia-900/20 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-3">
            Portfólio
          </span>
          <h2
            className={`text-3xl md:text-4xl font-heading font-bold mb-4 text-secondary-900 dark:text-white transition-all duration-700 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block pb-2">Meus <span className="text-gradient">Projetos</span></span>
          </h2>
          <p
            className={`text-secondary-600 dark:text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-100 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Projetos que desenvolvi unindo backend, frontend e infraestrutura —
            alguns deles já rodando em produção.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-secondary-800/50 rounded-2xl overflow-hidden shadow-custom hover:shadow-card hover:-translate-y-1.5 transition-all duration-500 border border-gray-100 dark:border-secondary-700/50 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="relative overflow-hidden">
                <ProjectImageCarousel images={project.images} title={project.title} />

                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 pointer-events-none">
                  <div className="flex space-x-3 pointer-events-auto">
                    <a
                      href={project.demoLink}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver demo"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href={project.codeLink}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver código"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-secondary-900 dark:text-white group-hover:text-primary-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-secondary-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-fuchsia-50 dark:from-indigo-900/20 dark:to-fuchsia-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium border border-indigo-100 dark:border-secondary-700"
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
            className="group inline-flex items-center px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-primary-600 to-fuchsia-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-glow hover:shadow-glow-blue hover:-translate-y-0.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Ver mais projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;