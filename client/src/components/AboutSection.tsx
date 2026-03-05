export default function AboutSection() {
  return (
    <section className="w-full py-24 sm:py-32 bg-gray-50" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image - Left */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1 w-full">
              <div className="relative w-full max-w-xs sm:max-w-sm">
                {/* Decorative background shape */}
                <div className="absolute -inset-4 bg-primary/8 rounded-3xl -rotate-2"></div>
                <div className="absolute -inset-4 bg-primary/4 rounded-3xl rotate-1"></div>
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663065717416/LbjuaMqUyllLUnqZ.jpg"
                  alt="Felipe Morais - Especialista em Apple"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover"
                />

              </div>
            </div>

            {/* Text Content - Right */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Section Label */}
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Sobre nós</p>
                <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground leading-tight">
                  Conheça Seu Mac
                </h2>
                <div className="w-12 h-1 bg-primary mt-4 rounded-full"></div>
              </div>

              <div className="space-y-5 text-foreground/80 leading-relaxed">
                <p className="text-lg">
                  Conheça Seu Mac é um projeto criado por <strong className="text-foreground font-semibold">Felipe Morais</strong>, especialista em suporte Apple com mais de uma década de experiência.
                </p>

                <p className="text-lg">
                  Nosso foco é ajudar pessoas a usarem seus dispositivos Mac com autonomia, clareza e tranquilidade. Acreditamos que a tecnologia deve simplificar a vida, não complicá-la.
                </p>

                <p className="text-lg">
                  Através de suporte personalizado, cursos práticos e conteúdo educativo, transformamos usuários inseguros em profissionais confiantes que dominam suas máquinas.
                </p>
              </div>

              {/* Specialties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { icon: "🖥️", label: "Suporte técnico em macOS" },
                  { icon: "📚", label: "Treinamento e educação Apple" },
                  { icon: "⚡", label: "Consultoria de produtividade" },
                  { icon: "🔒", label: "Segurança e privacidade" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-border hover:border-primary/30 hover:bg-primary/3 transition-all duration-200">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
