import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container">
        <Hero />
        <Products />
        <section id="sobre" className="py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Quem somos</h3>
              <p className="mt-4 text-gray-600">A Vitipan nasceu da paixão por panificação de qualidade. Aliamos tradição a processos controlados para garantir um produto final saboroso, nutritivo e consistente.</p>
              <ul className="mt-4 text-gray-600 list-disc pl-5">
                <li>Produção com controlo de qualidade</li>
                <li>Ingredientes selecionados</li>
                <li>Embalagens sustentáveis</li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=60" alt="sobre" className="rounded-lg shadow" />
            </div>
          </div>
        </section>
        <Newsletter />
        <Contact />
      </main>
      <footer className="bg-gray-50 border-t mt-12">
        <div className="container py-6 flex items-center justify-between">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Vitipan, Lda</div>
          <div className="text-sm text-gray-600">Política de Privacidade • Termos</div>
        </div>
      </footer>
    </div>
  )
}
