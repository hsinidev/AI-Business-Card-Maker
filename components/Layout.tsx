import React, { useState } from 'react';
import Modal from './Modal';
import SeoArticle from '../utils/SeoArticle';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return {
          title: 'About Us',
          content: <p>This Business Card Maker is a project designed to showcase modern web development techniques using React, TypeScript, and Tailwind CSS. It provides a simple, intuitive interface for creating and exporting professional business cards.</p>
        };
      case 'contact':
        return {
          title: 'Contact Us',
          content: (
            <div>
              <p>For inquiries, please reach out to:</p>
              <p className="mt-2">
                <a href="mailto:hsini.web@gmail.com" className="text-blue-400 hover:underline">hsini.web@gmail.com</a>
              </p>
              <p>
                <a href="http://www.doodax.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">doodax.com</a>
              </p>
            </div>
          )
        };
      case 'guide':
        return {
          title: 'Guide to Effective Business Card Design',
          content: <SeoArticle />
        };
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: <p>We respect your privacy. All data entered into this tool is processed locally in your browser and is not stored on our servers. We do not collect any personal information.</p>
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          content: <p>This tool is provided for free, for personal and commercial use. By using this service, you agree not to use it for any illegal purposes. The creators are not liable for any issues arising from its use.</p>
        };
      case 'dmca':
        return {
          title: 'DMCA Policy',
          content: <p>If you believe that any content on this site infringes upon your copyright, please contact us with the necessary information, and we will address it promptly.</p>
        };
      default:
        return { title: '', content: null };
    }
  };

  const modalData = renderModalContent();
  const navLinks: { label: string, modal: ModalType }[] = [
    { label: 'About', modal: 'about' },
    { label: 'Contact', modal: 'contact' },
    { label: 'Guide', modal: 'guide' },
    { label: 'Privacy Policy', modal: 'privacy' },
    { label: 'Terms of Service', modal: 'terms' },
    { label: 'DMCA', modal: 'dmca' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white font-sans overflow-x-hidden">
      <div className="absolute inset-0 z-0 cosmic-background-animation"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="w-full bg-black/20 backdrop-blur-lg p-4 shadow-lg sticky top-0 border-b border-white/10">
          <nav className="container mx-auto flex justify-center items-center">
            <ul className="flex flex-wrap justify-center gap-x-2 gap-y-2">
              {navLinks.map(link => (
                <li key={link.modal}>
                  <button onClick={() => setActiveModal(link.modal)} className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-md transition-colors duration-300">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="flex-grow container mx-auto p-4 md:py-12 flex flex-col items-center justify-center">
          {children}
        </main>

        <footer className="w-full bg-black/20 backdrop-blur-lg p-6 text-center text-gray-400 mt-auto border-t border-white/10">
          <div className="container mx-auto">
            <p className="mb-2">
              <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-[#FFD700] hover:text-yellow-200 transition-colors">
                Powered by HSINI MOHAMED
              </a>
            </p>
            <p className="text-sm">
              <a href="http://www.doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">doodax.com</a> | <a href="mailto:hsini.web@gmail.com" className="hover:text-white">hsini.web@gmail.com</a>
            </p>
          </div>
        </footer>
      </div>
      <Modal isOpen={activeModal !== null} onClose={() => setActiveModal(null)} title={modalData.title}>
        <div className="text-gray-300 max-h-[70vh] overflow-y-auto pr-2">{modalData.content}</div>
      </Modal>
    </div>
  );
};

export default Layout;