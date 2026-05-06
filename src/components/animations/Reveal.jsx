import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const Reveal = ({ children, width = "100%", delay = 0.25, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={className} style={{ position: "relative", width }}>
      <motion.div
        className={className.includes('h-full') ? 'h-full' : ''}
        variants={{
          hidden: { 
            opacity: 0, 
            y: 20,
            clipPath: "inset(100% 0 0 0)"
          },
          visible: { 
            opacity: 1, 
            y: 0,
            clipPath: "inset(0% 0 0 0)"
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.6, 
          delay, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
