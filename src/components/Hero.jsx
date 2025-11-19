import React from 'react'

export default function Hero(){
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center py-12">
      <div>
        <div className="text-sm text-gray-500 font-semibold">Vitipan • vitipan.pt</div>
        <h1 className="text-4xl font-extrabold mt-4">Sabor que conta histórias — pães artesanais, feitos com tempo e cuidado</h1>
        <p className="mt-4 text-gray-600">Na Vitipan produzimos pães e snacks com receitas tradicionais, ingredientes selecionados e fermentação lenta. Fornecemos para lojas, cafés e também venda direta ao consumidor.</p>
        <div className="mt-6 flex gap-4">
          <a href="#produtos" className="px-5 py-3 bg-yellow-400 text-white rounded-lg font-semibold">Ver Produtos</a>
          <a href="#contactos" className="px-4 py-3 border rounded-lg">Peça uma amostra</a>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">Produção Local</div>
          <div className="bg-white p-4 rounded-lg shadow-sm">Receitas Artesanais</div>
          <div className="bg-white p-4 rounded-lg shadow-sm">Entrega & Distribuição</div>
        </div>
      </div>
      <div>
        <div className="rounded-lg overflow-hidden shadow" style={{height:360}}>
          <img src="https://images.unsplash.com/photo-1512058564366-c9e3f22f0fbd?auto=format&fit=crop&w=1400&q=60" alt="pães" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
