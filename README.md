# Momentum

A modern React application built with:

- ⚡️ **Vite** - Next generation frontend tooling
- ⚛️ **React 18** with TypeScript
- 🎨 **Tailwind CSS v4** - Latest version with new features
- 🎭 **Framer Motion** - Production-ready motion library
- 🌊 **Lenis** - Smooth scroll library
- 🧩 **shadcn/ui** - Re-usable components built with Radix UI

## Getting Started

**Note:** This project requires Node.js 20.19+ or 22.12+. If you're on an older version, please upgrade Node.js.

### Install Dependencies

```bash
npm install --legacy-peer-deps
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
│   └── ui/        # shadcn/ui components
├── hooks/         # Custom React hooks (includes useLenis)
├── lib/           # Utility functions
└── App.tsx        # Main application component
```

## Adding shadcn/ui Components

To add shadcn/ui components, use the CLI:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

The components will be added to `src/components/ui/`.

## Features

- ✅ Smooth scrolling with Lenis
- ✅ Framer Motion animations ready to use
- ✅ Tailwind CSS v4 configured
- ✅ TypeScript configured with path aliases (@/)
- ✅ shadcn/ui ready for component installation

## Customization

- Update `src/App.tsx` to customize the layout
- Add your components to `src/components/`
- Modify Tailwind config in `src/index.css` for custom styles
- Install shadcn/ui components as needed

Enjoy building! 🚀
