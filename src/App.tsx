import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-bg-warm text-text-dark selection:bg-brand-red/10 selection:text-brand-red font-sans antialiased">
      {/* Navigation Header */}
      <Header />
      
      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <footer className="py-12 bg-bg-warm border-t border-border-hairline">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] text-text-muted tracking-wider uppercase">
            © 2026 MANO BALA // ALL RIGHTS RESERVED
          </div>
          <div className="font-mono text-[10px] text-text-muted tracking-wider uppercase flex items-center gap-6">
            <span>REGION: GLOBAL (US-EAST-1)</span>
            <span className="text-border-hairline">|</span>
            <span>SYSTEM STATE: ACTIVE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
