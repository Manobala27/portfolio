import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Education } from "./components/Education";
import { Patent } from "./components/Patent";
import { Contact } from "./components/Contact";
import { CursorGlow } from "./components/CursorGlow";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp } from "react-icons/fa";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const whatsappUrl = "https://wa.me/919344705377?text=Hi%20Mano!%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.";

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative min-h-screen w-full bg-transparent text-text-dark selection:bg-brand-red/15 selection:text-brand-red font-sans antialiased overflow-x-hidden">
      {/* Subtle Ambient Cursor Light on Desktop */}
      <CursorGlow />

      {/* Navigation Header with Scroll Progress */}
      <Header />
      
      {/* Page Sections in Continuous Flow */}
      <main className="relative z-10">
        <Hero />
        <div className="section-divider max-w-4xl mx-auto" />
        <About />
        <div className="section-divider max-w-4xl mx-auto" />
        <Skills />
        <div className="section-divider max-w-4xl mx-auto" />
        <Experience />
        <div className="section-divider max-w-4xl mx-auto" />
        <Projects />
        <div className="section-divider max-w-4xl mx-auto" />
        <Certifications />
        <div className="section-divider max-w-4xl mx-auto" />
        <Education />
        <div className="section-divider max-w-4xl mx-auto" />
        <Patent />
        <div className="section-divider max-w-4xl mx-auto" />
        <Contact />
      </main>

      {/* Floating Back-to-Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 p-3.5 bg-white/90 backdrop-blur-md border border-brand-red/20 text-brand-red rounded-full shadow-md hover:bg-brand-red hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center group"
          >
            <FaArrowUp className="text-sm group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Casual Friendly Footer */}
      <footer className="py-12 bg-white/40 backdrop-blur-xs border-t border-brand-red/10 relative z-10">
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-5 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <div className="text-sm text-text-dark font-black font-display flex items-center justify-center sm:justify-start gap-1.5">
              <span>Mano Bala</span>
              <span className="text-brand-red text-xs">•</span>
              <span className="text-text-muted font-bold text-xs">Cloud Engineer &amp; Python Developer</span>
            </div>
            <p className="text-xs text-text-muted font-medium">
              Built with ☁️ + Python + curiosity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 bg-white border border-emerald-200 text-emerald-600 hover:bg-emerald-50 rounded-full hover:scale-110 transition-all shadow-2xs"
            >
              <FaWhatsapp size={15} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=balamano462@gmail.com&su=Hello%20Mano%20-%20Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="p-2.5 bg-white border border-brand-red/15 rounded-full text-text-muted hover:text-brand-red hover:scale-110 transition-all shadow-2xs"
            >
              <FaEnvelope size={14} />
            </a>
            <a
              href="https://github.com/Manobala27"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 bg-white border border-brand-red/15 rounded-full text-text-muted hover:text-brand-red hover:scale-110 transition-all shadow-2xs"
            >
              <FaGithub size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/mano-bala-a61214374"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 bg-white border border-brand-red/15 rounded-full text-text-muted hover:text-brand-red hover:scale-110 transition-all shadow-2xs"
            >
              <FaLinkedin size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
