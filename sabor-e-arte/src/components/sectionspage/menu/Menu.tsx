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
      image: "https://picsum.photos/seed/hamburguer1/400/300",
    },
    {
      name: "Cheddar Bacon",
      description: "Carne, cheddar cremoso e bacon crocante.",
      price: "R$ 29,90",
      image: "https://picsum.photos/seed/hamburguer2/400/300",
    },
    {
      name: "Cheddar Bacon",
      description: "Carne, cheddar cremoso e bacon crocante.",
      price: "R$ 29,90",
      image: "https://picsum.photos/seed/hamburguer2/400/300",
    },
    {
      name: "Cheddar Bacon",
      description: "Carne, cheddar cremoso e bacon crocante.",
      price: "R$ 29,90",
      image: "https://picsum.photos/seed/hamburguer2/400/300",
    }
  ],
  Torradas: [
    {
      name: "Torrada Simples",
      description: "Pão na chapa com manteiga.",
      price: "R$ 6,00",
      image: "https://picsum.photos/seed/torrada1/400/300",
    },
    {
      name: "Torrada com Queijo",
      description: "Pão na chapa com queijo derretido.",
      price: "R$ 8,00",
      image: "https://picsum.photos/seed/torrada2/400/300",
    },
  ],
  Baurus: [
    {
      name: "Bauru Tradicional",
      description: "Pão francês, presunto, queijo e tomate.",
      price: "R$ 10,90",
      image: "https://picsum.photos/seed/bauru1/400/300",
    },
    {
      name: "Bauru Especial",
      description: "Presunto, queijo, ovo e orégano.",
      price: "R$ 13,50",
      image: "https://picsum.photos/seed/bauru2/400/300",
    },
  ],
}

const categories = Object.keys(menuData) as (keyof typeof menuData)[]

export default function Menu() {
  const [activeTab, setActiveTab] = useState<keyof typeof menuData>('Hamburguer')

  return (
<section className="relative w-full min-h-screen text-black" id="menu">
  {/* Imagem de fundo */}
  <div className="absolute inset-0 z-0" />

  {/* Camada escura opcional por cima da imagem */}
  <div className="absolute inset-0 bg-black/30 z-10" />

  {/* "Folha" central com o cardápio */}
  <div className="relative z-20 flex justify-center py-16 px-4">
    <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Nosso Cardápio
      </h2>

      {/* Abas */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-medium border transition ${
              activeTab === category
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Itens do menu */}
      <div className="grid sm:grid-cols-3 gap-6">
        {menuData[activeTab].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-yellow-600 font-bold mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  )
}