import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/content";
import Reveal from "./Reveal";
import WipeText from "./WipeText";
import Parallax from "./Parallax";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="px-6 py-20">
      <WipeText className="text-center">
        <p className="font-display text-2xl text-ink-soft">Services</p>
      </WipeText>

      <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-3">
        {services.map((s, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={s.title} delay={i * 0.05}>
              <Parallax axis="x" distance={i % 2 === 0 ? -18 : 18}>
                <div
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`cursor-pointer rounded-2xl border px-6 py-5 transition-colors ${
                    isOpen
                      ? "border-coral bg-coral text-white"
                      : "border-line bg-white/60 text-ink hover:border-ink/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-lg">{s.title}</h3>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg ${
                        isOpen ? "bg-white/20" : "bg-cream-dim"
                      }`}
                    >
                      +
                    </motion.span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm leading-relaxed text-white/85">{s.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Parallax>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
