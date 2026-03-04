const testimonials = [
  {
    id: 1,
    quote: "Finalmente entendi como usar meu Mac de verdade. Felipe transformou minha relação com a tecnologia. Agora trabalho com muito mais eficiência e segurança.",
    name: "Maria Silva",
    role: "Empresária",
    initials: "MS",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    quote: "O suporte do Conheça Seu Mac foi essencial para minha produtividade. Aprendi truques que nunca imaginei que existiam. Recomendo para todos os meus colegas.",
    name: "Carlos Mendes",
    role: "Designer",
    initials: "CM",
    color: "bg-primary/10 text-primary",
  },
  {
    id: 3,
    quote: "Excelente atendimento! Felipe é paciente, claro e realmente entende o que você precisa. Sinto-me muito mais confiante usando meu MacBook agora.",
    name: "Ana Costa",
    role: "Consultora",
    initials: "AC",
    color: "bg-green-100 text-green-700",
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full py-24 sm:py-32 bg-white" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in-up">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Depoimentos</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
            O que dizem nossos alunos
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative p-8 rounded-2xl bg-gray-50 border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote mark */}
              <div className="text-6xl font-serif text-primary/15 leading-none mb-2 select-none">"</div>

              {/* Stars */}
              <StarRating />

              {/* Quote */}
              <p className="text-foreground/75 leading-relaxed mt-4 mb-8 text-base">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-muted text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
