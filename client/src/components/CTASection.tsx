import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onWhatsApp?: () => void;
}

export default function CTASection({ onWhatsApp }: CTASectionProps) {
  return (
    <section className="w-full py-24 sm:py-32 bg-foreground text-white relative overflow-hidden" id="contact">
      {/* Subtle background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl -ml-48 -mb-48" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">

          {/* Label */}
          <p className="text-sm font-semibold text-primary uppercase tracking-widest animate-fade-in-up">
            Fale conosco
          </p>

          {/* Main Message */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Você não precisa usar seu Mac sozinho.
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Estamos aqui para ajudar você a aproveitar ao máximo seu dispositivo. Entre em contato conosco e comece sua jornada.
          </p>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={onWhatsApp}
              className="px-12 sm:px-16 py-4 sm:py-5 text-lg font-bold bg-primary hover:bg-primary/90 text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-primary/40"
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Trust Stats */}
          <div className="pt-12 border-t border-white/10 mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">14+</p>
                <p className="text-white/50 text-sm mt-1 font-medium">Anos de experiência</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">1000+</p>
                <p className="text-white/50 text-sm mt-1 font-medium">Clientes satisfeitos</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold text-white">24/7</p>
                <p className="text-white/50 text-sm mt-1 font-medium">Suporte disponível</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
