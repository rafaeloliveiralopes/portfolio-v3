# Portfolio V3 - Rafael Lopes

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern, fully responsive portfolio website showcasing Rafael Lopes' work as a Full-Stack Developer. Built with cutting-edge technologies and featuring a sleek, dark-themed design with smooth animations and multilingual support.

## ✨ Features

- **Multilingual Support**: Available in English, Portuguese, and Spanish with automatic language detection
- **Dark Theme**: Beautiful dark mode design with gradient effects and glow animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Modern UI Components**: Built with shadcn/ui and Radix UI primitives
- **Smooth Animations**: Custom Tailwind CSS animations for enhanced user experience
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Type-Safe**: Built with TypeScript for reliability and better developer experience
- **Performance Focused**: Optimized with Vite for lightning-fast development and production builds

## 🚀 Tech Stack

### Frontend
- **React 18.3.1** - Modern UI library
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Next-generation frontend tooling
- **React Router DOM 6.30.1** - Client-side routing

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful hand-crafted icons

### State Management & Forms
- **TanStack Query 5.83.0** - Powerful data synchronization
- **React Hook Form 7.61.1** - Performant form handling
- **Zod 3.25.76** - TypeScript-first schema validation

### Internationalization
- **i18next 25.4.2** - Internationalization framework
- **react-i18next 15.7.3** - React integration for i18next
- **i18next-browser-languagedetector** - Automatic language detection

### UI Enhancements
- **next-themes** - Perfect dark mode in React
- **Sonner** - Opinionated toast notifications
- **Embla Carousel** - Lightweight carousel library
- **Recharts** - Composable charting library

## 📦 Installation

### Prerequisites
- Node.js >= 18.0.0
- pnpm >= 8.0.0 (recommended) or npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/rafaeloliveiralopes/portfolio-v3.git
cd portfolio-v3
```

2. Install dependencies:
```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

3. Start the development server:
```bash
# Using pnpm
pnpm dev

# Or using npm
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:8080
```

## 🛠️ Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Build for development
pnpm build:dev

# Preview production build
pnpm preview

# Run ESLint
pnpm lint
```

## 📁 Project Structure

```
portfolio-v3/
├── public/                 # Static assets
│   └── robots.txt         # SEO robots configuration
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ThemeProvider.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and configurations
│   │   └── i18n.ts       # Internationalization setup
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Main landing page
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## 🌍 Internationalization

The project supports three languages out of the box:
- 🇺🇸 English (en)
- 🇧🇷 Portuguese (pt)
- 🇪🇸 Spanish (es)

Language detection is automatic based on browser settings, and the preference is stored in localStorage. All translations are managed in `src/lib/i18n.ts`.

## 🎨 Design Features

- **Gradient Animations**: Dynamic gradient shifts and glow effects
- **Smooth Scrolling**: Seamless navigation between sections
- **Typing Effect**: Dynamic text display in hero section
- **Float Animations**: Subtle floating animations for UI elements
- **Mesh Backgrounds**: Animated mesh gradient backgrounds
- **Glass Morphism**: Modern frosted glass effect on cards

## 🔧 Configuration

### Vite
The project uses Vite with React SWC plugin for faster builds. Configuration can be modified in `vite.config.ts`.

### Tailwind CSS
Custom theme extensions including colors, animations, and shadows are defined in `tailwind.config.ts`.

### TypeScript
Strict type checking is enabled. Configuration files:
- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js-specific settings

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: >= 640px
- Desktop: >= 1024px
- Large Desktop: >= 1400px

## 📄 License

This project is private and all rights are reserved by Rafael Lopes.

## 👤 Author

**Rafael Lopes**
- Full-Stack Developer
- Specializing in React, TypeScript, and modern web technologies
- 3+ years of experience helping entrepreneurs digitize their businesses

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - For the beautiful UI components
- [Radix UI](https://www.radix-ui.com/) - For accessible component primitives
- [Lucide](https://lucide.dev/) - For the icon library
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework

---

Made with ❤️ and ☕ by Rafael Lopes
