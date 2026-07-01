# 🚀 Minimalist Local Monaco Code Editor

A sleek, standalone, and high-performance browser code editor powered by **Monaco Editor** (the engine behind VS Code) and served locally using **Node.js & Express**. 

This editor supports real-time syntax highlighting language switching and live theme adjustments completely offline—without relying on external internet CDN links.

---
<img width="1100" height="736" alt="image" src="https://github.com/user-attachments/assets/91a35e87-9984-40cc-83dc-10b3af00f81d" />


## ✨ Features

- 💻 **Core Engine:** Built on top of Microsoft's official Monaco Editor package.
- 🌐 **100% Offline Capable:** Express serves Monaco assets directly out of your local `node_modules`.
- 🔀 **Dynamic Language Switcher:** On-the-fly toggling with custom boilerplate injection for:
  - JavaScript
  - C++
  - Python
  - HTML
- 🎨 **Live Theme Customization:** Instant switching between Dark Mode, Light Mode, and High Contrast.
- 🛡️ **Ultra-Responsive Layout:** Zero rigid layout constraints with integrated automatic workspace recalculation.

---

## 📂 File Architecture

The repository uses a flattened layout optimized for direct root path execution:

```text
monaco-editor/
├── node_modules/         # Auto-generated dependencies
├── index.html            # Core frontend UI framework
├── style.css             # Premium VS Code minimalist styling
├── script.js             # Optional background routing logic
├── server.js             # Express local asset delivery engine
├── package.json          # System scripts & manifests
└── README.md             # Project documentation
```

---

## 🛠️ Step-by-Step Installation

Follow these quick commands to spin up the editor environment locally on your machine:

### 1. Install System Dependencies
Ensure you have [Node.js](https://nodejs.org) installed, then run the packaging installer inside your project folder:
```bash
npm install express monaco-editor
```

### 2. Verify Your Configuration
Ensure your `server.js` maps static links to the current working environment structure (`__dirname`):
```javascript
app.use(express.static(__dirname));
app.use('/monaco-local', express.static(path.join(__dirname, 'node_modules/monaco-editor')));
```

### 3. Launch the Server
Boot up the Express listener script via your shell:
```bash
node server.js
```

### 4. Open in Browser
Point your favorite modern web browser to the local socket port address:
```text
http://localhost:3000
```

---

## 🧪 Quick Verification Checklist
If your workspace opens up visually blank or blocks keyboard cursor focus, run through these immediate debugging actions:
- **Perform a Hard Refresh:** Clear local file memory states using `Ctrl + F5` (or `Cmd + Shift + R` on Mac).
- **Check DevTools:** Press `F12` to open your browser Console panel to make sure there are no pathing errors.

---

## 📜 License
This architecture configuration is open-source and free to distribute. Enjoy hacking your personalized browser toolset!
