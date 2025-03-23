import Menu from '@/components/sectionspage/menu/Menu'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'


export default function Home() {
  return (
    <main className=" text-white">
      <Header />
      <Hero />
      <Menu />
    </main>
  )
}
