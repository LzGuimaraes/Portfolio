import { useEffect, useRef, useState } from "react";

type SkillGroup = {
  category: string;
  items: string[];
};

type TimelineItem = {
  role: string;
  org: string;
  period: string;
  bullets?: string[];
};

type EducationItem = {
  course: string;
  org: string;
  period: string;
};

// Stacks com uso profissional recorrente
const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "APIs REST",
      "PostgreSQL / SQL",
      "Autenticação & Autorização",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "HTML / CSS", "Tailwind CSS"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS EC2",
      "AWS S3",
      "IAM (Roles & Policies)",
      "VPC & Security Groups",
      "CI/CD",
      "Deploy em VPS",
      "Linux",
      "Git / GitHub",
    ],
  },
  {
    category: "Dados & Automação",
    items: [
      "Python",
      "Pipelines ETL",
      "Integração de serviços externos",
      "Dashboards & relatórios",
    ],
  },
  {
    category: "Redes & Infraestrutura",
    items: [
      "TCP/IP",
      "DNS / DHCP / NAT",
      "RTSP / HLS",
      "Monitoramento NOC",
      "Troubleshooting",
    ],
  },
];

// Ferramentas que uso em projetos pontuais ou que estou consolidando
const workingKnowledge: string[] = [
  "Docker",
  "Docker Compose",
  "Web scraping (Python)",
  "Node.js / NestJS",
  "Next.js",
];

const experience: TimelineItem[] = [
  {
    role: "Desenvolvedor de Software",
    org: "Grupo Optimus",
    period: "2026 — Atual",
    bullets: [
      "Aplicações web com Java (Spring Boot) no backend e React no frontend",
      "Pipelines automatizados de processamento de dados (ETL em Python)",
      "Integração de dados entre serviços AWS, APIs REST e bancos SQL",
      "Administração de recursos AWS (EC2, S3, IAM, VPC), Roles, Policies e Security Groups",
    ],
  },
  {
    role: "Analista NOC",
    org: "STELSEG",
    period: "2026",
    bullets: [
      "Monitoramento de ambientes críticos de videomonitoramento e alta disponibilidade",
      "Incidentes N1/N2 em redes e CFTV, com acompanhamento de SLA e escalonamento",
      "Troubleshooting de streaming (RTSP, HLS) e conectividade TCP/IP, DNS e roteamento",
      "Análise de logs e métricas para causa raiz; documentação de procedimentos",
    ],
  },
  {
    role: "Estagiário em TI",
    org: "Grupo Optimus",
    period: "2025 — 2026",
    bullets: [
      "Apoio ao desenvolvimento de aplicações em Java (Spring Boot) e React",
      "Rotinas de automação e ETL em Python",
      "Suporte à administração de recursos AWS e à configuração de permissões e acessos",
    ],
  },
  {
    role: "Estagiário em TI",
    org: "MTI — Empresa Mato-grossense de Tecnologia da Informação",
    period: "2024 — 2025",
    bullets: [
      "Desenvolvimento e consumo de APIs REST para integração entre sistemas",
      "Integração com ServiceNow para automação de processos internos",
      "Dashboards e relatórios operacionais para acompanhamento de demandas",
      "Automações com Python e Google Apps Script",
    ],
  },
];

const education: EducationItem[] = [
  {
    course: "Análise e Desenvolvimento de Sistemas",
    org: "UNIC — Universidade de Cuiabá",
    period: "2024 — 2026",
  },
  {
    course: "Técnico em Desenvolvimento de Software",
    org: "SECITEC — Cuiabá",
    period: "2023",
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const reveal = (delay: string, axis: "x" | "-x" | "y" = "y") => {
    const hidden =
      axis === "y"
        ? "opacity-0 translate-y-10"
        : axis === "x"
          ? "opacity-0 translate-x-10"
          : "opacity-0 -translate-x-10";
    const shown = "opacity-100 translate-x-0 translate-y-0";
    return `transition-all duration-700 ${delay} transform ${isVisible ? shown : hidden}`;
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-secondary-900 dark:to-secondary-800"
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-secondary-900 dark:text-white ${reveal("")}`}
        >
          <span className="inline-block border-b-4 border-primary-500 pb-2">
            Sobre Mim
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Apresentação */}
          <div className={`space-y-6 ${reveal("delay-100", "-x")}`}>
            <h3 className="text-2xl font-heading font-semibold text-secondary-800 dark:text-white relative inline-block">
              <span className="relative z-10">Quem sou eu</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary-200 dark:bg-primary-900/30 -z-10 transform -rotate-1"></span>
            </h3>

            <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
              Sou desenvolvedor fullstack com cerca de 2 anos de atuação em TI.
              Trabalho com Java e Spring Boot no backend, React e TypeScript no
              frontend e infraestrutura AWS, construindo aplicações desde a
              estruturação inicial do projeto até o deploy em produção.
            </p>
            <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
              Na prática, isso significa modelar o backend, implementar
              autenticação e autorização, integrar serviços externos, organizar
              armazenamento de arquivos em S3 com as permissões de IAM
              necessárias, construir a interface, configurar o ambiente no
              servidor e automatizar build, deploy e atualização com CI/CD.
            </p>
            <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
              Já conduzi um projeto que reuniu essas camadas ao mesmo tempo —
              frontend, backend, coleta de dados com scraping em Python, banco e
              armazenamento, infraestrutura e deploy. É essa visão de sistema
              completo que costumo trazer para os times em que atuo.
            </p>
            <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
              Trabalho tentando entender o funcionamento por baixo da abstração
              antes de aplicar uma solução. Isso me deixou confortável em
              aprender tecnologias novas por conta própria e em depurar
              problemas que atravessam camadas — quando o erro está na
              permissão, no ambiente ou na rede, e não no código.
            </p>

            <div className="pt-6">
              <a
                href="/assets/Curriculo.pdf"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 transition duration-300 shadow-custom group"
                target="_blank"
                rel="noopener noreferrer"
                download="Curriculo.pdf"
              >
                <span>Baixar currículo</span>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-y-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Stack técnica */}
          <div className={reveal("delay-200", "x")}>
            <h3 className="text-2xl font-heading font-semibold text-secondary-800 dark:text-white relative inline-block mb-8">
              <span className="relative z-10">Stack técnica</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary-200 dark:bg-primary-900/30 -z-10 transform -rotate-1"></span>
            </h3>

            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div
                  key={group.category}
                  className="bg-white dark:bg-secondary-800/50 rounded-lg p-5 shadow-custom hover:shadow-custom-lg transition-shadow duration-300"
                >
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3">
                    {group.category}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1.5 rounded-full text-sm font-medium text-secondary-700 dark:text-gray-300 bg-gray-50 dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-medium text-secondary-800 dark:text-white mb-2">
                Também trabalho com
              </h4>
              <p className="text-sm text-secondary-600 dark:text-gray-400 mb-4">
                Uso em projetos pontuais ou em consolidação — não é a stack do
                meu dia a dia.
              </p>
              <ul className="flex flex-wrap gap-3">
                {workingKnowledge.map((tech) => (
                  <li
                    key={tech}
                    className="px-4 py-2 bg-white dark:bg-secondary-800 text-secondary-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm border border-dashed border-gray-300 dark:border-secondary-600 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-300"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Experiência */}
        <div className={`mt-20 ${reveal("delay-300")}`}>
          <h3 className="text-2xl font-heading font-semibold mb-8 text-secondary-800 dark:text-white">
            Experiência
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experience.map((item) => (
              <article
                key={`${item.org}-${item.period}`}
                className="border-l-4 border-primary-500 pl-5 py-2 bg-white dark:bg-secondary-800/50 rounded-r-lg shadow-custom p-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-xl font-medium text-secondary-900 dark:text-white">
                    {item.role}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-500">
                    {item.period}
                  </span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 font-medium mt-1">
                  {item.org}
                </p>
                {item.bullets && (
                  <ul className="mt-3 space-y-1.5">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-secondary-700 dark:text-gray-300 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary-500"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Formação e idiomas */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 ${reveal("delay-300")}`}
        >
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 text-secondary-800 dark:text-white">
              Formação
            </h3>
            <div className="space-y-6">
              {education.map((item) => (
                <div
                  key={item.course}
                  className="border-l-4 border-primary-500 pl-4 py-2"
                >
                  <h4 className="text-lg font-medium text-secondary-900 dark:text-white">
                    {item.course}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.org}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 text-secondary-800 dark:text-white">
              Idiomas
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <h4 className="text-lg font-medium text-secondary-900 dark:text-white">
                  Português
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Nativo</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4 py-2">
                <h4 className="text-lg font-medium text-secondary-900 dark:text-white">
                  Inglês
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  B1 — leitura, escrita, fala e compreensão intermediárias
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
