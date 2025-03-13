
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const curiosities = [
  {
    number: "01",
    title: "A Arca de Noé era maior que uma quadra de basquete",
    description: "Segundo as dimensões bíblicas, a Arca media aproximadamente 150 metros de comprimento, 25 metros de largura e 15 metros de altura – muito maior que uma quadra de basquete padrão."
  },
  {
    number: "22",
    title: "A primeira cirurgia documentada está na Bíblia",
    description: "A criação de Eva a partir da costela de Adão pode ser considerada a primeira descrição de um procedimento cirúrgico na história escrita."
  },
  {
    number: "45",
    title: "O Mar Morto é mencionado como 'Mar de Sal'",
    description: "No livro de Gênesis e em outros textos, o Mar Morto é referido como 'Mar de Sal', devido à sua composição mineral única e alta salinidade."
  },
  {
    number: "78",
    title: "Os 'Três Reis Magos' não são três na Bíblia",
    description: "A Bíblia não especifica o número de magos que visitaram Jesus. A tradição de três surgiu posteriormente, provavelmente devido aos três presentes mencionados: ouro, incenso e mirra."
  },
  {
    number: "96",
    title: "A palavra 'cristão' aparece apenas três vezes",
    description: "O termo 'cristão' aparece apenas três vezes em toda a Bíblia: em Atos 11:26, Atos 26:28 e 1 Pedro 4:16."
  }
];

const PreviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCuriosity = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % curiosities.length);
  };

  const prevCuriosity = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + curiosities.length) % curiosities.length);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionRef.current.querySelectorAll('.fade-in-section').forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (sectionRef.current) {
        sectionRef.current.querySelectorAll('.fade-in-section').forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <section 
      id="preview" 
      ref={sectionRef}
      className="section-padding bg-bible-50 relative overflow-hidden"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center">
              <div className="h-0.5 w-8 bg-bible-500 mr-3"></div>
              <span className="text-bible-700 font-medium uppercase text-sm tracking-wide">Prévia</span>
              <div className="h-0.5 w-8 bg-bible-500 ml-3"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-bible-950">
            Uma amostra das curiosidades que você vai descobrir
          </h2>
          <p className="text-lg text-bible-700/80">
            Estas são apenas 5 das 150 curiosidades fascinantes que você encontrará no e-book. 
            Cada uma delas trará uma nova perspectiva sobre as histórias bíblicas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden fade-in-section">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 bg-gradient-to-br from-bible-400 to-bible-700 p-8 flex items-center justify-center">
              <div className="text-center">
                <BookOpen className="h-16 w-16 text-white/90 mx-auto mb-4" />
                <h3 className="text-white text-2xl font-serif font-bold">
                  {curiosities[activeIndex].number}
                </h3>
                <div className="h-1 w-12 bg-white/60 mx-auto my-3"></div>
                <p className="text-white/90 text-sm">
                  de 150 curiosidades
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 p-8 md:p-10">
              <h3 className="text-xl md:text-2xl font-serif mb-4 text-bible-900">
                {curiosities[activeIndex].title}
              </h3>
              <p className="text-bible-700/80 mb-8">
                {curiosities[activeIndex].description}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {curiosities.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "w-2.5 h-2.5 rounded-full transition-all",
                        index === activeIndex 
                          ? "bg-bible-600 scale-110" 
                          : "bg-bible-200 hover:bg-bible-300"
                      )}
                      aria-label={`Ver curiosidade ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={prevCuriosity}
                    className="w-10 h-10 rounded-full border border-bible-200 flex items-center justify-center text-bible-700 hover:bg-bible-50 transition-colors"
                    aria-label="Curiosidade anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={nextCuriosity}
                    className="w-10 h-10 rounded-full border border-bible-200 flex items-center justify-center text-bible-700 hover:bg-bible-50 transition-colors"
                    aria-label="Próxima curiosidade"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 fade-in-section">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-bible-700 hover:bg-bible-800 text-white"
          >
            Quero descobrir todas as 150 curiosidades
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-bible-200 rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default PreviewSection;
