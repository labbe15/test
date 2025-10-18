export default function Footer() {
  return (
    <footer className="mt-12 border-t border-wood-100">
      <div className="container py-10 text-sm text-wood-700 flex flex-col md:flex-row gap-4 justify-between">
        <p>© {new Date().getFullYear()} Menuiserie Prestige — Tous droits réservés.</p>
        <p>Mentions légales · Politique de confidentialité</p>
      </div>
    </footer>
  )
}
