# 🥾 Camino de Santiago

Aplicación web desarrollada en **React + TypeScript** para organizar y vivir una experiencia del Camino de Santiago.

El objetivo es disponer de una aplicación sencilla y visual donde los participantes puedan consultar el itinerario, completar retos, subir fotos y acceder a contenido personalizado durante el viaje.

---

# 🚀 Tecnologías

- React
- TypeScript
- Vite
- React Router DOM
- Swiper (carrusel de etapas)

---

# 📦 Instalación

Clonar el proyecto

```bash
git clone <URL_DEL_REPOSITORIO>
```

Entrar en la carpeta

```bash
cd camino-santiago
```

Instalar dependencias

```bash
npm install
```

Ejecutar en local

```bash
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

# 📚 Dependencias instaladas

Proyecto creado con:

```bash
npm create vite@latest camino-santiago -- --template react-ts
```

React Router

```bash
npm install react-router-dom
```

Swiper

```bash
npm install swiper
```

---

# 📂 Estructura

```
src
│
├── assets
│
├── components
│   └── Navbar.tsx
│
├── pages
│   ├── Home.tsx
│   ├── Itinerario.tsx
│   ├── Retos.tsx
│   └── Fotos.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# 📋 Funcionalidades previstas

- [x] Landing principal
- [x] Navbar
- [x] Navegación entre páginas
- [x] Página de itinerario
- [x] Página de retos
- [x] Página de fotos

## Próximamente

- [ ] Carrusel de etapas
- [ ] Mapa de cada etapa
- [ ] Participantes
- [ ] Login
- [ ] Reflexiones personalizadas
- [ ] Panel de administración
- [ ] Subida de fotografías
- [ ] Ranking de retos
- [ ] Responsive final
- [ ] Despliegue

---

# 🎯 Objetivo del proyecto

Crear una aplicación web moderna, responsive y orientada a móvil para acompañar a los participantes durante el Camino de Santiago, permitiendo consultar información del viaje y compartir la experiencia de forma sencilla.