import SectionTitle from '@components/SectionTitle'

const GALLERY_ITEMS_COUNT = 9

export default function Realisations() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="Réalisations"
          subtitle="Galerie de chantiers (placeholders)"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {Array.from({ length: GALLERY_ITEMS_COUNT }, (_, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-wood-200 aspect-[4/3]"
              role="img"
              aria-label={`Galerie image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
