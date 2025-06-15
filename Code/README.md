# MySmartKit - Book Collection Website

A responsive and accessible website showcasing the MySmartKit book collection with interactive modals and detailed book presentations.

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the Code directory:
```bash
cd Code/
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
Code/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── data/          # Static data and content
│   ├── hooks/         # Custom React hooks
│   ├── styles/        # CSS and styling
│   └── utils/         # Utility functions
├── public/            # Static assets
└── package.json
```

## Features

- Responsive design for all screen sizes
- Interactive book modals with detailed views
- Animated flipbook showcasing book materials
- Blog section with age-targeted content
- Accessible navigation and keyboard support
- Performance optimized with lazy loading

## Deployment

The site can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.