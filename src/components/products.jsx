import React from 'react'

const products = [
  {id:1, name:'Pão Artesanal Vital', desc:'Massa mãe, fermentação lenta', price:'€2.50', img:'https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1000&q=60'},
  {id:2, name:'Biscoitos Integrais', desc:'Farinha integral e sementes', price:'€3.20', img:'https://images.unsplash.com/photo-1604908177536-2b5f8f9a9f2f?auto=format&fit=crop&w=1000&q=60'},
  {id:3, name:'Fougasse Mediterrânea', desc:'Azeitonas e alecrim', price:'€4.00', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=60'}
]

export default function Products(){
  return (
    <section id="produtos" className="py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Produtos em destaque</h2>
        <a className="text-sm text-yellow-500" href="#">Ver catálogo completo →</a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {products.map(p=> (
          <article key={p.id} className="bg-white rounded-lg overflow-hidden shadow">
            <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-gray-500">{p.desc}</div>
                </div>
                <div className="font-bold">{p.price}</div>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-2 bg-yellow-400 rounded text-white font-semibold">Comprar</button>
                <a className="px-3 py-2 border rounded text-sm text-gray-600" href="#contactos">Pedido B2B</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
