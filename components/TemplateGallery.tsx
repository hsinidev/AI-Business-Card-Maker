import React from 'react';
import { TEMPLATES } from '../constants';
import { CardData } from '../types';

interface TemplateGalleryProps {
  onSelectTemplate: (templateData: Partial<CardData>) => void;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ onSelectTemplate }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <h3 className="text-xl font-bold mb-4 text-center text-white flex-shrink-0">Choose a Template</h3>
      <div className="flex-grow overflow-y-auto pr-2 -mr-2 template-gallery-scrollbar">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEMPLATES.map((template) => (
            <div
              key={template.name}
              className="w-full cursor-pointer border-2 border-transparent hover:border-indigo-400 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
              onClick={() => onSelectTemplate(template.data)}
              title={`Apply ${template.name} template`}
            >
              <div
                className="h-24 w-full flex flex-col justify-center items-center p-2 text-center"
                style={{
                  backgroundColor: template.data.backgroundColor,
                  color: template.data.textColor,
                  fontFamily: template.data.fontFamily,
                }}
              >
                <div className="font-bold text-sm truncate w-full">{template.name}</div>
                <div className="text-xs opacity-80 mt-1 capitalize">{template.data.layout}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;