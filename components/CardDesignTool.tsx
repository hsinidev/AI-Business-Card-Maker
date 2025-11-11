import React, { useState, useRef } from 'react';
import { CardData, CardLayout } from '../types';
import { FONTS, DEFAULT_CARD_DATA } from '../constants';
import CardPreview from './CardPreview';
import { exportSvgToPng } from '../services/DesignExporter';
import TemplateGallery from './TemplateGallery';

const CardDesignTool: React.FC = () => {
  const [cardData, setCardData] = useState<CardData>(DEFAULT_CARD_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLayoutChange = (layout: CardLayout) => {
    setCardData(prev => ({ ...prev, layout }));
  };

  const handleExport = async () => {
    if (!svgRef.current) return;
    setIsLoading(true);
    try {
      await exportSvgToPng(svgRef.current, 'business-card.png', 1);
    } catch (error) {
      console.error('Export failed:', error);
      alert('There was an error exporting your card. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectTemplate = (templateData: Partial<CardData>) => {
    setCardData(prev => ({
      ...prev,
      ...templateData,
    }));
  };

  const inputFields = [
    { id: 'name', label: 'Name', placeholder: 'e.g., Jane Doe' },
    { id: 'title', label: 'Title', placeholder: 'e.g., CEO / Founder' },
    { id: 'company', label: 'Company', placeholder: 'e.g., Innovate Inc.' },
    { id: 'phone', label: 'Phone', placeholder: 'e.g., (123) 456-7890' },
    { id: 'email', label: 'Email', placeholder: 'e.g., jane.doe@innovate.com' },
    { id: 'website', label: 'Website', placeholder: 'e.g., www.innovate.com' },
    { id: 'address', label: 'Address', placeholder: 'e.g., 123 Innovation Dr.' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Business Card Maker</h1>
        <p className="mt-2 text-lg text-gray-300">Design your perfect card in real-time.</p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left Panel: Form Inputs */}
        <div className="lg:col-span-2 bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">👤 Personal Info</h3>
              {inputFields.map(field => (
                <div key={field.id} className="mb-4">
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-1">{field.label}</label>
                  <input
                    type="text"
                    id={field.id}
                    name={field.id}
                    value={cardData[field.id as keyof CardData]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  />
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-white">🎨 Style Controls</h3>
              <div className="mb-4">
                <label htmlFor="fontFamily" className="block text-sm font-medium text-gray-300 mb-1">Font Family</label>
                <select name="fontFamily" id="fontFamily" value={cardData.fontFamily} onChange={handleInputChange} className="w-full bg-gray-900/50 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition">
                  {FONTS.map(font => <option key={font.name} value={font.name}>{font.name}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="textColor" className="block text-sm font-medium text-gray-300 mb-1">Text Color</label>
                  <input type="color" id="textColor" name="textColor" value={cardData.textColor} onChange={handleInputChange} className="w-full h-10 p-1 bg-gray-900/50 border border-gray-600 rounded-md cursor-pointer" />
                </div>
                <div>
                  <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-300 mb-1">Background</label>
                  <input type="color" id="backgroundColor" name="backgroundColor" value={cardData.backgroundColor} onChange={handleInputChange} className="w-full h-10 p-1 bg-gray-900/50 border border-gray-600 rounded-md cursor-pointer" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">📐 Layout</h3>
              <div className="flex bg-gray-900/50 border border-gray-600 rounded-lg p-1">
                <button onClick={() => handleLayoutChange('left')} className={`w-1/2 py-2 text-sm font-medium rounded-md transition ${cardData.layout === 'left' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>Left-Aligned</button>
                <button onClick={() => handleLayoutChange('center')} className={`w-1/2 py-2 text-sm font-medium rounded-md transition ${cardData.layout === 'center' ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}>Center-Aligned</button>
              </div>
            </div>
          </div>
        </div>

        {/* Center Panel: Preview */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          <div className="flex-grow flex items-center justify-center sticky top-24">
            <div className="w-full max-w-xl aspect-[3.5/2]">
               <CardPreview data={cardData} ref={svgRef} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section: Templates and Export */}
       <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-8 mt-8">
          <div className="lg:col-span-2">
            {/* This space intentionally left blank to align with the form panel */}
          </div>
          <div className="lg:col-span-3 bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg">
             <div className="h-96">
                <TemplateGallery onSelectTemplate={handleSelectTemplate} />
             </div>
             <div className="mt-6 text-center">
                 <button onClick={handleExport} disabled={isLoading} className="w-full px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-800 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                     {isLoading ? 'Exporting...' : 'Export Print-Ready PNG (300 DPI)'}
                 </button>
             </div>
          </div>
       </div>

    </div>
  );
};

export default CardDesignTool;
