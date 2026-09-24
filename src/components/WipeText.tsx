import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode, ElementType } from "react";

type WipeTextProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/**
 * Text that sits at low opacity and wipes up to full opacity as it
 * crosses the viewport while scrolling — tied directly to scroll
 * progress rather than a fixed-duration animation, so it runs in
 * reverse when scrolling back up.
 */
export default function WipeText({ children, className, as: Tag = "div" }: WipeTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.18, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [18, 0]);

  const MotionTag = motion(Tag as ElementType);

  return (
    <div ref={ref} className={className}>
      <MotionTag style={{ opacity, y }}>{children}</MotionTag>
    </div>
  );
}
