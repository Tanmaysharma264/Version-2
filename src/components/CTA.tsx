import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";
import WipeText from "./WipeText";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const cloud1X = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);
  const cloud2X = useTransform(scrollYProgress, [0, 1], ["8%", "-10%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative overflow-hidden px-6 py-28 text-center">
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream via-[#f6f1df] to-[#eef3e6]"
      />
      <motion.div
        style={{ x: cloud1X }}
        className="pointer-events-none absolute left-[6%] top-[20%] h-16 w-28 rounded-full bg-white/60 blur-xl"
      />
      <motion.div
        style={{ x: cloud2X }}
        className="pointer-events-none absolute right-[8%] top-[55%] h-20 w-32 rounded-full bg-white/50 blur-xl"
      />
      <WipeText className="mx-auto max-w-2xl">
        <h2 className="font-display text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.1] text-ink">
          Let's give your website a professional look
        </h2>
      </WipeText>
      <Reveal delay={0.15}>
        <div className="mt-8 flex items-center justify-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="rounded-full bg-coral px-6 py-3.5 text-sm font-semibold text-white"
          >
            Hire Me
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream"
          >
            See Works
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}
