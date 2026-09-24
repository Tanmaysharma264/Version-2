import { motion } from "framer-motion";
import { projects } from "../data/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <Reveal className="text-center">
        <p className="font-display text-2xl text-ink-soft">Projects</p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <motion.div
              whileHover="hover"
              className="group relative h-[260px] cursor-pointer overflow-hidden rounded-3xl"
            >
              <motion.div
                variants={{ hover: { scale: 1.06 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
              <div className="relative flex h-full flex-col justify-end p-5">
                <h3 className="font-display text-xl text-white">{p.title}</h3>
                <div className="mt-2 flex gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <motion.div
                variants={{ hover: { opacity: 1, scale: 1 } }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink"
              >
                ↗
              </motion.div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
