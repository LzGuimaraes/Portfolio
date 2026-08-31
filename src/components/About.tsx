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

  // Destaques numéricos para a banda de estatísticas
  const stats = [
    { value: "2+", label: "anos em TI" },
    { value: "10+", label: "projetos" },
    { value: "3", label: "em produção" },
    { value: "5+", label: "áreas de atuação" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-secondary-900 dark:to-secondary-800 relative overflow-hidden"
    >
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 -left-24 w-80 h-80 rounded-full bg-indigo-200/40 dark:bg-indigo-900/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-fuchsia-200/40 dark:bg-fuchsia-900/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-6">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-3">
            Quem sou eu
          </span>
          <h2
            className={`text-3xl md:text-4xl font-heading font-bold mb-4 text-secondary-900 dark:text-white ${reveal("")}`}
          >
            Sobre Mim
          </h2>
          <p className="text-secondary-600 dark:text-gray-400 max-w-2xl mx-auto">
            Desenvolvedor fullstack apaixonado por construir sistemas completos,
            do banco de dados ao deploy na nuvem.
          </p>
        </div>

        {/* Banda de estatísticas */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 ${reveal("delay-100")}`}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl glass dark:glass-dark p-5 text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Apresentação */}
          <div className={`space-y-6 ${reveal("delay-100", "-x")}`}>
            <h3 className="text-2xl font-heading font-semibold text-secondary-800 dark:text-white relative inline-block">
              <span className="relative z-10">Minha trajetória</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-300 to-fuchsia-300 dark:from-indigo-900/40 dark:to-fuchsia-900/40 -z-10 transform -rotate-1 rounded"></span>
            </h3>

            <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
              Sou desenvolvedor fullstack com cerca de 2 anos de atuação em TI.
              No dia a dia, trabalho com{" "}
              <strong className="text-secondary-900 dark:text-white">
                Java e Spring Boot no backend
              </strong>
              ,{" "}
              <strong className="text-secondary-900 dark:text-white">
                React e TypeScript no frontend
              </strong>{" "}
              e{" "}
              <strong className="text-secondary-900 dark:text-white">
                infraestrutura AWS
              </strong>
              , construindo aplicações desde a estruturação inicial do projeto
              até o deploy em produção.
            </p>
            <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
              Na prática, isso significa modelar o backend, implementar
              autenticação e autorização, integrar serviços externos, organizar
              o armazenamento de arquivos em S3 com as permissões de IAM
              necessárias, construir a interface, configurar o ambiente no
              servidor e automatizar build, deploy e atualização com CI/CD.
            </p>
            <p className="text-secondary-700 dark:text-gray-300 leading-relaxed">
              Já conduzi um projeto que reuniu todas essas camadas ao mesmo
              tempo — frontend, backend, coleta de dados com scraping em Python,
              banco e armazenamento, infraestrutura e deploy. É essa visão de
              sistema completo que costumo trazer para os times em que atuo.
            </p>

            {/* Card de download do currículo */}
            <div className="pt-2">
              <div className="rounded-2xl gradient-border shadow-card p-6 md:p-8 bg-white dark:bg-secondary-900/60">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-primary-600 to-fuchsia-600 flex items-center justify-center shadow-glow">
                    <svg
                      className="w-7 h-7 text-white"
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-secondary-900 dark:text-white">
                      Currículo em PDF
                    </h4>
                    <p className="text-sm text-secondary-600 dark:text-gray-400">
                      Versão atualizada da minha trajetória profissional
                    </p>
                  </div>
                </div>

                <p className="text-secondary-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Um resumo completo da minha experiência, stacks, projetos e
                  formação — pronto para enviar em processos seletivos.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/assets/Curriculo.pdf"
                    className="group inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-primary-600 to-fuchsia-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-glow hover:shadow-glow-blue"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Curriculo.pdf"
                  >
                    <svg
                      className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform duration-300"
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
                      />
                    </svg>
                    Baixar currículo
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center px-6 py-3 rounded-xl font-semibold text-secondary-800 dark:text-gray-200 bg-gray-100 dark:bg-secondary-800 hover:bg-gray-200 dark:hover:bg-secondary-700 transition-colors duration-300"
                  >
                    Ver meus projetos
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stack técnica */}
          <div className={reveal("delay-200", "x")}>
            <h3 className="text-2xl font-heading font-semibold text-secondary-800 dark:text-white relative inline-block mb-8">
              <span className="relative z-10">Stack técnica</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-300 to-fuchsia-300 dark:from-indigo-900/40 dark:to-fuchsia-900/40 -z-10 transform -rotate-1 rounded"></span>
            </h3>

            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div
                  key={group.category}
                  className="bg-white dark:bg-secondary-800/50 rounded-lg p-5 shadow-custom hover:shadow-custom-lg hover:-translate-y-0.5 transition-all duration-300 border border-gray-100 dark:border-secondary-700/50"
                >
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                    {group.category}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="px-3 py-1.5 rounded-full text-sm font-medium text-secondary-700 dark:text-gray-300 bg-gray-50 dark:bg-secondary-800 border border-gray-200 dark:border-secondary-700 hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
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

        {/* Experiência — linha do tempo */}
        <div className={`mt-24 ${reveal("delay-300")}`}>
          <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-2 text-secondary-900 dark:text-white">
            Experiência profissional
          </h3>
          <p className="text-secondary-600 dark:text-gray-400 mb-12 max-w-2xl">
            Minha trajetória construindo soluções em desenvolvimento de software
            e infraestrutura.
          </p>

          <div className="relative pl-8 md:pl-10 space-y-10 before:content-[''] before:absolute before:left-2 md:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-primary-500 before:to-fuchsia-500">
            {experience.map((item) => (
              <article
                key={`${item.org}-${item.period}`}
                className="relative group"
              >
                {/* Marcador do timeline */}
                <span className="absolute -left-8 md:-left-10 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 ring-4 ring-white dark:ring-secondary-900 group-hover:scale-125 transition-transform duration-300" />

                <div className="bg-white dark:bg-secondary-800/50 rounded-xl p-6 shadow-custom hover:shadow-custom-lg transition-all duration-300 border border-gray-100 dark:border-secondary-700/50 group-hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="text-xl font-medium text-secondary-900 dark:text-white">
                      {item.role}
                    </h4>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {item.org}
                  </p>
                  {item.bullets && (
                    <ul className="space-y-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-secondary-700 dark:text-gray-300 text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-r before:from-indigo-500 before:to-fuchsia-500"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Formação e idiomas */}
        <div
          className={`mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 ${reveal("delay-300")}`}
        >
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 text-secondary-900 dark:text-white">
              Formação
            </h3>
            <div className="space-y-5">
              {education.map((item) => (
                <div
                  key={item.course}
                  className="bg-white dark:bg-secondary-800/50 rounded-xl p-5 shadow-custom border border-gray-100 dark:border-secondary-700/50"
                >
                  <h4 className="text-lg font-medium text-secondary-900 dark:text-white">
                    {item.course}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.org}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 text-secondary-900 dark:text-white">
              Idiomas
            </h3>
            <div className="space-y-5">
              <div className="bg-white dark:bg-secondary-800/50 rounded-xl p-5 shadow-custom border border-gray-100 dark:border-secondary-700/50">
                <h4 className="text-lg font-medium text-secondary-900 dark:text-white">
                  Português
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Nativo</p>
              </div>
              <div className="bg-white dark:bg-secondary-800/50 rounded-xl p-5 shadow-custom border border-gray-100 dark:border-secondary-700/50">
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
