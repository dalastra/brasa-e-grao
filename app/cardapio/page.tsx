"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ItemCardapio {
  id: string;
  nome: string;
  categoria: "smash" | "porcoes" | "cafes";
  subtitulo?: string;
  descricao: string;
  preco: string;
  avaliacao: string;
  tag?: string;
  imagem: string;
}

export default function CardapioPage() {
  const [filtroAtivo, setFiltroAtivo] = useState<"todos" | "smash" | "porcoes" | "cafes">("todos");

  const smashBurgers: ItemCardapio[] = [
    {
      id: "classico-american-smash",
      nome: "Clássico American Smash",
      categoria: "smash",
      tag: "Clássico",
      avaliacao: "4.9",
      descricao:
        "Duplo smash 90g Angus, queijo cheddar inglês derretido, cebola picadinha, picles artesanal e molho da casa no pão brioche tostado.",
      preco: "R$ 34,90",
      imagem:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "oklahoma-crispy-onion",
      nome: "Oklahoma Crispy Onion",
      categoria: "smash",
      tag: "Mais Pedido",
      avaliacao: "4.9",
      descricao:
        "Duplo smash 90g prensado na chapa com lâminas ultrafinas de cebola caramelizada, queijo prato duplo fundido e maionese defumada.",
      preco: "R$ 37,90",
      imagem:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "portobello-crispy-melt",
      nome: "Portobello Crispy Melt",
      categoria: "smash",
      tag: "Novo no Cardápio",
      avaliacao: "4.8",
      descricao:
        "Cogumelos salteados na manteiga, queijo suíço derretido na crosta do burger, aioli de ervas frescas e cebola crocante no pão brioche.",
      preco: "R$ 39,90",
      imagem:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const acompanhamentosCafeteria: ItemCardapio[] = [
    {
      id: "fritas-rusticas",
      nome: "Fritas Rústicas com Alecrim & Páprica",
      categoria: "porcoes",
      subtitulo: "300g",
      avaliacao: "4.9",
      descricao:
        "Batatas artesanais cortadas à mão com casca, crocantes por fora e macias por dentro, com flor de sal defumada e alecrim fresco.",
      preco: "R$ 24,90",
      imagem:
        "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "shake-espresso",
      nome: "Shake Espresso & Caramelo Salgado",
      categoria: "cafes",
      subtitulo: "400ml",
      avaliacao: "4.9",
      descricao:
        "Sorvete artesanal de baunilha batido com duplo shot de café espresso da casa e calda artesanal de caramelo salgado.",
      preco: "R$ 26,90",
      imagem:
        "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "latte-artesanal",
      nome: "Latte Artesanal Torra Média",
      categoria: "cafes",
      subtitulo: "240ml",
      avaliacao: "4.8",
      descricao:
        "Espresso duplo de grãos especiais 100% arábica com leite vaporizado sedoso e latte art feito na hora pelo barista.",
      preco: "R$ 16,90",
      imagem:
        "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "brownie-chapa",
      nome: "Brownie Belga 70% na Chapa",
      categoria: "porcoes",
      subtitulo: "Individual",
      avaliacao: "5.0",
      descricao:
        "Brownie morno selado na chapa para criar crosta crocante, servido com bola de sorvete de baunilha e calda de café moka.",
      preco: "R$ 28,90",
      imagem:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const burgersFiltrados =
    filtroAtivo === "todos" || filtroAtivo === "smash" ? smashBurgers : [];

  const outrosFiltrados = acompanhamentosCafeteria.filter((item) => {
    if (filtroAtivo === "todos") return true;
    if (filtroAtivo === "porcoes" && item.categoria === "porcoes") return true;
    if (filtroAtivo === "cafes" && item.categoria === "cafes") return true;
    return false;
  });

  return (
    <div className="flex flex-col w-full py-8 lg:py-12">
      
      {/* ======================================================== */}
      {/* 1. BANNER DO CABEÇALHO DO CARDÁPIO & COMBO DO DIA        */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-3">
          <span className="text-[11px] font-bold text-[#ea580c] uppercase tracking-wider">
            Cardápio Artesanal & Edição de Outono
          </span>
        </div>

        {/* Card do Banner (Figma Exact Layout) */}
        <div className="rounded-[28px] bg-[#fbf5ee] border border-[#f1e5d7] p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Lado Esquerdo */}
            <div className="lg:col-span-7 space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1c140e] tracking-tight">
                Escolha sua experiência na brasa
              </h1>
              <p className="text-xs sm:text-sm text-[#786b5e] max-w-xl leading-relaxed">
                Burgers defumados, smash com crosta crocante e cafés autorais de torra fresca. Peça no balcão, retire ou receba quentinho via delivery.
              </p>
            </div>

            {/* Lado Direito: Combo do Dia em Destaque */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-[#ede5da] shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold text-[#ea580c] uppercase tracking-wider bg-[#fdf2e9] px-2.5 py-0.5 rounded-full">
                  Combo do Dia
                </span>
                <span className="text-xs font-bold text-[#0d8a4e] bg-[#e7f7ed] px-2 py-0.5 rounded-full">
                  Economize 26%
                </span>
              </div>

              <div>
                <h3 className="text-base font-extrabold text-[#1c140e]">
                  Smash + Fritas + Café Gelado
                </h3>
                <p className="text-xs text-[#786b5e] mt-1">
                  1x Clássico American Smash + 1x Fritas Rústicas + 1x Shake Espresso.
                </p>
              </div>

              <div className="flex items-baseline justify-between pt-2 border-t border-[#f4efe8]">
                <div>
                  <span className="text-xs text-[#9c8e7f] line-through mr-2">De R$ 68,00</span>
                  <span className="text-xl font-black text-[#ea580c]">R$ 49,90</span>
                </div>
                <button
                  onClick={() => alert("Combo adicionado ao seu pedido!")}
                  className="px-4 py-1.5 text-xs font-bold text-white bg-[#ea580c] hover:bg-[#c2410c] rounded-xl transition-all shadow-xs"
                >
                  Pedir Combo
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FILTROS DE CATEGORIA (Pílulas Visuais do Figma)       */}
      {/* ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-2">
          
          <button
            onClick={() => setFiltroAtivo("todos")}
            className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              filtroAtivo === "todos"
                ? "bg-[#ea580c] text-white shadow-sm"
                : "bg-white text-[#786b5e] hover:text-[#1c140e] border border-[#ede7de]"
            }`}
          >
            Todos os Itens
          </button>

          <button
            onClick={() => setFiltroAtivo("smash")}
            className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              filtroAtivo === "smash"
                ? "bg-[#ea580c] text-white shadow-sm"
                : "bg-white text-[#786b5e] hover:text-[#1c140e] border border-[#ede7de]"
            }`}
          >
            🍔 Smash Burgers
          </button>

          <button
            onClick={() => setFiltroAtivo("porcoes")}
            className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              filtroAtivo === "porcoes"
                ? "bg-[#ea580c] text-white shadow-sm"
                : "bg-white text-[#786b5e] hover:text-[#1c140e] border border-[#ede7de]"
            }`}
          >
            🍟 Porções & Entradas
          </button>

          <button
            onClick={() => setFiltroAtivo("cafes")}
            className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
              filtroAtivo === "cafes"
                ? "bg-[#ea580c] text-white shadow-sm"
                : "bg-white text-[#786b5e] hover:text-[#1c140e] border border-[#ede7de]"
            }`}
          >
            ☕ Cafés & Shakes
          </button>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SEÇÃO LINHA SMASH & BRASA (Grid de 3 Cards Brancos)   */}
      {/* ======================================================== */}
      {(filtroAtivo === "todos" || filtroAtivo === "smash") && (
        <section id="smash" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1c140e]">
              Linha Smash & Brasa
            </h2>
            <p className="text-xs text-[#786b5e] mt-0.5">
              Prensados na chapa de ferro fundido com crosta caramelizada perfeita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {burgersFiltrados.map((burger) => (
              <div
                key={burger.id}
                className="bg-white rounded-2xl border border-[#ede7de] shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all"
              >
                {/* Imagem do Burger */}
                <div className="relative h-56 w-full bg-[#f4eee5] overflow-hidden">
                  <Image
                    src={burger.imagem}
                    alt={burger.nome}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {burger.tag && (
                    <div className="absolute top-3 left-3 bg-[#ea580c] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {burger.tag}
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-[#1c140e] text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm border border-[#ede5da]">
                    <span className="text-[#f59e0b]">★</span>
                    <span>{burger.avaliacao}</span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#1c140e] group-hover:text-[#ea580c] transition-colors">
                      {burger.nome}
                    </h3>
                    <p className="text-xs text-[#786b5e] mt-2 leading-relaxed">
                      {burger.descricao}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#f4efe8] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#9c8e7f] block uppercase font-medium">Preço</span>
                      <span className="text-lg font-black text-[#1c140e]">{burger.preco}</span>
                    </div>

                    <button
                      onClick={() => alert(`Adicionado: ${burger.nome}!`)}
                      className="px-4 py-2 text-xs font-bold text-white bg-[#1c140e] hover:bg-[#2f2319] rounded-xl transition-all shadow-sm active:scale-95"
                    >
                      + Adicionar
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>
      )}

      {/* ======================================================== */}
      {/* 4. ACOMPANHAMENTOS & CAFETERIA (Grid 2 Colunas)          */}
      {/* ======================================================== */}
      {(filtroAtivo === "todos" || filtroAtivo === "porcoes" || filtroAtivo === "cafes") && (
        <section id="cafeteria" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-14">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#1c140e]">
              Acompanhamentos & Cafeteria
            </h2>
            <p className="text-xs text-[#786b5e] mt-0.5">
              Porções perfeitas e cafés artesanais torrados para acompanhar seu burger.
            </p>
          </div>

          {/* Grid de 2 Colunas com os 4 Cards Horizontais do Figma */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outrosFiltrados.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#ede7de] shadow-sm overflow-hidden flex flex-col sm:flex-row group hover:shadow-md transition-all"
              >
                {/* Imagem Quadrada */}
                <div className="relative w-full sm:w-44 h-44 sm:h-auto shrink-0 bg-[#f4eee5]">
                  <Image
                    src={item.imagem}
                    alt={item.nome}
                    fill
                    sizes="(max-width: 640px) 100vw, 180px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Conteúdo à Direita */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-bold text-[#1c140e] group-hover:text-[#ea580c] transition-colors leading-snug">
                        {item.nome}
                      </h3>
                      {item.subtitulo && (
                        <span className="text-[10px] text-[#9c8e7f] font-semibold shrink-0">
                          {item.subtitulo}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#786b5e] mt-1.5 leading-relaxed">
                      {item.descricao}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#f4efe8] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#9c8e7f] block uppercase font-medium">Preço</span>
                      <span className="text-base font-black text-[#1c140e]">{item.preco}</span>
                    </div>

                    <button
                      onClick={() => alert(`Adicionado: ${item.nome}!`)}
                      className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#1c140e] hover:bg-[#2f2319] rounded-xl transition-all shadow-sm active:scale-95"
                    >
                      + Adicionar
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>
      )}

      {/* Voltar para Início */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#786b5e] hover:text-[#ea580c] transition-colors"
        >
          <span>←</span>
          <span>Voltar para a Página Inicial</span>
        </Link>
      </div>

    </div>
  );
}