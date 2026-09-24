import { stack } from "../data/content";
import Reveal from "./Reveal";

export default function Stack() {
  const loop = [...stack, ...stack];
  return (
    <section className="px-6 py-20">
      <Reveal className="text-center">
        <p className="font-display text-2xl text-ink-soft">My Stack</p>
      </Reveal>
      <div className="no-scrollbar relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
        <div className="marquee-track marquee-track-slow gap-4">
          {loop.map((s, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-white/70 px-5 py-3.5"
            >
              <span className="h-6 w-6 rounded-md bg-gradient-to-br from-coral to-moss" />
              <span className="text-sm font-medium text-ink">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
