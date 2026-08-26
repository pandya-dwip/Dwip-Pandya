# Dwip Pandya — Software QA Engineer & SDET Portfolio

A modern, high-performance, dark-themed portfolio website for **Dwip Pandya** (Software QA Engineer & SDET). Built with **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Vite**. Hosted live at **[https://dwip.in](https://dwip.in)**.

---

## 🌟 Features & Highlights

- **⚡ Sleek Glassmorphic UI:** Premium dark design system featuring dynamic glow effects, cinematic grain overlays, and custom glassmorphism.
- **🌀 Smooth Momentum Scrolling:** Integrated `@studio-freight/lenis` smooth scroll engine for fluid scrolling transitions.
- **🧲 Magnetic Interactions:** Custom `useMagnetic` hook providing dynamic magnetic hover effects on buttons and interactive components.
- **📁 Categorized Project Showcase:** Interactive project gallery filtering through Automation Frameworks, Web Apps, Chrome Extensions, and Mobile Applications (Clair, GoNext, Sticky Notes, QA Report Generator, etc.).
- **📊 Experience & Impact Metrics:** Detailed timeline highlighting QA achievements, test coverage stats, and test engineering workflows.
- **📱 Fully Responsive & Accessible:** Optimized for seamless performance across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | React 19 & TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS & Custom CSS Utilities |
| **Animations** | Framer Motion & GSAP |
| **Smooth Scroll** | `@studio-freight/lenis` |
| **Icons** | Lucide React & Custom SVG Brand Icons |
| **Deployment** | Apache Web Server (Hostinger FTP / FileZilla) |

---

## 📂 Project Structure

```
Dwip-Pandya/
├── public/
│   ├── .htaccess               # Apache SPA rewrite rules & DirectoryIndex
│   ├── favicon.svg             # Website favicon
│   └── icons.svg               # SVG sprite assets
├── src/
│   ├── assets/                 # Static images and media
│   ├── components/             # UI Components
│   │   ├── Navbar.tsx          # Floating header navigation
│   │   ├── Hero.tsx            # Hero section with stats & CTAs
│   │   ├── About.tsx           # QA philosophy & bio
│   │   ├── Experience.tsx      # Career timeline & achievements
│   │   ├── Skills.tsx          # Technical skills & tools
│   │   ├── Projects.tsx        # Filterable project showcase
│   │   ├── Contact.tsx         # Contact form & social channels
│   │   ├── Footer.tsx          # Footer & quick links
│   │   └── BrandIcons.tsx      # Custom tech stack SVGs
│   ├── hooks/                  # Custom React hooks (useLenis, useMagnetic)
│   ├── App.tsx                 # Root Application layout
│   ├── index.css               # Global styles & glassmorphism utilities
│   └── main.tsx                # React DOM entry point
├── dist/                       # Production build output (generated after build)
├── package.json                # Project dependencies & scripts
├── tailwind.config.js          # Tailwind CSS theme configuration
└── vite.config.ts              # Vite configuration
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/pandya-dwip/Dwip-Pandya.git
cd Dwip-Pandya
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
This compiles TypeScript, bundles React assets, and outputs optimized production files into the `dist/` directory (including `.htaccess`).


## 🚀 Phase 2 Plan: Standalone Sub-Directory Projects

In **Phase 2**, standalone display projects (e.g. non-tech portfolios, showcase sites, and custom sub-projects) will be hosted alongside the main portfolio under dedicated sub-paths (e.g., `dwip.in/<project-name>`).

### Server Architecture for Standalone Projects

Each standalone project will reside in its own subfolder inside `/public_html`:

```
public_html/
├── .htaccess            # Main Portfolio Apache SPA Router
├── index.html           # Main Portfolio Entry (dwip.in)
├── assets/              # Main Portfolio Assets
└── <project-name>/      # Standalone Display Project (dwip.in/<project-name>)
    ├── index.html       # Standalone project entry point
    └── assets/          # Standalone project assets
```

### How to Deploy a Standalone Sub-Directory Project:

1. Connect to the server via **FileZilla** / FTP.
2. Navigate to `/public_html`.
3. Create a new directory named after the project (e.g., `/public_html/<project-name>`).
4. Upload all build output files of that standalone project directly into `/public_html/<project-name>/`.
5. Access your new standalone project live at `https://dwip.in/<project-name>`.

*Note: The root `.htaccess` file is pre-configured with `RewriteCond %{REQUEST_FILENAME} !-d` so Apache automatically detects and serves sub-directory projects without route conflicts.*
