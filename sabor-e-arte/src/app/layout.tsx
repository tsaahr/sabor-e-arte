import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer/Footer";
import Header from "@/components/header/Header";


export const metadata: Metadata = {
  title: "Sabor e Arte",
  description: "Sabores autênticos em um ambiente acolhedor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <div
          className="z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/background.jpeg')",
          }}
        >
          {children}
        </div>  
        <Footer />
      </body>
    </html>
  );
}
