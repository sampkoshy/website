import { motion } from 'framer-motion'

const reasons = [
  {
    title: 'Experienced Technicians',
    description: 'Our team is trained and certified to handle everything from routine tyre changes to complex wheel work.',
  },
  {
    title: 'Genuine Products',
    description: 'We only stock authentic, manufacturer-approved tyres and wheels with full warranties.',
  },
  {
    title: 'Fast Turnaround',
    description: 'Same-day service on most jobs so you spend less time waiting and more time driving.',
  },
  {
    title: 'Customer-First Approach',
    description: 'Transparent pricing, honest advice, and a commitment to long-term relationships.',
  },
]

function WhyChooseUs() {
  return (
    <section id="why-us" className="section">
      <div className="container section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Why Choose Us</p>
          <h2>Driving trust with every turn</h2>
          <p className="section-lead">
            We blend expertise, technology, and genuine care to deliver a tyre service experience that feels effortless.
          </p>
        </motion.div>

        <div className="cards-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="card reason-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="card-accent" />
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

