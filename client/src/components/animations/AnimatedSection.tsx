import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down" | "none";
  delay?: number;
  duration?: number;
  once?: boolean;
  id?: string;
}

const variants = {
  hidden: (direction: string): Variant => {
    return {
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,
    };
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({
  children,
  className = "",
  direction = "none",
  delay = 0,
  duration = 0.6,
  once = true,
  id,
}: AnimatedSectionProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!once) {
      controls.start("hidden");
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={controls}
      custom={direction}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
