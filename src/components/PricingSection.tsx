
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, ShieldCheck, BookOpen, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  "E-book completo com 150 curiosidades bíblicas",
  "Formato PDF otimizado para todos os dispositivos",
  "Ilustrações e referências bíblicas para cada curiosidade",
  "Índice interativo para navegação fácil",
  "Acesso vitalício ao conteúdo",
  "Atualizações gratuitas"
];

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="comprar" 
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="fade-in-section">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-10 bg-bible-500 mr-3"></div>
                <span className="text-bible-700 font-medium uppercase text-sm tracking-wide">Oferta Especial</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-bible-950">
                Invista no seu conhecimento bíblico hoje mesmo
              </h2>
              <p className="text-lg text-bible-700/80 mb-8">
                Descubra 150 curiosidades bíblicas fascinantes que transformarão sua compreensão 
                das Escrituras e enriquecerão sua fé.
              </p>

              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-bible-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-bible-800">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center mb-8">
                <ShieldCheck className="h-5 w-5 text-bible-700 mr-2" />
                <span className="text-sm text-bible-700">Garantia de satisfação ou seu dinheiro de volta em até 7 dias</span>
              </div>
            </div>

            <div className="fade-in-section" style={{ transitionDelay: '0.2s' }}>
              <div className="bg-bible-50 rounded-xl p-8 border border-bible-100 shadow-lg relative overflow-hidden">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-bible-500 rotate-12"></div>
                <div className="absolute top-0 left-0 bg-bible-600 text-white py-1 px-4 rounded-br-lg font-medium text-sm">
                  Oferta por tempo limitado
                </div>

                <div className="text-center mb-6 mt-8">
                  <BookOpen className="h-12 w-12 text-bible-700 mx-auto mb-4" />
                  <h3 className="text-2xl font-serif font-bold text-bible-900 mb-2">
                    E-book: 150 Curiosidades Bíblicas
                  </h3>
                  <p className="text-bible-700/80 mb-4">
                    Acesso imediato após a compra
                  </p>

                  <div className="flex items-center justify-center mb-2">
                    <span className="text-bible-500 text-lg line-through mr-2">R$ 47,90</span>
                    <span className="bg-bible-100 text-bible-800 text-sm px-2 py-0.5 rounded">33% OFF</span>
                  </div>

                  <div className="flex items-center justify-center mb-6">
                    <span className="text-4xl font-bold text-bible-900">R$ 29,90</span>
                    <span className="text-bible-700 ml-2">à vista</span>
                  </div>

                  <div className="flex items-center justify-center mb-8">
                    <CreditCard className="h-5 w-5 text-bible-700 mr-2" />
                    <span className="text-sm text-bible-700">Ou em até 3x de R$ 9,97 sem juros</span>
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-bible-700 hover:bg-bible-800 text-white py-6 transition-all duration-300 transform hover:scale-105"
                  >
                    Garantir meu e-book agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center justify-center space-x-4 mt-4">
                  <img src="https://i.imgur.com/JgTr0pZ.png" alt="Métodos de pagamento" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-40 -right-20 w-80 h-80 bg-bible-100 rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default PricingSection;
