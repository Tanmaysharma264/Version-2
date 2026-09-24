import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import WipeText from "./WipeText";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <footer ref={ref} id="contact" className="relative overflow-hidden px-6 pb-40 pt-20 text-center">
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-[-10%] -z-10 bg-gradient-to-b from-[#f3ead6] via-[#f6e2d3] to-[#f9d9c8]"
      />
      <motion.div style={{ y: contentY }}>
        <Reveal>
          <p className="flex items-center justify-center gap-2 text-sm font-medium text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-moss" />
            Available for work
          </p>
        </Reveal>
        <WipeText>
          <a
            href="mailto:hello@miravoss.com"
            className="font-display mt-3 block text-[clamp(1.6rem,5vw,2.75rem)] text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors hover:text-coral"
          >
            hello@miravoss.com
          </a>
        </WipeText>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-md text-sm text-ink-soft">
            I create stunning digital experiences that captivate — welcome to my studio.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-ink-soft">
            <a href="#" aria-label="X" className="transition-colors hover:text-ink">✕</a>
            <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-ink">in</a>
            <a href="#" aria-label="Dribbble" className="transition-colors hover:text-ink">●</a>
          </div>
          <p className="mt-8 text-xs text-ink-soft">© 2025 Mira Voss</p>
        </Reveal>
      </motion.div>
    </footer>
  );
}
