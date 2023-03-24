import { motion } from "framer-motion"

const opacityTransition = {
  init: {
    x: '100%',
    // opacity: 0,
  },
  move: {
    x: 0,
    // opacity: 1,
  },
  exit: {
    x: '-100%',
    // opacity: 0,
  }
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className='page'
      variants={ opacityTransition }
      initial="init"
      animate="move"
      exit="exit"
      transition={{
        ease: 'easeOut',
        duration: 0.15
      }}
    >
      { children }
    </motion.div>
  )
}

export default PageTransition