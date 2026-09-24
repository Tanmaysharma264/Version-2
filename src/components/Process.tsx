import { process } from "../data/content";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="px-6 py-20">
      <Reveal className="text-center">
        <p className="font-display text-2xl text-ink-soft">My Process</p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
        {process.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.08}>
            <div className="rounded-3xl border border-line bg-white/60 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-coral text-sm font-semibold text-white">
                {s.step.replace("0", "")}
              </span>
              <h3 className="font-display mt-4 text-xl text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
