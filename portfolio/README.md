# DevX Cyber // Dark Futuristic Developer Portfolio & Design System

A sleek, modern, high-performance dark futuristic developer portfolio with tokenized CSS design tokens, interactive terminal shell, tech stack matrix, and project showcase.

## 📁 Folder Structure

```
portfolio/
│
├── index.html       # Clean HTML5 structure with semantic sections & cyber HUD
├── css/
│   └── style.css    # CSS design tokens, glassmorphism, glowing utilities, theme variables
├── js/
│   └── script.js    # Interactive terminal, project rendering, design token inspector
├── assets/
│   ├── images/      # Hero banners, project thumbnails, avatars
│   └── icons/       # Custom SVG cyber icons
└── README.md        # Project documentation & setup instructions
```

## 🎨 Design Tokens & Theme Variables

The dark futuristic theme uses CSS custom properties defined in `:root`:

- `--bg-primary`: `#06080e` (Dark Canvas)
- `--bg-secondary`: `#0b101d` (Subtle Panel)
- `--bg-card`: `rgba(14, 22, 38, 0.75)` (Glassmorphism)
- `--neon-cyan`: `#00f0ff` (Primary Glow Accent)
- `--neon-emerald`: `#00ff88` (Matrix Status Accent)
- `--neon-violet`: `#a855f7` (Synth Accent)
- `--neon-amber`: `#f59e0b` (Warning / Solar Accent)
- `--font-sans`: `'Space Grotesk', sans-serif`
- `--font-mono`: `'JetBrains Mono', monospace`

## 🚀 Quick Setup

1. Open `index.html` in any browser or launch a local web server:
   ```bash
   npx serve .
   ```
2. Navigate to `http://localhost:3000`.

## 💻 Interactive Features

- **Cyber Terminal Shell**: Type commands like `help`, `skills`, `projects`, `whoami`, `clear`.
- **Design Tokens Inspector**: Click any token card to copy its CSS variable string to clipboard.
- **Responsive Layout**: Built with mobile-first CSS media queries and flexbox/grid.
