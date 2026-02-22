import { Button } from "@/components/ui/button";

interface SocialLink {
  name: string;
  icon: string;
  href: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    icon: "▶",
    href: "https://youtube.com",
    color: "text-red-600",
  },
  {
    name: "Instagram",
    icon: "📷",
    href: "https://instagram.com",
    color: "text-pink-600",
  },
];

export default function SocialSection() {
  return (
    <section className="w-full py-20 sm:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
              Conteúdo gratuito
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Dicas práticas e simples para usar melhor seu Mac
            </p>
            <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="font-semibold">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Description */}
          <div className="text-center p-8 sm:p-12 bg-white rounded-2xl shadow-sm">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Nos acompanhe nas redes sociais para receber conteúdo exclusivo, tutoriais práticos e dicas diárias sobre como aproveitar melhor seu Mac.
            </p>
            <p className="text-base text-muted">
              Publicamos regularmente vídeos, posts e guias que ajudam você a dominar sua máquina e aumentar sua produtividade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
