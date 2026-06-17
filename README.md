# 🚀 DevMatch

> Plataforma inteligente para conectar talento tecnológico con oportunidades laborales mediante análisis de habilidades, procesamiento de CVs y matching automatizado impulsado por IA.

![Status](https://img.shields.io/badge/status-en%20desarrollo-orange)
![NestJS](https://img.shields.io/badge/NestJS-Backend-red)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📖 Descripción

DevMatch nace con el objetivo de reducir la brecha entre candidatos y empresas mediante el análisis inteligente de habilidades.

La plataforma permite:

* 📄 Analizar hojas de vida (CVs).
* 🧠 Extraer habilidades automáticamente.
* 💼 Importar vacantes desde diferentes fuentes.
* 🔍 Comparar perfiles con oportunidades laborales.
* 📊 Calcular porcentajes de compatibilidad.
* 🎯 Recomendar vacantes relevantes para cada candidato.

---

## 🏗️ Arquitectura

```text
DevMatch
│
├── Backend (NestJS)
│   ├── AI Module
│   ├── Jobs Module
│   ├── Skills Module
│   ├── Matches Module
│   ├── Resumes Module
│   └── Scrapers Module
│
├── Frontend (Próximamente)
│
└── PostgreSQL
```

---

## ⚙️ Tecnologías

### Backend

* NestJS
* TypeScript
* TypeORM
* PostgreSQL
* Axios
* Class Validator
* Node.js

### Inteligencia Artificial

* Skill Extraction Engine
* Procesamiento de texto
* Matching de habilidades
* Ranking de compatibilidad

### Infraestructura

* Git
* GitHub
* Docker (Próximamente)
* CI/CD (Próximamente)

---

## 📂 Estructura del Proyecto

```text
src/
│
├── modules/
│   ├── ai/
│   ├── jobs/
│   ├── skills/
│   ├── matches/
│   ├── resumes/
│   └── scrapers/
│
├── config/
│
├── app.module.ts
└── main.ts
```

---

## ✨ Funcionalidades Implementadas

### Gestión de Vacantes

* Registro de empleos
* Almacenamiento en PostgreSQL
* Consulta de vacantes
* Normalización de datos

### Extracción de Habilidades

* Análisis automático de descripciones
* Identificación de tecnologías
* Clasificación de habilidades

### Scraping y Procesamiento

* Importación de vacantes
* Análisis masivo
* Procesamiento automatizado

---

## 🚧 Roadmap

### Fase 1 — Backend Base ✅

* [x] Configuración NestJS
* [x] PostgreSQL
* [x] Entidades principales
* [x] Módulo de vacantes
* [x] Módulo de habilidades
* [x] Módulo de matching
* [x] Módulo de análisis

### Fase 2 — Inteligencia de Matching 🚧

* [ ] Carga de CV
* [ ] Extracción automática de habilidades
* [ ] Ranking de compatibilidad
* [ ] Recomendaciones personalizadas

### Fase 3 — Frontend

* [ ] Dashboard
* [ ] Gestión de usuarios
* [ ] Portal de candidatos
* [ ] Portal empresarial

### Fase 4 — IA Avanzada

* [ ] Integración con LLMs
* [ ] Recomendación inteligente
* [ ] Análisis semántico
* [ ] Career Path Suggestions

---

## 🛠️ Instalación

### Clonar repositorio

```bash
git clone https://github.com/tu-usuario/devmatch.git
```

### Instalar dependencias

```bash
npm install
```

### Variables de entorno

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=password
DATABASE_NAME=devmatch

PORT=3000
```

### Ejecutar proyecto

```bash
npm run start:dev
```

---

## 📊 Visión

DevMatch busca convertirse en una plataforma que permita a las empresas encontrar talento de manera más eficiente y a los candidatos descubrir oportunidades alineadas con sus habilidades reales.

No solo queremos mostrar vacantes.

Queremos ayudar a las personas a encontrar el trabajo correcto.

---

## 👨‍💻 Autor

**Jorge Humberto Hernández Torres**

Desarrollador Full Stack | Emprendedor Tecnológico | Fundador de DevMatch

* NestJS
* TypeScript
* PostgreSQL
* Desarrollo Web
* Automatización
* IA Aplicada al Reclutamiento

---

## ⭐ Estado del Proyecto

Actualmente en desarrollo activo.

Las funcionalidades principales del backend ya se encuentran operativas y se está avanzando en el motor de matching y recomendación inteligente.
