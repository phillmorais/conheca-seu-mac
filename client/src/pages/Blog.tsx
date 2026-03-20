import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carregar posts do arquivo JSON
    fetch('/blog-posts.json')
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao carregar blog posts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted">Carregando blog...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 w-full">
        {selectedPost ? (
          // Visualização de artigo individual
          <article className="w-full py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <button
                onClick={() => setSelectedPost(null)}
                className="mb-8 text-primary hover:text-primary/80 flex items-center gap-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Voltar para Blog
              </button>

              <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                    {selectedPost.category}
                  </span>
                  <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-4 text-muted">
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime} de leitura</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-12 text-foreground">
                  <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                </div>

                <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Quer otimizar seu Mac completamente?
                  </h3>
                  <p className="text-muted mb-6">
                    Baixe nosso checklist gratuito com 11 verificações essenciais para garantir segurança e performance.
                  </p>
                  <a
                    href="#lead-form"
                    className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Baixar Checklist Gratuito
                  </a>
                </div>
              </div>
            </div>
          </article>
        ) : (
          // Lista de artigos
          <div className="w-full py-12 sm:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                  <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Blog</p>
                  <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
                    Dicas e Guias para seu Mac
                  </h1>
                  <p className="text-lg text-muted max-w-2xl mx-auto">
                    Aprenda como otimizar, proteger e cuidar melhor do seu Mac. Artigos práticos e diretos ao ponto.
                  </p>
                  <div className="w-12 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid gap-8">
                  {posts.map((post, index) => (
                    <article
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="group cursor-pointer p-8 border-2 border-border rounded-2xl hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                        <span className="text-sm text-muted">{post.readTime}</span>
                      </div>

                      <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-muted mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted">{post.date}</span>
                        <svg className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </article>
                  ))}
                </div>

                {posts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted text-lg">Nenhum artigo disponível no momento.</p>
                  </div>
                )}

                {/* CTA Section */}
                <div id="lead-form" className="mt-16 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-2xl p-8 sm:p-12 text-center">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Checklist Completo: 11 Verificações Essenciais
                  </h3>
                  <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                    Baixe nosso checklist gratuito e descubra se seu Mac está realmente seguro, rápido e bem protegido.
                  </p>
                  
                  {/* RD Station Form will be rendered here */}
                  <div className="bg-white rounded-xl p-8 max-w-md mx-auto">
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Seu nome"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Seu email"
                          className="w-full px-4 py-3 border-2 border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                      >
                        Baixar Checklist Gratuito
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
