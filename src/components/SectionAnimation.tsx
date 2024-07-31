import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const SectionAnimation = ({ children }: { children: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        opacity: 1,
        y: -20,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });
    }
    if (!isInView) {
      animation.start({ opacity: 0, y: 0 });
    }
  }, [animation, isInView]);

  return (
    <div ref={ref}>
      <motion.div animate={animation}>{children}</motion.div>
    </div>
  );
};

export default SectionAnimation;
