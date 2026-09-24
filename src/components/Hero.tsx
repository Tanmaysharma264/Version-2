import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-28 text-center"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[70%] w-[140%] -translate-x-1/2 rounded-b-[50%] bg-gradient-to-b from-[#eef3e6] via-[#f6f1df] to-cream" />
        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[28%] h-24 w-24 rounded-full bg-coral/20 blur-2xl"
        />
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] top-[38%] h-32 w-32 rounded-full bg-moss/20 blur-2xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center"
      >
        <div className="mb-5 h-16 w-16 overflow-hidden rounded-2xl bg-gradient-to-br from-coral to-[#ffb199] shadow-[0_10px_25px_-8px_rgba(255,107,69,0.6)]" />
        <p className="mb-4 text-sm font-medium text-ink-soft">Hey, I am Mira</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="font-display max-w-4xl text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-ink"
      >
        I build high-performance websites that elevate brands online.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 flex items-center gap-3"
      >
        <a
          href="#contact"
          className="rounded-full bg-coral px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(255,107,69,0.6)] transition-transform hover:scale-[1.04] active:scale-95"
        >
          Hire Me
        </a>
        <a
          href="#projects"
          className="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.04] active:scale-95"
        >
          See Works
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-16 h-[260px] w-[min(92vw,640px)] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2f3a52] via-[#5c6f95] to-[#a9c1e8] shadow-[0_30px_60px_-20px_rgba(23,20,15,0.35)]"
      >
        <div className="absolute bottom-6 left-6 rounded-full bg-cream/90 px-4 py-2 text-xs font-medium text-ink backdrop-blur-sm">
          Product design &amp; development
        </div>
      </motion.div>
    </section>
  );
}
