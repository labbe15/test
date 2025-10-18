export default function GalleryItem({ title, caption }) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-wood-200">
      <div className="aspect-[4/3]"></div>
      <figcaption className="p-3 text-sm">
        <strong>{title}</strong>
        <p className="text-wood-700">{caption}</p>
      </figcaption>
    </figure>
  )
}
