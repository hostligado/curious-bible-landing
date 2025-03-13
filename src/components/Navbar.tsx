
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 text-bible-800">
          <BookOpen className="h-6 w-6" />
          <span className="font-serif font-bold text-lg">Curiosidades Bíblicas</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-sm font-medium text-bible-800 hover:text-bible-600 transition-colors">
            Benefícios
          </a>
          <a href="#preview" className="text-sm font-medium text-bible-800 hover:text-bible-600 transition-colors">
            Prévia
          </a>
          <a href="#testimonials" className="text-sm font-medium text-bible-800 hover:text-bible-600 transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="text-sm font-medium text-bible-800 hover:text-bible-600 transition-colors">
            FAQ
          </a>
          <Button 
            href="#comprar" 
            variant="default" 
            className="bg-bible-700 hover:bg-bible-800 text-white transition-all"
          >
            Comprar agora
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-bible-800 focus:outline-none"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white pt-20 px-6 flex flex-col space-y-6 transition-all duration-300 ease-in-out transform", 
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <a 
          href="#beneficios" 
          className="text-bible-800 text-lg font-medium py-2 border-b border-gray-100"
          onClick={closeMenu}
        >
          Benefícios
        </a>
        <a 
          href="#preview" 
          className="text-bible-800 text-lg font-medium py-2 border-b border-gray-100"
          onClick={closeMenu}
        >
          Prévia
        </a>
        <a 
          href="#testimonials" 
          className="text-bible-800 text-lg font-medium py-2 border-b border-gray-100"
          onClick={closeMenu}
        >
          Depoimentos
        </a>
        <a 
          href="#faq" 
          className="text-bible-800 text-lg font-medium py-2 border-b border-gray-100"
          onClick={closeMenu}
        >
          FAQ
        </a>
        <Button 
          href="#comprar" 
          variant="default" 
          className="w-full mt-4 bg-bible-700 hover:bg-bible-800 text-white transition-all"
          onClick={closeMenu}
        >
          Comprar agora
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
