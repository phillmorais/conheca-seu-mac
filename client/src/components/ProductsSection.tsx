import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Product {
  id: number;
  title: string;
  description: string;
  icon: string;
  href: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "CSM Express",
    description: "Curso introdutório de Mac com os fundamentos essenciais para começar a usar seu dispositivo com confiança.",
    icon: "📚",
    href: "/csm-express",
  },
  {
    id: 2,
    title: "Além do Command",
    description: "Livro completo sobre uso avançado do Mac. Desbloqueie todo o potencial do seu dispositivo.",
    icon: "📖",
    href: "/livro-alem-do-command",
  },
  {
    id: 3,
    title: "Felipinho",
    description: "Assistente de IA que responde suas dúvidas sobre Apple no WhatsApp. Suporte 24/7 sempre disponível.",
    icon: "🤖",
    href: "/felipinho",
  },
];

export default function ProductsSection() {
  return (
    <section className="w-full py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
            Conheça também
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Soluções completas para sua jornada com o Mac
          </p>
          <div className="w-16 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white"
            >
              {/* Icon Background */}
              <div className="h-32 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center group-hover:from-primary/10 group-hover:to-primary/15 transition-colors duration-300">
                <span className="text-6xl">{product.icon}</span>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Button */}
                <Button
                  onClick={() => window.location.href = product.href}
                  className="w-full btn-primary"
                >
                  Conhecer
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 bg-secondary/50 rounded-2xl max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground mb-6">
            Cada solução foi cuidadosamente desenvolvida para atender às necessidades específicas de usuários Mac em diferentes estágios de sua jornada.
          </p>
          <p className="text-muted">
            Escolha a que melhor se adequa ao seu momento e comece a transformar sua experiência com o Mac.
          </p>
        </div>
      </div>
    </section>
  );
}
