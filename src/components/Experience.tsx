import { experience } from "../data/content";
import Reveal from "./Reveal";
import WipeText from "./WipeText";
import Parallax from "./Parallax";

export default function Experience() {
  return (
    <section className="px-6 py-20">
      <WipeText className="text-center">
        <p className="font-display text-2xl text-ink-soft">My journey through design</p>
      </WipeText>

      <div className="mx-auto mt-12 max-w-3xl">
        {experience.map((e, i) => (
          <Reveal key={e.role} delay={i * 0.08}>
            <div className="relative flex items-start gap-5 border-l border-line pb-10 pl-8 last:pb-0">
              <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-cream bg-coral" />
              <Parallax axis="x" distance={i % 2 === 0 ? -45 : 45}>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">
                    {e.period}
                  </p>
                  <h3 className="font-display mt-1 text-xl text-ink">{e.role}</h3>
                  <p className="text-sm text-ink-soft">{e.company}</p>
                </div>
              </Parallax>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
