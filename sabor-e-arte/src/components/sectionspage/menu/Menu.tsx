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
    <section className="w-full text-black px-1 py-1 md:px-32 md:py-16 lg:px-50 " >
      <div className="bg-[url('/images/cardapio.jpeg')] bg-cover bg-center w-full py-16 rounded-lg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Nosso Cardápio</h2>

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData[activeTab].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-xl"
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
