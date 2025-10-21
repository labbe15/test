import SectionTitle from '@components/SectionTitle'
import ServiceCard from '@components/ServiceCard'
import { SERVICES } from '@/constants/services'

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="Nos prestations"
          subtitle="Des solutions durables, esthétiques et performantes."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
