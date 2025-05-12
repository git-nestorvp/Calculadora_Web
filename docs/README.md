# Calculadora Web - Proyecto de Desarrollo

## 📋 Descripción del Proyecto

Esta aplicación es una calculadora web básica desarrollada en HTML, CSS y JavaScript. Es parte de una tarea para implementar pruebas unitarias, gestión de versiones con Git y contenerización con Docker.

---

## 📂 Estructura del Proyecto

```
Calculadora_Web/
├── frontend/
│   ├── index.html
│   ├── estilos.css
│   └── scripts.js
├── tests/
│   └── tests.js
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## 🚀 Características Principales

* Operaciones matemáticas básicas (suma, resta, multiplicación, división)
* Pruebas unitarias para validar funciones matemáticas
* Contenerización con Docker para despliegue rápido

---

## 🛠️ Herramientas Utilizadas

* HTML, CSS, JavaScript
* Git (control de versiones)
* Docker (contenerización)
* Pruebas Unitarias (JavaScript)

---

## 📝 Uso del Proyecto

1. **Clonar el Repositorio:**

```bash
git clone https://github.com/git-nestorvp/Calculadora_Web.git
```

2. **Cambiar a la rama de desarrollo:**

```bash
git checkout develop
```

3. **Construir y ejecutar con Docker Compose:**

```bash
docker-compose up --build
```

4. **Acceder a la aplicación:**

* Visita: [http://localhost:8080](http://localhost:8080)

---

## 🧪 Pruebas Unitarias

* Las pruebas están definidas en el archivo **tests/tests.js**.
* Para ejecutar las pruebas, puedes usar las herramientas de desarrollo del navegador (F12, pestaña Console).

---

## 📌 Próximos Pasos

* Añadir más pruebas para mejorar la cobertura.
* Implementar CI/CD con GitHub Actions.
* Mejorar el diseño de la interfaz.
