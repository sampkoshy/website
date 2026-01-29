function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">JT</span>
            <div className="logo-text">
              <span className="logo-title">John Tyres</span>
              <span className="logo-subtitle">Tyres &amp; Wheel Care</span>
            </div>
          </div>
          <p>Keeping you safe on every journey with trusted tyres, expert advice, and friendly service.</p>
        </div>

        <nav className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="footer-contact">
          <h4>Connect</h4>
          <p>Follow us for offers, tips, and updates.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              FB
            </a>
            <a href="#" aria-label="Instagram">
              IG
            </a>
            <a href="#" aria-label="Twitter">
              X
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} John Tyres. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

