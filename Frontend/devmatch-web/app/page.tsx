const features = [
  {
    title: "Importación de vacantes",
    description:
      "Trae ofertas remotas desde la API pública de RemoteOK, las normaliza y las almacena en PostgreSQL.",
  },
  {
    title: "Extracción de habilidades",
    description:
      "Analiza las descripciones de cada vacante e identifica las tecnologías mencionadas.",
  },
  {
    title: "Matching (en desarrollo)",
    description:
      "Comparar el perfil de un candidato contra las vacantes y devolver un porcentaje de compatibilidad.",
  },
];

const stack = [
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "TypeORM",
  "Next.js",
  "Tailwind CSS",
];

export default function Home() {
  return (
    <div className="mx-auto flex min-h-full max-w-3xl flex-col gap-16 px-6 py-20">
      <header className="flex flex-col gap-4">
        <span className="text-sm font-medium uppercase tracking-widest text-zinc-500">
          Proyecto personal
        </span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          DevMatch
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Plataforma para conectar talento tecnológico con oportunidades
          laborales mediante análisis de habilidades, procesamiento de vacantes y
          matching automatizado.
        </p>
        <div className="mt-2 flex flex-wrap gap-3 text-sm">
          <a
            className="rounded-full bg-foreground px-4 py-2 font-medium text-background transition-opacity hover:opacity-90"
            href="https://github.com/JorgeHernandez-code/DevMatch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver código en GitHub
          </a>
        </div>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold">Qué hace</h2>
        <ul className="flex flex-col gap-4">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-lg border border-black/10 p-4 dark:border-white/15"
            >
              <p className="font-medium">{feature.title}</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-black/10 px-3 py-1 text-sm dark:border-white/15"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <footer className="mt-auto text-sm text-zinc-500">
        Hecho por Jorge Humberto Hernández Torres · Full Stack Developer
      </footer>
    </div>
  );
}
