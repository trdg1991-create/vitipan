import React from 'react'

export default function Header(){
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white" style={{background:'#F6C24B'}}>V</div>
          <div>
            <div className="font-semibold">Vitipan, Lda</div>
            <div className="text-sm text-gray-500">Pães e produtos artesanais</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#produtos" className="text-gray-600 hover:text-yellow-500">Produtos</a>
          <a href="#sobre" className="text-gray-600 hover:text-yellow-500">Sobre</a>
          <a href="#contactos" className="text-gray-600 hover:text-yellow-500">Contactos</a>
          <a href="#newsletter" className="bg-yellow-400 text-white px-4 py-2 rounded">Subscrever</a>
        </nav>
      </div>
    </header>
  )
}
