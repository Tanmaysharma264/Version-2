import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const headline = "I build high-performance websites that elevate brands online.";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const words = headline.split(" ");

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-28 text-center"
    >
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[70%] w-[140%] -translate-x-1/2 rounded-b-[50%] bg-gradient-to-b from-[#eef3e6] via-[#f6f1df] to-cream" />
        <motion.div
          style={{ y: blob1Y }}
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[28%] h-24 w-24 rounded-full bg-coral/20 blur-2xl"
        />
        <motion.div
          style={{ y: blob2Y }}
          animate={{ x: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] top-[38%] h-32 w-32 rounded-full bg-moss/20 blur-2xl"
        />
      </motion.div>

      <motion.div style={{ opacity: contentOpacity }} className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 h-16 w-16 overflow-hidden rounded-2xl bg-gradient-to-br from-coral to-[#ffb199] shadow-[0_10px_25px_-8px_rgba(255,107,69,0.6)]"
          />
          <p className="mb-4 text-sm font-medium text-ink-soft">Hey, I am Mira</p>
        </motion.div>

        <h1 className="font-display max-w-4xl text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-ink">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex items-center gap-3"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="rounded-full bg-coral px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(255,107,69,0.6)]"
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
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: imageY, scale: imageScale }}
        className="relative mt-16 h-[260px] w-[min(92vw,640px)] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2f3a52] via-[#5c6f95] to-[#a9c1e8] shadow-[0_30px_60px_-20px_rgba(23,20,15,0.35)]"
      >
        <div className="absolute bottom-6 left-6 rounded-full bg-cream/90 px-4 py-2 text-xs font-medium text-ink backdrop-blur-sm">
          Product design &amp; development
        </div>
      </motion.div>
    </section>
  );
}
