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
          <span className="text-[10px] uppercase tracking-[0.3em] text-verde-med font-bold mb-6 block">Sobre Débora Bolangno</span>
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
              <p className="text-[10px] uppercase tracking-widest text-ink/40 font-bold mb-1">Formação & Expertise</p>
              <p className="text-sm text-ink/70 font-medium italic">Especialista em Desenvolvimento Humano e Estratégia de Carreira</p>
            </div>
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
      name: "Carlos Mendes",
      role: "Gerente de TI"
    },
    {
      text: "O maior ganho foi conseguir organizar meu pensamento e me posicionar melhor como líder. Eu sabia tecnicamente o que fazer, mas faltava direção. Hoje consigo tomar decisões com muito mais confiança.",
      name: "Ana Silveira",
      role: "Diretora Comercial"
    }
  ];

  return (
    <section id="depoimentos" className="bg-creme-light py-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col min-[900px]:flex-row justify-between items-start min-[900px]:items-end gap-10 mb-16">
          <div className="max-w-[580px]">
            <span className="text-[10px] uppercase tracking-[0.3em] text-verde-med font-bold mb-4 block">Prova Social</span>
            <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.15] text-ink">
              <span className="italic text-highlight">Resultados reais</span> de quem já passou pelo processo
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="bg-creme p-4 md:p-6 rounded-2xl shadow-md border border-ink/5">
              <span className="block font-serif text-3xl font-black text-verde">98%</span>
              <span className="text-[9px] uppercase tracking-widest text-ink/40 font-bold">de satisfação</span>
            </div>
            <div className="bg-verde p-4 md:p-6 rounded-2xl shadow-md text-creme">
              <span className="block font-serif text-3xl font-black">+250</span>
              <span className="text-[9px] uppercase tracking-widest text-creme/50 font-bold">alcançados</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-creme p-10 rounded-[28px] border border-ink/4 shadow-sm relative group hover:shadow-xl transition-all">
              <div className="absolute top-8 right-10 text-dourado/20 font-serif text-[80px] leading-none select-none">"</div>
              <p className="text-[17px] text-ink/75 leading-[1.65] italic mb-10 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-verde flex items-center justify-center text-creme font-bold">{t.name[0]}</div>
                <div>
                  <p className="text-sm font-bold text-ink mb-0.5">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-widest text-ink/40 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
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
          <p className="text-creme/40 text-[10px] uppercase tracking-[0.2em] font-medium mb-1">Desenvolvido por Orvalia Studio</p>
          <p className="text-[10px] text-creme/20 uppercase tracking-widest">© 2026 Débora Bolangno · Todos os direitos reservados</p>
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
        <SectionReveal><Identification /></SectionReveal>
        <SectionReveal><ProofBar /></SectionReveal>
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><Testimonials /></SectionReveal>
        <SectionReveal><Qualification /></SectionReveal>
        <ProgramsGrid />
        <SectionReveal><Lectures /></SectionReveal>
        <SectionReveal><Differentials /></SectionReveal>
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
