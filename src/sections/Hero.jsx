import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Premium Tyres. Precision Wheel Care.
          </motion.p>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Your Trusted Tyre &amp; Wheel Experts
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* From daily commuters to performance machines, we keep your vehicle planted, safe, and ready for every
            journey. */}
            We specialize in selling new truck tyres, SUV tyres, and car tyres, and we are also experts in retreading old truck, JCB, and heavy-duty tyres with advanced technology and skilled workmanship.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a href="tel:9447394555" className="btn btn-primary">
              Call Now
            </a>
            <a
              href="https://maps.app.goo.gl/xgJVkudZ43CRVxC2A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Get Directions
            </a>
          </motion.div>
          <motion.ul
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <li>
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </li>
            <li>
              <span className="stat-number">10K+</span>
              <span className="stat-label">Tyres Fitted</span>
            </li>
            <li>
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Customer Rating</span>
            </li>
          </motion.ul>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-card">
            <img
              src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mechanic checking car tyre"
              loading="lazy"
            />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-badge">
            <span className="badge-label">Same-Day Fitting</span>
            <span className="badge-sub">On most popular sizes</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

