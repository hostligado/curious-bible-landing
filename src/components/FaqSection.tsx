
import React, { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Em que formato o e-book está disponível?",
    answer: "O e-book está disponível em formato PDF, otimizado para leitura em qualquer dispositivo, incluindo smartphones, tablets, e-readers e computadores."
  },
  {
    question: "Posso imprimir o e-book depois de comprá-lo?",
    answer: "Sim, você pode imprimir o e-book para uso pessoal, mas lembre-se que o conteúdo é protegido por direitos autorais e não pode ser reproduzido para distribuição sem autorização."
  },
  {
    question: "Como recebo o e-book após a compra?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para download do e-book. O link ficará disponível por 30 dias, e você pode baixar o arquivo até 3 vezes."
  },
  {
    question: "O e-book tem fontes e referências bibliográficas?",
    answer: "Sim, cada curiosidade está devidamente fundamentada com referências bíblicas e, quando aplicável, fontes históricas e arqueológicas confiáveis."
  },
  {
    question: "Existe garantia de satisfação?",
    answer: "Sim, oferecemos garantia de satisfação de 7 dias. Se você não estiver satisfeito com o conteúdo, pode solicitar reembolso integral dentro deste período."
  },
  {
    question: "As curiosidades são adequadas para todas as idades?",
    answer: "Sim, o conteúdo é adequado para leitores de todas as idades. As curiosidades são apresentadas de forma respeitosa e educativa, proporcionando conhecimento valioso para qualquer pessoa interessada na Bíblia."
  }
];

const FaqSection = () => {
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
      id="faq" 
      ref={sectionRef}
      className="section-padding bg-bible-50 relative overflow-hidden"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center">
              <div className="h-0.5 w-8 bg-bible-500 mr-3"></div>
              <span className="text-bible-700 font-medium uppercase text-sm tracking-wide">Perguntas frequentes</span>
              <div className="h-0.5 w-8 bg-bible-500 ml-3"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 text-bible-950">
            Tire suas dúvidas
          </h2>
          <p className="text-lg text-bible-700/80">
            Encontre respostas para as perguntas mais comuns sobre o e-book "150 Curiosidades Bíblicas".
          </p>
        </div>

        <div className="max-w-3xl mx-auto fade-in-section">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-bible-200 rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-serif text-bible-900 hover:text-bible-700 hover:bg-bible-50 transition-all">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-bible-700/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-bible-100 rounded-full opacity-40 blur-3xl"></div>
    </section>
  );
};

export default FaqSection;
