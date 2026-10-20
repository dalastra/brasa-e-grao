
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brasa & Grão | Hamburgueria & Cafeteria Artesanal",
  description:
    "Sabor autêntico defumado na brasa, crosta smash perfeita e cafés de torra artesanal moídos na hora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1c140e] antialiased">
        <div className="site-wrapper flex flex-col min-h-screen">
          
          {/* ======================================================== */}
          {/* CABEÇALHO COMPARTILHADO (Figma Header)                  */}
          {/* ======================================================== */}
          <header className="site-header sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#eae5dd]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
              
              {/* Logo da Marca */}
              <Link href="/" className="brand-logo flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#ea580c] flex items-center justify-center shadow-sm overflow-hidden p-1.5 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Logo Brasa & Grão"
                    width={36}
                    height={36}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl tracking-tight text-[#1c140e]">
                    Brasa <span className="text-[#ea580c]">&</span> Grão
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#9c8e7f] -mt-1">
                    Smash Burgers & Specialty Coffee
                  </span>
                </div>
              </Link>

              {/* Menu de Navegação Central em Pílula (conforme Figma) */}
              <nav className="site-nav hidden md:flex items-center bg-[#f3eee7] p-1.5 rounded-full border border-[#e5ded4]">
                <Link
                  href="/"
                  className="px-6 py-2 rounded-full text-xs font-bold text-[#1c140e] hover:bg-white transition-all shadow-sm focus:bg-white"
                >
                  Início
                </Link>
                <Link
                  href="/cardapio"
                  className="px-6 py-2 rounded-full text-xs font-bold text-[#7a6f62] hover:text-[#1c140e] hover:bg-white transition-all focus:bg-white"
                >
                  Cardápio Completo
                </Link>
              </nav>

              {/* Ações e Status da Hamburgueria */}
              <div className="header-actions flex items-center gap-3">
                {/* Badge de Funcionamento Verde */}
                <div className="badge badge-success inline-flex items-center gap-2 bg-[#e7f7ed] border border-[#bbf0cd] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0d8a4e]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
                  </span>
                  <span>Aberto • 25-35 min</span>
                </div>

                {/* Botão Painel Gestor */}
                <Link
                  href="/cardapio"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-[#3d342d] bg-white hover:bg-[#f7f4ee] border border-[#ddd5c9] rounded-xl shadow-xs transition-all"
                >
                  <svg className="w-3.5 h-3.5 text-[#7a6f62]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span>Painel Gestor</span>
                </Link>
              </div>

            </div>

            {/* Navegação Mobile */}
            <div className="flex md:hidden border-t border-[#eae5dd] bg-white px-4 py-2.5 justify-around text-xs font-bold">
              <Link href="/" className="text-[#ea580c] py-1">
                Início
              </Link>
              <span className="text-[#ddd5c9]">•</span>
              <Link href="/cardapio" className="text-[#7a6f62] hover:text-[#ea580c] py-1">
                Cardápio Completo
              </Link>
            </div>
          </header>

          {/* ======================================================== */}
          {/* CONTEÚDO DINÂMICO DE CADA PÁGINA (page.tsx)              */}
          {/* ======================================================== */}
          <main className="site-main flex-1">
            {children}
          </main>

          {/* ======================================================== */}
          {/* RODAPÉ COMPARTILHADO (Figma Footer Escuro)               */}
          {/* ======================================================== */}
          <footer className="site-footer bg-[#14100c] text-[#a89d8f] border-t border-[#29221b] mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
              
              {/* Linha Superior */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#241c16]">
                <Link href="/" className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ea580c] flex items-center justify-center shadow-sm p-1.5 shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Brasa & Grão"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-lg text-white">
                      Brasa <span className="text-[#ea580c]">&</span> Grão
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#73675a] -mt-1">
                      Hamburgueria Artesanal
                    </span>
                  </div>
                </Link>

                <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#c8beb2]">
                  <Link href="/" className="hover:text-white transition-colors">
                    Início
                  </Link>
                  <Link href="/cardapio" className="hover:text-white transition-colors">
                    Cardápio Completo
                  </Link>
                  <Link href="/cardapio" className="hover:text-white transition-colors">
                    Área do Gestor (Admin)
                  </Link>
                </nav>
              </div>

              {/* Linha Inferior */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#73675a]">
                <p>© 2026 Brasa & Grão Artesanal. Todos os direitos reservados.</p>
                <p className="font-medium text-[#998b7a]">
                  Terça a Domingo • 18h às 23h30
                </p>
              </div>

            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
