import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onLearnMore?: () => void;
  onWhatsApp?: () => void;
}

export default function HeroSection({ onLearnMore, onWhatsApp }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/roWNAY9lrROj1IvNvkRACH/sandbox/28QdP4RUfkWoYDva9D0YJU-img-1_1771802230000_na1fn_aGVyby1tYWNib29r.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcm9XTkFZOWxyUk9qMUl2TnZrUkFDSC9zYW5kYm94LzI4UWRQNFJVZmtXb1lEdmE5RDBZSlUtaW1nLTFfMTc3MTgwMjIzMDAwMF9uYTFmbl9hR1Z5YnkxdFlXTmliMjlyLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gSCLytDIrimFYH8PsKEw4GoPkn74Dio9zEaCyYkz0pKMUPoXbb2q8XCgQ0ArRYWFmPJptI-nrrIBw~bdeXIyXFbsf0gxoVPGZ84UqurS6uoRivJ2ajnb7ziMyLSWOGy4TpIQCK7ZplOFZyMKnZBWIYpJh9i9K8bPuWXx9-IJ74r-C9lzPHKtkbbr8vpsmBssBBsIw0xLgiZA9A3l1NTFZQx9-9jgR8bkitIJzIYyFQWnj1gNf6GlTfYzNSzDcOCUfNQ7W~ZOckIALSS5stmYqt54xn~0YrYsbFOHQNPuKw8RXukBkxARr0efdRwAqtmvPIXbFb4l6V9t-W7JJmINAA__)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-semibold text-foreground leading-tight">
            Use seu Mac com confiança.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl mx-auto">
            Suporte, ensino e orientação para quem quer usar o Mac com clareza e tranquilidade.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={onLearnMore}
              className="btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4"
            >
              Conheça nosso trabalho
            </Button>
            <Button
              onClick={onWhatsApp}
              variant="outline"
              className="btn-secondary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4"
            >
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
