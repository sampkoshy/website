import { motion } from 'framer-motion'

function FloatingWhatsApp() {
  const phoneNumber = '+911234567890'
  const message = encodeURIComponent('Hi, I would like to enquire about tyres and wheel services.')

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber.replace('+', '')}?text=${message}`, '_blank')
  }

  return (
    <motion.button
      className="floating-whatsapp"
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.8 }}
      aria-label="Chat on WhatsApp"
    >
      <span className="wa-icon">💬</span>
    </motion.button>
  )
}

export default FloatingWhatsApp

