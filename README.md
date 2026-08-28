# Personal Portfolio Website — Mano Bala

A clean, modern, and fully responsive single-page portfolio website designed for college project submission and GitHub. It highlights engineering capabilities in Cloud Architecture, DevOps automation, and Python backend development.

## 🚀 Features

- **Responsive Modern Design**: Clean grid card layout styled with Tailwind CSS, adapted for mobile, tablet, and desktop screens.
- **Sticky Navigation**: Smooth-scrolling sticky header navigating to Home, About, Skills, Projects, and Contact sections.
- **Interactive Project Showcase**: Deep dives into systems engineering projects using interactive details modals, showing actual pipelines, technical features, and architectures.
- **Customizable Links**: Simple variables configured at the top of components to easily update email, LinkedIn, and GitHub links.
- **Subtle Entrance Animations**: Light entrance transitions utilizing Framer Motion.

## 🛠️ Tech Stack

- **Frontend Core**: React 19 (TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: React Icons (Fa, Hi, Si)

## 📁 Repository Structure

```text
├── src/
│   ├── components/
│   │   ├── Header.tsx     # Sticky navigation with mobile menu
│   │   ├── Hero.tsx       # Entrance animation & introductory hooks
│   │   ├── About.tsx      # Brief introduction & domains of interest
│   │   ├── Skills.tsx     # Cloud/DevOps & Programming tag matrices
│   │   ├── Projects.tsx   # Project cards & architectural popup modals
│   │   └── Contact.tsx    # Contact links configuration
│   ├── App.tsx            # Main layout wrapper
│   ├── index.css          # Tailwind configuration & global themes
│   └── main.tsx           # React bootstrap entrypoint
├── index.html             # HTML entry & SEO meta tags
├── package.json           # Scripts and dependencies
└── tsconfig.json          # TypeScript configurations
```

## ⚙️ Installation & Running Locally

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.

4. **Build for production:**
   ```bash
   npm run build
   ```
   This generates a highly optimized distribution bundle in the `dist/` directory ready to be served on GitHub Pages, Vercel, Netlify, or AWS S3.

## 📝 Customization

To personalize the contact details or links:
1. Open [src/components/Contact.tsx](file:///src/components/Contact.tsx) and edit the `CONTACT_LINKS` constant at the top of the file:
   ```typescript
   const CONTACT_LINKS = {
     email: "mailto:your-email@example.com",
     github: "https://github.com/your-username",
     linkedin: "https://linkedin.com/in/your-profile",
   };
   ```
2. Open [src/components/Projects.tsx](file:///src/components/Projects.tsx) to modify the project cards, update repositories, or adjust technical specifications.
