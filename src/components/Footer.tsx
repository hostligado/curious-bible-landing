
import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-bible-100 py-12">
      <div className="container">
        <div className="flex flex-col items-center">
          <a href="#" className="flex items-center space-x-2 text-bible-800 mb-6">
            <BookOpen className="h-6 w-6" />
            <span className="font-serif font-bold text-lg">Curiosidades Bíblicas</span>
          </a>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#beneficios" className="text-sm text-bible-700 hover:text-bible-900 transition-colors">
              Benefícios
            </a>
            <a href="#preview" className="text-sm text-bible-700 hover:text-bible-900 transition-colors">
              Prévia
            </a>
            <a href="#testimonials" className="text-sm text-bible-700 hover:text-bible-900 transition-colors">
              Depoimentos
            </a>
            <a href="#faq" className="text-sm text-bible-700 hover:text-bible-900 transition-colors">
              FAQ
            </a>
            <a href="#comprar" className="text-sm text-bible-700 hover:text-bible-900 transition-colors">
              Comprar
            </a>
          </div>
          
          <div className="text-center max-w-md mx-auto">
            <p className="text-bible-500 text-sm mb-4">
              Este e-book não substitui a leitura da Bíblia. Ele foi criado para complementar e enriquecer 
              seu conhecimento bíblico de forma divertida e informativa.
            </p>
            <p className="text-bible-400 text-xs">
              &copy; {currentYear} 150 Curiosidades Bíblicas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
