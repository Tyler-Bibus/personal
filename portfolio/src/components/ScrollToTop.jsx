import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
            backgroundColor: '#dc143c',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(220,20,60,0.4)',
          }}
        >
          <FaArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
