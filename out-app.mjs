// src/App.tsx
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  Linkedin,
  Users,
  Target,
  Award,
  Menu,
  X,
  MessageCircle,
  ArrowUp,
  Trees,
  Mic,
  Check,
  Instagram
} from "lucide-react";
import { useState, useEffect } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleEsc = (e) => {
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
    { name: "Contato", href: "#contato" }
  ];
  const scrollToSection = (e, href) => {
    if (href.endsWith(".html")) return;
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
  return /* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-400 ${isScrolled ? "bg-creme/96 backdrop-blur-md border-ink/6 shadow-lg shadow-verde/6" : "bg-creme border-ink/6"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-8 h-20 flex justify-between items-center", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#",
              onClick: (e) => scrollToSection(e, "#"),
              className: "flex items-center gap-3 group",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "https://i.ibb.co/v4bp7gxB/logo-db-3.png",
                    alt: "Logo D\xE9bora Bolangno",
                    className: "w-11 h-11 object-contain group-hover:scale-110 transition-transform",
                    referrerPolicy: "no-referrer"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-serif text-lg font-bold text-ink leading-tight", children: "D\xE9bora Bolangno" }),
                  /* @__PURE__ */ jsx("span", { className: "text-[9px] uppercase tracking-[0.2em] text-ink/40 font-medium", children: "Estrat\xE9gia de Carreira & Lideran\xE7a" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "hidden min-[900px]:flex items-center gap-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/deborabolangno", target: "_blank", rel: "noopener", className: "w-9 h-9 flex items-center justify-center text-ink/35 hover:text-verde transition-colors", children: /* @__PURE__ */ jsx(Instagram, { size: 17 }) }),
              /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/deborabolangno", target: "_blank", rel: "noopener", className: "w-9 h-9 flex items-center justify-center text-ink/35 hover:text-verde transition-colors", children: /* @__PURE__ */ jsx(Linkedin, { size: 17 }) }),
              /* @__PURE__ */ jsx("a", { href: "mailto:deborabolangno@outlook.com", className: "w-9 h-9 flex items-center justify-center text-ink/35 hover:text-verde transition-colors", children: /* @__PURE__ */ jsx(Mail, { size: 17 }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-7", children: navLinks.map((link) => /* @__PURE__ */ jsxs(
              "a",
              {
                href: link.href,
                onClick: (e) => scrollToSection(e, link.href),
                className: "text-[10px] uppercase tracking-[0.2em] font-semibold text-ink/55 hover:text-verde transition-all relative group",
                children: [
                  link.name,
                  /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-px bg-verde transition-all duration-300 group-hover:w-full" })
                ]
              },
              link.name
            )) }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://wa.me/5511940803333?text=Ol\xE1,%20vim%20pelo%20portf\xF3lio%20e%20gostaria%20de%20maiores%20informa\xE7\xF5es",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-verde text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#112e28] hover:-translate-y-px transition-all whitespace-nowrap",
                children: "Solicitar Proposta"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "min-[900px]:hidden text-ink p-2",
              onClick: () => setIsMobileMenuOpen(true),
              children: /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isMobileMenuOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => setIsMobileMenuOpen(false),
              className: "fixed inset-0 bg-verde/40 backdrop-blur-sm z-[190]"
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { x: "100%" },
              animate: { x: 0 },
              exit: { x: "100%" },
              transition: { type: "tween", duration: 0.35, ease: "easeOut" },
              className: "fixed top-0 right-0 bottom-0 w-[80%] max-w-[340px] bg-creme z-[200] flex flex-col p-8 shadow-2xl",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-12", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: "https://i.ibb.co/v4bp7gxB/logo-db-3.png",
                        alt: "Logo",
                        className: "w-10 h-10 object-contain"
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-serif text-base font-bold text-ink", children: "D\xE9bora Bolangno" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[9px] uppercase tracking-[0.2em] text-ink/40 font-medium", children: "Estrat\xE9gia de Carreira" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("button", { onClick: () => setIsMobileMenuOpen(false), className: "p-2 text-ink", children: /* @__PURE__ */ jsx(X, { size: 24 }) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-7", children: navLinks.map((link) => /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: link.href,
                    onClick: (e) => scrollToSection(e, link.href),
                    className: "text-2xl font-serif font-bold text-ink hover:text-verde transition-colors flex items-center justify-between",
                    children: [
                      link.name,
                      /* @__PURE__ */ jsx(ChevronRight, { size: 20, className: "opacity-30" })
                    ]
                  },
                  link.name
                )) }),
                /* @__PURE__ */ jsx("div", { className: "mt-auto pt-8 border-t border-ink/8", children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://wa.me/5511940803333?text=Ol\xE1,%20vim%20pelo%20portf\xF3lio%20e%20gostaria%20de%20maiores%20informa\xE7\xF5es",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "bg-verde text-white p-[18px] rounded-full text-center text-[11px] uppercase tracking-[0.2em] font-bold block hover:bg-[#112e28] transition-all",
                    children: "Solicitar Proposta"
                  }
                ) })
              ]
            }
          )
        ] }) })
      ]
    }
  ) });
};
var Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };
  return /* @__PURE__ */ jsx("section", { id: "hero", className: "min-h-screen pt-20 flex items-center bg-creme overflow-hidden", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      variants: container,
      initial: "hidden",
      animate: "show",
      className: "max-w-7xl mx-auto px-8 py-[60px] grid grid-cols-1 min-[900px]:grid-cols-2 gap-20 items-center w-full",
      children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(motion.div, { variants: item, className: "flex items-center gap-3 mb-5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-px bg-verde-med" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-verde-med font-bold", children: "Estrategista de Carreira \xB7 D\xE9bora Bolangno" })
          ] }),
          /* @__PURE__ */ jsxs(motion.h1, { variants: item, className: "font-serif text-[clamp(42px,5vw,64px)] font-black leading-[1.05] text-ink mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "block", children: "Voc\xEA n\xE3o est\xE1 travado" }),
            /* @__PURE__ */ jsx("span", { className: "block", children: "por falta de capacidade." }),
            /* @__PURE__ */ jsx("span", { className: "block italic text-highlight", children: "Est\xE1 travado por falta de estrat\xE9gia." })
          ] }),
          /* @__PURE__ */ jsx(motion.p, { variants: item, className: "text-xl text-ink/65 max-w-[520px] leading-[1.6] mb-10", children: "Mentoria para profissionais que j\xE1 performam \u2014 mas ainda n\xE3o avan\xE7am na velocidade que deveriam." }),
          /* @__PURE__ */ jsxs(motion.div, { variants: item, className: "grid grid-cols-2 gap-10 py-8 border-y border-ink/10 mb-10", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-serif text-[64px] font-black text-verde leading-none mb-2", children: "+20" }),
              /* @__PURE__ */ jsxs("div", { className: "text-[10px] uppercase tracking-[0.2em] font-bold text-ink/40 leading-[1.4]", children: [
                "Anos de experi\xEAncia",
                /* @__PURE__ */ jsx("br", {}),
                "no mundo corporativo"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-serif text-[64px] font-black text-verde leading-none mb-2", children: "+250" }),
              /* @__PURE__ */ jsxs("div", { className: "text-[10px] uppercase tracking-[0.2em] font-bold text-ink/40 leading-[1.4]", children: [
                "Profissionais",
                /* @__PURE__ */ jsx("br", {}),
                "impactados e mentorados"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { variants: item, className: "flex gap-4 flex-wrap", children: [
            /* @__PURE__ */ jsxs("a", { href: "https://wa.me/5511940803333?text=Ol\xE1,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20diagn\xF3stico%20estrat\xE9gico", target: "_blank", rel: "noopener", className: "inline-flex items-center gap-3 bg-verde text-white px-8 py-4 rounded-full text-[11px] uppercase tracking-[0.25em] font-bold transition-all hover:bg-[#112e28] hover:-translate-y-1 hover:shadow-2xl hover:shadow-verde/20 group", children: [
              "Agendar diagn\xF3stico estrat\xE9gico",
              /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "transition-transform group-hover:translate-x-1" })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "#programas", className: "inline-flex items-center gap-3 bg-transparent text-ink px-10 py-4 rounded-full text-[11px] uppercase tracking-[0.25em] font-bold border-2 border-ink/20 transition-all hover:bg-ink hover:text-white", children: "Ver programas" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95, x: 20 },
            animate: { opacity: 1, scale: 1, x: 0 },
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
            className: "relative rounded-[48px] overflow-hidden aspect-[4/5] bg-verde shadow-2xl border border-ink/5 min-[900px]:order-none order-first",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "https://i.ibb.co/N6D2hPBM/debora01.png",
                  alt: "D\xE9bora Bolangno",
                  className: "absolute w-full h-[110%] -top-[5%] object-cover transition-transform duration-[2s] hover:scale-105",
                  referrerPolicy: "no-referrer"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" }),
              /* @__PURE__ */ jsx(
                motion.img,
                {
                  initial: { opacity: 0, x: 20 },
                  animate: { opacity: 0.1, x: 0 },
                  transition: { delay: 1.5, duration: 1 },
                  src: "https://i.ibb.co/v4bp7gxB/logo-db-3.png",
                  alt: "",
                  className: "absolute top-10 right-10 w-24 pointer-events-none",
                  referrerPolicy: "no-referrer"
                }
              )
            ]
          }
        )
      ]
    }
  ) });
};
var Marquee = () => {
  const words = [
    "Lideran\xE7a Atualizada",
    "Presen\xE7a Executiva",
    "Marca Intencional",
    "Carreira com Estrat\xE9gia",
    "Desenvolvimento Humano",
    "Primeira Lideran\xE7a"
  ];
  return /* @__PURE__ */ jsx("div", { className: "bg-verde py-5 overflow-hidden whitespace-nowrap border-y border-white/10", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      animate: { x: [0, -1e3] },
      transition: { duration: 22, repeat: Infinity, ease: "linear" },
      className: "flex gap-12 items-center",
      children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "flex gap-12 items-center", children: words.map((word) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-12", children: [
        /* @__PURE__ */ jsx("span", { className: "font-cormorant italic text-[18px] text-white/85", children: word }),
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-white/20" })
      ] }, word)) }, i))
    }
  ) });
};
var ProofBar = () => {
  const items = [
    { num: "+250", label: "Profissionais\natendidos" },
    { num: "+20", label: "Anos de experi\xEAncia\nem RH e lideran\xE7a" },
    { num: "SP", label: "Osasco e\nGrande S\xE3o Paulo" },
    { num: "5", label: "Formatos de\natendimento" }
  ];
  return /* @__PURE__ */ jsx("div", { className: "bg-[#0d2018] py-6 px-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto flex justify-center items-center flex-wrap gap-y-6 sm:grid sm:grid-cols-2 md:flex md:flex-nowrap md:gap-0", children: items.map((item, i) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: "flex flex-col items-center px-6 md:px-10 text-center border-white/20 last:border-0 md:border-r w-full sm:w-auto",
      children: [
        /* @__PURE__ */ jsx("span", { className: "font-serif text-[28px] font-black text-dourado leading-none", children: item.num }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.15em] text-white/50 font-medium mt-1 whitespace-pre-line leading-tight", children: item.label })
      ]
    },
    i
  )) }) });
};
var Identification = () => {
  const points = [
    "Voc\xEA entrega resultado, mas n\xE3o \xE9 reconhecido na mesma propor\xE7\xE3o",
    "Sente que sua carreira depende mais de fatores externos do que deveria",
    "Est\xE1 ocupado, mas n\xE3o necessariamente avan\xE7ando",
    'J\xE1 tentou "se desenvolver", mas sem uma dire\xE7\xE3o clara',
    "Sabe que poderia estar em um cargo maior, mas n\xE3o sabe qual \xE9 o caminho",
    "Quer tomar decis\xF5es mais estrat\xE9gicas e com mais confian\xE7a"
  ];
  return /* @__PURE__ */ jsx("section", { id: "metodologia", className: "bg-white py-24 px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[700px] mx-auto text-center mb-20", children: [
      /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-[10px] uppercase tracking-[0.35em] font-bold text-verde-med block mb-6",
          children: "Sintomas da Estagna\xE7\xE3o"
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "font-serif text-[clamp(36px,4vw,56px)] font-black leading-[1.05] text-ink",
          children: [
            "Se voc\xEA sente que deveria estar",
            /* @__PURE__ */ jsx("br", {}),
            "em outro n\xEDvel\u2026 ",
            /* @__PURE__ */ jsx("span", { className: "italic text-highlight", children: "provavelmente est\xE1 certo." })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5 mt-10", children: points.map((point, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1, duration: 0.6 },
        className: "flex gap-6 bg-creme/30 p-8 rounded-[32px] border-l-4 border-transparent hover:border-dourado transition-all hover:bg-creme/50 group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-dourado/10 flex items-center justify-center shrink-0 group-hover:bg-dourado/20 transition-colors", children: /* @__PURE__ */ jsx(Check, { size: 18, className: "text-dourado" }) }),
          /* @__PURE__ */ jsx("p", { className: "text-[17px] text-ink/75 leading-relaxed font-medium", children: point })
        ]
      },
      i
    )) }),
    /* @__PURE__ */ jsx(
      motion.p,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { delay: 0.8 },
        className: "mt-20 text-center font-cormorant text-[26px] font-semibold text-verde/60 italic max-w-2xl mx-auto",
        children: '"O esfor\xE7o desgovernado consome voc\xEA. A estrat\xE9gia clara liberta voc\xEA."'
      }
    )
  ] }) });
};
var About = () => {
  return /* @__PURE__ */ jsx("section", { id: "sobre", className: "bg-creme py-24 px-8 border-y border-ink/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-20 items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative rounded-[32px] overflow-hidden shadow-2xl aspect-square min-[900px]:aspect-auto min-[900px]:h-[680px]", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://i.ibb.co/KpxMJ3Yq/deb04.jpg",
          alt: "D\xE9bora Bolangno - Mentora de Carreira",
          className: "w-full h-full object-cover object-top",
          referrerPolicy: "no-referrer"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-[9px] font-mono uppercase tracking-[0.4em] text-verde-med/30 mb-6 block", children: "Sobre D\xE9bora Bolangno" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.15] text-ink mb-8", children: [
        "Estrat\xE9gia, Lideran\xE7a ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-highlight", children: "& Execu\xE7\xE3o Real." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-lg text-ink/75 leading-[1.65]", children: [
        /* @__PURE__ */ jsx("p", { children: "Com mais de 20 anos de trajet\xF3ria no mundo corporativo, D\xE9bora Bolangno especializou-se em desenvolver l\xEDderes e acelerar carreiras de alto n\xEDvel." }),
        /* @__PURE__ */ jsx("p", { children: "Sua abordagem une vis\xE3o estrat\xE9gica, intelig\xEAncia emocional e ferramentas pr\xE1ticas para quem n\xE3o aceita a estagna\xE7\xE3o e busca o pr\xF3ximo n\xEDvel de influ\xEAncia e resultado." }),
        /* @__PURE__ */ jsx("p", { className: "font-serif italic text-xl text-verde border-l-4 border-dourado pl-6 py-2", children: '"Meu papel \xE9 encurtar o seu caminho entre onde voc\xEA est\xE1 hoje e a posi\xE7\xE3o que voc\xEA sabe que merece ocupar."' })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center gap-4 border-t border-ink/10 pt-8", children: [
        /* @__PURE__ */ jsx("img", { src: "https://i.ibb.co/v4bp7gxB/logo-db-3.png", alt: "", className: "w-12 h-12 object-contain", referrerPolicy: "no-referrer" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-[9px] font-mono uppercase tracking-[0.4em] text-ink/20 mb-1", children: "Forma\xE7\xE3o & Expertise" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-ink/70 font-medium italic", children: "Especialista em Desenvolvimento Humano e Estrat\xE9gia de Carreira" })
        ] })
      ] })
    ] })
  ] }) });
};
var TestimonialsLuxury = () => {
  const testimonials = [
    {
      text: "Cada encontro foi transformador \u2014 inspira\xE7\xE3o, provoca\xE7\xE3o e pr\xE1tica real. J\xE1 estou aplicando no meu dia a dia como l\xEDder.",
      name: "L\xEDvia Alves",
      role: "Gerente de Ag\xEAncia Bradesco",
      image: "https://i.ibb.co/cSFbNmc2/LIVIA-ALVES-GERENTE-DE-AGENCIA-BRADESCO.jpg"
    },
    {
      text: "Semanas muito valiosas. Saio com determina\xE7\xE3o para implementar tudo.",
      name: "Anderson Alves dos Santos",
      role: "Gerente de Ag\xEAncia Bradesco | CFP\xAE",
      image: "https://i.ibb.co/PzNrVgvj/Anderson-Alves-dos-Santos-CFPM-GERENTE-DE-AGENCIA-BRADESCO.jpg"
    },
    {
      text: "Levarei esses aprendizados comigo em cada desafio profissional.",
      name: "Fredie Abrantes",
      role: "Gerente de Ag\xEAncia Bradesco",
      image: "https://i.ibb.co/d0t8pY9V/fredieabrantes-gerente-de-agencia-bradesco.jpg"
    },
    {
      text: "Uma experi\xEAncia que trouxe evolu\xE7\xE3o real para executar no dia a dia.",
      name: "Sara Martins",
      role: "CEA",
      image: "https://i.ibb.co/bx6PJ2t/sara.png"
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "depoimentos", className: "bg-brand-950 text-creme py-24 px-6 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[900px] mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-serif text-[42px] font-bold text-center mb-4 text-creme leading-tight", children: "Resultados reais de quem j\xE1 viveu essa transforma\xE7\xE3o" }),
    /* @__PURE__ */ jsx("p", { className: "font-sans text-center text-creme/60 mb-20", children: "Clareza, evolu\xE7\xE3o e aplica\xE7\xE3o pr\xE1tica no dia a dia da lideran\xE7a." }),
    /* @__PURE__ */ jsxs("div", { className: "mb-24 flex flex-col md:flex-row items-center gap-10 bg-white/5 p-10 rounded-[40px] border border-white/10", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://i.ibb.co/0yLb61HN/Renata-Nazareth-de-Jesus-CEA-GERENTEGERAL-BRADESCO.jpg",
          alt: "Renata Nazareth de Jesus",
          className: "w-32 h-32 md:w-48 md:h-48 rounded-[32px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
        /* @__PURE__ */ jsx("p", { className: "font-cormorant text-[26px] leading-[1.6] italic text-creme/90", children: "\u201CUma jornada rica e transformadora. Saio com novos olhares, insights valiosos e a certeza de evolu\xE7\xE3o real como l\xEDder.\u201D" }),
        /* @__PURE__ */ jsx("span", { className: "block mt-5 text-[14px] tracking-widest font-bold text-highlight uppercase", children: "\u2014 Renata Nazareth de Jesus, CEA" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-12 mb-24", children: testimonials.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-start border-l border-white/10 pl-8 transition-all hover:border-highlight/50 group", children: [
      t.image && /* @__PURE__ */ jsx(
        "img",
        {
          src: t.image,
          alt: t.name,
          className: "w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all"
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "font-cormorant text-[20px] leading-[1.6] text-creme/80 italic group-hover:text-creme transition-colors", children: [
          "\u201C",
          t.text,
          "\u201D"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-col", children: /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-mono text-creme/30 uppercase tracking-[0.3em]", children: [
          "\u2014 ",
          t.name,
          t.role ? `, ${t.role}` : ""
        ] }) })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 pt-16 flex flex-col items-center gap-8", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://i.ibb.co/8DcshQsd/Glaucimar-Peticov-CEO.jpg",
          alt: "Glaucimar Peticov",
          className: "w-24 h-24 rounded-full object-cover grayscale border-2 border-verde-med/30"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl", children: [
        /* @__PURE__ */ jsx("p", { className: "font-cormorant text-[20px] text-creme/70 italic leading-relaxed", children: "\u201CCarreiras s\xE3o constru\xEDdas pela consist\xEAncia, pelo tempo e pelas trocas. \xC9 na colabora\xE7\xE3o que fortalecemos nossa trajet\xF3ria e ampliamos nosso impacto.\u201D" }),
        /* @__PURE__ */ jsx("span", { className: "block mt-6 text-[13px] font-bold text-verde-med uppercase tracking-[0.2em]", children: "\u2014 Glaucimar Peticov (Ex-Diretora Executiva do Bradesco, hoje CEO e fundadora da Peti Desenvolvimento Humano, conselheira e refer\xEAncia em lideran\xE7a e cultura organizacional)" })
      ] })
    ] })
  ] }) });
};
var Qualification = () => {
  return /* @__PURE__ */ jsxs("section", { className: "bg-verde py-20 px-8 text-creme text-center overflow-hidden relative", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-[800px] mx-auto relative z-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-[clamp(24px,2.5vw,36px)] font-bold italic leading-tight mb-8", children: '"Para quem o sucesso atual j\xE1 n\xE3o \xE9 mais suficiente e a pr\xF3xima etapa exige uma nova vers\xE3o de si mesmo."' }),
      /* @__PURE__ */ jsx("div", { className: "w-16 h-px bg-creme/20 mx-auto mb-8" }),
      /* @__PURE__ */ jsx("p", { className: "font-cormorant text-[20px] text-creme/70 tracking-wide font-medium", children: "Mentoria focada em posi\xE7\xF5es de lideran\xE7a, gest\xE3o e transi\xE7\xF5es estrat\xE9gicas." })
    ] }),
    /* @__PURE__ */ jsx("img", { src: "https://i.ibb.co/v4bp7gxB/logo-db-3.png", alt: "", className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] opacity-5 pointer-events-none", referrerPolicy: "no-referrer" })
  ] });
};
var PresenceGallery = () => {
  return /* @__PURE__ */ jsx("section", { className: "bg-creme py-24 px-6 overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center mb-16",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] font-black text-verde-med block mb-4", children: "Presen\xE7a & Atua\xE7\xE3o" }),
          /* @__PURE__ */ jsx("h2", { className: "font-serif text-[ clamp(32px,3vw,48px) ] font-black text-ink italic leading-none", children: "A lideran\xE7a atrav\xE9s do olhar." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 1.05 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
          className: "relative rounded-[56px] overflow-hidden aspect-[4/3] shadow-2xl group cursor-none",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://i.ibb.co/FkxQ8zKG/deborabolangoimage1.jpg",
                alt: "D\xE9bora Bolangno Atua\xE7\xE3o",
                className: "w-full h-full object-cover object-[50%_20%] brightness-[1.08] contrast-[1.02] transition-transform duration-[2.5s] group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 left-10 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-widest font-bold", children: "Dom\xEDnio Legislativo" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 1.05 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
          className: "relative rounded-[56px] overflow-hidden aspect-[4/3] shadow-2xl group cursor-none",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "https://i.ibb.co/PZS5bDgy/DEBORA-MARCA-PESSOAL.jpg",
                alt: "D\xE9bora Bolangno Lideran\xE7a",
                className: "w-full h-full object-cover object-[50%_15%] brightness-[1.08] contrast-[1.02] transition-transform duration-[2.5s] group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 left-10 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-widest font-bold", children: "Atua\xE7\xE3o Executiva" }) })
          ]
        }
      )
    ] })
  ] }) });
};
var Triagem = () => {
  return /* @__PURE__ */ jsx("section", { className: "bg-brand-950 py-24 px-8 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx(
      motion.span,
      {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-[10px] uppercase tracking-[0.3em] font-bold text-highlight block mb-5 text-center",
        children: "Seu momento"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: 0.1 },
        className: "font-serif text-[clamp(28px,3.5vw,44px)] font-black text-creme leading-tight text-center mb-16",
        children: "Qual desses momentos descreve voc\xEA hoje?"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      {
        href: "marca-intencional.html",
        num: "01",
        title: "Falta de dire\xE7\xE3o",
        desc: "Tenho compet\xEAncia, mas me falta clareza. Sinto que estou aqu\xE9m do meu potencial e n\xE3o sei qual \xE9 o pr\xF3ximo passo certo.",
        label: "Marca Intencional"
      },
      {
        href: "mentoria-individual.html",
        num: "02",
        title: "Lideran\xE7a travada",
        desc: "Meu time depende demais de mim. Preciso evoluir como l\xEDder e gerar resultado sem precisar estar em tudo.",
        label: "Mentoria"
      },
      {
        href: "sequoia.html",
        num: "03",
        title: "Crescimento isolado",
        desc: "Falta troca com pessoas no meu n\xEDvel. Quero crescer junto com quem entende o jogo \u2014 n\xE3o sozinho.",
        label: "Comunidade Sequoia"
      }
    ].map((item, i) => /* @__PURE__ */ jsxs(
      motion.a,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.15, duration: 0.7 },
        href: item.href,
        className: "group bg-white/5 border border-white/10 p-10 rounded-3xl transition-all hover:bg-highlight/10 hover:border-highlight hover:-translate-y-2 relative overflow-hidden",
        children: [
          item.extra,
          /* @__PURE__ */ jsx("div", { className: "font-serif text-[44px] font-black text-highlight/20 leading-none mb-6", children: item.num }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl font-bold text-creme mb-4", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-creme/50 leading-relaxed mb-8", children: item.desc }),
          /* @__PURE__ */ jsxs("span", { className: "text-[10px] uppercase tracking-widest font-bold text-highlight flex items-center gap-2 group-hover:gap-4 transition-all", children: [
            item.label,
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
          ] })
        ]
      },
      i
    )) })
  ] }) });
};
var Quiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [nome, setNome] = useState("");
  const [wa, setWa] = useState("");
  const [showResult, setShowResult] = useState(false);
  const WA_NUMBER = "5511940803333";
  const results = {
    direcao: {
      icon: "\u{1F9ED}",
      titulo: "Voc\xEA precisa de dire\xE7\xE3o estrat\xE9gica",
      desc: "Sua maior alavanca agora n\xE3o \xE9 trabalhar mais \u2014 \xE9 entender exatamente onde est\xE1 e para onde quer ir. Com clareza, tudo muda.",
      produto: "Marca Intencional",
      link: "marca-intencional.html",
      msg: "Ol\xE1, D\xE9bora! Fiz o diagn\xF3stico no seu site e o resultado foi: *Marca Intencional*. Gostaria de entender como funciona e dar o pr\xF3ximo passo."
    },
    lideranca: {
      icon: "\u{1F510}",
      titulo: "Seu pr\xF3ximo n\xEDvel depende da sua lideran\xE7a",
      desc: "Voc\xEA tem potencial \u2014 o que falta \xE9 a lideran\xE7a que sustenta resultados consistentes, sem depender s\xF3 de voc\xEA para tudo funcionar.",
      produto: "Mentoria de Lideran\xE7a",
      link: "mentoria-individual.html",
      msg: "Ol\xE1, D\xE9bora! Fiz o diagn\xF3stico no seu site e o resultado foi: *Mentoria de Lideran\xE7a*. Gostaria de entender como funciona e dar o pr\xF3ximo passo."
    },
    network: {
      icon: "\u{1F331}",
      titulo: "Voc\xEA cresce mais r\xE1pido com as conex\xF5es certas",
      desc: "Voc\xEA j\xE1 tem clareza e movimento \u2014 o que potencializa agora \xE9 estar com pessoas que jogam no mesmo n\xEDvel e entendem o jogo.",
      produto: "Comunidade Sequoia",
      link: "sequoia.html",
      msg: "Ol\xE1, D\xE9bora! Fiz o diagn\xF3stico no seu site e o resultado foi: *Comunidade Sequoia*. Gostaria de entender como funciona e dar o pr\xF3ximo passo."
    }
  };
  const steps = [
    {
      q: "Qual sensa\xE7\xE3o mais se aproxima da sua carreira hoje?",
      options: [
        { l: "A", t: "Estou travado \u2014 sei que poderia estar em outro n\xEDvel", v: "direcao" },
        { l: "B", t: "Estou crescendo, mas sem clareza para onde", v: "direcao" },
        { l: "C", t: "Estou liderando, mas com dificuldade \u2014 meu time depende demais de mim", v: "lideranca" },
        { l: "D", t: "Estou bem, mas quero evoluir com as pessoas certas ao redor", v: "network" }
      ]
    },
    {
      q: "Qual \xE9 seu maior desafio agora?",
      options: [
        { l: "A", t: "Decidir meus pr\xF3ximos passos com clareza", v: "direcao" },
        { l: "B", t: "Organizar prioridades e liderar melhor meu time", v: "lideranca" },
        { l: "C", t: "Desenvolver minha performance e consist\xEAncia", v: "lideranca" },
        { l: "D", t: "Encontrar pessoas no meu n\xEDvel para crescer junto", v: "network" }
      ]
    },
    {
      q: "Qual \xE9 o seu n\xEDvel atual?",
      options: [
        { l: "A", t: "Pleno / Analista", v: "direcao" },
        { l: "B", t: "S\xEAnior / Especialista", v: "direcao" },
        { l: "C", t: "Gest\xE3o / Coordena\xE7\xE3o", v: "lideranca" },
        { l: "D", t: "Lideran\xE7a / Executivo / C-level", v: "network" }
      ]
    },
    {
      q: "O que voc\xEA busca neste momento?",
      options: [
        { l: "A", t: "Clareza e dire\xE7\xE3o estrat\xE9gica para minha carreira", v: "direcao" },
        { l: "B", t: "Evolu\xE7\xE3o na lideran\xE7a e melhora de performance", v: "lideranca" },
        { l: "C", t: "Crescimento cont\xEDnuo com network de alto valor", v: "network" },
        { l: "D", t: "Reposicionamento e novo ciclo profissional", v: "direcao" }
      ]
    },
    {
      q: "Como voc\xEA se v\xEA investindo na sua evolu\xE7\xE3o agora?",
      options: [
        { l: "A", t: "Pronto para dar um passo, mas quero entender as op\xE7\xF5es primeiro", v: "direcao" },
        { l: "B", t: "Com clareza do que quero \u2014 buscando o programa certo", v: "lideranca" },
        { l: "C", t: "Totalmente comprometido com o pr\xF3ximo n\xEDvel", v: "network" }
      ]
    }
  ];
  const calcResult = () => {
    const counts = { direcao: 0, lideranca: 0, network: 0 };
    Object.values(answers).forEach((v) => {
      const val = v;
      if (val in counts) {
        counts[val]++;
      }
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  };
  const handleNext = () => step < steps.length ? setStep(step + 1) : setStep(6);
  const handleBack = () => setStep(step - 1);
  const resultType = calcResult();
  const r = results[resultType];
  const handleSend = () => {
    if (!nome || !wa) return alert("Por favor, preencha nome e WhatsApp");
    const msg = encodeURIComponent(`\u{1F514} *Novo lead \u2014 diagn\xF3stico*

Nome: ${nome}
WhatsApp: ${wa}
Resultado: *${r.produto}*

---
${r.msg}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setShowResult(true);
  };
  return /* @__PURE__ */ jsx("section", { id: "quiz", className: "bg-brand-950 py-24 px-8 relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto relative z-10", children: !showResult ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] font-bold text-highlight block mb-5", children: "Diagn\xF3stico Gratuito" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-serif text-[clamp(28px,4vw,44px)] font-black text-creme leading-tight mb-4", children: [
        "Descubra qual \xE9 o seu",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-highlight", children: "pr\xF3ximo movimento" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-creme/40 text-sm", children: "Responda 5 perguntas r\xE1pidas e receba seu resultado personalizado." })
    ] }),
    step <= steps.length ? /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, className: "space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-2 mb-8", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx("div", { className: `h-1 flex-1 rounded-full bg-creme transition-colors ${i <= step ? "opacity-100" : "opacity-10"}` }, i)) }),
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl font-bold text-creme leading-tight mb-8", children: steps[step - 1].q }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: steps[step - 1].options.map((opt, i) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            setAnswers({ ...answers, [step]: opt.v });
            handleNext();
          },
          className: `flex items-center gap-5 p-5 border rounded-xl text-left transition-all ${answers[step] === opt.v ? "bg-highlight/20 border-highlight text-creme" : "bg-white/5 border-white/10 text-creme/60 hover:border-highlight/50 hover:bg-white/10"}`,
          children: [
            /* @__PURE__ */ jsx("span", { className: `w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[11px] font-bold ${answers[step] === opt.v ? "bg-highlight border-highlight text-white" : ""}`, children: opt.l }),
            /* @__PURE__ */ jsx("span", { className: "text-[15px]", children: opt.t })
          ]
        },
        i
      )) }),
      step > 1 && /* @__PURE__ */ jsx("button", { onClick: handleBack, className: "text-xs text-creme/30 hover:text-creme transition-colors mt-8", children: "\u2190 Voltar" })
    ] }, step) : /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, className: "bg-white/5 border border-white/10 p-12 rounded-[40px] text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl font-bold text-creme mb-2", children: "Seu diagn\xF3stico est\xE1 pronto" }),
      /* @__PURE__ */ jsx("p", { className: "text-creme/40 text-sm mb-10", children: "Preencha os dados para receber seu resultado personalizado no WhatsApp." }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 max-w-sm mx-auto", children: [
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Nome completo", value: nome, onChange: (e) => setNome(e.target.value), className: "w-full bg-white/5 border border-white/10 rounded-xl p-4 text-creme outline-none focus:border-highlight transition-colors" }),
        /* @__PURE__ */ jsx("input", { type: "tel", placeholder: "WhatsApp com DDD", value: wa, onChange: (e) => setWa(e.target.value), className: "w-full bg-white/5 border border-white/10 rounded-xl p-4 text-creme outline-none focus:border-highlight transition-colors" }),
        /* @__PURE__ */ jsxs("button", { onClick: handleSend, className: "w-full bg-highlight text-white py-5 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all hover:bg-highlight/80 flex items-center justify-center gap-3", children: [
          "Receber meu diagn\xF3stico ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => setStep(steps.length), className: "text-xs text-creme/30 hover:text-creme transition-colors mt-8", children: "\u2190 Corrigir respostas" })
    ] })
  ] }) : /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-highlight/20 rounded-full flex items-center justify-center text-4xl mx-auto mb-8", children: r.icon }),
    /* @__PURE__ */ jsx("h3", { className: "font-serif text-3xl font-bold text-creme mb-4", children: r.titulo }),
    /* @__PURE__ */ jsx("p", { className: "text-creme/60 text-lg leading-relaxed mb-8", children: r.desc }),
    /* @__PURE__ */ jsx("div", { className: "font-serif italic text-2xl text-highlight mb-12", children: r.produto }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 max-w-sm mx-auto", children: [
      /* @__PURE__ */ jsxs("a", { href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(r.msg)}`, target: "_blank", className: "bg-[#25D366] text-white py-5 rounded-full font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-transform", children: [
        /* @__PURE__ */ jsx(MessageCircle, { size: 20, fill: "currentColor" }),
        " Falar com a D\xE9bora"
      ] }),
      /* @__PURE__ */ jsx("a", { href: r.link, className: "text-sm text-creme/40 hover:text-highlight transition-colors", children: "Ver detalhes do programa \u2192" })
    ] })
  ] }) }) });
};
var ProgramsGrid = () => {
  const cards = [
    {
      title: "Mentoria Individual",
      subtitle: "GEST\xC3O DE CARREIRA",
      desc: "Processo personalizado de 8 sess\xF5es para quem busca clareza, seguran\xE7a na tomada de decis\xE3o e avan\xE7o na velocidade que merece.",
      features: ["Diagn\xF3stico 360\xBA", "Plano de Voo Individual", "Sess\xF5es Online de 1h"],
      icon: /* @__PURE__ */ jsx(Target, { size: 24 }),
      link: "mentoria-individual.html",
      whatsapp: "Ol\xE1, gostaria de saber mais sobre a mentoria individual."
    },
    {
      title: "Marca Intencional",
      subtitle: "POSICIONAMENTO",
      desc: "Domine sua narrativa e construa autoridade inquestion\xE1vel para ser a primeira op\xE7\xE3o nos grandes projetos do mercado.",
      features: ["Estrat\xE9gia de LinkedIn", "Netweaving de Valor", "Personal Branding"],
      icon: /* @__PURE__ */ jsx(Award, { size: 24 }),
      link: "marca-intencional.html",
      whatsapp: "Ol\xE1, gostaria de saber mais sobre o programa Marca Intencional."
    },
    {
      title: "Lideran\xE7a Atualizada",
      subtitle: "MENTORIA EM GRUPO",
      desc: "Saia do operacional e torne-se o gestor que inspira, delega com seguran\xE7a e constr\xF3i times de alta performance.",
      features: ["Aulas em Grupo", "Ferramentas Gerenciais", "Pr\xF3xima Turma em Breve"],
      icon: /* @__PURE__ */ jsx(Users, { size: 24 }),
      link: "lideranca-atualizada.html",
      whatsapp: "Ol\xE1, gostaria de entrar na lista de espera para a mentoria em grupo."
    },
    {
      title: "Comunidade Sequoia",
      subtitle: "ECOSSISTEMA",
      desc: "Um grupo seleto de l\xEDderes onde as ra\xEDzes se entrela\xE7am para sustentar um crescimento inabal\xE1vel e conex\xF5es de alto valor.",
      features: ["Encontros Quinzenais", "Networking Estrat\xE9gico", "Sess\xE3o Individual B\xF4nus"],
      icon: /* @__PURE__ */ jsx(Trees, { size: 24 }),
      link: "sequoia.html",
      whatsapp: "Ol\xE1, gostaria de saber mais sobre a Comunidade Sequoia."
    },
    {
      title: "Palestras & Workshops",
      subtitle: "CORPORATIVO",
      desc: "Treinamentos customizados sobre lideran\xE7a e carreira para empresas que desejam elevar o patamar de seus talentos.",
      features: ["Conte\xFAdo sob medida", "Formato Presencial/Online", "Foco em Engajamento"],
      icon: /* @__PURE__ */ jsx(Mic, { size: 24 }),
      link: "palestras.html",
      whatsapp: "Ol\xE1, gostaria de solicitar uma proposta de palestra para minha empresa."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "programa", className: "bg-white py-24 px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-20", children: [
      /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { opacity: 0, x: -10 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          className: "text-[10px] uppercase tracking-[0.3em] text-verde-med font-bold mb-4 block",
          children: "Ecossistema de Solu\xE7\xF5es"
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: 0.1 },
          className: "font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.15] text-ink",
          children: [
            "O seu pr\xF3ximo ",
            /* @__PURE__ */ jsx("span", { className: "italic text-highlight", children: "salto estrat\xE9gico" }),
            " come\xE7a aqui."
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: cards.map((card, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.1, duration: 0.8 },
        className: "bg-white p-12 border border-ink/6 rounded-[40px] flex flex-col hover:border-verde-med/20 hover:shadow-[0_40px_80px_rgba(26,58,46,0.08)] transition-all group",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-creme rounded-2xl flex items-center justify-center text-verde mb-8 group-hover:bg-verde group-hover:text-creme transition-colors", children: card.icon }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-ink/35 font-black mb-4", children: card.subtitle }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-[28px] font-bold text-ink leading-tight mb-6", children: card.title }),
          /* @__PURE__ */ jsx("p", { className: "text-[15px] text-ink/65 leading-[1.65] mb-8", children: card.desc }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 mb-10", children: card.features.map((f, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-[13px] text-ink/75", children: [
            /* @__PURE__ */ jsx(Check, { size: 14, className: "text-verde" }),
            f
          ] }, idx)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-auto space-y-3", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `https://wa.me/5511940803333?text=${encodeURIComponent(card.whatsapp)}`,
                target: "_blank",
                rel: "noopener",
                className: "block w-full bg-verde text-creme py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold text-center hover:bg-[#112e28] transition-colors",
                children: "Agendar conversa"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: card.link,
                className: "block w-full border-2 border-ink/10 py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold text-center text-ink/60 hover:bg-ink hover:text-white transition-all",
                children: "Ver detalhes"
              }
            )
          ] })
        ]
      },
      i
    )) })
  ] }) });
};
var Lectures = () => {
  const lectures = [
    {
      title: "Lideran\xE7a na Era da Incerteza",
      desc: "Como guiar times de alta performance em cen\xE1rios de mudan\xE7a constante e press\xE3o por resultados."
    },
    {
      title: "Comunica\xE7\xE3o de Impacto",
      desc: "Domine a arte de influenciar, negociar e se posicionar com autoridade em reuni\xF5es de alto n\xEDvel."
    },
    {
      title: "Estrat\xE9gia de Carreira 360\xBA",
      desc: "Saia do operacional e assuma o protagonismo da sua trajet\xF3ria profissional com foco em crescimento."
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "palestras", className: "bg-creme py-24 px-8 border-t border-ink/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-[900px]:flex-row justify-between items-start min-[900px]:items-end gap-10 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-[620px]", children: [
        /* @__PURE__ */ jsx(
          motion.span,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            className: "text-[10px] uppercase tracking-[0.3em] text-verde-med font-bold mb-4 block",
            children: "Palestras & Workshops"
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            className: "font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.15] text-ink",
            children: [
              "Conte\xFAdo de ",
              /* @__PURE__ */ jsx("span", { className: "italic text-highlight", children: "alto impacto" }),
              " para o seu time."
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        motion.a,
        {
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: 0.3 },
          href: "https://wa.me/5511940803333?text=Ol\xE1,%20gostaria%20de%20receber%20um%20or\xE7amento%20para%20palestras",
          target: "_blank",
          rel: "noopener",
          className: "bg-verde text-white px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold hover:bg-[#112e28] transition-all",
          children: "Solicitar or\xE7amento"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: lectures.map((l, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.15, duration: 0.7 },
        className: "bg-white p-10 rounded-[40px] border border-ink/6 shadow-sm hover:shadow-xl transition-all group",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "w-12 h-12 bg-creme rounded-2xl flex items-center justify-center text-verde font-serif text-xl font-bold mb-8 italic group-hover:bg-verde group-hover:text-white transition-colors transition-duration-500", children: [
            i + 1,
            "."
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl font-bold text-ink leading-tight mb-4", children: l.title }),
          /* @__PURE__ */ jsx("p", { className: "text-[17px] text-ink/65 leading-relaxed", children: l.desc })
        ]
      },
      i
    )) })
  ] }) });
};
var Differentials = () => {
  const diffs = [
    {
      title: "+20 Anos de Mercado",
      desc: "Experi\xEAncia real em grandes corpora\xE7\xF5es, vivendo na pr\xE1tica os desafios que voc\xEA enfrenta hoje."
    },
    {
      title: "M\xE9todo Validado",
      desc: "Processos estruturados que unem ferramentas executivas com intelig\xEAncia emocional e pr\xE1tica."
    },
    {
      title: "Foco em Execu\xE7\xE3o",
      desc: "Menos teoria abstrata e mais planos de a\xE7\xE3o concretos para resultados vis\xEDveis em curto prazo."
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "bg-verde py-24 px-8 text-creme overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-[680px] mx-auto mb-20", children: [
      /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          className: "text-[10px] uppercase tracking-[0.35em] text-creme/50 font-bold mb-5 block",
          children: "Diferenciais"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.15]",
          children: "Por que D\xE9bora Bolangno?"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: diffs.map((d, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.15, duration: 0.7 },
        className: "bg-white/5 border border-white/10 p-12 rounded-[48px] hover:bg-white/10 transition-all hover:scale-[1.02]",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-dourado/20 rounded-2xl flex items-center justify-center text-dourado mb-8", children: /* @__PURE__ */ jsx(Check, { size: 28, strokeWidth: 3 }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl font-bold mb-4", children: d.title }),
          /* @__PURE__ */ jsx("p", { className: "text-creme/65 text-lg leading-relaxed", children: d.desc })
        ]
      },
      i
    )) })
  ] }) });
};
var ContactModal = ({ isOpen, onClose }) => {
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "fixed inset-0 bg-brand-950/60 backdrop-blur-md z-[60]"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.9, y: 20 },
        className: "fixed inset-0 m-auto w-[92%] max-w-lg h-fit max-h-[90vh] bg-creme rounded-[2rem] md:rounded-[2.5rem] z-[70] overflow-hidden shadow-2xl flex flex-col",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-12 overflow-y-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-6 md:mb-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "pr-8", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl md:text-4xl font-bold text-ink mb-2", children: "Vamos conversar?" }),
                /* @__PURE__ */ jsx("p", { className: "text-ink/60 text-xs md:text-base leading-relaxed", children: "Escolha o canal de sua prefer\xEAncia para iniciarmos sua jornada estrat\xE9gica." })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onClose,
                  className: "p-2 hover:bg-brand-900/5 rounded-full transition-colors absolute right-6 top-6 md:static",
                  children: /* @__PURE__ */ jsx(X, { size: 24 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3 md:space-y-4", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://wa.me/5511940803333?text=Ol\xE1,%20vim%20pelo%20portf\xF3lio%20corporativo%20e%20gostaria%20de%20agendar%20uma%20conversa%20estrat\xE9gica",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-brand-700 rounded-2xl text-white hover:bg-brand-800 transition-all group shadow-lg shadow-brand-700/20",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0", children: /* @__PURE__ */ jsx(MessageCircle, { size: 20, className: "md:w-6 md:h-6" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-bold text-base md:text-lg", children: "WhatsApp Direto" }),
                      /* @__PURE__ */ jsx("div", { className: "text-white/60 text-[10px] uppercase tracking-widest font-semibold", children: "Resposta em at\xE9 24h" })
                    ] }),
                    /* @__PURE__ */ jsx(ChevronRight, { size: 18, className: "ml-auto opacity-50" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "mailto:deborabolangno@outlook.com",
                  className: "flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-white border border-ink/10 rounded-2xl text-ink hover:border-brand-700/30 transition-all group",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 md:w-12 md:h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-700 group-hover:scale-110 transition-transform shrink-0", children: /* @__PURE__ */ jsx(Mail, { size: 20, className: "md:w-6 md:h-6" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-bold text-base md:text-lg", children: "E-mail Corporativo" }),
                      /* @__PURE__ */ jsx("div", { className: "text-ink/40 text-[9px] md:text-xs uppercase tracking-widest font-semibold truncate", children: "deborabolangno@outlook.com" })
                    ] }),
                    /* @__PURE__ */ jsx(ChevronRight, { size: 18, className: "ml-auto opacity-20" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://www.linkedin.com/in/deborabolangno",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-white border border-ink/10 rounded-2xl text-ink hover:border-brand-700/30 transition-all group",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 md:w-12 md:h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-700 group-hover:scale-110 transition-transform shrink-0", children: /* @__PURE__ */ jsx(Linkedin, { size: 20, className: "md:w-6 md:h-6" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-bold text-base md:text-lg", children: "LinkedIn Profissional" }),
                      /* @__PURE__ */ jsx("div", { className: "text-ink/40 text-[9px] md:text-xs uppercase tracking-widest font-semibold", children: "Conecte-se e acompanhe insights" })
                    ] }),
                    /* @__PURE__ */ jsx(ChevronRight, { size: 18, className: "ml-auto opacity-20" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-brand-900 p-6 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold", children: "D\xE9bora Bolangno \xB7 Mentoria & Consultoria" }) })
        ]
      }
    )
  ] }) });
};
var CTA = () => {
  return /* @__PURE__ */ jsx("section", { id: "contato", className: "bg-creme-light py-24 text-center px-8 border-y border-ink/4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("h2", { className: "font-serif text-[clamp(28px,3.5vw,48px)] font-black text-ink leading-[1.1] mb-8 max-w-[800px] mx-auto", children: [
      "Pronto para o seu ",
      /* @__PURE__ */ jsx("span", { className: "italic text-highlight", children: "pr\xF3ximo n\xEDvel" }),
      " na carreira?"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-[18px] text-ink/70 max-w-[600px] mx-auto mb-10 leading-[1.6]", children: "Agende agora um diagn\xF3stico estrat\xE9gico e entenda como podemos acelerar seu crescimento e resultados." }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxs("a", { href: "https://wa.me/5511940803333?text=Ol\xE1,%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20diagn\xF3stico%20estrat\xE9gico", target: "_blank", rel: "noopener", className: "bg-verde text-white px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-[#112e28] transition-all flex items-center gap-3", children: [
        "Agendar diagn\xF3stico agora",
        /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/deborabolangno", target: "_blank", rel: "noopener", className: "border-2 border-ink/10 text-ink px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-ink hover:text-white transition-all", children: "Ver LinkedIn" })
    ] })
  ] }) });
};
var Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "bg-verde py-16 px-8 text-creme", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10", children: [
    /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center md:items-start gap-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx("img", { src: "https://i.ibb.co/v4bp7gxB/logo-db-3.png", alt: "Logo", className: "w-10 h-10 object-contain brightness-0 invert" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("span", { className: "font-serif text-xl font-bold leading-none mb-1", children: "D\xE9bora Bolangno" }),
        /* @__PURE__ */ jsx("span", { className: "text-[9px] uppercase tracking-widest text-creme/40", children: "Estrat\xE9gia de Carreira & Lideran\xE7a" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/deborabolangno", className: "w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors", children: /* @__PURE__ */ jsx(Instagram, { size: 18 }) }),
      /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/deborabolangno", className: "w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors", children: /* @__PURE__ */ jsx(Linkedin, { size: 18 }) }),
      /* @__PURE__ */ jsx("a", { href: "mailto:deborabolangno@outlook.com", className: "w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors", children: /* @__PURE__ */ jsx(Mail, { size: 18 }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center md:text-right", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-creme/60 text-[11px] font-mono uppercase tracking-[0.4em] mb-1", children: [
        "Desenvolvido por ",
        /* @__PURE__ */ jsx("a", { href: "https://www.orvalia.com.br", target: "_blank", rel: "noopener", className: "hover:text-creme transition-colors underline underline-offset-4", children: "Orvalia Studio" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[11px] font-mono text-creme/60 uppercase tracking-[0.4em]", children: "\xA9 2026 D\xE9bora Bolangno \xB7 Todos os direitos reservados" })
    ] })
  ] }) });
};
var SectionReveal = ({ children }) => /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    children
  }
);
function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 1e3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsContactModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);
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
  return /* @__PURE__ */ jsxs("div", { className: "selection:bg-verde selection:text-white relative", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Marquee, {}),
      /* @__PURE__ */ jsx(PresenceGallery, {}),
      /* @__PURE__ */ jsx(SectionReveal, { children: /* @__PURE__ */ jsx(Triagem, {}) }),
      /* @__PURE__ */ jsxs("div", { className: "bg-creme py-32 px-8 text-center border-y border-ink/5", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-serif text-[clamp(28px,4vw,48px)] font-black text-ink leading-tight max-w-[680px] mx-auto mb-6", children: [
          "O problema n\xE3o \xE9 esfor\xE7o.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic text-highlight", children: "\xC9 dire\xE7\xE3o estrat\xE9gica." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-ink/50 text-lg max-w-[500px] mx-auto leading-relaxed", children: "Profissionais que chegam ao pr\xF3ximo n\xEDvel n\xE3o trabalham mais \u2014 trabalham com mais clareza sobre onde est\xE3o indo e por qu\xEA." })
      ] }),
      /* @__PURE__ */ jsx(SectionReveal, { children: /* @__PURE__ */ jsx(Identification, {}) }),
      /* @__PURE__ */ jsx(SectionReveal, { children: /* @__PURE__ */ jsx(ProofBar, {}) }),
      /* @__PURE__ */ jsx(SectionReveal, { children: /* @__PURE__ */ jsx(About, {}) }),
      /* @__PURE__ */ jsx(SectionReveal, { children: /* @__PURE__ */ jsx(TestimonialsLuxury, {}) }),
      /* @__PURE__ */ jsx(SectionReveal, { children: /* @__PURE__ */ jsx(Qualification, {}) }),
      /* @__PURE__ */ jsx(ProgramsGrid, {}),
      /* @__PURE__ */ jsx(SectionReveal, { children: /* @__PURE__ */ jsx(Lectures, {}) }),
      /* @__PURE__ */ jsx(SectionReveal, { children: /* @__PURE__ */ jsx(Differentials, {}) }),
      /* @__PURE__ */ jsx(Quiz, {}),
      /* @__PURE__ */ jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(
      ContactModal,
      {
        isOpen: isContactModalOpen,
        onClose: () => setIsContactModalOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "fixed bottom-8 right-8 z-50 flex gap-4 items-center", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: `https://wa.me/5511940803333?text=${encodeURIComponent("Ol\xE1, vim pelo site e gostaria de mais informa\xE7\xF5es.")}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center",
          "aria-label": "Contato via WhatsApp",
          children: /* @__PURE__ */ jsx(MessageCircle, { size: 24, fill: "currentColor" })
        }
      ),
      showBackToTop && /* @__PURE__ */ jsx(
        motion.button,
        {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          onClick: scrollToTop,
          className: "p-4 bg-verde text-creme rounded-full shadow-2xl hover:bg-verde-med transition-all",
          children: /* @__PURE__ */ jsx(ArrowUp, { size: 20 })
        }
      )
    ] })
  ] });
}
export {
  App as default
};
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
