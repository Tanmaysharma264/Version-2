import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Axis the element drifts along relative to normal scroll. */
  axis?: "x" | "y";
  /** Pixels of travel across the element's time in the viewport. Negative reverses direction. */
  distance?: number;
};

/**
 * Moves its content independently of normal document scroll — as the
 * viewport scrolls down, the element drifts by `distance` px along
 * `axis`, and reverses smoothly when the viewport scrolls back up.
 * A spring smooths the raw scroll-linked value so the motion has a
 * touch of lag/weight instead of ticking 1:1 with the scrollbar.
 */
export default function Parallax({ children, className, axis = "y", distance = 120 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const offset = useSpring(raw, { stiffness: 90, damping: 20, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={axis === "y" ? { y: offset } : { x: offset }}>{children}</motion.div>
    </div>
  );
}
