import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center" style={{borderRadius: '100px'}}>
              <span className="text-white font-serif font-bold text-sm sm:text-base" style={{fontSize: '30px', fontWeight: '900'}}>⌘</span>
            </div>
            <span className="font-serif font-semibold text-sm sm:text-base text-foreground hidden sm:inline">
              Conheça Seu Mac
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              Produtos
            </button>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-primary text-white hover:opacity-90 transition-opacity text-sm font-medium"
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            >
              Produtos
            </button>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity"
            >
              Contato
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
