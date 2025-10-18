export default function ServiceCard({ icon='🪵', title, desc }) {
  return (
    <div className="card h-full">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-3 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-wood-700">{desc}</p>
    </div>
  )
}
