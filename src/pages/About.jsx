import SectionTitle from '@components/SectionTitle'

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="À propos" subtitle="Savoir-faire, rigueur et finitions — depuis 2010." />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold">Notre philosophie</h3>
            <p className="mt-2 text-wood-700">
              Nous concevons et posons des menuiseries durables, performantes et élégantes. Chaque chantier est préparé avec soin, et livré proprement.
            </p>
            <ul className="mt-3 list-disc pl-5 text-wood-700 space-y-1">
              <li>Conseils techniques honnêtes</li>
              <li>Matériaux pros et traçabilité</li>
              <li>Garantie & service après-vente</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold">Certifications & Assurances</h3>
            <ul className="mt-3 list-disc pl-5 text-wood-700 space-y-1">
              <li>Décennale & RC Pro</li>
              <li>Partenariats fabricants (ex: K•Line, Somfy)</li>
              <li>Conformité DTU, pose RGE *selon options*</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
