import SectionTitle from '../components/SectionTitle.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

export default function Services() {
  const items = [
    { icon:'🪟', title:'Fenêtres & Baies', desc:'PVC, alu, bois, double/triple vitrage, volets roulants.' },
    { icon:'🚪', title:'Portes d’entrée', desc:'Sécurité, isolation, design — pose certifiée.' },
    { icon:'🚗', title:'Portes de garage', desc:'Sectionnelles, enroulables — motorisation Somfy.' },
    { icon:'🌿', title:'Pergolas', desc:'Bioclimatiques, adossées ou autoportées, éclairage LED.' },
    { icon:'🧱', title:'Terrasses & Bardages', desc:'Bois/matériaux composites, structure et finitions pro.' },
    { icon:'🪜', title:'Escaliers & Garde-corps', desc:'Sur-mesure, bois/acier/verre — sécurité et style.' },
    { icon:'🪄', title:'Aménagements intérieurs', desc:'Dressing, bibliothèques, portes coulissantes.' },
    { icon:'⚙️', title:'Dépannage & SAV', desc:'Réglages, remplacements, entretien.' },
  ]

  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="Nos prestations" subtitle="Des solutions durables, esthétiques et performantes." />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => <ServiceCard key={it.title} {...it} />)}
        </div>
      </div>
    </section>
  )
}
