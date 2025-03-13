
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
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
      ref={sectionRef}
      className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center relative overflow-hidden bg-gradient-to-br from-white to-bible-50"
    >
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="fade-in-section">
            <div className="flex items-center mb-4">
              <div className="h-0.5 w-10 bg-bible-500 mr-3"></div>
              <span className="text-bible-700 font-medium tracking-wide uppercase text-sm">Conhecimento Bíblico</span>
            </div>
            <h1 className="text-display-sm md:text-display mb-6 text-bible-950">
              150 Curiosidades Bíblicas Que Você Precisa Conhecer
            </h1>
            <p className="text-lg md:text-xl text-bible-800/90 mb-8 max-w-lg">
              Descubra fatos fascinantes, histórias surpreendentes e detalhes ocultos 
              que transformarão sua compreensão das Escrituras Sagradas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 fade-in-section" style={{ transitionDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-bible-700 hover:bg-bible-800 text-white py-6 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Quero este e-book agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-bible-300 text-bible-700 hover:bg-bible-50 py-6 px-8 rounded-md"
            >
              Ver amostra grátis
            </Button>
          </div>

          <div className="mt-12 flex items-center space-x-4 fade-in-section" style={{ transitionDelay: '0.4s' }}>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-10 h-10 rounded-full border-2 border-white bg-bible-100 flex items-center justify-center",
                    i === 1 && "bg-bible-200",
                    i === 2 && "bg-bible-300",
                    i === 3 && "bg-bible-400"
                  )}
                >
                  <BookOpen className="h-4 w-4 text-bible-700" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm text-bible-600">Mais de <span className="font-bold">5,000+</span> leitores satisfeitos</p>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center fade-in-section">
          <div 
            ref={bookRef}
            className="relative animate-float"
          >
            <div className="w-64 md:w-80 h-[22rem] md:h-[28rem] bg-gradient-to-br from-bible-400 to-bible-700 rounded-lg shadow-2xl transform rotate-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bible-950/80 to-transparent"></div>
              
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-6 md:p-8">
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-bible-700" />
                </div>
                
                <div className="text-white">
                  <h3 className="text-sm uppercase tracking-wider mb-1 font-medium">E-book exclusivo</h3>
                  <h2 className="text-xl md:text-2xl font-serif font-bold leading-tight mb-2">150 Curiosidades Bíblicas</h2>
                  <div className="h-1 w-12 bg-white/60 mb-3"></div>
                  <p className="text-sm text-white/90">Enriqueça seu conhecimento bíblico</p>
                </div>
              </div>
            </div>
            
            {/* Book reflection/shadow */}
            <div className="absolute -bottom-10 w-64 md:w-80 h-4 bg-black/20 blur-md rounded-full mx-auto left-0 right-0"></div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-5 md:right-20 w-40 h-40 bg-bible-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 md:left-40 w-60 h-60 bg-bible-200 rounded-full opacity-40 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
