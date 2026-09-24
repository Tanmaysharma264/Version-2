import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "../data/content";
import WipeText from "./WipeText";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-6 py-20">
      <WipeText className="text-center">
        <p className="font-display text-2xl text-ink-soft">Frequently Asked Questions</p>
      </WipeText>

      <div className="mx-auto mt-10 flex max-w-2xl flex-col divide-y divide-line rounded-3xl border border-line bg-white/60">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.question} className="px-6">
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-base text-ink">{f.question}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream-dim text-lg text-ink"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-ink-soft">{f.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
