import { skillCards } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <Reveal className="text-center">
        <p className="font-display text-2xl text-ink-soft">About Me</p>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <Reveal>
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
              {skillCards.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-line bg-white/70 px-4 py-3 text-sm font-medium text-ink"
                >
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative h-[380px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#c9743b] to-[#f0b27a] shadow-[0_25px_50px_-15px_rgba(23,20,15,0.3)]" />
        </Reveal>
      </div>
    </section>
  );
}
