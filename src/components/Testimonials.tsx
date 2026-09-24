import { testimonials } from "../data/content";
import Reveal from "./Reveal";
import WipeText from "./WipeText";
import Parallax from "./Parallax";

export default function Testimonials() {
  return (
    <section className="px-6 py-20">
      <WipeText className="text-center">
        <p className="font-display text-2xl text-ink-soft">What clients say</p>
      </WipeText>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 0.06}
            className={i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : undefined}
          >
            <Parallax axis="y" distance={i % 2 === 0 ? -50 : 50}>
              <div
                className={`flex h-full flex-col justify-between rounded-3xl border border-line p-6 ${
                  i === 0 ? "bg-ink text-cream" : "bg-white/70 text-ink"
                }`}
              >
                <div>
                  <div className="mb-3 flex gap-1 text-coral">{"★★★★★"}</div>
                  <p className="text-[15px] leading-relaxed">"{t.quote}"</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-coral to-moss" />
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className={`text-xs ${i === 0 ? "text-cream/60" : "text-ink-soft"}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            </Parallax>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
