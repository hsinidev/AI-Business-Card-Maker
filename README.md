# 📇 AI Business Card Maker

<div align="center">

**A modern, real-time business card designer built with React, TypeScript, and Tailwind CSS.**

*Create and export print-ready, high-resolution business cards with an intuitive, cosmic-themed interface.*

</div>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-%2361DAFB?style=for-the-badge&logo=react&logoColor=white"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-%233178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3.x-%2306B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge"/>
</p>

<p align="center">
  <img src="https://i.imgur.com/gL5g0vF.png" alt="AI Business Card Maker Screenshot" width="800"/>
</p>

---

## ✨ Core Features

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🎨 Real-Time Design Canvas</h3>
      <ul>
        <li>Instantly see your changes on the live SVG preview.</li>
        <li>Customize text, title, company, and all contact details.</li>
        <li>Intuitive controls for a seamless design experience.</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>📚 100+ Professional Templates</h3>
      <ul>
        <li>Browse a huge library of curated design templates.</li>
        <li>Apply any style with a single click.</li>
        <li>Find inspiration from corporate, creative, and minimalist designs.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>⚙️ Full Styling Control</h3>
      <ul>
        <li>Choose from a selection of professional web fonts.</li>
        <li>Use color pickers for precise text and background colors.</li>
        <li>Switch between classic left-aligned and modern center-aligned layouts.</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🖼️ High-Resolution Export</h3>
      <ul>
        <li>Export your final design as a <strong>300 DPI print-ready PNG</strong>.</li>
        <li>The output is perfectly sized (1050x600 pixels) for professional printing.</li>
        <li>All processing happens securely in your browser.</li>
      </ul>
    </td>
  </tr>
</table>

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Rendering Engine**: **SVG** (Scalable Vector Graphics) for crisp, scalable visuals.
- **Export Logic**: **HTML Canvas API** for converting SVG to a high-resolution PNG.
- **SEO & Content**: Comprehensive guide on design principles to assist users.

## 🚀 Getting Started

This project is configured to run seamlessly in environments like AI Studio. To set up a similar project on your local machine, follow these steps:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/hsinidev/ai-business-card-maker.git
    cd ai-business-card-maker
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run the Development Server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Navigate to `http://localhost:5173` (or the port specified in your terminal).

## 📁 Project Structure

The codebase is organized into a clean, component-based architecture for maintainability and scalability.

```
/
├── public/
├── src/
│   ├── components/            # Reusable React components
│   │   ├── CardDesignTool.tsx   # Main component with form & preview
│   │   ├── CardPreview.tsx      # SVG visual representation
│   │   ├── Layout.tsx           # Main app layout
│   │   ├── Modal.tsx            # Reusable modal
│   │   └── TemplateGallery.tsx  # Template browsing component
│   ├── services/
│   │   └── DesignExporter.ts    # Logic for SVG to PNG export
│   ├── utils/
│   │   ├── DesignMath.ts        # Constants for card dimensions
│   │   └── SeoArticle.tsx       # In-depth SEO article
│   ├── App.tsx                  # Root React component
│   ├── constants.ts             # App-wide constants (fonts, templates)
│   ├── index.tsx                # App entry point
│   └── types.ts                 # TypeScript type definitions
├── index.html
└── README.md
```

## 🤝 Contributing

Contributions are welcome! If you have ideas for new features, bug fixes, or improvements, please feel free to open an issue or submit a pull request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Crafted with ❤️ by <strong>HSINI MOHAMED</strong>
</p>
<p align="center">
  <a href="https://github.com/hsinidev" target="_blank">GitHub</a> • 
  <a href="http://www.doodax.com" target="_blank">Website</a> • 
  <a href="mailto:hsini.web@gmail.com">Email</a>
</p>
