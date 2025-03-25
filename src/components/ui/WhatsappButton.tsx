'use client'

import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

export default function WhatsappButton() {
  return (
    <Link
      href="https://wa.me/5553991799058?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-3 px-5 py-4 rounded-full shadow-2xl animate-pulse transition-all duration-300 text-lg font-bold drop-shadow-lg">
        <FaWhatsapp size={28} className="animate-bounce" />
        <span className="whitespace-nowrap">Peça já pelo WhatsApp</span>
      </div>
    </Link>
  )
}
