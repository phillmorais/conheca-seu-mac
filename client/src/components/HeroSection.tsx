import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onLearnMore?: () => void;
  onWhatsApp?: () => void;
}

export default function HeroSection({ onLearnMore, onWhatsApp }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(0,113,227,0.06) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(0,113,227,0.04) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 text-primary text-sm font-medium animate-fade-in-up" style={{ animationDelay: '0s' }}>
            <img src="/logo-csm.png" alt="" className="w-5 h-5" />
            Especialistas em Mac há 14 anos
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Use seu Mac com{" "}
            <span className="text-primary">confiança</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ensino, suporte e orientação para quem quer usar o Mac com clareza e tranquilidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={onLearnMore}
              className="bg-primary hover:bg-primary/90 text-white text-base sm:text-lg px-10 sm:px-14 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Conheça nosso trabalho
            </Button>
            <Button
              onClick={onWhatsApp}
              className="bg-transparent hover:bg-primary/5 text-primary text-base sm:text-lg px-10 sm:px-14 py-3 sm:py-4 rounded-xl font-semibold border-2 border-primary transition-all duration-300 hover:-translate-y-0.5"
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center p-4 rounded-2xl bg-gray-50 border border-border">
              <p className="text-3xl sm:text-4xl font-bold text-primary">14+</p>
              <p className="text-xs sm:text-sm text-muted mt-1 font-medium">Anos de experiência</p>
            </div>
            <div className="text-center p-4 rounded-2xl bg-gray-50 border border-border">
              <p className="text-3xl sm:text-4xl font-bold text-primary">1000+</p>
              <p className="text-xs sm:text-sm text-muted mt-1 font-medium">Clientes atendidos</p>
            </div>
            <div className="text-center p-4 rounded-2xl bg-gray-50 border border-border">
              <p className="text-3xl sm:text-4xl font-bold text-primary">24/7</p>
              <p className="text-xs sm:text-sm text-muted mt-1 font-medium">Suporte disponível</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
