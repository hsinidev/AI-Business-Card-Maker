# 📇 AI Business Card Maker

A modern, responsive web application built with React and TypeScript that allows users to design a professional business card in real-time and export it as a high-resolution, print-ready PNG file.

![AI Business Card Maker Screenshot](https://i.imgur.com/gL5g0vF.png)

## ✨ Key Features

- **Real-Time Visual Feedback**: See your business card design update instantly as you type.
- **Full Customization**: Control everything from text content (name, title, contact info) to styling (fonts, colors, layout).
- **High-Resolution Export**: Generate a 300 DPI print-ready PNG (1050x600 pixels), perfect for professional printing services.
- **Modern & Responsive UI**: A clean, intuitive, and mobile-friendly interface built with Tailwind CSS.
- **Left & Center Layouts**: Quickly switch between classic left-aligned and modern center-aligned text layouts.
- **Client-Side Processing**: All design processing happens securely in your browser. No data is stored on a server.
- **SEO Optimized**: Includes a comprehensive guide on business card design principles to help users make effective choices.

## 🚀 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Rendering Engine**: SVG (Scalable Vector Graphics) for crisp, scalable visuals.
- **Export Logic**: HTML Canvas API for converting SVG to a high-resolution PNG.
- **Bundler**: Vite (as simulated in AI Studio)

## 🔧 Running Locally

This project is set up to run in an environment like AI Studio. To run a similar project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ai-business-card-maker.git
    cd ai-business-card-maker
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173` (or the port specified by your terminal).

## 📁 File Structure

The project follows a standard React component-based architecture:

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── CardDesignTool.tsx   # Main component with form and preview
│   │   ├── CardPreview.tsx      # SVG-based visual representation of the card
│   │   ├── Layout.tsx           # Main app layout (header, footer, background)
│   │   └── Modal.tsx            # Reusable modal component
│   ├── services/
│   │   └── DesignExporter.ts    # Logic for exporting SVG to PNG
│   ├── utils/
│   │   ├── DesignMath.ts        # Constants for card dimensions
│   │   └── SeoArticle.tsx       # In-depth article on design principles
│   ├── App.tsx                  # Root component
│   ├── constants.ts             # App-wide constants (e.g., fonts)
│   ├── index.css                # Global styles
│   ├── main.tsx                 # App entry point
│   └── types.ts                 # TypeScript type definitions
├── index.html
└── README.md
```

## ✍️ Author

This project was created and designed by **HSINI MOHAMED**.

- **GitHub**: [@hsinidev](https://github.com/hsinidev)
- **Website**: [doodax.com](http://www.doodax.com)
- **Email**: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)
