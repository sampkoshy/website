import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container section-inner about-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">About John Tyres</p>
          <h2>Local tyre specialists you can rely on</h2>
          <p className="section-lead">
            We are an independent tyre and wheel care centre focused on honest advice, quality products, and precision
            workmanship for every vehicle that rolls into our bay.
          </p>
        </motion.div>

        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="about-card">
            <h3>Why choose us</h3>
            <p>
              From tyre fitting to wheel alignment, every job is carried out by trained technicians using modern
              equipment so you leave with a smoother, safer drive.
            </p>
            <ul className="about-list">
              <li>Personal, transparent recommendations</li>
              <li>Wide range of brands and budgets</li>
              <li>Clean, comfortable waiting area</li>
            </ul>
          </div>

          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat-number">15+</span>
              <span className="about-stat-label">Years of experience</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">100%</span>
              <span className="about-stat-label">Genuine products</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">Same day</span>
              <span className="about-stat-label">Tyre fitting on most sizes</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">Best value</span>
              <span className="about-stat-label">Competitive & transparent pricing</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

