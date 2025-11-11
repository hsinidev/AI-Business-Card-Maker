import React, { useState, useRef, ChangeEvent } from 'react';
import { CardData } from '../types';
import { FONTS } from '../constants';
import CardPreview from './CardPreview';
import TemplateGallery from './TemplateGallery';
import { exportSvgToPng } from '../services/DesignExporter';

const initialCardData: CardData = {
  name: 'John Doe',
  title: 'Software Engineer',
  company: 'Tech Solutions Inc.',
  phone: '+1 (555) 123-4567',
  email: 'john.doe@example.com',
  website: 'www.example.com',
  address: '123 Tech Street, Silicon Valley, CA',
  fontFamily: 'Roboto',
  textColor: '#FFFFFF',
  backgroundColor: '#1A202C',
  layout: 'left',
};

const CardDesignTool: React.FC = () => {
  const [cardData, setCardData] = useState<CardData>(initialCardData);
  const svgRef = useRef<SVGSVGElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({ ...prev, [name]: value }));
  };

  const handleTemplateSelect = (templateData: Partial<CardData>) => {
    setCardData(prev => ({ ...prev, ...templateData }));
  };
  
  const handleExport = async () => {
    if (!svgRef.current) return;
    setIsExporting(true);
    try {
      // Scale of 1 gives 1050x600px which is 300DPI for a 3.5"x2" card.
      await exportSvgToPng(svgRef.current, 'business-card.png', 1);
    } catch (error) {
      console.error('Export failed:', error);
      alert('An error occurred while exporting the card. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };


  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Left Panel: Controls */}
      <div className="lg:w-1/3 bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-2xl border border-white/10">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Design Your Card</h2>
        <div className="space-y-4">
          {/* Text Inputs */}
          <input type="text" name="name" value={cardData.name} onChange={handleInputChange} placeholder="Name" className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="text" name="title" value={cardData.title} onChange={handleInputChange} placeholder="Title / Position" className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="text" name="company" value={cardData.company} onChange={handleInputChange} placeholder="Company Name" className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="text" name="phone" value={cardData.phone} onChange={handleInputChange} placeholder="Phone Number" className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="email" name="email" value={cardData.email} onChange={handleInputChange} placeholder="Email Address" className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="text" name="website" value={cardData.website} onChange={handleInputChange} placeholder="Website" className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          <input type="text" name="address" value={cardData.address} onChange={handleInputChange} placeholder="Address" className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          
          {/* Design Controls */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Font Family</label>
              <select name="fontFamily" value={cardData.fontFamily} onChange={handleInputChange} className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                {FONTS.map(font => <option key={font.name} value={font.name}>{font.name}</option>)}
              </select>
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Layout</label>
              <select name="layout" value={cardData.layout} onChange={handleInputChange} className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                <option value="left">Left Aligned</option>
                <option value="center">Center Aligned</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="textColor" className="block text-sm font-medium text-gray-300 mb-1">Text Color</label>
              <input id="textColor" type="color" name="textColor" value={cardData.textColor} onChange={handleInputChange} className="w-full h-10 p-1 bg-gray-700 rounded border border-gray-600" />
            </div>
            <div>
              <label htmlFor="backgroundColor" className="block text-sm font-medium text-gray-300 mb-1">Background</label>
              <input id="backgroundColor" type="color" name="backgroundColor" value={cardData.backgroundColor} onChange={handleInputChange} className="w-full h-10 p-1 bg-gray-700 rounded border border-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Preview and Actions */}
      <div className="lg:w-2/3 flex flex-col gap-8">
        <div className="flex-grow bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-2xl border border-white/10 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Live Preview</h2>
            <div className="w-full max-w-lg aspect-[3.5/2]">
                 <CardPreview ref={svgRef} data={cardData} />
            </div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-lg shadow-2xl border border-white/10 flex-grow flex flex-col">
            <TemplateGallery onSelectTemplate={handleTemplateSelect} />
        </div>
         <div className="text-center">
            <button 
              onClick={handleExport} 
              disabled={isExporting}
              className="w-full md:w-auto bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed transform hover:scale-105"
            >
              {isExporting ? 'Exporting...' : 'Export as PNG (300 DPI)'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default CardDesignTool;