# AI Agent Instructions for Portfolio Project

## Project Overview
This is a React-based portfolio website built with Vite. The project follows a component-based architecture with a clean separation of concerns.

## Architecture
- Single-page application (SPA) built with React 18
- Vite for build tooling and development server
- Component-based structure in `src/components/`
- Main layout defined in `App.jsx`

## Project Structure
```
src/
  ├── components/     # React components
  │   ├── Navbar.jsx    # Navigation component
  │   ├── Hero.jsx     # Hero section
  │   ├── About.jsx    # About section
  │   ├── Skills.jsx   # Skills section
  │   ├── Projects.jsx # Projects section
  │   ├── Contact.jsx  # Contact section
  │   └── Footer.jsx   # Footer component
  ├── App.jsx        # Main application component
  ├── index.css      # Global styles
  └── main.jsx       # Application entry point
```

## Development Workflow
1. Start development server:
   ```bash
   npm run dev
   ```
2. Build for production:
   ```bash
   npm run build
   ```
3. Preview production build:
   ```bash
   npm run preview
   ```

## Component Guidelines
- Each section of the portfolio is a separate component in `src/components/`
- Components are imported and composed in `App.jsx`
- React Icons library is available for icons (`react-icons` package)

## Dependencies
- React 18.3.1
- React Icons 5.5.0
- Vite 5.4.0 with React plugin

## File Naming Conventions
- React components use PascalCase (e.g., `Navbar.jsx`, `Hero.jsx`)
- Component files use `.jsx` extension