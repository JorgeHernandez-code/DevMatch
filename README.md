# 🚀 DevMatch

> Plataforma para conectar talento tecnológico con oportunidades laborales mediante análisis de habilidades, procesamiento de vacantes y matching automatizado.

![NestJS](https://img.shields.io/badge/NestJS-Backend-red)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📖 Descripción

DevMatch busca reducir la brecha entre candidatos y empresas mediante el análisis
inteligente de habilidades: importar vacantes desde distintas fuentes, extraer
las tecnologías que piden, y (objetivo final) calcular qué tan bien encaja un
perfil con cada oferta.

Este repositorio es un **monorepo** con dos proyectos:

| Carpeta                       | Proyecto            | Estado                                  |
| ----------------------------- | ------------------- | --------------------------------------- |
| [`Backend/devmatch-api`](Backend/devmatch-api)  | API NestJS          | Funcional (importación + skills)        |
| [`Frontend/devmatch-web`](Frontend/devmatch-web) | Web Next.js         | Landing del proyecto                    |

---

## 🏗️ Arquitectura

```text
DevMatch
│
├── Backend/devmatch-api  (NestJS + TypeORM)
│   ├── jobs      → vacantes almacenadas
│   ├── skills    → catálogo de habilidades
│   ├── users     → usuarios / candidatos (CRUD)
│   ├── scrapers  → importación desde RemoteOK
│   └── ai        → SkillExtractorService (extracción por keywords)
│
├── Frontend/devmatch-web  (Next.js + Tailwind)
│
└── PostgreSQL
```

---

## ⚙️ Tecnologías

**Backend:** NestJS 11 · TypeScript · TypeORM · PostgreSQL · Axios · class-validator · Swagger
**Frontend:** Next.js (App Router) · TypeScript · Tailwind CSS
**Infra:** Git / GitHub

---

## ✨ Funcionalidades

### Implementadas ✅

- Importación de vacantes desde la API pública de RemoteOK (con deduplicación por `externalId`).
- Persistencia y consulta de vacantes en PostgreSQL.
- Extracción de habilidades técnicas a partir de las descripciones (`SkillExtractorService`).
- CRUD de usuarios con validación de entrada.
- Documentación de la API con Swagger (`/docs`).

### En desarrollo 🚧

- Carga y parseo de CVs.
- Motor de matching: comparar un perfil contra las vacantes y devolver un % de compatibilidad.
- Ranking y recomendaciones personalizadas.

### Roadmap 📌

- Frontend: dashboard, portal de candidatos y portal empresarial.
- Nuevas fuentes de vacantes.
- Integración con LLMs para análisis semántico.
- Docker + CI/CD.

---

## 🛠️ Puesta en marcha

### Requisitos

- Node.js 20+
- PostgreSQL 14+

### Backend

```bash
cd Backend/devmatch-api
npm install
cp .env.example .development.env   # edita las credenciales de tu PostgreSQL
npm run start:dev
```

- API: `http://localhost:3000/api`
- Swagger: `http://localhost:3000/docs`

### Frontend

```bash
cd Frontend/devmatch-web
npm install
npm run dev
```

- Web: `http://localhost:3000`

> Nota: ambos usan el puerto 3000 por defecto; ejecuta uno con otro puerto
> (`PORT=3001 npm run start:dev`) si los levantas a la vez.

---

## 👨‍💻 Autor

**Jorge Humberto Hernández Torres** — Full Stack Developer

- NestJS · TypeScript · PostgreSQL · Next.js
- [GitHub](https://github.com/JorgeHernandez-code)

---

## 📄 Licencia

[MIT](LICENSE)
