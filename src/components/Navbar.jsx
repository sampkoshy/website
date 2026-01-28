import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const navItems = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'services', label: 'Services' },
  { to: 'products', label: 'Products' },
  { to: 'why-us', label: 'Why Us' },
  { to: 'contact', label: 'Contact' },
]

function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar-inner">
        <div className="logo">
          <span className="logo-icon">TS</span>
          <div className="logo-text">
            <span className="logo-title">Torque Tyres</span>
            <span className="logo-subtitle">Tyres & Wheel Care</span>
          </div>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              className="nav-link"
              activeClass="nav-link-active"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar

