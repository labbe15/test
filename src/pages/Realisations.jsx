import SectionTitle from '../components/SectionTitle'

export default function Realisations() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="Réalisations" subtitle="Galerie de chantiers (placeholders)" />
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-wood-200 aspect-[4/3]" />
          ))}
        </div>
      </div>
    </section>
  )
}
