# Deiondre Smith - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with navy/gold color palette
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎭 Glass-morphism effects
- 📧 Contact form with Formspree integration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Deployment to Vercel

1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy

## Customization

### Profile Photo
Add your profile photo to `public/images/profile.jpg`

### Resume
Add your resume to `public/files/resume.pdf`

### Projects
Edit `src/data/projects.ts` to add your projects

### Contact Form
1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace `YOUR_FORM_ID` in `src/app/contact/page.tsx` with your actual form ID

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Vercel

## Color Palette

- Primary: `#00509d`
- Primary Hover: `#003f88`
- Primary Dark: `#00296b`
- Accent Gold: `#fdc500`
- Accent Gold Light: `#ffd500`
