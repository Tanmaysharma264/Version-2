import { pricing } from "../data/content";
import Reveal from "./Reveal";
import WipeText from "./WipeText";
import Parallax from "./Parallax";

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20">
      <WipeText className="text-center">
        <p className="font-display text-2xl text-ink">Simple Packages for Every Stage</p>
      </WipeText>

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
        {pricing.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <Parallax axis="y" distance={i % 2 === 0 ? -20 : 20}>
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-7 ${
                  p.popular
                    ? "border-coral bg-coral text-white"
                    : "border-ink/10 bg-ink text-cream"
                }`}
              >
                {p.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-white/20 px-3 py-1 text-xs font-medium">
                    Popular
                  </span>
                )}
                <p className="font-display text-lg">{p.name}</p>
                <p className="font-display mt-2 text-4xl">
                  ${p.price}
                  <span className="text-base font-sans font-normal opacity-70">/month</span>
                </p>
                <p className="mt-2 text-sm opacity-70">{p.description}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-xs">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-7 flex items-center justify-between rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
                    p.popular ? "bg-white text-coral" : "bg-white/10 text-cream"
                  }`}
                >
                  Get in Touch <span>→</span>
                </a>
              </div>
            </Parallax>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
