/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Users, 
  Target, 
  Zap, 
  Award,
  Menu,
  X,
  Twitter,
  Clock,
  CheckCircle2,
  Globe,
  MessageCircle,
  ArrowUp
} from "lucide-react";
import { useState, useEffect } from "react";
import * as React from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Programas", href: "#servicos" },
    { name: "Palestras", href: "#palestras" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav 
      aria-label="Menu principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-cream/95 backdrop-blur-xl border-b border-brand-900/5 py-3 shadow-lg shadow-brand-900/5" 
          : "bg-cream md:bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group shrink-0" aria-label="Débora Bolangno - Home">
          <div className="w-12 h-12 flex items-center justify-center transition-all duration-300">
            <img 
              src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" 
              alt="Logo Débora Bolangno" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-ink group-hover:text-brand-700 transition-colors hidden sm:block">
            Débora Bolangno
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/deborabolangno" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink/40 hover:text-brand-700 transition-colors p-2"
              aria-label="LinkedIn Profissional"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:deborabolangno@outlook.com" 
              className="text-ink/40 hover:text-brand-700 transition-colors p-2"
              aria-label="Enviar E-mail"
            >
              <Mail size={18} />
            </a>
          </div>
          <div className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] lg:text-xs uppercase tracking-[0.2em] font-semibold text-ink/60 hover:text-brand-700 transition-all relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-700 transition-all duration-300 group-hover/link:w-full"></span>
              </a>
            ))}
          </div>
          <a 
            href="https://wa.me/5511940803333?text=Olá,%20vim%20pelo%20portfólio%20corporativo%20e%20gostaria%20de%20maiores%20informações" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-700 text-white px-6 lg:px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-brand-800 transition-all shadow-md hover:shadow-brand-700/20 active:scale-95 whitespace-nowrap"
          >
            Solicitar Proposta
          </a>
        </div>

        {/* Mobile Toggle & Icons */}
        <div className="md:hidden flex items-center gap-2">
          <a 
            href="https://www.linkedin.com/in/deborabolangno" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ink/60 p-2"
            aria-label="LinkedIn Profissional"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:deborabolangno@outlook.com" 
            className="text-ink/60 p-2"
            aria-label="Enviar E-mail"
          >
            <Mail size={20} />
          </a>
          <button 
            className="text-ink p-2 hover:bg-brand-900/5 rounded-full transition-colors relative z-50 ml-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay & Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-950/40 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Content */}
            <motion.div 
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-cream z-50 md:hidden flex flex-col p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" 
                    alt="Logo Débora Bolangno" 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-brand-900/5 rounded-full transition-colors"
                  aria-label="Fechar menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif font-bold text-ink hover:text-brand-700 transition-colors flex items-center justify-between group"
                  >
                    {link.name}
                    <ChevronRight size={18} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-brand-900/10">
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href="https://wa.me/5511940803333?text=Olá,%20vim%20pelo%20portfólio%20corporativo%20e%20gostaria%20de%20maiores%20informações" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-brand-700 text-white px-6 py-4 rounded-2xl text-center text-xs uppercase tracking-[0.2em] font-bold block shadow-lg shadow-brand-700/20"
                >
                  Solicitar Proposta
                </motion.a>
                <div className="mt-8 flex justify-center gap-6 text-brand-900/40">
                  <Linkedin size={20} />
                  <Mail size={20} />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const titlePart1 = "Clareza para tomar";
  const titlePart2 = "decisões estratégicas";
  const titlePart3 = "e acelerar sua carreira executiva.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: { 
      opacity: 1, 
      display: "inline",
      transition: { duration: 0.01 }
    },
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative z-10 order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-brand-600"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-600 font-bold">
              Mentoria Executiva · Débora Bolangno
            </span>
          </motion.div>
          
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] text-ink mb-8"
          >
            {titlePart1.split("").map((char, i) => (
              <motion.span key={i} variants={letterVariants}>{char}</motion.span>
            ))}
            <br />
            <span className="italic text-brand-700 text-balance">
              {titlePart2.split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants}>{char}</motion.span>
              ))}
            </span>
            <br />
            {titlePart3.split("").map((char, i) => (
              <motion.span key={i} variants={letterVariants}>{char}</motion.span>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="text-lg md:text-2xl text-ink/70 mb-10 max-w-xl leading-relaxed"
          >
            Mentoria personalizada para líderes e executivos que buscam posicionamento de alto impacto, segurança na tomada de decisão e crescimento consistente.
          </motion.p>

          <div className="grid grid-cols-2 gap-6 md:gap-8 mb-12 py-8 border-y border-ink/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.4 }}
            >
              <div className="text-4xl md:text-6xl font-serif font-black text-brand-700 mb-2">+20</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-ink/40 leading-tight">
                Anos de experiência <br className="hidden sm:block" /> no mundo corporativo
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.6 }}
            >
              <div className="text-4xl md:text-6xl font-serif font-black text-brand-700 mb-2">+250</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-ink/40 leading-tight">
                Profissionais <br className="hidden sm:block" /> impactados e mentorados
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a 
              href="https://wa.me/5511940803333?text=Olá,%20vim%20pelo%20portfólio%20corporativo%20e%20gostaria%20de%20agendar%20uma%20conversa%20estratégica" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-brand-800 transition-all shadow-lg hover:shadow-brand-700/20 group"
            >
              Agendar Conversa Estratégica
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#servicos" 
              className="px-8 md:px-10 py-4 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-widest font-bold text-ink border border-ink/10 hover:bg-ink hover:text-white transition-all text-center"
            >
              Conhecer programas
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: 1, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="relative aspect-[4/5] lg:aspect-auto lg:h-[700px] bg-brand-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-ink/5 order-1 lg:order-2"
        >
          <img 
            src="https://i.ibb.co/N6D2hPBM/debora01.png" 
            alt="Débora Bolangno - Mentora de Carreira e Liderança Executiva"
            className="w-full h-full object-cover opacity-100 transition-all duration-1000 hover:scale-105"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          
          <div className="absolute top-6 right-6 md:top-10 md:right-10 w-32 md:w-48 opacity-10 pointer-events-none select-none">
            <img 
              src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" 
              alt="Logo Background" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const words = [
    "Liderança Atualizada", "Presença Executiva", "Marca Intencional", 
    "Carreira com Estratégia", "Desenvolvimento Humano", "Primeira Liderança"
  ];

  return (
    <div className="bg-brand-700 py-6 overflow-hidden whitespace-nowrap border-y border-white/10">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {words.map((word) => (
              <div key={word} className="flex items-center gap-12">
                <span className="font-serif italic text-lg text-white/90">{word}</span>
                <span className="w-2 h-2 rounded-full bg-white/20"></span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 border border-ink/5 rounded-[2rem] overflow-hidden shadow-xl">
        <div className="p-8 md:p-16 lg:p-20 bg-white flex flex-col justify-center order-2 lg:order-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-600 font-bold mb-6 md:mb-8 block">
            Sobre mim
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight mb-6 md:mb-8">
            Estratégia, Liderança <br />
            <span className="italic text-brand-700">& Execução.</span>
          </h2>
          <div className="space-y-6 text-ink/70 leading-relaxed text-lg md:text-xl">
            <p>
              Com mais de 20 anos de experiência no mundo corporativo, Débora Bolangno especializou-se em desenvolver líderes e acelerar carreiras de alto nível.
            </p>
            <p>
              Sua abordagem une visão estratégica, inteligência emocional e ferramentas práticas para quem não aceita o estancamento e busca o próximo nível de influência e resultado.
            </p>
            <p>
              Hoje, ajudo você a ter clareza, tomar decisões com segurança e construir um caminho profissional consistente e de alto impacto.
            </p>
          </div>
          <div className="mt-8 md:mt-10 p-6 md:p-8 bg-brand-50 border-l-4 border-brand-700 rounded-r-2xl italic font-cormorant text-lg md:text-xl text-brand-900">
            "Meu trabalho conecta autoconhecimento, estratégia de carreira e prática de liderança — 
            sempre com foco em resultado, posicionamento e crescimento sustentável."
          </div>
        </div>

        <div className="bg-brand-900 relative overflow-hidden order-1 lg:order-2 min-h-[400px] lg:min-h-full">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://i.ibb.co/zHJmMxcs/debora-002-2.png" 
            alt="Débora Bolangno em ambiente corporativo - Especialista em Liderança"
            className="absolute inset-0 w-full h-full object-cover object-top opacity-90 transition-opacity duration-700 hover:opacity-100"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent lg:hidden"></div>
          <div className="absolute bottom-6 right-6 w-24 md:w-32 opacity-20 pointer-events-none">
            <img 
              src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" 
              alt="Logo Overlay" 
              className="w-full h-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "Eu estava há meses travado em uma decisão de mudança de posição. A mentoria me trouxe clareza e segurança para agir. Hoje estou em um novo momento da carreira, muito mais alinhado com o que eu buscava.",
      author: "Carlos Mendes",
      role: "Gerente de Relacionamento",
      company: "Setor Bancário"
    },
    {
      text: "O maior ganho foi conseguir organizar meu pensamento e me posicionar melhor como líder. Eu sabia tecnicamente o que fazer, mas faltava direção. Hoje consigo tomar decisões com muito mais confiança.",
      author: "Rafael Souza",
      role: "Tech Lead",
      company: "Empresa de Tecnologia SaaS"
    },
    {
      text: "Eu vivia no automático e não conseguia enxergar o próximo passo. O processo trouxe clareza prática, não ficou só na reflexão. Saí com decisões concretas que mudaram minha atuação.",
      author: "Fernanda Oliveira",
      role: "Coordenadora de Operações",
      company: "Indústria Multinacional"
    },
    {
      text: "Foi um divisor de águas. Hoje tenho muito mais segurança para me posicionar e conduzir minha carreira.",
      author: "Juliana Ribeiro",
      role: "Business Partner de RH",
      company: "Empresa de Médio Porte"
    }
  ];

  return (
    <section className="py-24 bg-cream/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-600 font-bold mb-4 block">
            Prova Social
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-black text-ink mb-6">
            Resultados reais de quem já passou pelo processo
          </h2>
          <p className="text-ink/50 max-w-2xl mx-auto text-lg">
            Profissionais que destravaram decisões, ganharam clareza e avançaram com mais segurança na carreira.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-ink/5 flex flex-col justify-between hover:shadow-xl transition-all group"
            >
              <div className="mb-6 md:mb-8">
                <div className="flex gap-1 mb-4 md:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Zap key={i} size={14} className="text-brand-500 fill-brand-500" />
                  ))}
                </div>
                <p className="text-ink/70 text-base md:text-lg leading-relaxed italic">
                  “{t.text}”
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-ink/5 pt-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-sm md:text-base">
                  {t.author[0]}
                </div>
                <div>
                  <div className="font-bold text-ink text-sm md:text-base">{t.author}</div>
                  <div className="text-[10px] text-ink/40 uppercase tracking-widest">{t.role} · {t.company}</div>
                </div>
                <div className="ml-auto flex gap-1 sm:gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-brand-50 rounded-full text-ink/30 hover:text-brand-700 transition-colors"
                    title="Compartilhar no LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Confira este depoimento sobre a mentoria de Débora Bolangno: "${t.text}"`)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-brand-50 rounded-full text-ink/30 hover:text-brand-700 transition-colors"
                    title="Compartilhar no Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                  <a 
                    href={`mailto:?subject=${encodeURIComponent("Depoimento sobre Débora Bolangno")}&body=${encodeURIComponent(`Confira este depoimento: "${t.text}"\n\nSaiba mais em: ${window.location.href}`)}`}
                    className="p-2 hover:bg-brand-50 rounded-full text-ink/30 hover:text-brand-700 transition-colors"
                    title="Compartilhar por E-mail"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Users className="text-brand-600" size={32} />,
      num: "01",
      title: "Mentoria Executive Presence",
      desc: "Foco em posicionamento, comunicação assertiva e construção de autoridade para o alto escalão.",
      tags: ["Posicionamento", "Comunicação", "Autoridade"]
    },
    {
      icon: <Target className="text-brand-600" size={32} />,
      num: "02",
      title: "Estratégia de Carreira 360º",
      desc: "Planejamento tático personalizado para transições, promoções e novos desafios profissionais.",
      tags: ["Transição", "Promoção", "Estratégia"]
    },
    {
      icon: <Zap className="text-brand-600" size={32} />,
      num: "03",
      title: "Liderança de Alta Performance",
      desc: "Desenvolvimento de times, cultura organizacional e gestão estratégica de stakeholders.",
      tags: ["Times", "Cultura", "Stakeholders"]
    },
    {
      icon: <Award className="text-brand-600" size={32} />,
      num: "04",
      title: "Consultoria Organizacional",
      desc: "Estratégia para fortalecer cultura, liderança e performance em ambientes corporativos.",
      tags: ["RH", "Cultura", "Performance"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://i.ibb.co/0pxFBjnW/Gemini-Generated-Image-bgseumbgseumbgse.png" 
          alt="Background Texture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8 border-b border-ink/10 pb-8 md:pb-12">
          <h2 className="font-serif text-4xl md:text-7xl font-black text-ink leading-[0.9]">
            Programas de<br />
            <span className="italic text-brand-700 text-balance">Alto Impacto</span>
          </h2>
          <p className="text-ink/50 uppercase tracking-widest text-[10px] md:text-sm font-bold max-w-xs md:text-right">
            Escolha o formato ideal para o seu momento profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/5 border border-ink/5 rounded-3xl overflow-hidden shadow-lg">
          {services.map((service) => (
            <motion.div 
              key={service.num}
              whileHover={{ backgroundColor: "rgba(18, 18, 18, 1)" }}
              className="bg-white p-10 flex flex-col h-full transition-colors group"
            >
              <div className="mb-8 group-hover:text-brand-400 transition-colors">
                {service.icon}
              </div>
              <div className="text-[10px] uppercase tracking-widest text-ink/40 mb-4 group-hover:text-white/40">
                {service.num} / 04
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed mb-8 flex-grow group-hover:text-white/60 transition-colors">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest px-3 py-1.5 bg-ink/5 rounded-full text-ink/50 group-hover:bg-white/10 group-hover:text-white/50 transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Lectures = () => {
  const topics = [
    { title: "Como se manter relevante no mercado atual", desc: "Competências essenciais para relevância no mundo em transformação." },
    { title: "Comunicação com clareza e influência", desc: "Como desenvolver autoridade e impacto na comunicação profissional." },
    { title: "Liderança que gera engajamento", desc: "Como gerir pessoas e times com mais resultado e menos desgaste." },
    { title: "Tomada de decisão com mais segurança", desc: "Clareza sobre si mesmo como ponto de partida para decisões melhores." },
    { title: "Gestão de tempo e prioridades", desc: "Foco estratégico e priorização em ambientes de alta demanda." },
    { title: "Protagonismo na carreira", desc: "Posicionamento intencional para profissionais que querem mais." },
  ];

  return (
    <section id="palestras" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-600 font-bold mb-6 md:mb-8 block">
            Temas validados
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-black text-ink leading-tight mb-6 md:mb-8">
            Palestras<br />
            <span className="italic text-brand-700">& Workshops</span><br />
            Corporativos
          </h2>
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 md:mb-8 shadow-xl">
            <img 
              src="https://i.ibb.co/zW1TqSXh/Chat-GPT-Image-10-de-abr-de-2026-23-28-47.png" 
              alt="Débora Bolangno realizando palestra sobre liderança executiva"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-brand-900/20"></div>
          </div>
          <p className="text-base md:text-lg text-ink/60 leading-relaxed">
            Cada encontro pode ser customizado conforme a cultura e os desafios específicos da sua empresa.
          </p>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/5 border border-ink/5 rounded-3xl overflow-hidden">
          {topics.map((topic, i) => (
            <div key={i} className="bg-white p-8 md:p-10 hover:bg-brand-50/30 transition-colors group">
              <div className="font-serif text-3xl md:text-4xl font-black text-brand-300/40 mb-4 md:mb-6 group-hover:text-brand-500/50 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-ink mb-3 md:mb-4 group-hover:text-brand-800 transition-colors">
                {topic.title}
              </h4>
              <p className="text-base md:text-lg text-ink/60 leading-relaxed">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  return (
    <section className="py-24 bg-ink relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[40rem] opacity-[0.03] pointer-events-none select-none -translate-x-1/4 -translate-y-1/4">
        <img 
          src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" 
          alt="Logo Background Large" 
          className="w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-400 font-bold mb-8 block">
            Por que a Débora
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-black text-white leading-tight mb-10 text-balance">
            Por que confiar sua carreira à Débora Bolangno?
          </h2>
          <div className="border-l-4 border-brand-600 pl-8">
            <p className="font-cormorant italic text-2xl text-white/60 leading-relaxed">
              "Carreira não se constrói apenas com competência. Se constrói com posicionamento, comunicação, decisões e coragem."
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {[
            { num: "01", title: "Visão de Quem Vive o Jogo", desc: "Experiência prática e real em cargos de decisão no mundo corporativo. Não é apenas teoria, é vivência executiva." },
            { num: "02", title: "Metodologia Sob Medida", desc: "Processos exclusivos e adaptados para os desafios específicos da alta gestão e liderança sênior." },
            { num: "03", title: "Networking e Posicionamento", desc: "Foco estratégico em como ser visto, ouvido e respeitado nos círculos de influência e decisão." },
          ].map((item) => (
            <motion.div 
              key={item.num}
              whileHover={{ x: 10 }}
              className="p-8 bg-white/[0.07] border border-white/10 rounded-2xl flex gap-8 items-start group hover:border-brand-500/40 transition-all"
            >
              <div className="font-serif text-5xl font-black text-brand-300/20 group-hover:text-brand-400/30 transition-colors">
                {item.num}
              </div>
              <div>
                <h4 className="text-cream font-bold mb-2 group-hover:text-brand-300 transition-colors">{item.title}</h4>
                <p className="text-sm text-cream/70 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Formats = () => {
  const formats = [
    { icon: <Users size={28} />, title: "Mentoria Individual", desc: "Acompanhamento 1:1 personalizado para transição ou crescimento.", tag: "1:1" },
    { icon: <Target size={28} />, title: "Mentorias em Grupo", desc: "Programas coletivos temáticos com trocas entre pares.", tag: "Grupos" },
    { icon: <Award size={28} />, title: "Programas de Liderança", desc: "Desenvolvimento estruturado para líderes em todos os níveis.", tag: "Líderes" },
    { icon: <Zap size={28} />, title: "Palestras & Workshops", desc: "Encontros corporativos práticos em todo o Brasil.", tag: "Corporativo" },
    { icon: <Globe size={28} />, title: "Consultoria para RH", desc: "Apoio estratégico a projetos de desenvolvimento humano.", tag: "RH Estratégico" },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl md:text-6xl font-black text-ink text-center mb-4">
          Formatos de <span className="italic text-brand-700">Atuação</span>
        </h2>
        <p className="text-center text-ink/50 mb-16 uppercase tracking-widest text-sm">
          Presencial ou online · Customizável · Todo o Brasil
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {formats.map((format, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-ink/5 text-center flex flex-col items-center shadow-sm hover:shadow-xl hover:border-brand-500/30 transition-all"
            >
              <div className="text-brand-600 mb-4 md:mb-6">{format.icon}</div>
              <h4 className="font-serif font-bold text-ink mb-2 md:mb-3 leading-tight text-base md:text-lg">{format.title}</h4>
              <p className="text-[11px] md:text-xs text-ink/50 leading-relaxed mb-4 md:mb-6 flex-grow">{format.desc}</p>
              <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-brand-700 bg-brand-50 px-3 py-1.5 rounded-full">
                {format.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-950/60 backdrop-blur-md z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-[90%] max-w-lg h-fit bg-cream rounded-[2.5rem] z-[70] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-2">Vamos conversar?</h3>
                  <p className="text-ink/60 text-sm md:text-base">Escolha o canal de sua preferência para iniciarmos sua jornada estratégica.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-brand-900/5 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://wa.me/5511940803333?text=Olá,%20vim%20pelo%20portfólio%20corporativo%20e%20gostaria%20de%20agendar%20uma%20conversa%20estratégica" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 bg-brand-700 rounded-2xl text-white hover:bg-brand-800 transition-all group shadow-lg shadow-brand-700/20"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">WhatsApp Direto</div>
                    <div className="text-white/60 text-xs uppercase tracking-widest font-semibold">Resposta em até 24h</div>
                  </div>
                  <ChevronRight size={20} className="ml-auto opacity-50" />
                </a>

                <a 
                  href="mailto:deborabolangno@outlook.com" 
                  className="flex items-center gap-5 p-6 bg-white border border-ink/10 rounded-2xl text-ink hover:border-brand-700/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-700 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">E-mail Corporativo</div>
                    <div className="text-ink/40 text-xs uppercase tracking-widest font-semibold">deborabolangno@outlook.com</div>
                  </div>
                  <ChevronRight size={20} className="ml-auto opacity-20" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/deborabolangno" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 bg-white border border-ink/10 rounded-2xl text-ink hover:border-brand-700/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-700 group-hover:scale-110 transition-transform">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">LinkedIn Profissional</div>
                    <div className="text-ink/40 text-xs uppercase tracking-widest font-semibold">Conecte-se e acompanhe insights</div>
                  </div>
                  <ChevronRight size={20} className="ml-auto opacity-20" />
                </a>
              </div>
            </div>
            
            <div className="bg-brand-900 p-6 text-center">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                Débora Bolangno · Mentoria & Consultoria
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const CTA = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <section id="contato" className="py-24 bg-brand-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://i.ibb.co/PG74Lqyg/Gemini-Generated-Image-fpo6d7fpo6d7fpo6.png" 
          alt="Background Texture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 md:mb-8">
            O próximo nível da sua carreira começa com uma <span className="opacity-50 italic">decisão estratégica.</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 md:mb-12 max-w-md">
            Clique no botão abaixo para agendar uma breve conversa e entender como posso acelerar seus resultados.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a 
              href="https://wa.me/5511940803333?text=Olá,%20vim%20pelo%20portfólio%20corporativo%20e%20gostaria%20de%20agendar%20uma%20conversa%20estratégica" 
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 1 }}
              whileInView={{ 
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              viewport={{ once: false }}
              className="bg-white text-brand-700 px-8 md:px-10 py-4 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-brand-50 transition-all shadow-xl"
            >
              Quero agendar minha sessão
              <ArrowRight size={18} />
            </motion.a>
            <button 
              onClick={onOpenContact}
              className="bg-transparent border border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-xs md:text-sm uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all cursor-pointer"
            >
              Falar no WhatsApp
              <MessageCircle size={18} />
            </button>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { icon: <Linkedin size={20} />, label: "LinkedIn · Débora Bolangno", href: "https://www.linkedin.com/in/deborabolangno" },
            { icon: <Mail size={20} />, label: "deborabolangno@outlook.com", href: "mailto:deborabolangno@outlook.com" },
          ].map((link, i) => (
            <a 
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white/10 border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all group"
            >
              <div className="text-brand-300 group-hover:scale-110 transition-transform">{link.icon}</div>
              <span className="text-sm font-medium tracking-wide">{link.label}</span>
              <ChevronRight size={16} className="ml-auto opacity-30 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-ink py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center md:flex-row md:justify-between gap-10 md:gap-8">
        {/* Logo & Name */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" 
                alt="Logo Débora Bolangno" 
                className="w-full h-full object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="font-serif text-white text-lg md:text-xl font-bold tracking-tight">
              Débora Bolangno
            </div>
          </div>
          <div className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-medium">
            DB Consultoria & Estratégia
          </div>
        </div>
        
        {/* Dev Info */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-white/40 text-[10px] tracking-[0.2em] uppercase font-medium flex items-center gap-2">
            Desenvolvido por <a href="https://www.orvalia.com.br" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 transition-colors font-bold">Orvalia Studio</a>
          </div>
          <div className="text-white/20 text-[9px] uppercase tracking-widest">
            © 2026 · Todos os direitos reservados
          </div>
        </div>
        
        {/* Category/Tag */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="px-4 py-1 border border-white/10 rounded-full text-white/40 text-[9px] uppercase tracking-[0.2em]">
            Portfólio Corporativo
          </div>
          <div className="text-white/10 text-[8px] uppercase tracking-tighter">
            Executive Presence & Leadership
          </div>
        </div>
      </div>
    </footer>
  );
};

const SectionReveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 1000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close modal on Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsContactModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isContactModalOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="selection:bg-brand-200 selection:text-brand-900 relative">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><Testimonials /></SectionReveal>
        <SectionReveal><Services /></SectionReveal>
        <SectionReveal><Lectures /></SectionReveal>
        <SectionReveal><Differentials /></SectionReveal>
        <SectionReveal><Formats /></SectionReveal>
        <CTA onOpenContact={() => setIsContactModalOpen(true)} />
      </main>
      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Floating Actions */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-4 items-center">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/5511940803333?text=Olá,%20vim%20pelo%20portfólio%20corporativo%20e%20gostaria%20de%20maiores%20informações"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle size={24} fill="currentColor" />
        </a>

        {/* Back to Top Button */}
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={scrollToTop}
            className="p-4 bg-ink text-white rounded-full shadow-2xl hover:bg-brand-700 transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </div>
    </div>
  );
}
