import { motion } from "framer-motion";

const normalTransition = {
  init: {
    opacity: 0,
  },
  move: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  }
}

const ProductTransition = ({ children }) => {
  return (
    <motion.div
      className='page'
      variants={ normalTransition }
      initial="init"
      animate="move"
      exit="exit"
      transition={{
        ease: 'easeOut',
        duration: 0.3
      }}
    >
      { children }
    </motion.div>
  )
}

export default ProductTransition