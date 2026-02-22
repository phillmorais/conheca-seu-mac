export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-lg">⌘</span>
                </div>
                <span className="font-serif font-semibold text-lg text-foreground">
                  Conheça Seu Mac
                </span>
              </div>
              <p className="text-muted text-sm leading-relaxed">
                Suporte, ensino e orientação para quem quer usar o Mac com clareza e tranquilidade.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Produtos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/csm-express"
                    className="text-muted hover:text-primary transition-colors text-sm"
                  >
                    CSM Express
                  </a>
                </li>
                <li>
                  <a
                    href="/livro-alem-do-command"
                    className="text-muted hover:text-primary transition-colors text-sm"
                  >
                    Além do Command
                  </a>
                </li>
                <li>
                  <a
                    href="/felipinho"
                    className="text-muted hover:text-primary transition-colors text-sm"
                  >
                    Felipinho
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Redes Sociais</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span>▶</span> YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span>📷</span> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    <span>💬</span> WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted">
            <p>© {currentYear} Conheça Seu Mac. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="/privacidade" className="hover:text-primary transition-colors">
                Privacidade
              </a>
              <a href="/termos" className="hover:text-primary transition-colors">
                Termos
              </a>
              <a href="/contato" className="hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
