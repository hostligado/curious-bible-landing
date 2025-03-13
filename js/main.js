
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Current year for copyright
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Initialize Navbar functionality
  initNavbar();
  
  // Initialize Intersection Observer for fade-in sections
  initIntersectionObserver();
  
  // Initialize Preview carousel
  initPreviewCarousel();
  
  // Initialize FAQ accordions
  initFaq();
  
  // Populate benefits section
  populateBenefits();
  
  // Populate testimonials section
  populateTestimonials();
});

// Navbar functionality
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const menuToggle = document.querySelector('.navbar-toggle');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  const mobileMenu = document.querySelector('.navbar-menu-mobile');
  const mobileLinks = document.querySelectorAll('.navbar-mobile-link, .navbar-mobile-button');
  
  // Handle scroll event to change navbar style
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Toggle mobile menu
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('show');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    document.body.style.overflow = mobileMenu.classList.contains('show') ? 'hidden' : '';
  });
  
  // Close mobile menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('show');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });
}

// Intersection Observer for fade-in sections
function initIntersectionObserver() {
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

  document.querySelectorAll('.fade-in-section').forEach((el) => {
    observer.observe(el);
  });
}

// Preview carousel functionality
function initPreviewCarousel() {
  const cards = document.querySelectorAll('.preview-card');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  
  // Function to show card at specific index
  function showCard(index) {
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
  }
  
  // Add click event for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showCard(index));
  });
  
  // Auto-rotate
  setInterval(() => {
    let nextIndex = (currentIndex + 1) % cards.length;
    showCard(nextIndex);
  }, 5000);
}

// FAQ accordion functionality
function initFaq() {
  const faqContainer = document.querySelector('.faq-container');
  
  // Create FAQ items dynamically
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
  
  faqs.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    
    faqItem.innerHTML = `
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${index}">
        ${faq.question}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div id="faq-answer-${index}" class="faq-answer">
        <div class="faq-answer-content">
          ${faq.answer}
        </div>
      </div>
    `;
    
    faqContainer.appendChild(faqItem);
  });
  
  // Add toggle functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const isOpen = question.classList.contains('active');
      
      // Close all FAQs
      faqQuestions.forEach(q => {
        q.classList.remove('active');
        q.setAttribute('aria-expanded', 'false');
        q.nextElementSibling.classList.remove('active');
      });
      
      // If it wasn't open before, open it
      if (!isOpen) {
        question.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
        answer.classList.add('active');
      }
    });
  });
}

// Populate benefits section
function populateBenefits() {
  const benefitsGrid = document.querySelector('.benefits-grid');
  
  const benefits = [
    {
      icon: '<path d="M9.5 10.5L7.5 15.5L12.5 13.5L17.5 15.5L15.5 10.5"></path><circle cx="12.5" cy="7.5" r="2"></circle>',
      title: "Conhecimento Expandido",
      description: "Descubra fatos fascinantes que aprofundarão sua compreensão da Bíblia e suas histórias."
    },
    {
      icon: '<path d="M6 16V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5-.67 1.5-1.5V20a2 2 0 0 0-2-2h-6"></path><path d="M8 2v7"></path><path d="M2 19h8"></path><path d="M11 13h4"></path><path d="M11 17h6"></path>',
      title: "Contextualização Histórica",
      description: "Entenda o contexto histórico e cultural por trás das passagens bíblicas mais importantes."
    },
    {
      icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M9 10h.01"></path><path d="M13 10h.01"></path><path d="M17 10h.01"></path>',
      title: "Conversas Enriquecedoras",
      description: "Compartilhe curiosidades interessantes em conversas sobre fé e espiritualidade."
    },
    {
      icon: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M19 8v6"></path><path d="M22 11h-6"></path>',
      title: "Crescimento Espiritual",
      description: "Aprofunde sua conexão espiritual através de um entendimento mais rico das Escrituras."
    },
    {
      icon: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path>',
      title: "Fortalecimento da Fé",
      description: "Fortaleça sua fé com um conhecimento mais profundo dos textos e ensinamentos bíblicos."
    },
    {
      icon: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
      title: "Leitura Prazerosa",
      description: "Desfrute de uma leitura envolvente e de fácil compreensão, perfeita para todos os níveis de conhecimento."
    }
  ];
  
  benefits.forEach((benefit, index) => {
    const benefitCard = document.createElement('div');
    benefitCard.className = 'benefit-card fade-in-section';
    benefitCard.style.transitionDelay = `${0.1 * index}s`;
    
    benefitCard.innerHTML = `
      <div class="benefit-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${benefit.icon}
        </svg>
      </div>
      <h3 class="benefit-title">${benefit.title}</h3>
      <p class="benefit-description">${benefit.description}</p>
    `;
    
    benefitsGrid.appendChild(benefitCard);
  });
}

// Populate testimonials section
function populateTestimonials() {
  const testimonialsGrid = document.querySelector('.testimonials-grid');
  
  const testimonials = [
    {
      text: "Este e-book transformou completamente minha compreensão da Bíblia! As curiosidades são fascinantes e me ajudaram a entender melhor o contexto histórico das passagens.",
      name: "Marcos Silva",
      role: "Pastor",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Uma leitura incrível! Cada curiosidade revelou um novo aspecto da Bíblia que eu nunca tinha percebido antes. Recomendo para todos que amam as Escrituras.",
      name: "Ana Luiza",
      role: "Professora",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      text: "Estou impressionado com a qualidade e profundidade das informações. É evidente que houve muita pesquisa e cuidado na elaboração deste material.",
      name: "Ricardo Mendes",
      role: "Estudante de Teologia",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      text: "O e-book é maravilhoso! As curiosidades são tão interessantes que li tudo em uma única sentada. Agora compartilho essas informações nos meus grupos de estudo bíblico.",
      name: "Juliana Costa",
      role: "Líder de Grupo de Estudos",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "Comprei este e-book para enriquecer minhas aulas de escola dominical e foi um sucesso! As crianças adoram as curiosidades e isso tem tornado as lições muito mais envolventes.",
      name: "Paulo Gomes",
      role: "Professor de Escola Dominical",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      text: "Um conteúdo que realmente agrega valor à leitura bíblica. As curiosidades são bem fundamentadas e explicadas de forma clara e objetiva.",
      name: "Fernanda Lima",
      role: "Missionária",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];
  
  // Only show 3 testimonials
  testimonials.slice(0, 3).forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    
    testimonialCard.innerHTML = `
      <div class="testimonial-stars">
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
        <span class="star">★</span>
      </div>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar">
          <img src="${testimonial.avatar}" alt="${testimonial.name}" />
        </div>
        <div class="author-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.role}</p>
        </div>
      </div>
    `;
    
    testimonialsGrid.appendChild(testimonialCard);
  });
}
