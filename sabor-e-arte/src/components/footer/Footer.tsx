'use client'

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8">
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">Sabor e Arte</h2>
          <p className="text-gray-400">
            Tradição, sabor e aconchego em cada detalhe. Visite nosso espaço ou peça em casa!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Navegação</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400">Início</a></li>
            <li><a href="#" className="hover:text-yellow-400">Sobre</a></li>
            <li><a href="#" className="hover:text-yellow-400">Cardápio</a></li>
            <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-yellow-400">Contato</h3>
          <ul className="text-gray-300 space-y-2">
            <li>📍 Socowisk - Rio Grande</li>
            <li>📞 (53) 99179-9058</li>
            <li>✉️ contato@saborearte.com</li>
            <li className="flex gap-3 mt-2">
              <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
              <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
              <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
              <FaYoutube className="hover:text-yellow-400 cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Sabor e Arte. Todos os direitos reservados.
      </div>
    </footer>
  )
}
