import React from 'react'

export default function Contact(){
  const onSubmit = (e)=>{ e.preventDefault(); alert('Mensagem enviada — responderemos em breve'); e.target.reset(); }
  return (
    <section id="contactos" className="py-8">
      <h3 className="text-2xl font-bold">Contacte a Vitipan</h3>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <p className="text-gray-600">Endereço da fábrica / escritório — substitui pela morada real.</p>
          <ul className="text-gray-600 mt-4">
            <li><strong>Email:</strong> info@vitipan.pt</li>
            <li className="mt-2"><strong>Telefone:</strong> +351 21 000 0000</li>
          </ul>
        </div>
        <div>
          <form onSubmit={onSubmit} className="bg-white p-4 rounded shadow">
            <label className="text-sm text-gray-600">Nome</label>
            <input name="nome" required className="w-full p-2 rounded border mt-1" />
            <label className="text-sm text-gray-600 mt-3 block">Mensagem</label>
            <textarea name="mensagem" rows={4} required className="w-full p-2 rounded border mt-1" />
            <div className="flex justify-end mt-3">
              <button className="px-4 py-2 bg-yellow-400 text-white rounded">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
