import { motion } from 'framer-motion'

const services = [
  {
    title: 'Tyre Fitting',
    description: 'Fast, precise tyre fitting for all major car and bike brands using state-of-the-art equipment.',
  },
  {
    title: 'Wheel Alignment',
    description: 'Computerised 3D alignment to improve handling, extend tyre life, and enhance fuel efficiency.',
  },
  {
    title: 'Puncture Repair',
    description: 'Safe, reliable puncture repairs so you can get back on the road with confidence.',
  },
  {
    title: 'Wheel Balancing',
    description: 'Dynamic wheel balancing to eliminate vibrations and ensure a smooth, stable ride.',
  },
  {
    title: 'Nitrogen Filling',
    description: 'Nitrogen inflation to maintain tyre pressure longer and improve overall performance.',
  },
]

function Services() {
  return (
    <section id="services" className="section">
      <div className="container section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Our Services</p>
          <h2>Complete tyre &amp; wheel care under one roof</h2>
          <p className="section-lead">
            Whether it&apos;s a quick puncture repair or a full set of premium tyres, our technicians handle it with
            precision and care.
          </p>
        </motion.div>

        <div className="cards-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="card-accent" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

