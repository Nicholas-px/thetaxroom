<div align="center">

<!-- Project Banner (optional) -->

<a href="https://wave-cast-podcast.vercel.app/" target="_blank">
  <img src="/public/readme/thumbnail.png" alt="WaveCast Project Banner" />
</a>

<!-- Tech Stack Badges -->
<div>
  <img src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/-App%20Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
</div>

<!-- <br /> -->

<h3>🎧 WaveCast – Modern Podcast Platform</h3>

<b>WaveCast</b> is a fully responsive podcast platform built with <b>Next.js App Router</b>, designed to explore podcasts, episodes, blogs, hosts, and subscriptions in a modern UI.<br/>
It focuses on clean architecture, smooth UX, and scalable frontend design.

<!-- <br /> -->

<i>Built as a production-ready frontend, ready for backend & audio player integration.</i>

  <a href="https://wave-cast-podcast.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-brightgreen?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
<br />

</div>

---

## 📋 Table of Contents

- [📋 Table of Contents](#-table-of-contents)
- [✨ Introduction](#-introduction)
- [⚙️ Tech Stack](#️-tech-stack)
  - [🖥️ Frontend](#️-frontend)
  - [🔧 Libraries \& Tools](#-libraries--tools)
- [🔋 Core Features](#-core-features)
  - [🎙️ Podcast Episodes](#️-podcast-episodes)
  - [📰 Blogs](#-blogs)
  - [👤 Hosts](#-hosts)
  - [💳 Pricing](#-pricing)
  - [❓ FAQs](#-faqs)
  - [🧭 Layout System](#-layout-system)
- [🧱 Project Structure](#-project-structure)
- [🧠 Architecture Overview](#-architecture-overview)
  - [🧩 Rendering Model](#-rendering-model)
  - [📦 State Management](#-state-management)
- [🤸 Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [1️⃣ Clone Repository](#1️⃣-clone-repository)
  - [2️⃣ Install Dependencies](#2️⃣-install-dependencies)
  - [3️⃣ Run Development Server](#3️⃣-run-development-server)
- [📱 Routing Overview](#-routing-overview)
- [🎨 Design System](#-design-system)
  - [🎨 Colors](#-colors)
  - [✍️ Typography](#️-typography)
- [🚀 Future Enhancements](#-future-enhancements)
- [🤝 Contribution](#-contribution)
- [📄 License](#-license)
- [⭐ Show Your Support](#-show-your-support)

---

## ✨ Introduction

**WaveCast** is a modern **podcast discovery and content platform** built using **Next.js App Router**.  
It provides a rich frontend experience for:

- Browsing podcast episodes
- Reading podcast blogs
- Exploring hosts
- Managing favorites
- Viewing pricing plans & FAQs

The project is designed with **scalability in mind**, making it easy to integrate:

- Backend APIs
- Authentication
- Audio playback
- CMS systems

---

## ⚙️ Tech Stack

### 🖥️ Frontend

- **Next.js (App Router)** – Routing & rendering
- **React 19** – Component-based UI
- **TypeScript** – Type safety & scalability
- **Tailwind CSS 4** – Utility-first styling
- **Custom CSS** – Animations & effects
- **Bootstrap Icons & Remix Icons** – Iconography
- **next/font** – Optimized Google fonts

### 🔧 Libraries & Tools

- **react-hot-toast** – Toast notifications
- **swiper** – Sliders & carousels
- **react-countup** – Animated counters
- **localStorage** – Client-side favorites storage

---

## 🔋 Core Features

### 🎙️ Podcast Episodes

- Episode listing with search & sorting
- Episode detail pages
- Favorite episodes (localStorage)
- Latest & favorite episode sections

### 📰 Blogs

- Blog listing with categories
- Dynamic blog detail pages
- Related blogs section

### 👤 Hosts

- Host profiles grid
- Social media hover interactions

### 💳 Pricing

- Monthly / Yearly toggle
- Multiple subscription plans

### ❓ FAQs

- Accordion-based FAQ pages
- Smooth open/close animations

### 🧭 Layout System

- Global Navbar & Footer
- `ClientWrapper` for layout control
- Clean handling of 404 pages

---

## 🧱 Project Structure

```txt
app/
├── Components/
│   ├── ClientWrapper.tsx
│   ├── Nav/
│   └── Footer/
│
├── pages/
│   ├── Index/
│   ├── Episodes/
│   ├── Blogs/
│   ├── Pricing/
│   ├── Faqs/
│   ├── Contact/
│   └── HostProfile/
│
├── JsonData/
│   ├── EpisodesData.json
│   └── BlogsData.json
│
├── layout.tsx
├── not-found.tsx
└── globals.css
```

---

## 🧠 Architecture Overview

### 🧩 Rendering Model

- **Server Components by default**
- **Client Components** for interactivity:

  - Navbar
  - Favorites
  - Accordions
  - Search & sorting
  - ClientWrapper

### 📦 State Management

- React hooks (`useState`, `useEffect`)
- `localStorage` for favorites
- No global state library (yet)

---

## 🤸 Quick Start

### Prerequisites

- Node.js (18+ recommended)
- npm or yarn

### 1️⃣ Clone Repository

```bash
https://github.com/Itssanthoshhere/WaveCast-Podcast.git
cd WaveCast-Podcast
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Open: **[http://localhost:3000](http://localhost:3000)**

---

## 📱 Routing Overview

```txt
/                          → Home
/pages/Episodes            → All episodes
/pages/Episodes/[id]       → Episode details
/pages/Episodes/LatestEpisode
/pages/Episodes/FavoriteEpisode
/pages/Blogs               → Blog listing
/pages/Blogs/[id]          → Blog details
/pages/About
/pages/Contact
/pages/Pricing
/pages/Faqs
/pages/HostProfile
/404                        → Custom not found page
```

---

## 🎨 Design System

### 🎨 Colors

```css
--primary: #ffb340
--second: #7a6eff
--dark-color: #1c1d20
--gray-color: #3b3b3c
--gray-light: #262629
```

### ✍️ Typography

- **Kanit** – Primary UI font
- **Metal Mania** – Branding & display
- **Geist / Geist Mono** – System & code fonts

---

## 🚀 Future Enhancements

- 🎧 Real podcast audio player
- 🔐 Authentication system
- 🗄️ Backend + database integration
- ❤️ User accounts & synced favorites
- 💬 Comments & ratings
- 📰 CMS integration (Sanity / Strapi)
- 📈 SEO & analytics

---

## 🤝 Contribution

Contributions are welcome!

```bash
git checkout -b feature/your-feature
git commit -m "feat: add new feature"
git push origin feature/your-feature
```

Then open a Pull Request 🚀

---

## 📄 License

This project is for **educational and portfolio purposes**.
All images and assets belong to their respective owners.

---

## ⭐ Show Your Support

If you like this project, **give it a ⭐ on GitHub**
It helps a lot and keeps the motivation high ❤️

---

**WaveCast – Podcasting made modern.** 🎧✨

---
