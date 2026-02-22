export default function AboutSection() {
  return (
    <section className="w-full py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
              O Conheça Seu Mac
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Conheça Seu Mac é um projeto criado por <strong>Felipe Morais</strong>, especialista em suporte Apple com mais de uma década de experiência.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Nosso foco é ajudar pessoas a usarem seus dispositivos Mac com autonomia, clareza e tranquilidade. Acreditamos que a tecnologia deve simplificar a vida, não complicá-la.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Através de suporte personalizado, cursos práticos e conteúdo educativo, transformamos usuários inseguros em profissionais confiantes que dominam suas máquinas.
              </p>

              <div className="pt-4">
                <p className="text-sm text-muted uppercase tracking-wide font-medium mb-3">
                  Especialidades
                </p>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Suporte técnico especializado em macOS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Treinamento e educação em Apple</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Consultoria para produtividade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 font-bold">•</span>
                    <span>Orientação de segurança e privacidade</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/roWNAY9lrROj1IvNvkRACH/sandbox/28QdP4RUfkWoYDva9D0YJU-img-2_1771802234000_na1fn_YWJvdXQtZmVsaXBl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcm9XTkFZOWxyUk9qMUl2TnZrUkFDSC9zYW5kYm94LzI4UWRQNFJVZmtXb1lEdmE5RDBZSlUtaW1nLTJfMTc3MTgwMjM0MDAwMF9uYTFmbl9ZV0p2ZFhRdFptVnNhWEJsLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QwQC1RRfVTBuDxGqhj9KuRaiiot70GeR~ngkq0fQiTlt3~qUuxvCu7R08y-emHpMS1zSIXoS5~TOfMlGteVZxaITG4c6j0usUkn3Frsmde-T2drrMU16-Z6mGJFli0nsG0JRUFrxWRPqMC873jN9AbFr6jn8vIkr8XK9nzf4m21cqaKfnS4aBNPM98ILXbie6sMI~5fXTAL6XXTtyiXNLXSoKqKdhRWuxEGb8Xzlx~~ofkd~kM7ysIoNuUTWjM6K2OcOZRMv~XzYbwiyK~mk-4Fo9EO~0Hgb5Ua4NvVRsnlCCMVCv07VlIq8X9ddhxbuu3favSSWJzp9VGOy7FyuNw__"
                  alt="Felipe Morais - Especialista em Apple"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
