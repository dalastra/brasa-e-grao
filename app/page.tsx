import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const maisPedidos = [
    {
      id: "duplo-smash-bacon",
      titulo: "Duplo Smash Bacon",
      tag: "O Campeão",
      avaliacao: "4.9",
      descricao:
        "Dois smash burgers de 90g de puro Angus, cheddar inglês cremoso, fatias crocantes de bacon artesanal e maionese defumada no brioche tostado.",
      preco: "R$ 38,90",
      imagem:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "truffled-burger-cebola",
      titulo: "Truffled Burger & Cebola",
      tag: "Autoral da Casa",
      avaliacao: "4.9",
      descricao:
        "Blend Angus 180g na brasa, queijo gouda maçaricado, cebola roxa caramelizada em redução de café espresso e aioli de manteiga de trufas.",
      preco: "R$ 44,90",
      imagem:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "crispy-chicken-hot-honey",
      titulo: "Crispy Chicken Hot Honey",
      tag: "Novidade",
      avaliacao: "4.8",
      descricao:
        "Sobrecoxa crocante empanada com especiarias da casa, queijo monterey jack, picles rústico, salada coleslaw e mel picante artesanal com pimenta da brasa.",
      preco: "R$ 36,90",
      imagem:
        "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="flex flex-col w-full py-8 lg:py-12">
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION (Card Escuro Arredondado do Figma)       */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-[32px] overflow-hidden bg-[#1c140e] text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-[#2d2218]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Texto e Chamadas */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a1e15] border border-[#ea580c]/30 text-[#ea580c] text-[11px] font-bold uppercase tracking-wider">
                <span>🔥 Blend Angus & Grão Especial Autoral</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                Sabor defumado na brasa,<br />
                <span className="text-[#f59e0b]">crosta perfeita a cada mordida.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#c7beaf] max-w-lg leading-relaxed">
                Blend 100% Angus moído no dia, crosta smash selada na chapa incandescente e cafés artesanais torrados exclusivamente na casa.
              </p>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                <Link
                  href="/cardapio"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#ea580c] hover:bg-[#c2410c] rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explorar Cardápio</span>
                  <span>›</span>
                </Link>

                <a
                  href="#mais-pedidos"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#ddd6cc] hover:text-white bg-[#2b2017] hover:bg-[#382b20] border border-[#3e3023] rounded-xl transition-all"
                >
                  Ver Mais Pedidos
                </a>
              </div>

              {/* Avaliações e Certificação */}
              <div className="pt-6 border-t border-[#2e2319] flex flex-wrap items-center gap-6 text-xs text-[#a39788]">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#f59e0b] font-bold">4.9 ★</span>
                  <span>(+1.200 avaliações)</span>
                </div>
                <span className="text-[#453629]">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ea580c] font-bold">100% Angus</span>
                  <span>Certificado</span>
                </div>
              </div>
            </div>

            {/* Imagem do Burger com Card Flutuante Branco de Preço */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl bg-[#2a1e16]">
                <Image
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85"
                  alt="Duplo Smash Burger Brasa & Grão"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                  priority
                />

                {/* Card Flutuante Branco (Exato do Figma) */}
                <div className="absolute bottom-4 left-4 right-4 bg-white text-[#1c140e] p-3.5 sm:p-4 rounded-2xl shadow-xl flex items-center justify-between border border-[#ede5da]">
                  <div>
                    <span className="text-xs sm:text-sm font-extrabold text-[#1c140e] block">
                      Duplo Smash Cheddar
                    </span>
                    <span className="text-[11px] text-[#786b5e] block">
                      Blend Angus 180g • Pão Brioche
                    </span>
                  </div>
                  <div className="text-right pl-3">
                    <span className="text-base sm:text-lg font-black text-[#ea580c]">
                      R$ 38,90
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FAIXA DE DIFERENCIAIS (3 Blocos Brancos)              */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Diferencial 1 */}
          <div className="bg-white p-6 rounded-2xl border border-[#ede7de] shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#fdf2e9] text-[#ea580c] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1c140e]">
                Blend 100% Angus Fresco
              </h3>
              <p className="text-xs text-[#786b5e] mt-1 leading-relaxed">
                Cortes nobres selecionados e moídos diariamente para a máxima suculência e sabor.
              </p>
            </div>
          </div>

          {/* Diferencial 2 */}
          <div className="bg-white p-6 rounded-2xl border border-[#ede7de] shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#fdf2e9] text-[#ea580c] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1c140e]">
                Torrefação Própria
              </h3>
              <p className="text-xs text-[#786b5e] mt-1 leading-relaxed">
                Cafés especiais 100% arábica com torra artesanal média e notas achocolatadas.
              </p>
            </div>
          </div>

          {/* Diferencial 3 */}
          <div className="bg-white p-6 rounded-2xl border border-[#ede7de] shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#fdf2e9] text-[#ea580c] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1c140e]">
                Entrega Quente em 30 min
              </h3>
              <p className="text-xs text-[#786b5e] mt-1 leading-relaxed">
                Embalagens térmicas especiais que conservam a crocância e o calor do lanche até você.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. OS MAIS PEDIDOS DA SEMANA                             */}
      {/* ======================================================== */}
      <section id="mais-pedidos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16 sm:mt-20">
        
        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-bold text-[#ea580c] uppercase tracking-wider">
              Escolhas da Casa
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1c140e] mt-1">
              Os Mais Pedidos da Semana
            </h2>
          </div>
          <Link
            href="/cardapio"
            className="text-xs font-bold text-[#ea580c] hover:text-[#c2410c] transition-colors flex items-center gap-1"
          >
            <span>Ver todos no cardápio</span>
            <span>→</span>
          </Link>
        </div>

        {/* Grid com os 3 Cards de Lanches Brancos do Figma */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {maisPedidos.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-[#ede7de] shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all"
            >
              {/* Foto do Burger com Tag Laranja e Nota no Canto Inferior Direito */}
              <div className="relative h-56 w-full bg-[#f4eee5] overflow-hidden">
                <Image
                  src={item.imagem}
                  alt={item.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Tag Laranja */}
                <div className="absolute top-3 left-3 bg-[#ea580c] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {item.tag}
                </div>

                {/* Avaliação com Estrela */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#1c140e] text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm border border-[#ede5da]">
                  <span className="text-[#f59e0b]">★</span>
                  <span>{item.avaliacao}</span>
                </div>
              </div>

              {/* Informações */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#1c140e] group-hover:text-[#ea580c] transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-xs text-[#786b5e] mt-2 leading-relaxed">
                    {item.descricao}
                  </p>
                </div>

                {/* Preço e Botão Preto + Pedir Agora */}
                <div className="pt-4 border-t border-[#f4efe8] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#9c8e7f] block uppercase font-medium">Preço</span>
                    <span className="text-lg font-black text-[#1c140e]">{item.preco}</span>
                  </div>

                  <Link
                    href="/cardapio"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#1c140e] hover:bg-[#2f2319] rounded-xl transition-all shadow-sm"
                  >
                    <span>+ Pedir Agora</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
