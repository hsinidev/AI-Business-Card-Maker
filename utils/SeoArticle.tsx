import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Ultimate Guide to Business Card Design: From Concept to Print-Ready Masterpiece",
    "author": {
      "@type": "Person",
      "name": "HSINI MOHAMED"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AI Business Card Maker",
      "logo": {
        "@type": "ImageObject",
        "url": "https://picsum.photos/seed/logo/200/60"
      }
    },
    "datePublished": "2023-10-27",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://example.com/business-card-design-guide"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the standard business card size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard business card size in the United States and Canada is 3.5 x 2 inches (88.9 x 50.8 mm). In Europe and many other parts of the world, the standard size is typically 85 x 55 mm."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between CMYK and RGB?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RGB (Red, Green, Blue) is an additive color model used for digital displays like monitors and screens. CMYK (Cyan, Magenta, Yellow, Key/Black) is a subtractive color model used for physical printing. For business cards, your final design file should always be in CMYK to ensure color accuracy on paper."
        }
      },
      {
        "@type": "Question",
        "name": "Why is bleed important for printing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bleed is the area of artwork that extends beyond the actual edge (trim line) of the card. It's crucial because it ensures that there are no unprinted white edges after the cards are cut to their final size. A standard bleed is typically 1/8th of an inch (0.125 inches or about 3mm) on all sides."
        }
      }
    ]
  };

  const tableData = [
    { service: 'Vistaprint', resolution: '300 DPI minimum', format: 'PDF (recommended), JPG, PNG', color: 'CMYK', bleed: '0.125 inches' },
    { service: 'MOO', resolution: '300 DPI minimum', format: 'PDF, JPG, PNG, GIF', color: 'CMYK', bleed: '0.125 inches' },
    { service: 'GotPrint', resolution: '300-350 DPI', format: 'PDF (recommended), JPG, TIFF, EPS', color: 'CMYK', bleed: '0.125 inches' },
  ];

  return (
    <div className="relative">
      <article 
        className={`prose prose-invert prose-lg max-w-none text-gray-300 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[5000px]' : 'max-h-[12rem]'}`}
      >
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

        <h1 className="text-white">The Ultimate Guide to Business Card Design: From Concept to Print-Ready Masterpiece</h1>

        <p>In a world dominated by digital connections, the humble business card remains a powerful, tangible tool for networking. A well-designed card does more than just share your contact information; it communicates your brand identity, professionalism, and attention to detail. This comprehensive guide will walk you through every aspect of business card design, from foundational principles to the technical requirements for a flawless print.</p>
        
        <nav>
          <h2 className="text-white">Table of Contents</h2>
          <ul>
            <li><a href="#importance">The Enduring Importance of a Business Card</a></li>
            <li><a href="#dimensions">Understanding Dimensions: Bleed, Trim, and Safety Lines</a></li>
            <li><a href="#layout">Effective Layout Psychology: Guiding the Eye</a></li>
            <li><a href="#typography">The Power of Typography</a></li>
            <li><a href="#color">Color Theory: CMYK vs. RGB</a></li>
            <li><a href="#exporting">Technicalities of High-Resolution Export in JavaScript</a></li>
            <li><a href="#requirements-table">Print Service File Requirements</a></li>
            <li><a href="#faq">Frequently Asked Questions (FAQ)</a></li>
          </ul>
        </nav>

        <section id="importance">
          <h2 className="text-white">The Enduring Importance of a Business Card</h2>
          <p>A business card is a physical artifact of a professional encounter. It’s a direct marketing tool that’s both personal and efficient. Unlike a digital contact exchange, which can be impersonal and easily lost in a sea of data, a physical card creates a memorable moment. It shows you are prepared and serious about your business. A unique, high-quality card can be a conversation starter and a lasting reminder of you and your brand.</p>
          <p>Consider the tactile experience: the weight of the cardstock, the texture of the finish (matte, gloss, or uncoated), and any special features like embossing or foil stamping. These elements contribute to a perception of quality and can significantly elevate your brand's image. In essence, your business card is a pocket-sized billboard for your brand.</p>
        </section>

        <section id="dimensions">
          <h2 className="text-white">Understanding Dimensions: Bleed, Trim, and Safety Lines</h2>
          <p>Getting the dimensions right is the first technical hurdle in business card design. Misunderstanding these concepts can lead to disappointing print results, such as white borders or cut-off text.</p>
          <ul>
            <li><strong>Trim Line:</strong> This is the actual, final edge of the card. For a standard US card, this is 3.5 x 2 inches. This is where the printer's guillotine will cut.</li>
            <li><strong>Bleed Area:</strong> To avoid unprinted edges, any background color or image that you want to extend to the very edge of the card must go beyond the trim line into the bleed area. The standard bleed is 0.125 inches (or 1/8 inch) on all four sides. This means your total file size should be 3.75 x 2.25 inches.</li>
            <li><strong>Safety Line (or Safe Zone):</strong> This is an inner margin, typically 0.125 inches inside the trim line. All your critical content—text, logos, and important graphic elements—should be kept within this area. This ensures that nothing vital is accidentally trimmed off during the cutting process, which can have minor variations.</li>
          </ul>
          <p>Think of it as three concentric rectangles: the outer bleed line, the middle trim line, and the inner safety line. Your background touches the bleed line, and your content stays inside the safety line.</p>
        </section>
        
        <section id="layout">
          <h2 className="text-white">Effective Layout Psychology: Guiding the Eye</h2>
          <p>A great layout is intuitive. It guides the viewer's eye through the information in a logical sequence. The most crucial element—usually your name or company logo—should have the most visual weight.</p>
          <ul>
            <li><strong>Hierarchy:</strong> Use size, weight (boldness), and color to create a clear visual hierarchy. Your name should be larger than your title, which might be larger than your contact details. This tells the viewer what to read first.</li>
            <li><strong>White Space:</strong> Don't cram your card with information. Negative or white space is essential for a clean, professional look. It gives your content room to breathe and improves readability. A cluttered card looks unprofessional and is difficult to read.</li>
            <li><strong>Alignment:</strong> Consistent alignment creates a sense of order and polish. Whether you choose a left-aligned or center-aligned layout, stick to it. Use invisible grid lines to align text elements for a sharp, organized appearance.</li>
            <li><strong>Rule of Thirds:</strong> A classic design principle, the rule of thirds can be applied to business cards. Imagine your card is divided into a 3x3 grid. Placing key elements at the intersections of these lines can create a more dynamic and visually interesting composition than simply centering everything.</li>
          </ul>
        </section>

        <section id="typography">
          <h2 className="text-white">The Power of Typography</h2>
          <p>The fonts you choose say a lot about your brand. A law firm might use a classic serif font to convey tradition and authority, while a tech startup might opt for a clean, modern sans-serif font to appear innovative and approachable.</p>
          <ul>
            <li><strong>Limit Your Fonts:</strong> A common rule of thumb is to use no more than two different fonts. One for headlines (like your name) and another for body text (contact info). This creates contrast without being chaotic.</li>
            <li><strong>Readability is Key:</strong> Ensure your font size is legible. A font size of 7-8pt is generally the minimum for contact information, while your name might be 10-12pt or larger. Avoid overly decorative or script fonts for small text.</li>
            <li><strong>Kerning and Leading:</strong> Pay attention to the spacing between letters (kerning) and lines (leading). Proper spacing can dramatically improve readability and the overall aesthetic of your card.</li>
          </ul>
        </section>

        <section id="color">
          <h2 className="text-white">Color Theory: CMYK vs. RGB</h2>
          <p>This is one of the most critical technical aspects of print design. What you see on your screen is not always what you get on paper unless you design with the correct color model.</p>
          <ul>
              <li><strong>RGB (Red, Green, Blue):</strong> This is an *additive* color model. It starts with black (no light) and adds red, green, and blue light to create a spectrum of colors. It's used for digital displays like monitors, cameras, and phone screens. Designing in RGB for a print project will result in color shifting, as the printer must convert the colors to CMYK, often leading to duller, less vibrant results.</li>
              <li><strong>CMYK (Cyan, Magenta, Yellow, Key/Black):</strong> This is a *subtractive* color model. It starts with a white surface (paper) and subtracts brightness by adding inks. This is the standard model for professional printing. Always set up your design file in CMYK from the beginning to ensure the colors you choose are accurate when printed.</li>
          </ul>
        </section>

        <section id="exporting">
          <h2 className="text-white">Technicalities of High-Resolution Export in JavaScript</h2>
          <p>When using a web-based tool like this one, the final output needs to be generated in a way that's suitable for printing. This involves converting a screen-based format (like SVG or Canvas) into a high-resolution raster image (like PNG or JPEG).</p>
          <p>The key is **Dots Per Inch (DPI)**, also known as Pixels Per Inch (PPI). For screens, 72 DPI is standard. For high-quality printing, the standard is **300 DPI**.</p>
          <p>To achieve this in JavaScript:</p>
          <ol>
            <li><strong>Determine Final Dimensions in Pixels:</strong> Calculate the required pixel dimensions. For a 3.5-inch wide card at 300 DPI, the calculation is 3.5 inches * 300 DPI = 1050 pixels wide. For a 2-inch tall card, it's 2 inches * 300 DPI = 600 pixels tall.</li>
            <li><strong>Render to a Scaled Canvas:</strong> The on-screen preview (often an SVG or a smaller canvas) needs to be rendered onto a larger, in-memory HTML <code>&lt;canvas&gt;</code> element that is set to these high-resolution dimensions (e.g., 1050x600).</li>
            <li><strong>Convert SVG to Image:</strong> If using SVG, it must first be converted into a format the canvas can draw. This is typically done by serializing the SVG to an XML string, creating a data URL from it, and loading that URL into an <code>Image()</code> object.</li>
            <li><strong>Draw and Export:</strong> Once the image (from the SVG) is loaded, it is drawn onto the high-resolution canvas using <code>ctx.drawImage()</code>. Finally, the canvas content is exported to a data URL using <code>canvas.toDataURL('image/png')</code>, which can then be used to trigger a file download for the user.</li>
          </ol>
        </section>
        
        <section id="requirements-table">
          <h2 className="text-white">Print Service File Requirements</h2>
          <p>While most online printing services have similar requirements, it's always best to check their specific guidelines. Here’s a general overview of what major services expect:</p>
          <div className="overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>Print Service</th>
                  <th>Resolution</th>
                  <th>File Format</th>
                  <th>Color Mode</th>
                  <th>Required Bleed</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.service}>
                    <td>{row.service}</td>
                    <td>{row.resolution}</td>
                    <td>{row.format}</td>
                    <td>{row.color}</td>
                    <td>{row.bleed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        <section id="faq">
          <h2 className="text-white">Frequently Asked Questions (FAQ)</h2>
          <div>
            <h3>What is the standard business card size?</h3>
            <p>The standard business card size in the United States and Canada is 3.5 x 2 inches (88.9 x 50.8 mm). In Europe and many other parts of the world, the standard size is typically 85 x 55 mm.</p>
            <h3>What's the difference between CMYK and RGB?</h3>
            <p>RGB (Red, Green, Blue) is an additive color model used for digital displays like monitors and screens. CMYK (Cyan, Magenta, Yellow, Key/Black) is a subtractive color model used for physical printing. For business cards, your final design file should always be in CMYK to ensure color accuracy on paper.</p>
            <h3>Why is bleed important for printing?</h3>
            <p>Bleed is the area of artwork that extends beyond the actual edge (trim line) of the card. It's crucial because it ensures that there are no unprinted white edges after the cards are cut to their final size. A standard bleed is typically 1/8th of an inch (0.125 inches or about 3mm) on all sides.</p>
            <h3>Should I use a matte or gloss finish?</h3>
            <p>This depends on your brand. A gloss finish makes colors pop and is great for photo-heavy cards, but it can show fingerprints. A matte finish is more subtle and modern, feels great to the touch, and you can easily write on it. A soft-touch or silk lamination offers a premium, velvety feel.</p>
            <h3>What information should I include on my business card?</h3>
            <p>At a minimum, include your Name, Title, Company Name, Phone Number, and Email Address. A Website is also essential. Depending on your business, you might add a physical Address, social media handles, or a QR code linking to your portfolio or LinkedIn profile.</p>
          </div>
        </section>
      </article>

      {!isExpanded && (
        <div className="absolute bottom-10 left-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none"></div>
      )}
      <div className="text-center mt-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800 transition-all duration-300"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default SeoArticle;
