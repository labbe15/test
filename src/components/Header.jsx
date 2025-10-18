import { Link, NavLink } from 'react-router-dom'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg transition ${isActive ? 'bg-wood-200' : 'hover:bg-wood-100'}`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-wood-100">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block w-8 h-8 rounded-lg bg-brand-accent"></span>
          <span>Menuiserie Prestige</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Accueil</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/realisations">Réalisations</NavItem>
          <NavItem to="/about">À propos</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
        <Link to="/contact" className="btn-primary hidden md:inline-flex">Devis gratuit</Link>
      </div>
    </header>
  )
}
