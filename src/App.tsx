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
  ArrowUp,
  TrendingUp,
  Trees,
  Mic,
  Check,
  Instagram
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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Programas", href: "#programas" },
    { name: "Palestras", href: "#palestras" },
    { name: "Contato", href: "#contato" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.endsWith('.html')) return; // Allow normal links to .html files
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-400 ${
        isScrolled 
          ? "bg-creme/96 backdrop-blur-md border-ink/6 shadow-lg shadow-verde/6" 
          : "bg-creme border-ink/6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, "#")}
          className="flex items-center gap-3 group" 
        >
          <img 
            src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" 
            alt="Logo Débora Bolangno" 
            className="w-11 h-11 object-contain group-hover:scale-110 transition-transform"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-ink leading-tight">
              Débora Bolangno
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-ink/40 font-medium">
              Estratégia de Carreira & Liderança
            </span>
          </div>
        </a>

        <div className="hidden min-[900px]:flex items-center gap-10">
          <div className="flex gap-1">
            <a href="https://www.instagram.com/deborabolangno" target="_blank" rel="noopener" className="w-9 h-9 flex items-center justify-center text-ink/35 hover:text-verde transition-colors">
              <Instagram size={17} />
            </a>
            <a href="https://www.linkedin.com/in/deborabolangno" target="_blank" rel="noopener" className="w-9 h-9 flex items-center justify-center text-ink/35 hover:text-verde transition-colors">
              <Linkedin size={17} />
            </a>
            <a href="mailto:deborabolangno@outlook.com" className="w-9 h-9 flex items-center justify-center text-ink/35 hover:text-verde transition-colors">
              <Mail size={17} />
            </a>
          </div>
          <div className="flex gap-7">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink/55 hover:text-verde transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-verde transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a 
            href="https://wa.me/5511940803333?text=Olá,%20vim%20pelo%20portfólio%20e%20gostaria%20de%20maiores%20informações" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-verde text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#112e28] hover:-translate-y-px transition-all whitespace-nowrap"
          >
            Solicitar Proposta
          </a>
        </div>

        <button 
          className="min-[900px]:hidden text-ink p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-verde/40 backdrop-blur-sm z-[190]"
            />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[340px] bg-creme z-[200] flex flex-col p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <img 
                    src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" 
                    alt="Logo" 
                    className="w-10 h-10 object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-ink">
                      Débora Bolangno
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-ink/40 font-medium">
                      Estratégia de Carreira
                    </span>
                  </div>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-ink">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-7">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-2xl font-serif font-bold text-ink hover:text-verde transition-colors flex items-center justify-between"
                  >
                    {link.name}
                    <ChevronRight size={20} className="opacity-30" />
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-ink/8">
                <a 
                  href="https://wa.me/5511940803333?text=Olá,%20vim%20pelo%20portfólio%20e%20gostaria%20de%20maiores%20informações" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-verde text-white p-[18px] rounded-full text-center text-[11px] uppercase tracking-[0.2em] font-bold block hover:bg-[#112e28] transition-all"
                >
                  Solicitar Proposta
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-creme overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-[60px] grid grid-cols-1 min-[900px]:grid-cols-2 gap-20 items-center w-full">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-px bg-verde-med"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-verde-med font-bold">
              Estrategista de Carreira · Débora Bolangno
            </span>
          </div>
          <h1 className="font-serif text-[clamp(36px,4.5vw,58px)] font-black leading-[1.08] text-ink mb-5">
            <span className="block">Você não está travado</span>
            <span className="block">por falta de capacidade.</span>
            <span className="block italic text-highlight">Está travado por falta de estratégia.</span>
          </h1>
          <p className="text-lg text-ink/65 max-w-[520px] leading-[1.65] mb-8">
            Mentoria para profissionais que já performam — mas ainda não avançam na velocidade que deveriam.
          </p>
          <div className="grid grid-cols-2 gap-6 py-6 border-y border-ink/10 mb-9">
            <div>
              <div className="font-serif text-[64px] font-black text-verde leading-none mb-1">+20</div>
              <div className="text-[9px] uppercase tracking-[0.15em] font-semibold text-ink/40 leading-[1.4]">
                Anos de experiência<br/>no mundo corporativo
              </div>
            </div>
            <div>
              <div className="font-serif text-[64px] font-black text-verde leading-none mb-1">+250</div>
              <div className="text-[9px] uppercase tracking-[0.15em] font-semibold text-ink/40 leading-[1.4]">
                Profissionais<br/>impactados e mentorados
              </div>
            </div>
          </div>
          <div className="flex gap-3.5 flex-wrap">
            <a href="https://wa.me/5511940803333?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico" target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 bg-verde text-white px-7 py-3.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-700 transition-all hover:bg-[#112e28] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,58,46,0.25)] group">
              Agendar diagnóstico estratégico
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#programas" className="inline-flex items-center gap-2.5 bg-transparent text-ink px-7 py-3.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-700 border-2 border-ink/20 transition-all hover:bg-ink hover:text-white">
              Conhecer os programas
            </a>
          </div>
        </div>
        <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] bg-verde shadow-[0_40px_100px_rgba(26,58,46,0.2)] border border-ink/5 min-[900px]:order-none order-first min-[900px]:max-h-none max-h-[420px]">
          <img 
            src="https://i.ibb.co/N6D2hPBM/debora01.png" 
            alt="Débora Bolangno - Estrategista de Carreira e Liderança Executiva" 
            className="absolute w-full h-[110%] -top-[5%] object-cover transition-transform duration-800 hover:scale-103"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
          <img src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" alt="" className="absolute top-7 right-7 w-20 opacity-8 pointer-events-none" referrerPolicy="no-referrer" />
        </div>
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
    <div className="bg-verde py-5 overflow-hidden whitespace-nowrap border-y border-white/10">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {words.map((word) => (
              <div key={word} className="flex items-center gap-12">
                <span className="font-cormorant italic text-[18px] text-white/85">{word}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ProofBar = () => {
  const items = [
    { num: "+250", label: "Profissionais\natendidos" },
    { num: "+20", label: "Anos de experiência\nem RH e liderança" },
    { num: "SP", label: "Osasco e\nGrande São Paulo" },
    { num: "5", label: "Formatos de\natendimento" },
  ];

  return (
    <div className="bg-[#0d2018] py-6 px-8">
      <div className="max-w-7xl mx-auto flex justify-center items-center flex-wrap gap-y-6 sm:grid sm:grid-cols-2 md:flex md:flex-nowrap md:gap-0">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center px-6 md:px-10 text-center border-white/20 last:border-0 md:border-r w-full sm:w-auto"
          >
            <span className="font-serif text-[28px] font-black text-dourado leading-none">{item.num}</span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-white/50 font-medium mt-1 whitespace-pre-line leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Identification = () => {
  const points = [
    "Você entrega resultado, mas não é reconhecido na mesma proporção",
    "Sente que sua carreira depende mais de fatores externos do que deveria",
    "Está ocupado, mas não necessariamente avançando",
    "Já tentou \"se desenvolver\", mas sem uma direção clara",
    "Sabe que poderia estar em um cargo maior, mas não sabe qual é o caminho",
    "Quer tomar decisões mais estratégicas e com mais confiança",
  ];

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[620px] mx-auto text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-verde-med block mb-5">Você se reconhece aqui?</span>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.15] text-ink">
            Se você sente que poderia estar<br />
            em outro nível… <span className="italic text-highlight">você provavelmente está certo.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {points.map((point, i) => (
            <div key={i} className="flex gap-4 bg-[#f8f6f2] border-l-4 border-dourado/40 p-6 transition-colors hover:border-dourado">
              <span className="text-dourado font-bold text-lg leading-[1.6]">—</span>
              <p className="text-[15px] text-ink/70 leading-[1.55]">{point}</p>
            </div>
          ))}
        </div>
        <p className="mt-14 text-center font-cormorant text-[22px] font-semibold text-verde tracking-tight">
          O problema não é esforço. É falta de clareza estratégica.
        </p>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="bg-creme py-24 px-8 border-y border-ink/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-20 items-center">
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-square min-[900px]:aspect-auto min-[900px]:h-[680px]">
          <img 
            src="https://i.ibb.co/KpxMJ3Yq/deb04.jpg" 
            alt="Débora Bolangno - Mentora de Carreira" 
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div>
          <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-verde-med/30 mb-6 block">Sobre Débora Bolangno</span>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.15] text-ink mb-8">
            Estratégia, Liderança <br />
            <span className="italic text-highlight">& Execução Real.</span>
          </h2>
          <div className="space-y-6 text-lg text-ink/75 leading-[1.65]">
            <p>Com mais de 20 anos de trajetória no mundo corporativo, Débora Bolangno especializou-se em desenvolver líderes e acelerar carreiras de alto nível.</p>
            <p>Sua abordagem une visão estratégica, inteligência emocional e ferramentas práticas para quem não aceita o estancamento e busca o próximo nível de influência e resultado.</p>
            <p className="font-serif italic text-xl text-verde border-l-4 border-dourado pl-6 py-2">
              "Meu papel é encurtar o seu caminho entre onde você está hoje e a posição que você sabe que merece ocupar."
            </p>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-ink/10 pt-8">
            <img src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" alt="" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-ink/20 mb-1">Formação & Expertise</p>
              <p className="text-sm text-ink/70 font-medium italic">Especialista em Desenvolvimento Humano e Estratégia de Carreira</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsLuxury = () => {
  const testimonials = [
    {
      text: "Cada encontro foi transformador — inspiração, provocação e prática real. Já estou aplicando no meu dia a dia como líder.",
      name: "Lívia Alves",
      role: "Gerente de Agência Bradesco",
      image: "https://i.ibb.co/cSFbNmc2/LIVIA-ALVES-GERENTE-DE-AGENCIA-BRADESCO.jpg"
    },
    {
      text: "Semanas muito valiosas. Saio com determinação para implementar tudo.",
      name: "Anderson Alves dos Santos",
      role: "Gerente de Agência Bradesco | CFP®",
      image: "https://i.ibb.co/PzNrVgvj/Anderson-Alves-dos-Santos-CFPM-GERENTE-DE-AGENCIA-BRADESCO.jpg"
    },
    {
      text: "Levarei esses aprendizados comigo em cada desafio profissional.",
      name: "Fredie Abrantes",
      role: "Gerente de Agência Bradesco",
      image: "https://i.ibb.co/d0t8pY9V/fredieabrantes-gerente-de-agencia-bradesco.jpg"
    },
    {
      text: "Uma experiência que trouxe evolução real para executar no dia a dia.",
      name: "Sara Martins",
      role: "CEA",
      image: "https://i.ibb.co/bx6PJ2t/sara.png"
    }
  ];

  return (
    <section id="depoimentos" className="bg-brand-950 text-creme py-24 px-6 overflow-hidden">
      <div className="max-w-[900px] mx-auto">
        <h2 className="font-serif text-[42px] font-bold text-center mb-4 text-creme leading-tight">
          Resultados reais de quem já viveu essa transformação
        </h2>
        <p className="font-sans text-center text-creme/60 mb-20">
          Clareza, evolução e aplicação prática no dia a dia da liderança.
        </p>

        {/* DESTAQUE RENATA */}
        <div className="mb-24 flex flex-col md:flex-row items-center gap-10 bg-white/5 p-10 rounded-[40px] border border-white/10">
          <img 
            src="https://i.ibb.co/0yLb61HN/Renata-Nazareth-de-Jesus-CEA-GERENTEGERAL-BRADESCO.jpg" 
            alt="Renata Nazareth de Jesus" 
            className="w-32 h-32 md:w-48 md:h-48 rounded-[32px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="text-center md:text-left">
            <p className="font-cormorant text-[26px] leading-[1.6] italic text-creme/90">
              “Uma jornada rica e transformadora. Saio com novos olhares, insights valiosos e a certeza de evolução real como líder.”
            </p>
            <span className="block mt-5 text-[14px] tracking-widest font-bold text-highlight uppercase">
              — Renata Nazareth de Jesus, CEA
            </span>
          </div>
        </div>

        {/* LISTA LIMPA */}
        <div className="flex flex-col gap-12 mb-24">
          {testimonials.map((t, i) => (
            <div key={i} className="flex gap-6 items-start border-l border-white/10 pl-8 transition-all hover:border-highlight/50 group">
              {t.image && (
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              )}
              <div>
                <p className="font-cormorant text-[20px] leading-[1.6] text-creme/80 italic group-hover:text-creme transition-colors">
                  “{t.text}”
                </p>
                <div className="mt-4 flex flex-col">
                  <span className="text-[10px] font-mono text-creme/30 uppercase tracking-[0.3em]">— {t.name}{t.role ? `, ${t.role}` : ''}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INSTITUCIONAL GLAUCIMAR */}
        <div className="border-t border-white/10 pt-16 flex flex-col items-center gap-8">
          <img 
            src="https://i.ibb.co/8DcshQsd/Glaucimar-Peticov-CEO.jpg" 
            alt="Glaucimar Peticov" 
            className="w-24 h-24 rounded-full object-cover grayscale border-2 border-verde-med/30"
          />
          <div className="text-center max-w-2xl">
            <p className="font-cormorant text-[20px] text-creme/70 italic leading-relaxed">
              “Carreiras são construídas pela consistência, pelo tempo e pelas trocas. É na colaboração que fortalecemos nossa trajetória e ampliamos nosso impacto.”
            </p>
            <span className="block mt-6 text-[13px] font-bold text-verde-med uppercase tracking-[0.2em]">
              — Glaucimar Peticov (Ex-Diretora Executiva do Bradesco, hoje CEO e fundadora da Peti Desenvolvimento Humano, conselheira e referência em liderança e cultura organizacional)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Qualification = () => {
  return (
    <section className="bg-verde py-20 px-8 text-creme text-center overflow-hidden relative">
      <div className="max-w-[800px] mx-auto relative z-10">
        <h2 className="font-serif text-[clamp(24px,2.5vw,36px)] font-bold italic leading-tight mb-8">
          "Para quem o sucesso atual já não é mais suficiente e a próxima etapa exige uma nova versão de si mesmo."
        </h2>
        <div className="w-16 h-px bg-creme/20 mx-auto mb-8"></div>
        <p className="font-cormorant text-[20px] text-creme/70 tracking-wide font-medium">
          Mentoria focada em posições de liderança, gestão e transições estratégicas.
        </p>
      </div>
      <img src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] opacity-5 pointer-events-none" referrerPolicy="no-referrer" />
    </section>
  );
};

const PresenceGallery = () => {
  return (
    <section className="bg-creme py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-verde-med block mb-12 text-center">Presença & Atuação Executiva</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl group">
             <img 
              src="https://i.ibb.co/FkxQ8zKG/deborabolangoimage1.jpg" 
              alt="Débora Bolangno Atuação" 
              className="w-full h-full object-cover object-[50%_20%] brightness-[1.08] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
          <div className="relative rounded-[40px] overflow-hidden aspect-[4/3] shadow-2xl group">
             <img 
              src="https://i.ibb.co/PZS5bDgy/DEBORA-MARCA-PESSOAL.jpg" 
              alt="Débora Bolangno Liderança" 
              className="w-full h-full object-cover object-[50%_15%] brightness-[1.08] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Triagem = () => {
  return (
    <section className="bg-brand-950 py-24 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-highlight block mb-5 text-center">Seu momento</span>
        <h2 className="font-serif text-[clamp(28px,3.5vw,44px)] font-black text-creme leading-tight text-center mb-16">
          Qual desses momentos descreve você hoje?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="marca-intencional.html" className="group bg-white/5 border border-white/10 p-10 rounded-3xl transition-all hover:bg-highlight/10 hover:border-highlight hover:-translate-y-2">
            <div className="font-serif text-[44px] font-black text-highlight/20 leading-none mb-6">01</div>
            <h3 className="font-serif text-2xl font-bold text-creme mb-4">Falta de direção</h3>
            <p className="text-sm text-creme/50 leading-relaxed mb-8">Tenho competência, mas me falta clareza. Sinto que estou aquém do meu potencial e não sei qual é o próximo passo certo.</p>
            <span className="text-[10px] uppercase tracking-widest font-bold text-highlight flex items-center gap-2 group-hover:gap-4 transition-all">Marca Intencional <ArrowRight size={14} /></span>
          </a>
          <a href="mentoria-individual.html" className="group bg-white/5 border border-white/10 p-10 rounded-3xl transition-all hover:bg-highlight/10 hover:border-highlight hover:-translate-y-2">
            <div className="font-serif text-[44px] font-black text-highlight/20 leading-none mb-6">02</div>
            <h3 className="font-serif text-2xl font-bold text-creme mb-4">Liderança travada</h3>
            <p className="text-sm text-creme/50 leading-relaxed mb-8">Meu time depende demais de mim. Preciso evoluir como líder e gerar resultado sem precisar estar em tudo.</p>
            <span className="text-[10px] uppercase tracking-widest font-bold text-highlight flex items-center gap-2 group-hover:gap-4 transition-all">Mentoria <ArrowRight size={14} /></span>
          </a>
          <a href="sequoia.html" className="group bg-white/5 border border-white/10 p-10 rounded-3xl transition-all hover:bg-highlight/10 hover:border-highlight hover:-translate-y-2 relative overflow-hidden">
            <img 
              src="https://i.ibb.co/Rkvpdqkr/logo-sequoia.png" 
              alt="" 
              className="absolute -right-10 -top-10 w-40 h-40 opacity-5 grayscale brightness-200 pointer-events-none group-hover:opacity-10 transition-opacity" 
            />
            <div className="font-serif text-[44px] font-black text-highlight/20 leading-none mb-6">03</div>
            <h3 className="font-serif text-2xl font-bold text-creme mb-4">Crescimento isolado</h3>
            <p className="text-sm text-creme/50 leading-relaxed mb-8">Falta troca com pessoas no meu nível. Quero crescer junto com quem entende o jogo — não sozinho.</p>
            <span className="text-[10px] uppercase tracking-widest font-bold text-highlight flex items-center gap-2 group-hover:gap-4 transition-all">Comunidade Sequoia <ArrowRight size={14} /></span>
          </a>
        </div>
      </div>
    </section>
  );
};

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [nome, setNome] = useState("");
  const [wa, setWa] = useState("");
  const [showResult, setShowResult] = useState(false);

  const WA_NUMBER = "5511940803333";

  const results = {
    direcao: {
      icon: '🧭',
      titulo: 'Você precisa de direção estratégica',
      desc: 'Sua maior alavanca agora não é trabalhar mais — é entender exatamente onde está e para onde quer ir. Com clareza, tudo muda.',
      produto: 'Marca Intencional',
      link: 'marca-intencional.html',
      msg: 'Olá, Débora! Fiz o diagnóstico no seu site e o resultado foi: *Marca Intencional*. Gostaria de entender como funciona e dar o próximo passo.'
    },
    lideranca: {
      icon: '🔐',
      titulo: 'Seu próximo nível depende da sua liderança',
      desc: 'Você tem potencial — o que falta é a liderança que sustenta resultados consistentes, sem depender só de você para tudo funcionar.',
      produto: 'Mentoria de Liderança',
      link: 'mentoria-individual.html',
      msg: 'Olá, Débora! Fiz o diagnóstico no seu site e o resultado foi: *Mentoria de Liderança*. Gostaria de entender como funciona e dar o próximo passo.'
    },
    network: {
      icon: '🌱',
      titulo: 'Você cresce mais rápido com as conexões certas',
      desc: 'Você já tem clareza e movimento — o que potencializa agora é estar com pessoas que jogam no mesmo nível e entendem o jogo.',
      produto: 'Comunidade Sequoia',
      link: 'sequoia.html',
      msg: 'Olá, Débora! Fiz o diagnóstico no seu site e o resultado foi: *Comunidade Sequoia*. Gostaria de entender como funciona e dar o próximo passo.'
    }
  };

  const steps = [
    {
      q: "Qual sensação mais se aproxima da sua carreira hoje?",
      options: [
        { l: "A", t: "Estou travado — sei que poderia estar em outro nível", v: "direcao" },
        { l: "B", t: "Estou crescendo, mas sem clareza para onde", v: "direcao" },
        { l: "C", t: "Estou liderando, mas com dificuldade — meu time depende demais de mim", v: "lideranca" },
        { l: "D", t: "Estou bem, mas quero evoluir com as pessoas certas ao redor", v: "network" }
      ]
    },
    {
      q: "Qual é seu maior desafio agora?",
      options: [
        { l: "A", t: "Decidir meus próximos passos com clareza", v: "direcao" },
        { l: "B", t: "Organizar prioridades e liderar melhor meu time", v: "lideranca" },
        { l: "C", t: "Desenvolver minha performance e consistência", v: "lideranca" },
        { l: "D", t: "Encontrar pessoas no meu nível para crescer junto", v: "network" }
      ]
    },
    {
      q: "Qual é o seu nível atual?",
      options: [
        { l: "A", t: "Pleno / Analista", v: "direcao" },
        { l: "B", t: "Sênior / Especialista", v: "direcao" },
        { l: "C", t: "Gestão / Coordenação", v: "lideranca" },
        { l: "D", t: "Liderança / Executivo / C-level", v: "network" }
      ]
    },
    {
      q: "O que você busca neste momento?",
      options: [
        { l: "A", t: "Clareza e direção estratégica para minha carreira", v: "direcao" },
        { l: "B", t: "Evolução na liderança e melhora de performance", v: "lideranca" },
        { l: "C", t: "Crescimento contínuo com network de alto valor", v: "network" },
        { l: "D", t: "Reposicionamento e novo ciclo profissional", v: "direcao" }
      ]
    },
    {
      q: "Como você se vê investindo na sua evolução agora?",
      options: [
        { l: "A", t: "Pronto para dar um passo, mas quero entender as opções primeiro", v: "direcao" },
        { l: "B", t: "Com clareza do que quero — buscando o programa certo", v: "lideranca" },
        { l: "C", t: "Totalmente comprometido com o próximo nível", v: "network" }
      ]
    }
  ];

  const calcResult = () => {
    const counts: Record<string, number> = { direcao: 0, lideranca: 0, network: 0 };
    Object.values(answers).forEach((v) => {
      const val = v as string;
      if (val in counts) {
        counts[val]++;
      }
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as keyof typeof results;
  };

  const handleNext = () => step < steps.length ? setStep(step + 1) : setStep(6);
  const handleBack = () => setStep(step - 1);

  const resultType = calcResult();
  const r = results[resultType];

  const handleSend = () => {
    if (!nome || !wa) return alert("Por favor preencha nome e WhatsApp");
    const msg = encodeURIComponent(`🔔 *Novo lead — diagnóstico*\n\nNome: ${nome}\nWhatsApp: ${wa}\nResultado: *${r.produto}*\n\n---\n${r.msg}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setShowResult(true);
  };

  return (
    <section id="quiz" className="bg-brand-950 py-24 px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        {!showResult ? (
          <>
            <div className="text-center mb-16">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-highlight block mb-5">Diagnóstico Gratuito</span>
              <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-black text-creme leading-tight mb-4">Descubra qual é o seu<br /><span className="italic text-highlight">próximo movimento</span></h2>
              <p className="text-creme/40 text-sm">Responda 5 perguntas rápidas e receba seu resultado personalizado.</p>
            </div>

            {step <= steps.length ? (
              <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                <div className="flex gap-2 mb-8">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={`h-1 flex-1 rounded-full bg-creme transition-colors ${i <= step ? "opacity-100" : "opacity-10"}`} />
                  ))}
                </div>
                <h3 className="font-serif text-2xl font-bold text-creme leading-tight mb-8">{steps[step-1].q}</h3>
                <div className="grid grid-cols-1 gap-3">
                  {steps[step-1].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => { setAnswers({ ...answers, [step]: opt.v }); handleNext(); }}
                      className={`flex items-center gap-5 p-5 border rounded-xl text-left transition-all ${answers[step] === opt.v ? "bg-highlight/20 border-highlight text-creme" : "bg-white/5 border-white/10 text-creme/60 hover:border-highlight/50 hover:bg-white/10"}`}
                    >
                      <span className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[11px] font-bold ${answers[step] === opt.v ? "bg-highlight border-highlight text-white" : ""}`}>{opt.l}</span>
                      <span className="text-[15px]">{opt.t}</span>
                    </button>
                  ))}
                </div>
                {step > 1 && <button onClick={handleBack} className="text-xs text-creme/30 hover:text-creme transition-colors mt-8">← Voltar</button>}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 border border-white/10 p-12 rounded-[40px] text-center">
                <h3 className="font-serif text-2xl font-bold text-creme mb-2">Seu diagnóstico está pronto</h3>
                <p className="text-creme/40 text-sm mb-10">Preencha os dados para receber seu resultado personalizado no WhatsApp.</p>
                <div className="space-y-4 max-w-sm mx-auto">
                  <input type="text" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-creme outline-none focus:border-highlight transition-colors" />
                  <input type="tel" placeholder="WhatsApp com DDD" value={wa} onChange={(e) => setWa(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-creme outline-none focus:border-highlight transition-colors" />
                  <button onClick={handleSend} className="w-full bg-highlight text-white py-5 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all hover:bg-highlight/80 flex items-center justify-center gap-3">Receber meu diagnóstico <ArrowRight size={16} /></button>
                </div>
                <button onClick={() => setStep(steps.length)} className="text-xs text-creme/30 hover:text-creme transition-colors mt-8">← Corrigir respostas</button>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="w-20 h-20 bg-highlight/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-8">{r.icon}</div>
            <h3 className="font-serif text-3xl font-bold text-creme mb-4">{r.titulo}</h3>
            <p className="text-creme/60 text-lg leading-relaxed mb-8">{r.desc}</p>
            <div className="font-serif italic text-2xl text-highlight mb-12">{r.produto}</div>
            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <a href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(r.msg)}`} target="_blank" className="bg-[#25D366] text-white py-5 rounded-full font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-transform"><MessageCircle size={20} fill="currentColor" /> Falar com a Débora</a>
              <a href={r.link} className="text-sm text-creme/40 hover:text-highlight transition-colors">Ver detalhes do programa →</a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};


const ProgramsGrid = () => {
  const cards = [
    {
      title: "Mentoria Individual",
      subtitle: "GESTÃO DE CARREIRA",
      desc: "Processo personalizado de 8 sessões para quem busca clareza, segurança na tomada de decisão e avanço na velocidade que merece.",
      features: ["Diagnóstico 360º", "Plano de Voo Individual", "Sessões Online de 1h"],
      icon: <Target size={24} />,
      link: "mentoria-individual.html",
      whatsapp: "Olá, gostaria de saber mais sobre a mentoria individual."
    },
    {
      title: "Marca Intencional",
      subtitle: "POSICIONAMENTO",
      desc: "Domine sua narrativa e construa autoridade inquestionável para ser a primeira opção nos grandes projetos do mercado.",
      features: ["Estratégia de LinkedIn", "Netweaving de Valor", "Personal Branding"],
      icon: <Award size={24} />,
      link: "marca-intencional.html",
      whatsapp: "Olá, gostaria de saber mais sobre o programa Marca Intencional."
    },
    {
      title: "Liderança Atualizada",
      subtitle: "MENTORIA EM GRUPO",
      desc: "Saia do operacional e torne-se o gestor que inspira, delega com segurança e constrói times de alta performance.",
      features: ["Aulas em Grupo", "Ferramentas Gerenciais", "Próxima Turma em Breve"],
      icon: <Users size={24} />,
      link: "lideranca-atualizada.html",
      whatsapp: "Olá, gostaria de entrar na lista de espera para a mentoria em grupo."
    },
    {
      title: "Comunidade Sequoia",
      subtitle: "ECOSSISTEMA",
      desc: "Um grupo seleto de líderes onde as raízes se entrelaçam para sustentar um crescimento inabalável e conexões de alto valor.",
      features: ["Encontros Quinzenais", "Networking Estratégico", "Sessão Individual Bônus"],
      icon: <Trees size={24} />,
      link: "sequoia.html",
      whatsapp: "Olá, gostaria de saber mais sobre a Comunidade Sequoia."
    },
    {
      title: "Palestras & Workshops",
      subtitle: "CORPORATIVO",
      desc: "Treinamentos customizados sobre liderança e carreira para empresas que desejam elevar o patamar de seus talentos.",
      features: ["Conteúdo sob medida", "Formato Presencial/Online", "Foco em Engajamento"],
      icon: <Mic size={24} />,
      link: "palestras.html",
      whatsapp: "Olá, gostaria de solicitar uma proposta de palestra para minha empresa."
    }
  ];

  return (
    <section id="programas" className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-verde-med font-bold mb-4 block">Ecossistema de Soluções</span>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.15] text-ink">
            O seu próximo <span className="italic text-highlight">salto estratégico</span> começa aqui.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white p-12 border border-ink/6 rounded-[40px] flex flex-col hover:border-verde-med/20 hover:shadow-[0_20px_50px_rgba(26,58,46,0.08)] transition-all group">
              <div className="w-14 h-14 bg-creme rounded-2xl flex items-center justify-center text-verde mb-8 group-hover:bg-verde group-hover:text-creme transition-colors">
                {card.icon}
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink/35 font-black mb-4">{card.subtitle}</p>
              <h3 className="font-serif text-[28px] font-bold text-ink leading-tight mb-6">{card.title}</h3>
              <p className="text-[15px] text-ink/65 leading-[1.65] mb-8">{card.desc}</p>
              
              <ul className="space-y-3 mb-10">
                {card.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[13px] text-ink/75">
                    <Check size={14} className="text-verde" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-3">
                <a 
                  href={`https://wa.me/5511940803333?text=${encodeURIComponent(card.whatsapp)}`}
                  target="_blank"
                  rel="noopener"
                  className="block w-full bg-verde text-creme py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold text-center hover:bg-[#112e28] transition-colors"
                >
                  Agendar conversa
                </a>
                <a 
                  href={card.link}
                  className="block w-full border-2 border-ink/10 py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold text-center text-ink/60 hover:bg-ink hover:text-white transition-all"
                >
                  Ver detalhes
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




const Lectures = () => {
  const lectures = [
    {
      title: "Liderança na Era da Incerteza",
      desc: "Como guiar times de alta performance em cenários de mudança constante e pressão por resultados."
    },
    {
      title: "Comunicação de Impacto",
      desc: "Domine a arte de influenciar, negociar e se posicionar com autoridade em reuniões de alto nível."
    },
    {
      title: "Estratégia de Carreira 360º",
      desc: "Saia do operacional e assuma o protagonismo da sua trajetória profissional com foco em crescimento."
    }
  ];

  return (
    <section id="palestras" className="bg-creme py-24 px-8 border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col min-[900px]:flex-row justify-between items-start min-[900px]:items-end gap-10 mb-16">
          <div className="max-w-[620px]">
            <span className="text-[10px] uppercase tracking-[0.3em] text-verde-med font-bold mb-4 block">Palestras & Workshops</span>
            <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.15] text-ink">
              Conteúdo de <span className="italic text-highlight">alto impacto</span> para o seu time.
            </h2>
          </div>
          <a 
            href="https://wa.me/5511940803333?text=Olá,%20gostaria%20de%20receber%20um%20orçamento%20para%20palestras" 
            target="_blank"
            rel="noopener"
            className="bg-verde text-white px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-[#112e28] transition-all"
          >
            Solicitar orçamento
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lectures.map((l, i) => (
            <div key={i} className="bg-white p-10 rounded-[32px] border border-ink/6 shadow-sm hover:shadow-xl transition-all">
              <div className="w-10 h-10 bg-creme rounded-full flex items-center justify-center text-verde font-serif text-xl font-bold mb-6 italic">
                {i + 1}.
              </div>
              <h3 className="font-serif text-2xl font-bold text-ink leading-tight mb-4">{l.title}</h3>
              <p className="text-[15px] text-ink/65 leading-[1.6]">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const diffs = [
    {
      title: "+20 Anos de Mercado",
      desc: "Experiência real em grandes corporações, vivendo na prática os desafios que você enfrenta hoje."
    },
    {
      title: "Método Validado",
      desc: "Processos estruturados que unem ferramentas executivas com inteligência emocional e prática."
    },
    {
      title: "Foco em Execução",
      desc: "Menos teoria abstrata e mais planos de ação concretos para resultados visíveis em curto prazo."
    }
  ];

  return (
    <section className="bg-verde py-24 px-8 text-creme">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-[680px] mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.35em] text-creme/50 font-bold mb-5 block">Diferenciais</span>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.15]">Por que Débora Bolangno?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diffs.map((d, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[40px] hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-dourado/20 rounded-2xl flex items-center justify-center text-dourado mb-8">
                <Check size={24} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">{d.title}</h3>
              <p className="text-creme/65 text-base leading-[1.65]">{d.desc}</p>
            </div>
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
            className="fixed inset-0 m-auto w-[92%] max-w-lg h-fit max-h-[90vh] bg-creme rounded-[2rem] md:rounded-[2.5rem] z-[70] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-6 md:p-12 overflow-y-auto">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="pr-8">
                  <h3 className="font-serif text-2xl md:text-4xl font-bold text-ink mb-2">Vamos conversar?</h3>
                  <p className="text-ink/60 text-xs md:text-base leading-relaxed">Escolha o canal de sua preferência para iniciarmos sua jornada estratégica.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-brand-900/5 rounded-full transition-colors absolute right-6 top-6 md:static"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-3 md:space-y-4">
                <a 
                  href="https://wa.me/5511940803333?text=Olá,%20vim%20pelo%20portfólio%20corporativo%20e%20gostaria%20de%20agendar%20uma%20conversa%20estratégica" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-brand-700 rounded-2xl text-white hover:bg-brand-800 transition-all group shadow-lg shadow-brand-700/20"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <MessageCircle size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-base md:text-lg">WhatsApp Direto</div>
                    <div className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Resposta em até 24h</div>
                  </div>
                  <ChevronRight size={18} className="ml-auto opacity-50" />
                </a>

                <a 
                  href="mailto:deborabolangno@outlook.com" 
                  className="flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-white border border-ink/10 rounded-2xl text-ink hover:border-brand-700/30 transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-700 group-hover:scale-110 transition-transform shrink-0">
                    <Mail size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-base md:text-lg">E-mail Corporativo</div>
                    <div className="text-ink/40 text-[9px] md:text-xs uppercase tracking-widest font-semibold truncate">deborabolangno@outlook.com</div>
                  </div>
                  <ChevronRight size={18} className="ml-auto opacity-20" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/deborabolangno" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-white border border-ink/10 rounded-2xl text-ink hover:border-brand-700/30 transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-700 group-hover:scale-110 transition-transform shrink-0">
                    <Linkedin size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-base md:text-lg">LinkedIn Profissional</div>
                    <div className="text-ink/40 text-[9px] md:text-xs uppercase tracking-widest font-semibold">Conecte-se e acompanhe insights</div>
                  </div>
                  <ChevronRight size={18} className="ml-auto opacity-20" />
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

const CTA = () => {
  return (
    <section className="bg-creme-light py-24 text-center px-8 border-y border-ink/4">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] font-black text-ink leading-[1.1] mb-8 max-w-[800px] mx-auto">
          Pronto para o seu <span className="italic text-highlight">próximo nível</span> na carreira?
        </h2>
        <p className="text-[18px] text-ink/70 max-w-[600px] mx-auto mb-10 leading-[1.6]">
          Agende agora um diagnóstico estratégico e entenda como podemos acelerar seu crescimento e resultados.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/5511940803333?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20diagnóstico%20estratégico" target="_blank" rel="noopener" className="bg-verde text-white px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-[#112e28] transition-all flex items-center gap-3">
            Agendar diagnóstico agora
            <ArrowRight size={18} />
          </a>
          <a href="https://www.linkedin.com/in/deborabolangno" target="_blank" rel="noopener" className="border-2 border-ink/10 text-ink px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-ink hover:text-white transition-all">
            Ver LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-verde py-16 px-8 text-creme">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-4">
            <img src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-none mb-1">Débora Bolangno</span>
              <span className="text-[9px] uppercase tracking-widest text-creme/40">Estratégia de Carreira & Liderança</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-6">
          <a href="https://www.instagram.com/deborabolangno" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/deborabolangno" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:deborabolangno@outlook.com" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <Mail size={18} />
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-creme/10 text-[8px] font-mono uppercase tracking-[0.4em] mb-1">Desenvolvido por Orvalia Studio</p>
          <p className="text-[8px] font-mono text-creme/10 uppercase tracking-[0.4em]">© 2026 Débora Bolangno · Todos os direitos reservados</p>
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
    <div className="selection:bg-verde selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <PresenceGallery />
        <SectionReveal><Triagem /></SectionReveal>
        <div className="bg-creme py-32 px-8 text-center border-y border-ink/5">
          <p className="font-serif text-[clamp(28px,4vw,48px)] font-black text-ink leading-tight max-w-[680px] mx-auto mb-6">
            O problema não é esforço.<br /><span className="italic text-highlight">É direção estratégica.</span>
          </p>
          <p className="text-ink/50 text-lg max-w-[500px] mx-auto leading-relaxed">
            Profissionais que chegam ao próximo nível não trabalham mais — trabalham com mais clareza sobre onde estão indo e por quê.
          </p>
        </div>
        <SectionReveal><Identification /></SectionReveal>
        <SectionReveal><ProofBar /></SectionReveal>
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><TestimonialsLuxury /></SectionReveal>
        <SectionReveal><Qualification /></SectionReveal>
        <ProgramsGrid />
        <SectionReveal><Lectures /></SectionReveal>
        <SectionReveal><Differentials /></SectionReveal>
        <Quiz />
        <CTA />
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
          href={`https://wa.me/5511940803333?text=${encodeURIComponent("Olá, vim pelo site e gostaria de mais informações.")}`}
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
            className="p-4 bg-verde text-creme rounded-full shadow-2xl hover:bg-verde-med transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </div>
    </div>
  );
}
