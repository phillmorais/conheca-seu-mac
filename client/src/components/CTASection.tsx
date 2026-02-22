import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onWhatsApp?: () => void;
}

export default function CTASection({ onWhatsApp }: CTASectionProps) {
  return (
    <section className="w-full py-20 sm:py-28 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Main Message */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-tight">
            Você não precisa usar seu Mac sozinho.
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
            Estamos aqui para ajudar você a aproveitar ao máximo seu dispositivo. Entre em contato conosco e comece sua jornada de transformação digital.
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              onClick={onWhatsApp}
              className="px-10 sm:px-12 py-4 sm:py-5 text-lg font-semibold bg-white text-primary hover:bg-white/90 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Falar no WhatsApp
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="pt-12 border-t border-white/20 mt-12">
            <p className="text-sm text-white/80 uppercase tracking-wide mb-6">
              Por que nos escolher
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold mb-2">10+</p>
                <p className="text-white/90">Anos de experiência</p>
              </div>
              <div>
                <p className="text-2xl font-bold mb-2">1000+</p>
                <p className="text-white/90">Clientes satisfeitos</p>
              </div>
              <div>
                <p className="text-2xl font-bold mb-2">24/7</p>
                <p className="text-white/90">Suporte disponível</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
