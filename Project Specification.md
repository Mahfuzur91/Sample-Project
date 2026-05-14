# Mahfuzur Rahman

## Full-Stack Developer | React & Next.js Developer

Building modern, responsive, and user-focused web applications with React, Next.js, Tailwind CSS, and modern web technologies.

---

# About Me

I am an aspiring Full-Stack Developer based in London, passionate about building clean, modern, and functional digital experiences.

My focus is on creating responsive websites and scalable web applications using technologies such as React.js, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB.

Alongside frontend development, I also enjoy working on UI design, problem-solving, and transforming real-world ideas into meaningful digital products.

Currently, I am continuously improving my backend development skills while building practical projects and expanding my portfolio.

---

# Skills

## Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- React.js
- Next.js
- Tailwind CSS
- DaisyUI
- ShadCN UI

## Backend
- Node.js
- Express.js
- MongoDB
- REST API

## Tools & Platforms
- Git & GitHub
- Vercel
- Figma
- VS Code
- Firebase

---

# Services

## Frontend Development
Building responsive and modern user interfaces using React, Next.js, Tailwind CSS, and modern frontend technologies.

## Backend Development
Creating APIs, server-side functionality, and database integration using Node.js, Express.js, and MongoDB.

## UI / UX Design
Designing clean, elegant, and user-friendly interfaces focused on simplicity and usability.

## Web Application Development
Developing modern web applications with real-world functionality and scalable architecture.

---

# Featured Projects

## Hospital Management & Donation Dashboard
A complex data-driven dashboard originally built with Google Sheets and automation systems, currently being transformed into a modern web application.

### Features
- Donor Management
- PDF Receipt Generation
- Dashboard Analytics
- Email Notifications
- Currency Conversion
- Reports & Statements
- Search & Filter System

### Technologies
React.js, Next.js, Node.js, Express.js, MongoDB

---

## Personal Portfolio Website
A modern portfolio website showcasing my skills, projects, services, and development journey.

### Technologies
Next.js, Tailwind CSS, DaisyUI

---

## Weather Application
A responsive weather application that displays live weather data using external APIs.

### Technologies
React.js, API Integration, Tailwind CSS

---

## Todo Application
A task management application with add, edit, delete, and state management functionality.

### Technologies
React.js, useState, Tailwind CSS

---

# Development Journey

My development journey started with frontend technologies and gradually expanded into full-stack development.

Through consistent learning, practical projects, and daily coding practice, I continue building my skills in modern web development.

I believe in learning by building real-world projects that solve meaningful problems.

---

# Contact

## Let's Connect

I am always open to discussing new projects, collaboration opportunities, and creative ideas.

### Contact Information
- Email: mahfuzur0291@gmail.com
- Website: mahfuzurrahman.co.uk
- Location: London, United Kingdom

---

# Footer

© 2026 Mahfuzur Rahman. All rights reserved.


---

# Technical Specification & Project Architecture

## Project Name

**Mahfuzur Rahman Personal Portfolio Website**

## Project Purpose

The purpose of this project is to build a modern, responsive, and professional personal portfolio website to showcase skills, projects, services, development journey, and contact information.

The website will represent Mahfuzur Rahman as a modern React / Next.js developer who is expanding into full-stack development.

---

# Main Goals

- Build a clean and professional developer portfolio
- Showcase frontend and full-stack skills
- Display real-world projects clearly
- Make the website fully responsive
- Improve personal branding
- Provide easy contact options
- Prepare the website for future backend integration
- Deploy the project online using Vercel

---

# Technology Stack

## Frontend

- **Next.js** — React framework for routing, pages, SEO, and performance
- **React.js** — Component-based UI development
- **TypeScript** — Type safety and cleaner development
- **Tailwind CSS** — Utility-first styling
- **DaisyUI** — Prebuilt Tailwind UI components
- **ShadCN UI** — Modern reusable UI components
- **Framer Motion** — Animation and smooth transitions

## Backend - Future Upgrade

- **Node.js** — JavaScript runtime for backend
- **Express.js** — Backend API framework
- **MongoDB** — NoSQL database
- **Mongoose** — MongoDB object modelling
- **JWT / Cookies** — Authentication system
- **Nodemailer / Resend** — Email sending service

## Tools

- **VS Code** — Code editor
- **Git** — Version control
- **GitHub** — Code hosting
- **Vercel** — Deployment platform
- **Figma** — UI planning and design
- **Postman** — API testing

---

# Recommended Project Architecture

```txt
mahfuzur-portfolio/
│
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── projects/
│   │   └── icons/
│   └── favicon.ico
│
├── src/
│   │
│   ├── app/
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ProjectCard.tsx
│   │   └── SectionTitle.tsx
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── services.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   └── types/
│       └── index.ts
│
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

# Page Structure

## Home Page

**Route:** `/`

### Sections

- Navbar
- Hero section
- About preview
- Skills preview
- Featured projects
- Services preview
- Contact call-to-action
- Footer

### Purpose

The home page gives visitors a quick overview of who Mahfuzur is, what he does, what technologies he uses, and what projects he has built.

---

## About Page

**Route:** `/about`

### Content

- Personal introduction
- Development journey
- Learning progress
- Current focus
- Long-term goal

### Purpose

To explain the personal story behind the portfolio and show growth as a developer.

---

## Projects Page

**Route:** `/projects`

### Content

- Project cards
- Project title
- Project description
- Technologies used
- Features
- Live demo link
- GitHub link

### Example Projects

- Hospital Management & Donation Dashboard
- Personal Portfolio Website
- Weather App
- Todo App
- Calculator App
- Future CRM System

---

## Services Page

**Route:** `/services`

### Services

- Frontend Development
- Backend Development
- Full-Stack Web Application Development
- UI / UX Design
- Business Website Development
- Dashboard / CRM Development

---

## Contact Page

**Route:** `/contact`

### Features

- Contact form
- Email address
- Phone number
- Location
- Social links

### Future Backend Feature

Contact form submission can be connected to an API route or backend server to send emails automatically.

---

# Component Architecture

## Navbar Component

**File:** `components/Navbar.tsx`

### Purpose

Displays website navigation links.

### Links

- Home
- About
- Projects
- Services
- Contact

### Features

- Responsive design
- Mobile menu
- Active link styling
- Logo / name branding

---

## Hero Component

**File:** `components/Hero.tsx`

### Purpose

First visible section of the website.

### Content

- Name
- Professional title
- Short description
- Call-to-action buttons
- Optional profile image

### CTA Buttons

- View Projects
- Contact Me

---

## ProjectCard Component

**File:** `components/ProjectCard.tsx`

### Props

```ts
type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
};
```

### Purpose

Reusable card component for displaying project information.

---

## SkillsSection Component

**File:** `components/SkillsSection.tsx`

### Purpose

Displays technical skills in categories.

### Categories

- Frontend
- Backend
- Database
- Tools
- Design

---

## ContactForm Component

**File:** `components/ContactForm.tsx`

### Fields

- Name
- Email
- Subject
- Message

### Future Validation

- Required fields
- Valid email format
- Minimum message length
- Success / error message

---

# Data Architecture

Instead of writing all project and skill data directly inside components, store reusable data in separate files.

## Example: `data/projects.ts`

```ts
export const projects = [
  {
    title: "Hospital Management & Donation Dashboard",
    description:
      "A data-driven dashboard for donor management, receipts, reports, and analytics.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    liveUrl: "",
    githubUrl: "",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, Tailwind CSS, and DaisyUI.",
    technologies: ["Next.js", "Tailwind CSS", "DaisyUI"],
    liveUrl: "",
    githubUrl: "",
  },
];
```

---

## Example: `data/skills.ts`

```ts
export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "MongoDB", "REST API"],
  tools: ["Git", "GitHub", "Vercel", "Figma", "VS Code"],
};
```

---

# Styling Specification

## Design Style

- Modern
- Minimal
- Clean
- Professional
- Developer-focused
- Smooth spacing
- Rounded cards
- Soft shadows
- Clear typography

## Colour Direction

Recommended colour themes:

### Option 1: Dark Premium

- Background: Black / Dark Navy
- Text: White / Light Gray
- Accent: Red / Plum / Cyan

### Option 2: Clean Professional

- Background: White
- Text: Dark Gray / Navy
- Accent: Blue / Indigo

### Option 3: Personal Brand

- Background: Navy
- Text: White
- Accent: Gold / Emerald

---

# Responsive Design

The website must work properly on:

- Mobile phones
- Tablets
- Laptops
- Large desktop screens

## Tailwind Breakpoints

- `sm` — Small screens
- `md` — Tablets
- `lg` — Laptops
- `xl` — Large screens
- `2xl` — Extra large screens

---

# SEO Specification

## Required SEO Items

- Page title
- Meta description
- Open Graph image
- Favicon
- Proper heading structure
- Alt text for images
- Semantic HTML

## Example Metadata

```ts
export const metadata = {
  title: "Mahfuzur Rahman | Full-Stack Developer",
  description:
    "Personal portfolio of Mahfuzur Rahman, a React, Next.js and Full-Stack Developer based in London.",
};
```

---

# Performance Specification

## Requirements

- Optimised images
- Reusable components
- Fast page loading
- Minimal unnecessary packages
- Clean file structure
- Use Next.js Image component where needed
- Avoid very large images

---

# Accessibility Specification

## Requirements

- Proper heading order
- Keyboard-friendly navigation
- Clear button text
- Good colour contrast
- Alt text for all meaningful images
- Form labels
- Focus states for inputs and buttons

---

# Future Backend Architecture

For a future full-stack version, the portfolio can include a backend system.

## Possible Backend Features

- Admin login
- Add / edit / delete projects
- Store contact messages
- Blog system
- Dashboard analytics
- Newsletter subscribers

## Backend Folder Structure

```txt
server/
│
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   ├── projectController.ts
│   │   └── contactController.ts
│   ├── models/
│   │   ├── Project.ts
│   │   └── ContactMessage.ts
│   ├── routes/
│   │   ├── projectRoutes.ts
│   │   └── contactRoutes.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   ├── app.ts
│   └── server.ts
│
├── package.json
└── .env
```

---

# Possible Database Models

## Project Model

```ts
type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdAt: Date;
};
```

## Contact Message Model

```ts
type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
};
```

---

# API Routes - Future Version

## Project Routes

```txt
GET     /api/projects
GET     /api/projects/:id
POST    /api/projects
PUT     /api/projects/:id
DELETE  /api/projects/:id
```

## Contact Routes

```txt
POST    /api/contact
GET     /api/contact-messages
DELETE  /api/contact-messages/:id
```

---

# Deployment Plan

## Frontend Deployment

Recommended platform: **Vercel**

### Steps

1. Push project to GitHub
2. Connect GitHub repository to Vercel
3. Add environment variables if needed
4. Deploy project
5. Connect custom domain: `mahfuzurrahman.co.uk`

---

# Development Phases

## Phase 1 — Static Portfolio

- Home page
- About page
- Projects page
- Services page
- Contact page
- Responsive design
- Deploy to Vercel

## Phase 2 — Improved UI

- Better animations
- Dark mode
- Better project cards
- Improved mobile navbar
- More professional typography

## Phase 3 — Backend Integration

- Contact form API
- Store messages in database
- Admin dashboard
- Project management from backend

## Phase 4 — Advanced Features

- Blog system
- Authentication
- Dashboard analytics
- CMS-style project editing
- Case study pages for each project

---

# Recommended Build Order

1. Create Next.js project
2. Install Tailwind CSS and DaisyUI
3. Create folder structure
4. Build Navbar
5. Build Hero section
6. Build About section
7. Build Skills section
8. Build Projects section
9. Build Services section
10. Build Contact section
11. Build Footer
12. Make all pages responsive
13. Add animations
14. Improve SEO
15. Deploy to Vercel
16. Connect custom domain

---

# Final Project Outcome

After completion, this project will be a professional personal portfolio website that clearly presents:

- Who Mahfuzur Rahman is
- What technologies he knows
- What projects he has built
- What services he can provide
- How people can contact him
- His journey toward becoming a full-stack developer

This portfolio can later grow into a full-stack web application with admin control, project management, blog publishing, and database-powered content.

