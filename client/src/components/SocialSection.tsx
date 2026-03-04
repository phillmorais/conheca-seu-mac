const socialLinks = [
  {
    name: "YouTube",
    handle: "@conhecaseumac",
    description: "Vídeos tutoriais e dicas práticas toda semana",
    href: "https://www.youtube.com/@conhecaseumac",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    color: "text-red-600",
    bg: "bg-red-50 hover:bg-red-100 border-red-200 hover:border-red-400",
  },
  {
    name: "Instagram",
    handle: "@conhecaseumac",
    description: "Posts diários com dicas rápidas sobre Mac",
    href: "https://www.instagram.com/conhecaseumac",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
    color: "text-pink-600",
    bg: "bg-pink-50 hover:bg-pink-100 border-pink-200 hover:border-pink-400",
  },
];

export default function SocialSection() {
  return (
    <section className="w-full py-24 sm:py-32 bg-white" id="social">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Redes Sociais</p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Conteúdo gratuito
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Dicas práticas e simples para usar melhor seu Mac, toda semana
            </p>
            <div className="w-12 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Social Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up ${link.bg}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex-shrink-0 ${link.color}`}>
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-lg">{link.name}</p>
                  <p className="text-sm text-muted font-medium">{link.handle}</p>
                  <p className="text-sm text-foreground/60 mt-1">{link.description}</p>
                </div>
                <svg className="w-5 h-5 text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Description */}
          <div className="text-center p-8 bg-gray-50 rounded-2xl border border-border animate-fade-in-up">
            <p className="text-base text-foreground/70 leading-relaxed">
              Nos acompanhe nas redes sociais para receber conteúdo exclusivo, tutoriais práticos e dicas diárias sobre como aproveitar melhor seu Mac. Publicamos regularmente vídeos, posts e guias que ajudam você a dominar sua máquina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
