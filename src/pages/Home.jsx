import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <SectionTitle title="Nos services" subtitle="Du conseil à la pose, une qualité sans compromis." />
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard icon="🪟" title="Fenêtres & Baies" desc="PVC, alu, bois — pose soignée, étanchéité irréprochable." />
            <ServiceCard icon="🚪" title="Portes & Portails" desc="Sécurité, isolation et esthétique — sur-mesure." />
            <ServiceCard icon="🌿" title="Pergolas & Terrasses" desc="Conception et intégration parfaite à votre habitat." />
            <ServiceCard icon="🪜" title="Escaliers & Garde-corps" desc="Fabrication artisanale, finitions haut de gamme." />
            <ServiceCard icon="🧰" title="Dépannage & SAV" desc="Réglages, remplacements, entretiens — réactivité assurée." />
            <ServiceCard icon="📐" title="Conseil & Mesures" desc="Accompagnement pro, métrés précis et transparents." />
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">Voir tous les services</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionTitle title="Réalisations récentes" subtitle="Une sélection de projets menés avec soin." />
          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-wood-200 aspect-[4/3]" />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/realisations" className="btn-outline">Voir la galerie</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div className="card">
            <h3 className="text-2xl font-semibold">Artisan de confiance</h3>
            <p className="mt-3 text-wood-700">
              15 ans d’expérience, chantiers propres, délais tenus, conseils honnêtes. Assurance RC pro & décennale.
            </p>
            <ul className="mt-4 list-disc pl-5 text-wood-700 space-y-1">
              <li>Devis clair et détaillé</li>
              <li>Matériaux pros (Deceuninck, K•Line, Somfy, etc.)</li>
              <li>Pose selon règles de l’art</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-2xl font-semibold">Zones d’intervention</h3>
            <p className="mt-3 text-wood-700">
              Tarnais et alentours (Gaillac, Albi, Toulouse Est). Déplacement et étude gratuits.
            </p>
            <div className="mt-4">
              <Link to="/contact" className="btn-primary">Demander un devis</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
