import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-white text-gray-900 selection:bg-brand-red/10 selection:text-brand-red font-sans antialiased">
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

      {/* Simple Footer */}
      <footer className="py-8 bg-white border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6 text-sm text-gray-500 font-medium">
          © 2026 Mano Bala
        </div>
      </footer>
    </div>
  );
}

export default App;
