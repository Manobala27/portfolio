import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for sticky header
      
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
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.substring(1));
      // Update browser URL hash without jump
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 w-full transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-xl font-bold tracking-wider text-gray-900 flex items-center gap-1.5"
        >
          <span className="w-2.5 h-2.5 bg-brand-red rounded-full"></span>
          MANO
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative py-2 ${
                  isActive ? "text-brand-red" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red"
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
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-gray-100 bg-white shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-base font-semibold py-1.5 transition-colors duration-200 block ${
                      isActive ? "text-brand-red pl-2 border-l-2 border-brand-red" : "text-gray-600 hover:text-gray-900"
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
