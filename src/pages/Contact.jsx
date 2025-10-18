import SectionTitle from '../components/SectionTitle.jsx'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  function onSubmit(e) {
    e.preventDefault()
    setStatus('Message envoyé (démo). Branchez ici votre service email.')
  }

  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="Contact" subtitle="Un besoin, une question ? Réponse rapide." />
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={onSubmit} className="card space-y-3">
            <div>
              <label className="block text-sm font-medium">Nom</label>
              <input className="mt-1 w-full border border-wood-300 rounded-xl p-3" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full border border-wood-300 rounded-xl p-3" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Téléphone</label>
              <input className="mt-1 w-full border border-wood-300 rounded-xl p-3" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea className="mt-1 w-full border border-wood-300 rounded-xl p-3 min-h-[120px]" required></textarea>
            </div>
            <button className="btn-primary" type="submit">Envoyer</button>
            {status && <p className="text-green-700 text-sm">{status}</p>}
          </form>

          <div className="card">
            <h3 className="text-xl font-semibold">Coordonnées</h3>
            <p className="mt-2 text-wood-700">Gaillac, Albi, Toulouse Est</p>
            <p className="text-wood-700">contact@menuiserie-prestige.fr</p>
            <div className="mt-4">
              <div className="rounded-2xl bg-wood-200 aspect-[4/3] flex items-center justify-center text-wood-700">
                Carte (placeholder)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
