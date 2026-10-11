# Om Namdas — Developer Portfolio

A dark futuristic, responsive React portfolio built with Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Requirements
- Node.js 18+ (Node 20 LTS recommended)
- npm

## Run locally
1. Extract this folder.
2. Open a terminal in the `om-portfolio` folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build
```bash
npm run build
npm run preview
```
The optimized website is generated in `dist/`.

## Personalize before publishing
Open `src/App.jsx` and update:
- `email` if you want a different contact address.
- The LinkedIn URLs (currently generic profile URLs) with your actual profile URL.
- Each project's `href` with the exact GitHub repository or live demo URL.
- Project descriptions and skill lists to reflect what you have actually completed.

The portfolio intentionally avoids invented metrics, awards, or experience claims. The four project cards are presented as project concepts/highlights; replace their links with exact repositories and demos.

## Deploy
- **Vercel:** Import the GitHub repository; framework preset Vite, build command `npm run build`, output directory `dist`.
- **Netlify:** Build command `npm run build`, publish directory `dist`.
- Or host the contents of `dist/` on any static web host.

## Features
- Responsive desktop/mobile layout and mobile navigation
- Animated hero, floating code card, orbit graphics, ticker and project cards
- Scroll reveal transitions with Framer Motion
- Reduced-motion accessibility support
- Project, skills, about and contact sections
- Mailto contact action and copy-email button
- SEO description and mobile theme color
