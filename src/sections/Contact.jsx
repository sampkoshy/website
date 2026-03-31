import { motion } from 'framer-motion'

function Contact() {
  const handleWhatsAppSubmit = () => {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !phone || !message) {
      alert("Please fill in your name, phone, and message to send via WhatsApp.");
      return;
    }

    const text = `*New Enquiry from Website*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/918078730392?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

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
            action="https://api.web3forms.com/submit"
            method="POST"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* 1. Go to https://web3forms.com/ */}
            {/* 2. Enter your email (johntyres@gmail.com) to get an Access Key */}
            {/* 3. Paste the Access Key below: */}
            <input type="hidden" name="access_key" value="e5e18b0c-7600-46cf-930b-753e9aa02704" />
            <input type="hidden" name="subject" value="New Enquiry from John Tyres Website" />
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
              <input type="email" id="email" name="email" placeholder="you@example.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="How can we help?" required />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button type="submit" className="btn btn-primary btn-full">
                Send as Email
              </button>
              <button 
                type="button" 
                onClick={handleWhatsAppSubmit} 
                className="btn btn-full" 
                style={{ backgroundColor: '#25D366', color: '#fff', border: 'none' }}
              >
                Send via WhatsApp
              </button>
            </div>
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
              <h3>Find us on the map</h3>
              <iframe
                title="John Tyres Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.8927177575374!2d76.69385691011031!3d9.164149886821768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0611ebf35a74dd%3A0x670681330f5134e8!2sJohn%20tyres!5e0!3m2!1sen!2sin!4v1769704197881!5m2!1sen!2sin"
                 loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href="https://maps.app.goo.gl/9MoEP4eoyQwve8e96"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Open in Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    
  )
}

export default Contact

