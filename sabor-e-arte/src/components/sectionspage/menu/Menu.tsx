'use client'

import { useState } from 'react'

type MenuItem = {
  name: string
  description: string
  price: string
  image: string
}

type MenuData = {
  [category: string]: MenuItem[]
}

const menuData: MenuData = {
  Hamburguer: [
    {
      name: "Hambúrguer Clássico",
      description: "Pão, carne 150g, queijo, alface, tomate e maionese da casa.",
      price: "R$ 24,90",
      image: "/images/lanches/HamburguerClassico.webp",
    },
    {
      name: "Cheddar Bacon",
      description: "Carne, cheddar cremoso e bacon crocante.",
      price: "R$ 29,90",
      image: "/images/lanches/CheddarBacon.jpg",
    },
    {
      name: "Duplo Smash",
      description: "Dois smash burgers de 100g, queijo americano, picles e molho especial.",
      price: "R$ 34,90",
      image: "/images/lanches/DuploSmash.jpg",
    },
    {
      name: "Veggie Burguer",
      description: "Hambúrguer de grão-de-bico, alface, tomate e maionese vegana.",
      price: "R$ 26,90",
      image: "/images/lanches/VegierBurguer.avif",
    },
    {
      name: "Barbecue Bacon",
      description: "Carne, queijo, bacon, cebola caramelizada e molho barbecue.",
      price: "R$ 31,90",
      image: "/images/lanches/BbqBacon.jpeg",
    },
    {
      name: "Picanha Especial",
      description: "Pão brioche, hambúrguer de picanha, queijo prato e maionese temperada.",
      price: "R$ 36,90",
      image: "/images/lanches/PicanhaEspecial.webp",
    },
  ],
  Torradas: [
    {
      name: "Torrada Simples",
      description: "Pão na chapa com manteiga.",
      price: "R$ 6,00",
      image: "/images/lanches/TorradaSimples.jpg",
    },
    {
      name: "Torrada com Queijo",
      description: "Pão na chapa com queijo derretido.",
      price: "R$ 8,00",
      image: "/images/lanches/TorradaComQueijo.avif",
    },
    {
      name: "Torrada com Presunto e Queijo",
      description: "Pão na chapa com presunto e queijo.",
      price: "R$ 9,50",
      image: "/images/lanches/TorradaComQueijoPresunto.jpeg",
    },
    {
      name: "Torrada com Requeijão",
      description: "Pão na chapa com requeijão cremoso.",
      price: "R$ 8,50",
      image: "/images/lanches/TorradaComRequeijao.jpg",
    },
    {
      name: "Torrada com Ovo",
      description: "Pão tostado com ovo frito.",
      price: "R$ 9,00",
      image: "/images/lanches/TorradaComOvo.jpg",
    },
    {
      name: "Torrada 4 Queijos",
      description: "Queijo prato, muçarela, gorgonzola e parmesão.",
      price: "R$ 11,00",
      image: "/images/lanches/Torrada4Queijos.webp",
    },
  ],
  Baurus: [
    {
      name: "Bauru Tradicional",
      description: "Pão francês, presunto, queijo e tomate.",
      price: "R$ 10,90",
      image: "/images/lanches/BauruTradicional.webp",
    },
    {
      name: "Bauru Especial",
      description: "Presunto, queijo, ovo e orégano.",
      price: "R$ 13,50",
      image: "/images/lanches/BauruEspecial.webp",
    },
    {
      name: "Bauru Frango",
      description: "Pão francês, frango desfiado, queijo e tomate.",
      price: "R$ 12,90",
      image: "/images/lanches/BauruFrango.jpeg",
    },
    {
      name: "Bauru com Bacon",
      description: "Presunto, queijo, bacon e maionese.",
      price: "R$ 14,90",
      image: "/images/lanches/BauruBacon.jpg",
    },
    {
      name: "Bauru de Calabresa",
      description: "Calabresa fatiada, queijo e cebola.",
      price: "R$ 13,90",
      image: "/images/lanches/BauruCalabresa.jpg",
    },
    {
      name: "Bauru Vegano",
      description: "Pão integral, legumes grelhados e queijo vegano.",
      price: "R$ 15,90",
      image: "/images/lanches/BauruVegano.jpg",
    },
  ],
}
const categories = Object.keys(menuData) as (keyof typeof menuData)[]

export default function Menu() {
  const [activeTab, setActiveTab] = useState<keyof typeof menuData>('Hamburguer')

  return (
<section className="relative w-full min-h-screen text-black" id="menu">
  {/* Imagem de fundo com Tailwind */}
  <div className="absolute inset-0 z-0 bg-[url('/cardapio.jpeg')] bg-cover bg-center opacity-30" />

  {/* Camada escura opcional */}
  <div className="absolute inset-0 bg-black/20 z-10" />

  {/* Container central com o cardápio */}
  <div className="relative z-20 flex justify-center py-16 px-4">
    <div className="w-full max-w-5xl bg-[#fef6ec] rounded-2xl shadow-2xl p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Nosso Cardápio
      </h2>

      {/* Abas de categoria */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-medium border transition-all duration-200 ${
              activeTab === category
                ? 'bg-yellow-500 text-white border-yellow-500'
                : 'bg-[#fef6ec] text-gray-700 border-gray-300 hover:bg-yellow-100'
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Itens do cardápio */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuData[activeTab].map((item, index) => (
          <div
            key={index}
            className="bg-[#fefefe] rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              <p className="text-yellow-600 font-bold text-right mt-3">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  )
}