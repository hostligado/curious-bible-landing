
import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight, ChevronLeft, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: "João Silva",
    occupation: "Professor de Escola Dominical",
    image: "https://i.pravatar.cc/150?img=1",
    quote: "Este e-book transformou minhas aulas na Escola Dominical. As curiosidades bíblicas tornaram o aprendizado muito mais envolvente para meus alunos!"
  },
  {
    name: "Maria Oliveira",
    occupation: "Líder de Grupo de Estudo Bíblico",
    image: "https://i.pravatar.cc/150?img=5",
    quote: "Cada curiosidade traz um novo olhar sobre textos que eu já conhecia. Estou usando essas informações nos nossos estudos bíblicos semanais com grande sucesso."
  },
  {
    name: "Pedro Santos",
    occupation: "Pastor",
    image: "https://i.pravatar.cc/150?img=3",
    quote: "Um recurso valiosíssimo para enriquecer sermões e estudos. As pesquisas são bem fundamentadas e trazem contextos históricos que raramente são mencionados."
  },
  {
    name: "Ana Rodrigues",
    occupation: "Estudante de Teologia",
    image: "https://i.pravatar.cc/150?img=10",
    quote: "Como estudante de teologia, encontrei neste e-book um tesouro de informações que complementam perfeitamente meus estudos acadêmicos."
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
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
      id="testimonials" 
      ref={sectionRef}
      className="section-padding bg-bible-900 text-white relative overflow-hidden"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center">
              <div className="h-0.5 w-8 bg-bible-400 mr-3"></div>
              <span className="text-bible-300 font-medium uppercase text-sm tracking-wide">Depoimentos</span>
              <div className="h-0.5 w-8 bg-bible-400 ml-3"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">
            O que nossos leitores estão dizendo
          </h2>
          <p className="text-lg text-bible-100/80">
            Descubra como o e-book "150 Curiosidades Bíblicas" está transformando 
            a forma como as pessoas entendem as Escrituras.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative fade-in-section">
          <div className="relative bg-bible-800 rounded-xl p-8 md:p-12 shadow-xl">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-bible-600/30" />
            
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-full overflow-hidden border-4 border-bible-700">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl font-serif italic mb-6 text-white/90">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div>
                  <h4 className="text-lg font-medium text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-bible-300">{testimonials[currentIndex].occupation}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-bible-800 flex items-center justify-center text-white hover:bg-bible-700 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-bible-800 flex items-center justify-center text-white hover:bg-bible-700 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full mx-1.5 transition-all",
                  index === currentIndex 
                    ? "bg-bible-400 scale-110" 
                    : "bg-bible-700 hover:bg-bible-600"
                )}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-bible-800 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-bible-800 rounded-full opacity-50 blur-3xl"></div>
    </section>
  );
};

export default TestimonialsSection;
