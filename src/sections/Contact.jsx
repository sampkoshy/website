import { motion } from 'framer-motion'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="section section-alt">
      <div className="container section-inner contact-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Contact Us</p>
          <h2>We&apos;re here to help</h2>
          <p className="section-lead">
            Have a question about tyres, wheels, or services? Reach out and our team will get back to you shortly.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="Your phone number" required />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="How can we help?" required />
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              Send Message
            </button>
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-details">
              <h3>Visit our shop</h3>
              <p>John Tyres,<br/>
              Kayamkulam - Pathanapuram Rd, Pazhakulam, Pallickal, Peringanad, Kerala 691554</p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+ 9447394555" className="text-accent">
                9447394555
                </a>
              </p>
              <p>
                <strong>WhatsApp:</strong>{' '}
                <a
                  href="https://wa.me/9447394555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent"
                >
                  Chat with us
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@torquetyres.in" className="text-accent">
                  johntyres@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-hours">
              <h3>Business Hours</h3>
              <ul>
                <li>
                  <span>Mon – Sat</span>
                  <span>8:30 AM – 8:00 PM</span>
                </li>
                {/* <li>
                  <span>Sunday</span>
                  <span>10:00 AM – 4:00 PM</span>
                </li> */}
              </ul>
            </div>

            <div className="contact-map">
              <iframe
                title="John Tyres Location"
                src="https://maps.app.goo.gl/9MoEP4eoyQwve8e96 "  loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

