import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    title: "CSM Express",
    description: "Curso introdutório de Mac com os fundamentos essenciais para começar a usar seu dispositivo com confiança.",
    icon: "📚",
    href: "https://www.conhecaseumac.com.br/express",
    badge: "Curso",
    badgeColor: "bg-blue-100 text-blue-700",
    accent: "border-blue-200 hover:border-blue-400",
  },
  {
    id: 2,
    title: "Além do Command",
    description: "Livro completo sobre o teclado do Mac. Desbloqueie todo o potencial do seu dispositivo.",
    icon: "📖",
    href: "https://www.conhecaseumac.com.br/alemdocommand",
    badge: "Livro",
    badgeColor: "bg-primary/10 text-primary",
    accent: "border-primary/20 hover:border-primary/50",
  },
  {
    id: 3,
    title: "Felipinho",
    description: "Assistente de IA que responde suas dúvidas sobre Apple no WhatsApp. Suporte 24/7 sempre disponível.",
    icon: "🤖",
    href: "https://www.conhecaseumac.com.br/felipinho",
    badge: "IA",
    badgeColor: "bg-green-100 text-green-700",
    accent: "border-green-200 hover:border-green-400",
  },
];

export default function ProductsSection() {
  return (
    <section className="w-full py-24 sm:py-32 bg-gray-50" id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Produtos</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            Conheça também
          </h2>
          <p className="text-lg text-muted max-w-xl mx-auto">
            Soluções completas para sua jornada com o Mac
          </p>
          <div className="w-12 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl border-2 ${product.accent} shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 overflow-hidden animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Area */}
              <div className="h-44 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center gap-3 group-hover:from-white group-hover:to-gray-50 transition-all duration-300">
                <span className="text-6xl drop-shadow-sm group-hover:scale-110 transition-transform duration-300 inline-block">{product.icon}</span>
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 space-y-5">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-base">
                    {product.description}
                  </p>
                </div>

                <Button
                  onClick={() => window.open(product.href, '_blank')}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg"
                >
                  Conhecer →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 sm:p-10 bg-white rounded-2xl max-w-3xl mx-auto text-center border border-border shadow-sm animate-fade-in-up">
          <p className="text-base text-foreground/70 leading-relaxed">
            Cada solução foi cuidadosamente desenvolvida para atender às necessidades específicas de usuários Mac em diferentes estágios de sua jornada. Escolha a que melhor se adequa ao seu momento.
          </p>
        </div>
      </div>
    </section>
  );
}
