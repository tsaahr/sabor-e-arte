"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full bg-black text-white text-sm">
      <div className="flex items-center px-4 py-2 border-b border-gray-800 justify-end">
        <div>🕒 Aberto: 08:00 - 21:00</div>
        <div className="flex items-center gap-4">
          <div>📍 Socowisk - Rio Grande</div>
          <div className="flex gap-2">
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-400 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="justify-between items-center flex px-6 py-4">
        <div className="text-2xl font-bold text-yellow-400">
          <Image
            src="/images/logo.png"
            alt="Sabor e Arte"
            width={100}
            height={100}
            className="h-16 w-auto"
          />
        </div>
        <div className="">
          <nav className="flex item-center gap-6 text-lg ">
            <Link href="#" className="hover:text-yellow-400">
              Início
            </Link>
            <Link href="#" className="hover:text-yellow-400">
              Sobre
            </Link>
            <Link href="#" className="hover:text-yellow-400">
              Cardápio
            </Link>
            <Link href="#" className="hover:text-yellow-400">
              Blog
            </Link>
            <Link href="#" className="hover:text-yellow-400">
              Contato
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
