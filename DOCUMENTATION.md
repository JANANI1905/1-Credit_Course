# Portfolio Application Documentation

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)
- [Component Architecture](#component-architecture)
- [Styling & Theming](#styling--theming)
- [Features](#features)
- [Development Guidelines](#development-guidelines)
- [Build & Deployment](#build--deployment)
- [Contributing](#contributing)

---

## Overview

This is a modern, responsive portfolio website built with **React**, **TypeScript**, and **Vite**. It showcases a Computer Science Engineering student's profile, specializing in AI & ML with experience in cloud automation, AI projects, and Google Cloud Generative AI.

**Key Highlights:**
- AI/ML focused portfolio
- Smooth animations and transitions
- Mobile-responsive design
- Dark theme UI with cyan accents
- Fast performance with Vite


---

## Project Structure

```
1-Credit_Course/
├── src/
│   ├── components/           # React components
│   │   ├── About.tsx        # Skills and background section
│   │   ├── Certifications.tsx # Certifications section
│   │   ├── Connect.tsx       # Contact/callback section
│   │   ├── Education.tsx     # Education details
│   │   ├── Experience.tsx    # Professional/project experience
│   │   ├── Footer.tsx        # Footer with social links
│   │   ├── Hero.tsx          # Landing hero section
│   │   └── Navbar.tsx        # Navigation bar
│   ├── assets/              # Static assets
│   ├── App.tsx              # Main App component
│   ├── App.css              # App global styles
│   ├── index.css            # Global CSS
│   └── main.tsx             # React entry point
├── public/                  # Public static files
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
├── tailwind.config.js       # Tailwind CSS config
├── postcss.config.js        # PostCSS config
├── eslint.config.js         # ESLint config
├── package.json             # Dependencies
└── README.md               # Project readme

```

---

## Tech Stack

### Core Framework
- **React 19.2.4** - UI library
- **TypeScript 5.9** - Type safety
- **Vite 8.0** - Build tool and dev server

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS 8.5** - CSS processing
- **Autoprefixer 10.4** - Vendor prefixes

### Animation
- **Framer Motion 12.38** - Animation library

### Development Tools
- **ESLint 9.39** - Code linting
- **TypeScript ESLint 8.57** - TS-specific linting

---

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher) or yarn

### Steps

1. **Clone or navigate to the project:**
   ```bash
   cd d:\portfolio\1-Credit_Course
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

---

## Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with HMR (Hot Module Replacement). Perfect for active development.

### Build
```bash
npm run build
```
Compiles TypeScript and builds the optimized production bundle. Output is in the `dist/` folder.

### Preview
```bash
npm run preview
```
Serves the production build locally to preview before deployment.

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality and TypeScript types.

---

## Component Architecture

### 1. **App.tsx**
Main application component that serves as the layout wrapper.
- Renders Navbar and Footer globally
- Houses main content sections
- Applies dark background theme (#0a0f1e) with light text (#d7e1ff)

### 2. **Navbar.tsx**
Navigation bar component
- Sticky/fixed navigation
- Links to different sections
- Responsive mobile menu

### 3. **Hero.tsx**
Landing section with animated role typing
- **Features:** 
  - Displays multiple roles: "AI Developer", "Cloud Enthusiast", "Problem Solver"
  - Typewriter effect with 80ms interval
  - Smooth transitions between roles
  - Uses `useState` and `useEffect` for animation logic

### 4. **About.tsx**
Profile and skills section
- **Technical Skills:** C, Python, Java, SQL, HTML, CSS, JavaScript, Google Cloud AI
- **Soft Skills:** Adaptability, Leadership, Teamwork
- **Languages:** English, Tamil
- Uses Framer Motion for scroll-trigger animations

### 5. **Education.tsx**
Educational background section
- Displays educational qualifications
- Animated on scroll into view

### 6. **Certifications.tsx**
Professional certifications section
- Lists relevant certifications
- Google Cloud Generative AI internship completion

### 7. **Experience.tsx**
Professional and project experience section
- Showcases relevant projects and work experience
- Project demonstrations and descriptions

### 8. **Connect.tsx**
Contact/callback section
- Call-to-action for visitors
- Newsletter signup or contact form section

### 9. **Footer.tsx**
Footer section with social links
- Social media links
- Copyright information

---

## Styling & Theming

### Color Scheme
- **Background:** `#0a0f1e` (Dark navy blue)
- **Primary Text:** `#d7e1ff` (Light blue)
- **Accent:** Cyan colors (cyan-100, cyan-200)
- **Theme:** Dark mode with cyberpunk aesthetic

### Tailwind CSS Configuration
- Custom colors in `tailwind.config.js`
- Utility classes used throughout components
- Responsive breakpoints (sm, md, lg, xl)
- Grid and flexbox layouts

### CSS Classes
Common CSS utilities used:
- `.section` - Section wrapper with padding
- `.section-inner` - Inner content container
- `.section-title` - Title styling
- `.card` - Container cards
- `.skill-pill` - Skill badge styling

---

## Features

### 1. **Animated Text Typing**
Hero section cycles through roles with typewriter effect

### 2. **Scroll Animations**
Framer Motion provides smooth animations as sections scroll into view

### 3. **Responsive Design**
Mobile-first design using Tailwind breakpoints

### 4. **Dark Theme**
Professional dark UI with good contrast and readability

### 5. **Fast Performance**
- Vite's instant server start
- Optimized build output
- Code splitting and lazy loading

### 6. **Type Safety**
Full TypeScript support for safer development

---

## Development Guidelines

### Code Standards
- **Language:** TypeScript (strict mode recommended)
- **Formatting:** Consistent with ESLint rules
- **Component Structure:**
  - Functional components with hooks
  - Props clearly typed with TypeScript
  - Naming: PascalCase for components, camelCase for variables

### Component Best Practices
1. Use React hooks (`useState`, `useEffect`, `useMemo`)
2. Separate concerns: styling, logic, markup
3. Memoize expensive computations
4. Clean up side effects in useEffect cleanup functions
5. Use Framer Motion for animations:
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 16 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true }}
     transition={{ duration: 0.5 }}
   >
     {/* content */}
   </motion.div>
   ```

### Adding New Features
1. Create new component in `src/components/`
2. Add section ID and styling
3. Import in `App.tsx`
4. Add Framer Motion animations
5. Update Navbar links if needed
6. Run `npm run lint` to check code quality

---

## Build & Deployment

### Development Build
```bash
npm run build
```
Creates optimized production files in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Test the production build locally.

### Deployment Options
1. **Vercel** - Best for Next.js/React projects
2. **Netlify** - Simple drag-and-drop or git integration
3. **GitHub Pages** - Free hosting for static sites
4. **Heroku** - Full-stack hosting
5. **AWS S3 + CloudFront** - Enterprise solution

### Common Deployment Steps
1. Run `npm run build` to create production bundle
2. Upload `dist/` folder to hosting provider
3. Configure environment variables if needed
4. Set up domain and SSL

---

## Contributing

### Setting Up for Development
1. Fork/clone the repository
2. Install dependencies: `npm install`
3. Create a feature branch: `git checkout -b feature/your-feature`
4. Make changes and test locally with `npm run dev`
5. Run linter: `npm run lint`
6. Commit changes with clear messages
7. Push and create a pull request

### Code Review Checklist
- [ ] TypeScript types are correct
- [ ] ESLint passes without errors
- [ ] Responsive design tested
- [ ] Animations are smooth
- [ ] No console errors/warnings
- [ ] Comments added for complex logic
- [ ] Performance optimized

---

## Troubleshooting

### Port Already in Use
If port 5173 is busy:
```bash
npm run dev -- --port 3000
```

### Build Issues
Clear cache and reinstall:
```bash
rm -r node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
Ensure types are correct:
```bash
npm run lint
```

### Hot Module Replacement Not Working
Restart dev server:
```bash
npm run dev
```

---

## Performance Tips

1. **Lazy Load Images** - Use responsive images
2. **Code Splitting** - Vite handles this automatically
3. **Minimize Animations** - Performance over flashiness
4. **Optimize Assets** - Compress images/videos
5. **Monitor Bundle Size** - Keep production build small

---

## Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [ESLint Rules](https://eslint.org/docs/rules/)

---

**Last Updated:** March 27, 2026  
**Version:** 1.0.0  
**License:** MIT (or your preferred license)
