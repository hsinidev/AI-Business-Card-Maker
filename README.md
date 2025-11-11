# <div align="center">📇 AI Business Card Maker</div>

<p align="center">
  <strong>A modern, real-time business card designer built with React, TypeScript, and Tailwind CSS.</strong>
  <br />
  <em>Create and export print-ready, high-resolution business cards with an intuitive, cosmic-themed interface.</em>
</p>

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

| Feature                       | Description                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 🎨 **Real-Time Design Canvas**  | Instantly see your changes on a live SVG preview. Full customization of text, fonts, colors, and layouts.         |
| 📚 **100+ Pro Templates**       | Kickstart your design with a single click from a massive library of curated, professional templates.              |
| ⚙️ **Full Styling Control**     | Fine-tune your design with a selection of professional web fonts and precise color pickers for brand consistency. |
| 🖼️ **High-Resolution Export**   | Download a **300 DPI print-ready PNG**, processed securely and instantly in your browser.                         |

## 🛠️ Tech Stack & Architecture

This project uses a modern frontend stack chosen for performance, scalability, and developer experience.

| Technology         | Role & Justification                                                                                             |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **React 18**       | Powers the interactive and component-based user interface, allowing for efficient state management and rendering.  |
| **TypeScript**     | Ensures code quality, maintainability, and scalability with static typing.                                       |
| **Tailwind CSS**   | Provides a utility-first CSS framework for rapid, consistent, and modern UI development.                           |
| **SVG**            | Serves as the core rendering engine for the card preview, ensuring crisp, scalable, and easily manipulated graphics. |
| **HTML Canvas API**| Used as the export engine to convert the final SVG design into a high-resolution, print-ready PNG file.           |

## ⚙️ How It Works: The Export Process

The high-resolution export is a key feature handled entirely on the client-side for speed and privacy.

1.  **Live SVG Rendering**: User customizations update the React state, which is passed as props to the `CardPreview` component, re-rendering the SVG in real-time.
2.  **SVG Serialization**: On export, the live SVG DOM element is serialized into an XML string.
3.  **Image Conversion**: The XML string is converted to a `base64` data URL and loaded into a new `Image()` object in memory.
4.  **Canvas Scaling**: A new `<canvas>` element is created with dimensions scaled for 300 DPI (1050x600 pixels).
5.  **High-Resolution Drawing**: Once loaded, the `Image` object (containing the SVG data) is drawn onto the high-resolution canvas.
6.  **PNG Generation**: The canvas content is converted into a PNG data URL, which is then attached to an anchor link to trigger the browser download.

## 🚀 Getting Started

This project is configured to run seamlessly in modern web development environments like AI Studio. To run it locally:

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
    npm start
    ```

4.  **Open in Browser**
    Navigate to `http://localhost:3000` (or the port specified in your terminal).

## 📁 Project Structure

The codebase is organized into a clean, component-based architecture.

```
/
├── public/
│   └── templates/        # Contains SVG files for template previews
├── src/
│   ├── components/       # Core, reusable React components
│   ├── services/         # Business logic (e.g., DesignExporter)
│   ├── utils/            # Helper functions and constants
│   ├── App.tsx           # Root React component
│   ├── constants.ts      # App-wide constants (fonts, template data)
│   ├── index.tsx         # Application entry point
│   └── types.ts          # TypeScript type definitions
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

This project is distributed under the MIT License.

---

<p align="center">
  Crafted with ❤️ by <strong>HSINI MOHAMED</strong>
</p>
<p align="center">
  <a href="https://github.com/hsinidev" target="_blank">GitHub</a> • 
  <a href="http://www.doodax.com" target="_blank">Website</a> • 
  <a href="mailto:hsini.web@gmail.com">Email</a>
</p>
