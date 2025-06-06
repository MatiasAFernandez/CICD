# 🚀 CI/CD con GitHub Actions y GitHub Pages

Este proyecto demuestra una implementación simple de Integración Continua (CI) y Entrega Continua (CD) utilizando:

- ✅ GitHub Actions para ejecutar pruebas automáticas
- ✅ Slack para notificaciones en caso de error
- ✅ GitHub Pages para desplegar automáticamente el sitio web

---

## 📦 Estructura del Proyecto

```text
.
├── src/ 
    └── main.js # Función JavaScript reutilizable (ES Module)
├── test.js # Pruebas básicas en Node.js
├── index.js # Página HTML que muestra el resultado
├── dist/
│ ├── index.html # (Se genera automaticamente para github page) 
│ └── main.js # (Se genera automaticamente para github page)
└── .github/
    └── workflows/
       └── ci-cd.yml # Workflow CI/CD
```

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
  - Se realiza la build del proyecto
  - Se publica automáticamente el contenido de `dist/` en **GitHub Pages**
  - El enlace de despliegue se actualiza automáticamente
  - Se notifica por slack el despliegue exitoso

---

## 🌐 Sitio en Producción

👉 Puedes ver el sitio desplegado en:  
https://matiasafernandez.github.io/CICD/

---

## 📡 Notificaciones a Slack

Este proyecto envía mensajes a Slack si fallan las pruebas y si fueron exitosas.

---

## 📜 Requisitos para desarrollo local

- Node.js >= 18
- Clonar el repo y ejecutar:

```bash
npm install
node test.js