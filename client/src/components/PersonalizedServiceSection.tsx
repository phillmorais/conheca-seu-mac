import { ArrowRight } from "lucide-react";

export default function PersonalizedServiceSection() {
  return (
    <section className="w-full py-24 sm:py-32 bg-gradient-to-br from-primary/5 via-white to-primary/3" id="atendimentos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Atendimento Premium</p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6">
              Atendimentos Personalizados
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Sessões individuais customizadas para resolver seus desafios específicos com o Mac
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Service 1 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
              
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">Diagnóstico Completo</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Análise detalhada do seu Mac para identificar problemas, otimizar performance e organizar seu workflow.
              </p>
              
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Avaliação de hardware e software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Recomendações personalizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Plano de ação customizado</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
              
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">🛠️</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">Suporte Técnico Direto</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Resolução prática de problemas específicos com orientação passo a passo e suporte contínuo.
              </p>
              
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Resolução de problemas técnicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Configuração de aplicativos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Follow-up e suporte pós-sessão</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
              
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">📖</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">Treinamento Customizado</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Aulas personalizadas focadas nas funcionalidades que você realmente precisa dominar.
              </p>
              
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Aulas sob demanda</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Material exclusivo e dicas práticas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Acesso a recursos premium</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-white rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
              
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">Otimização de Produtividade</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Transforme seu Mac em uma máquina de produtividade com ferramentas e workflows otimizados.
              </p>
              
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Setup de produtividade</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Automação de tarefas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Integração de ferramentas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-border text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Pronto para transformar sua experiência com o Mac?
            </h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Agende uma sessão de atendimento personalizado e descubra como podemos ajudá-lo a dominar seu Mac.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5531988598031"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 group"
              >
                Agendar Sessão
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-all duration-200"
              >
                Ver Outros Serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
