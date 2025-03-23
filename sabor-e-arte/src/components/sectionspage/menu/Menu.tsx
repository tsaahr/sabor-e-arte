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
      image: "/images/menu/hamburguer1.jpg",
    },
    {
      name: "Cheddar Bacon",
      description: "Carne, cheddar cremoso e bacon crocante.",
      price: "R$ 29,90",
      image: "/images/menu/hamburguer2.jpg",
    },
  ],
  Torradas: [
    {
      name: "Torrada Simples",
      description: "Pão na chapa com manteiga.",
      price: "R$ 6,00",
      image: "/images/menu/torrada1.jpg",
    },
    {
      name: "Torrada com Queijo",
      description: "Pão na chapa com queijo derretido.",
      price: "R$ 8,00",
      image: "/images/menu/torrada2.jpg",
    },
  ],
  Baurus: [
    {
      name: "Bauru Tradicional",
      description: "Pão francês, presunto, queijo e tomate.",
      price: "R$ 10,90",
      image: "/images/menu/bauru1.jpg",
    },
    {
      name: "Bauru Especial",
      description: "Presunto, queijo, ovo e orégano.",
      price: "R$ 13,50",
      image: "/images/menu/bauru2.jpg",
    },
  ],
}

const categories = Object.keys(menuData) as (keyof typeof menuData)[]

export default function Menu() {
  const [activeTab, setActiveTab] = useState<keyof typeof menuData>('Hamburguer')

  return (
    <section className="py-16 px-4 bg-white text-black" id="menu">
      <h2 className="text-3xl font-bold text-center mb-10">Nosso Cardápio</h2>

      {/* Abas */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuData[activeTab].map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
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
    </section>
  )
}
