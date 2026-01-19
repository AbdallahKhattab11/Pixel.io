# Pixel.io - Creative Digital Agency Website

Pixel.io is a modern, high-performance web application designed for a creative digital agency. Built with the latest **React 19**, **Vite**, and **Tailwind CSS 4**, it features a premium aesthetic with vibrant gradients, glassmorphism effects, and a fully responsive layout that works seamlessly across all devices.

## 🚀 Features

- **Premium UI/UX**: A visually stunning dark-themed design with curated color palettes and refined typography.
- **Responsive Architecture**: specific mobile, tablet, and desktop layouts.
- **Performance Optimized**: Lightning-fast load times powered by Vite.
- **Modular Components**:
  - **Dynamic Navbar**: Responsive navigation with mobile drawer support.
  - **Hero Section**: High-impact introduction with founder profiles and call-to-action buttons.
  - **Services & Pricing**: Clear, grid-based layouts to showcase agency offerings.
  - **Marquee**: Infinite scrolling effect for social proof/brand partners.
  - **Interactive Elements**: Micro-interactions, hover effects, and smooth transitions.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6+](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Linting**: ESLint with React Hooks & Refresh plugins

## 📦 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/your-username/pixel-io.git
    cd pixel-io/my-app
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Run Development Server**

    ```bash
    npm run dev
    ```

    The app will typically launch at `http://localhost:5173`.

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```bash
my-app/
├── public/             # Static public assets
├── src/
│   ├── assets/         # Images, fonts, and global media
│   ├── components/     # Reusable React components
│   │   ├── ui/         # Generic UI elements (e.g., BackgroundEffect)
│   │   ├── Hero.jsx    # Main landing section
│   │   ├── Navbar.jsx  # Navigation bar
│   │   └── ...         # features (Pricing, Services, etc.)
│   ├── App.jsx         # Main application layout
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind imports & global styles
├── package.json        # Dependencies and scriptsmap
├── vite.config.js      # Vite configuration
└── eslint.config.js    # Linting rules
```

## 🎨 Design System

This project utilizes a customized Tailwind configuration (via CSS variables in v4) to achieve its distinct look:

- **Colors**: Uses `indigo`, `cyan`, and custom gradients (`bg-linear-to-r`).
- **Effects**: Heavy use of `backdrop-blur`, `bg-white/10` for glass effects, and `animate-ping` for attention interactions.


