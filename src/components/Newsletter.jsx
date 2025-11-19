import React from 'react'

export default function Newsletter(){
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert('Obrigado! Subscreveste a nossa newsletter.');
    e.target.reset();
  }

  return (
    <section id="newsletter" className="py-8">
      <div className="bg-gradient-to-b from-yellow-50 to-white p-6 rounded-lg border border-yellow-100">
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold">Receba novidades e promoções</h3>
            <p className="text-gray-600">Subscreva para ofertas, lançamentos e eventos.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full sm:w-auto">
            <input name="email" type="email" required placeholder="o seu email" className="px-4 py-2 rounded border" />
            <button className="px-4 py-2 bg-yellow-400 text-white rounded">Subscrever</button>
          </form>
        </div>
      </div>
    </section>
  )
}
