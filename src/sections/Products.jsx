import { motion } from 'framer-motion'

const products = [
  {
    category: 'Car Tyres',
    description: 'Premium and budget-friendly options for hatchbacks, sedans, and SUVs from leading global brands.',
    image:
      'https://images.pexels.com/photos/5656672/pexels-photo-5656672.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    category: 'Bike Tyres',
    description: 'High-traction tyres for scooters and motorcycles, built for city commutes and long rides.',
    image:
      'https://images.pexels.com/photos/3739651/pexels-photo-3739651.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    category: 'Truck Tyres',
    description: 'Heavy-duty tyres engineered for mileage, load capacity, and durability on Indian roads.',
    image:
      'https://images.pexels.com/photos/460634/pexels-photo-460634.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    category: 'Alloy Wheels',
    description: 'Stylish, performance-focused alloy wheels that transform the look and feel of your vehicle.',
    image:
      'https://images.pexels.com/photos/1592388/pexels-photo-1592388.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

function Products() {
  return (
    <section id="products" className="section section-alt">
      <div className="container section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-kicker">Our Products</p>
          <h2>Tyres & wheels for every vehicle</h2>
          <p className="section-lead">
            Explore our curated range of tyres and wheels, carefully selected to match your driving style and budget.
          </p>
        </motion.div>

        <div className="cards-grid products-grid">
          {products.map((product, index) => (
            <motion.article
              key={product.category}
              className="card product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.category} loading="lazy" />
              </div>
              <div className="product-content">
                <h3>{product.category}</h3>
                <p>{product.description}</p>
                <button className="btn btn-ghost">View Options</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

