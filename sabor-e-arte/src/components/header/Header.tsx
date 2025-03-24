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
          <a
            href="https://www.google.com/maps/place/Praça+Rio+Grande+Shopping+Center/@-32.0557998,-52.1475505,17.16z/data=!4m6!3m5!1s0x95119a32ccceed31:0x9106a3a6d0622e07!8m2!3d-32.0517257!4d-52.148484!16s%2Fg%2F11bbrj_wcb?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            📍 Praça Shopping - Rio Grande RS
          </a>
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
            <nav className="flex items-center gap-6 text-lg">
              <Link href="/" className="hover:text-yellow-400">
                Menu
              </Link>
              <Link href="/sobre" className="hover:text-yellow-400">
                Sobre
              </Link>
            </nav>
        </div>
      </div>
    </header>
  );
}
