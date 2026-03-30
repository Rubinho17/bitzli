# Bitzli (Local Association Website)

A simple React site for a local association that organizes events.

## 🛠 Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open the URL shown in your terminal (usually `http://localhost:5173`).

## 🚀 Build & Publish (GitHub Pages)

This repo is configured to deploy to GitHub Pages using the `gh-pages` package.

> Update `vite.config.js` ↦ `base` if your repository name is not `bitzli`.

1. Install dependencies (if not already done):

```bash
npm install
```

2. Deploy:

```bash
npm run deploy
```

This will publish the built site to the `gh-pages` branch.

## 📄 What’s included

- `src/App.jsx` — landing page with sections: Logo + hero, events, about, contact
- `src/App.css` — global styling for layout and theme
- `vite.config.js` — base path configured for GitHub Pages deployment

---

If you want to add more events, update `eventsData` in `src/App.jsx`.
