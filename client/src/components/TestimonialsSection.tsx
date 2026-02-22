import { Card } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    role: "Empresária",
    text: "Finalmente entendi como usar meu Mac de verdade. Felipe transformou minha relação com a tecnologia. Agora trabalho com muito mais eficiência e segurança.",
    avatar: "MS",
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Designer",
    text: "O suporte do Conheça Seu Mac foi essencial para minha produtividade. Aprendi truques que nunca imaginei que existiam. Recomendo para todos os meus colegas.",
    avatar: "CM",
  },
  {
    id: 3,
    name: "Ana Costa",
    role: "Consultora",
    text: "Excelente atendimento! Felipe é paciente, claro e realmente entende o que você precisa. Sinto-me muito mais confiante usando meu MacBook agora.",
    avatar: "AC",
  },
];

export default function TestimonialsSection() {
  return (
    <section 
      className="w-full py-20 sm:py-28"
      style={{
        backgroundImage: 'url(https://private-us-east-1.manuscdn.com/sessionFile/roWNAY9lrROj1IvNvkRACH/sandbox/28QdP4RUfkWoYDva9D0YJU-img-3_1771802230000_na1fn_dGVzdGltb25pYWxzLWJn.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcm9XTkFZOWxyUk9qMUl2TnZrUkFDSC9zYW5kYm94LzI4UWRQNFJVZmtXb1lEdmE5RDBZSlUtaW1nLTNfMTc3MTgwMjIzMDAwMF9uYTFmbl9kR1Z6ZEdsdGIyNXBZV3h6TFdKbi5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gcijIZXxrt~HO01qfZWSW5Zf2baYRVYes3Aqnc1s3~04wjtjpvCuey-IvLc~IK4ygo6sGDRlTBLbK-TgpsjCI1FfpkopktNNQEYN9J26JKn1hiCy0Q1XcAKNvxoQDqn0RJ-hrbfLIbf6Vh4wm9lW0LM1VQ6nAY2DTAjhnRF8krK56tAxIUSkx9YcINv7i4ENc6CpnpFOuJgMqpc4eFGOUpAdPaC4wLioxW5vB3g4apZGNSGoA0F4~Vi-v7njvIOrJ1k5WFULx6wl38nsbz-7Qj60adKbne5wz2EskACe1OURTIxAS~xlZFxZrOHSOSRvtWqvijJcPlIwLoP8PxAHLQ__)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/85"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
            O que nossos clientes dizem
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
