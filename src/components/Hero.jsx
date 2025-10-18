import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="section bg-gradient-to-b from-white to-wood-50">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="heading">Menuiserie sur-mesure, <span className="text-brand-accent">pose d’exception</span></h1>
          <p className="mt-4 subheading">
            Fenêtres, portes, pergolas, terrasses, escaliers… Fabrication et installation par un artisan qualifié.
          </p>
          <div className="mt-6 flex gap-3">
            <Link to="/contact" className="btn-primary">Demander un devis</Link>
            <Link to="/realisations" className="btn-outline">Voir nos réalisations</Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-wood-200" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl bg-brand-accent/20" />
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-brand-accent/30" />
        </div>
      </div>
    </section>
  )
}
