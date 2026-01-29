import { motion } from 'framer-motion'
import whatsapp from '../assets/whatsapp.png'

function FloatingWhatsApp() {
  const phoneNumber = '+919447394555'
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
      <img src={whatsapp} alt="WhatsApp" className="wa-icon" loading="lazy" />
    </motion.button>
  )
}

export default FloatingWhatsApp

