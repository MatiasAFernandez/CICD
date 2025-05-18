# 🚀 CI/CD con GitHub Actions y GitHub Pages

Este proyecto demuestra una implementación simple de Integración Continua (CI) y Entrega Continua (CD) utilizando:

- ✅ GitHub Actions para ejecutar pruebas automáticas
- ✅ Slack para notificaciones en caso de error
- ✅ GitHub Pages para desplegar automáticamente el sitio web

---

## 📦 Estructura del Proyecto

├── index.js # Función JavaScript reutilizable (ES Module)
├── test.js # Pruebas básicas en Node.js
├── dist/
│ ├── index.html # Página HTML que muestra el resultado
│ └── index.js # (Se genera automaticamente para github page)
└── .github/
    └── workflows/
        └── ci-cd.yml # Workflow CI/CD

---

## ⚙️ ¿Qué hace el workflow?

### 🔁 Integración Continua (CI)

- Cada vez que haces push o PR en `main`:
  - Se instala Node.js
  - Se ejecutan pruebas con `test.js`
  - Si alguna prueba falla:
    - El proceso se detiene
    - Se envía un mensaje de error a Slack con:
      - Autor del commit
      - Mensaje
      - Enlace al commit

### 🚀 Entrega Continua (CD)

- Si las pruebas pasan:
  - Se copia `index.js` a la carpeta `dist/` (para uso web)
  - Se publica automáticamente el contenido de `dist/` en **GitHub Pages**
  - El enlace de despliegue se actualiza automáticamente

---

## 🌐 Sitio en Producción

👉 Puedes ver el sitio desplegado en:  
https://matiasafernandez.github.io/CICD/

---

## 📡 Notificaciones a Slack

Este proyecto envía mensajes a Slack si fallan las pruebas.

---

## 📜 Requisitos para desarrollo local

- Node.js >= 18
- Clonar el repo y ejecutar:

```bash
npm install
node test.js