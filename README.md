<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>macOS Portfolio README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      padding: 20px;
      max-width: 900px;
      margin: auto;
    }
    h1, h2, h3 {
      color: #1e1e1e;
    }
    code {
      background: #f5f5f5;
      padding: 2px 6px;
      border-radius: 4px;
    }
    pre {
      background: #f0f0f0;
      padding: 10px;
      border-radius: 6px;
      overflow-x: auto;
    }
    ul {
      margin-bottom: 10px;
    }
    a {
      color: #0066cc;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>macOS Portfolio</h1>

  <p>
    A modern, interactive macOS-style portfolio built with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Vite</strong>.  
    This project mimics the macOS desktop environment with draggable windows, dock animations, and a "genie" minimize effect, providing a unique portfolio experience.
  </p>

  <h2>🛠 Tech Stack</h2>
  <ul>
    <li>React + TypeScript</li>
    <li>Vite for fast bundling and HMR</li>
    <li>Zustand for state management (windows, z-index, focus)</li>
    <li>GSAP for smooth animations</li>
    <li>Lucide Icons for macOS-style icons</li>
    <li>TailwindCSS for styling</li>
  </ul>

  <h2>🎯 Features</h2>
  <ul>
    <li>Fully draggable windows with z-index focus</li>
    <li>Dock with magnification animation</li>
    <li>Open, close, and minimize windows with smooth animations</li>
    <li>Mac-style "genie minimize effect" toward the dock</li>
    <li>Interactive window controls: minimize, maximize, close</li>
    <li>Responsive layout for desktop screens</li>
  </ul>

  <h2>🚀 Getting Started</h2>
  <p>Follow these steps to run the project locally:</p>

  <h3>1. Clone the repository</h3>
  <pre><code>git clone &lt;your-repo-url&gt;
cd macos-portfolio</code></pre>

  <h3>2. Install dependencies</h3>
  <pre><code>npm install
# or
yarn install</code></pre>

  <h3>3. Run the development server</h3>
  <pre><code>npm run dev
# or
yarn dev</code></pre>

  <h3>4. Open in browser</h3>
  <p>Go to <code>http://localhost:5173</code> to see your macOS portfolio in action.</p>

  <h2>⚙ ESLint & TypeScript</h2>
  <p>The project includes a robust ESLint setup with type-aware linting for React + TypeScript.</p>
  <pre><code>eslint.config.js
- Recommended TypeScript rules
- React + React-DOM specific lint rules
- Stylistic rules for consistency
</code></pre>

  <h2>📂 Project Structure</h2>
  <ul>
    <li><code>src/components</code> - React components like Window, Dock, WindowHeader</li>
    <li><code>src/store</code> - Zustand stores for windows and app state</li>
    <li><code>src/constants</code> - App constants like dockApps, WINDOW_CONFIG</li>
    <li><code>src/styles</code> - Tailwind CSS & global styles</li>
  </ul>

  <h2>💡 Notes</h2>
  <ul>
    <li>Each window is wrapped with a <code>WindowWrapper</code> HOC for open/close animations and focus handling</li>
    <li>Dock icons have hover magnification and show/hide icons for minimized windows</li>
    <li>Genie minimize effect animates windows toward the dock icon using GSAP</li>
  </ul>

  <h2>📌 License</h2>
  <p>MIT License</p>

  <h2>🔗 Links</h2>
  <ul>
    <li><a href="https://vitejs.dev/">Vite</a></li>
    <li><a href="https://reactjs.org/">React</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
    <li><a href="https://greensock.com/gsap/">GSAP</a></li>
    <li><a href="https://zustand-demo.pmnd.rs/">Zustand</a></li>
  </ul>

</body>
</html>
