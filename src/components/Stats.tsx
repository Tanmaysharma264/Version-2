import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import Parallax from "./Parallax";

function Counter({ to }: { to: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-6xl text-ink">
      {value}+
    </span>
  );
}

export default function Stats() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
        <Reveal>
          <Parallax axis="y" distance={-55}>
            <div className="flex h-full flex-col items-start justify-center rounded-3xl border border-line bg-white/70 p-8">
              <Counter to={180} />
              <p className="mt-2 text-sm font-medium text-ink-soft">Projects Completed</p>
            </div>
          </Parallax>
        </Reveal>
        <Reveal delay={0.1}>
          <Parallax axis="y" distance={55}>
            <motion.div className="flex h-full flex-col justify-center rounded-3xl bg-coral p-8 text-white">
              <p className="font-display text-2xl leading-snug">
                My work helped clients grow their revenue by 200%
              </p>
            </motion.div>
          </Parallax>
        </Reveal>
      </div>
    </section>
  );
}
