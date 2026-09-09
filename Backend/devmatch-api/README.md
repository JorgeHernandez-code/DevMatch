# DevMatch API

Backend de DevMatch, construido con **NestJS + TypeScript + PostgreSQL (TypeORM)**.

Importa vacantes tech desde la API pública de [RemoteOK](https://remoteok.com/api),
las normaliza y persiste, y extrae habilidades técnicas de las descripciones.

## Stack

- NestJS 11
- TypeORM + PostgreSQL (`pg`)
- `@nestjs/axios` para el scraping
- `class-validator` / `class-transformer` para validación de DTOs
- Swagger (`@nestjs/swagger`) para documentación de la API

## Puesta en marcha

```bash
npm install

# configura la base de datos
cp .env.example .development.env   # y edita las credenciales

npm run start:dev
```

- API: `http://localhost:3000/api`
- Docs (Swagger): `http://localhost:3000/docs`

Necesitas una instancia de PostgreSQL accesible y una base de datos vacía con el
nombre de `DB_DATABASE`. Con `DB_SYNCHRONIZE=true` las tablas se crean solas a
partir de las entidades (solo recomendado en desarrollo).

## Endpoints principales

| Método | Ruta                       | Descripción                                             |
| ------ | -------------------------- | ------------------------------------------------------- |
| GET    | `/api`                     | Información y estado de la API                          |
| GET    | `/api/jobs`                | Lista las vacantes almacenadas                          |
| GET    | `/api/skills`              | Lista el catálogo de habilidades                        |
| GET    | `/api/users`               | Lista usuarios                                          |
| POST   | `/api/users`               | Crea un usuario (`fullName`, `email`, `skills[]`)       |
| GET    | `/api/scrapers/remoteok`   | Devuelve el feed crudo de RemoteOK                      |
| POST   | `/api/scrapers/remoteok/import` | Importa vacantes nuevas de RemoteOK               |
| POST   | `/api/scrapers/analyze`    | Extrae habilidades de las descripciones almacenadas     |

## Scripts

```bash
npm run start:dev   # desarrollo con watch
npm run build       # compila a dist/
npm run start:prod  # ejecuta dist/main
npm run lint        # eslint --fix
npm test            # tests unitarios (jest)
```

## Estructura

```
src/
├── config/typeorm.ts          # configuración de la conexión
├── modules/
│   ├── jobs/                   # vacantes (entidad Job, Job↔Skill)
│   ├── skills/                 # catálogo de habilidades
│   ├── users/                  # usuarios (CRUD)
│   ├── scrapers/               # importación desde RemoteOK
│   └── ai/                     # SkillExtractorService (extracción por keywords)
├── app.module.ts
└── main.ts
```

## Estado

Backend funcional para importar y consultar vacantes y extraer habilidades.
El motor de matching (comparar un perfil contra las vacantes y devolver un
porcentaje de compatibilidad) todavía no está implementado — ver el roadmap en
el [README raíz](../../README.md).
