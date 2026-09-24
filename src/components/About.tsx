import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { skillCards } from "../data/content";
import Reveal from "./Reveal";
import WipeText from "./WipeText";
import Parallax from "./Parallax";

export default function About() {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgWrapRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="px-6 py-20">
      <WipeText className="text-center">
        <p className="font-display text-2xl text-ink-soft">About Me</p>
      </WipeText>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <Reveal>
          <Parallax axis="y" distance={-65}>
            <div>
              <h3 className="font-display text-3xl text-ink">
                Hey, I am <span className="text-coral">Mira</span>
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                As a digital product designer, my focus is on creating intuitive user
                interfaces, seamless interactions, and cohesive brand identities that
                drive engagement and enhance usability.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {skillCards.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -3, borderColor: "var(--color-coral)" }}
                    className="rounded-2xl border border-line bg-white/70 px-4 py-3 text-sm font-medium text-ink"
                  >
                    {s.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </Parallax>
        </Reveal>

        <Reveal delay={0.15}>
          <Parallax axis="y" distance={65}>
            <div
              ref={imgWrapRef}
              className="h-[380px] overflow-hidden rounded-[28px] shadow-[0_25px_50px_-15px_rgba(23,20,15,0.3)]"
            >
              <motion.div
                style={{ y: imageY }}
                className="h-[120%] w-full bg-gradient-to-br from-[#c9743b] to-[#f0b27a]"
              />
            </div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
