
import React, { useEffect, useRef } from 'react';
import { BookOpen, Lightbulb, BookText, MessageSquareText, UserPlus, HeartHandshake } from 'lucide-react';

const benefits = [
  {
    icon: <Lightbulb className="h-8 w-8 text-bible-600" />,
    title: "Conhecimento Expandido",
    description: "Descubra fatos fascinantes que aprofundarão sua compreensão da Bíblia e suas histórias."
  },
  {
    icon: <BookText className="h-8 w-8 text-bible-600" />,
    title: "Contextualização Histórica",
    description: "Entenda o contexto histórico e cultural por trás das passagens bíblicas mais importantes."
  },
  {
    icon: <MessageSquareText className="h-8 w-8 text-bible-600" />,
    title: "Conversas Enriquecedoras",
    description: "Compartilhe curiosidades interessantes em conversas sobre fé e espiritualidade."
  },
  {
    icon: <UserPlus className="h-8 w-8 text-bible-600" />,
    title: "Crescimento Espiritual",
    description: "Aprofunde sua conexão espiritual através de um entendimento mais rico das Escrituras."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-bible-600" />,
    title: "Fortalecimento da Fé",
    description: "Fortaleça sua fé com um conhecimento mais profundo dos textos e ensinamentos bíblicos."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-bible-600" />,
    title: "Leitura Prazerosa",
    description: "Desfrute de uma leitura envolvente e de fácil compreensão, perfeita para todos os níveis de conhecimento."
  }
];

const BenefitsSection = () => {
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
      id="beneficios" 
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center">
              <div className="h-0.5 w-8 bg-bible-500 mr-3"></div>
              <span className="text-bible-700 font-medium uppercase text-sm tracking-wide">Por que comprar</span>
              <div className="h-0.5 w-8 bg-bible-500 ml-3"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-bible-950">
            O que você vai encontrar neste e-book
          </h2>
          <p className="text-lg text-bible-700/80">
            Prepare-se para uma jornada incrível através das páginas da Bíblia, 
            revelando detalhes surpreendentes que raramente são notados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-bible-50 rounded-lg p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] fade-in-section"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-serif mb-3 text-bible-900">
                {benefit.title}
              </h3>
              <p className="text-bible-700/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-bible-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-bible-100 rounded-full opacity-50 blur-3xl"></div>
    </section>
  );
};

export default BenefitsSection;
