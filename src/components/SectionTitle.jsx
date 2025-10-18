export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      <h2 className="heading">{title}</h2>
      {subtitle && <p className="mt-3 subheading">{subtitle}</p>}
    </div>
  )
}
