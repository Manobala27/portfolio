import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for sticky header
      
      // Special case for home (top of page)
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      for (const item of navItems) {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 64;
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
    <header className="sticky top-0 z-50 bg-bg-warm/80 backdrop-blur-md border-b border-border-hairline w-full transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Brand Logo - Small, minimal, technical */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-mono text-xs tracking-widest text-text-dark flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
          <span className="font-bold">M. BALA</span>
          <span className="text-gray-300">/</span>
          <span className="text-text-muted font-medium">CLOUD ENGINEER</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs font-mono uppercase tracking-widest transition-colors duration-300 relative py-2 ${
                  isActive ? "text-brand-red" : "text-text-muted hover:text-text-dark"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-red"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-text-dark hover:text-brand-red focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full border-b border-border-hairline bg-bg-warm/95 backdrop-blur-md shadow-sm overflow-hidden md:hidden z-40"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-xs font-mono uppercase tracking-widest py-2 transition-colors duration-200 block ${
                      isActive ? "text-brand-red border-l-2 border-brand-red pl-3" : "text-text-muted hover:text-text-dark pl-3"
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
  );
};
