import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Patent", href: "#patent" },
  { label: "Contact", href: "#contact" },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Minimal scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const scrollPosition = window.scrollY + 140;
      
      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      for (const item of NAV_ITEMS) {
        const target = document.querySelector(item.href);
        if (target) {
          const top = (target as HTMLElement).offsetTop;
          const height = (target as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 75;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(href.substring(1));
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      {/* Subtle Minimal Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-brand-red origin-left z-[60] pointer-events-none"
        style={{ scaleX }}
      />

      <header className="fixed top-3 left-0 w-full z-50 px-3 sm:px-6 transition-all duration-300">
        <div 
          className={`max-w-5xl mx-auto backdrop-blur-md rounded-full px-4 sm:px-6 h-13 sm:h-14 flex items-center justify-between transition-all duration-300 ${
            isScrolled 
              ? "bg-white/85 border border-brand-red/15 shadow-md" 
              : "bg-white/70 border border-brand-red/10 shadow-xs"
          }`}
        >
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-display text-sm sm:text-base font-black tracking-tight text-text-dark flex items-center gap-1 hover:scale-105 transition-transform cursor-pointer"
          >
            <span className="text-brand-red">MANO</span>
            <span className="text-text-dark font-extrabold">BALA</span>
            <span className="text-sm select-none">👋</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-[11px] font-black font-display uppercase tracking-wider transition-all duration-300 py-1.5 px-3 rounded-full cursor-pointer relative ${
                    isActive 
                      ? "bg-brand-red text-white shadow-xs" 
                      : "text-text-muted hover:text-text-dark hover:bg-brand-red/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Medium Screen Navigation (Highlights) */}
          <nav className="hidden md:flex lg:hidden items-center space-x-1">
            {NAV_ITEMS.filter(i => ["Home", "About", "Skills", "Experience", "Projects", "Patent", "Contact"].includes(i.label)).map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-[11px] font-black font-display uppercase tracking-wider transition-all duration-300 py-1.5 px-2.5 rounded-full cursor-pointer relative ${
                    isActive 
                      ? "bg-brand-red text-white shadow-xs" 
                      : "text-text-muted hover:text-text-dark hover:bg-brand-red/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-dark hover:text-brand-red focus:outline-none transition-colors rounded-full hover:bg-brand-red/5 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-md border border-brand-red/15 shadow-xl rounded-[2rem] p-4 lg:hidden z-40 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-1.5">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`text-xs font-black font-display uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all duration-200 block text-center cursor-pointer ${
                        isActive 
                          ? "bg-brand-red text-white shadow-xs" 
                          : "text-text-muted hover:text-text-dark hover:bg-brand-red/5"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
