import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Sobre", id: "about" },
    { label: "Depoimentos", id: "testimonials" },
    { label: "Produtos", id: "products" },
    { label: "Atendimentos", id: "atendimentos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/90 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/logo-csm.png"
              alt="Conheça Seu Mac"
              className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-105 transition-transform duration-200"
            />
            <span className="font-serif font-bold text-sm sm:text-base text-foreground hidden sm:inline group-hover:text-primary transition-colors duration-200">
              Conheça Seu Mac
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5531988598031"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 rounded-full bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 text-sm font-semibold"
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-5 pt-2 border-t border-border mt-1 space-y-1 animate-fade-in-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5531988598031"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-all duration-200 font-semibold mt-2"
            >
              Contato via WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
