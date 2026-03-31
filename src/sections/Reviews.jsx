import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Rahul Krishnan',
    rating: 5,
    text: 'Excellent service and genuine products. Very professional behavior from the staff. Changed all 4 tyres of my car and the alignment was done perfectly.',
    date: '2 months ago'
  },
  {
    name: 'Akhil Mathew',
    rating: 5,
    text: 'Highly recommended for tyre changing and wheel balancing. Best place in Pathanapuram for all tyre-related works.',
    date: '1 week ago'
  },
  {
    name: 'Suresh Kumar',
    rating: 5,
    text: 'Quick and efficient service. They have a good stock of various tyre brands and the pricing is very reasonable compared to others in the area.',
    date: '4 months ago'
  }
]

function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="container section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Testimonials</p>
          <h2>Hear from our customers</h2>
          <p className="section-lead">
            Don't just take our word for it. Here is what people are saying about John Tyres on Google Maps.
          </p>
        </motion.div>

        <div className="cards-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="card reason-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div className="card-accent" />
              <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} style={{ color: '#FFB800', fontSize: '1.4rem' }}>★</span>
                ))}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', flexGrow: 1 }}>"{review.text}"</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <h3 style={{ margin: 0, fontSize: '1rem', color: '#fff' }}>{review.name}</h3>
                 <span style={{ fontSize: '0.8rem', color: '#8a8a8a' }}>{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://maps.app.goo.gl/9MoEP4eoyQwve8e96"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Read all reviews on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
