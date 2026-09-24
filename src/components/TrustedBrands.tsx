import { brands } from "../data/content";
import WipeText from "./WipeText";
import Parallax from "./Parallax";

export default function TrustedBrands() {
  const loop = [...brands, ...brands];
  return (
    <section className="px-6 py-16">
      <WipeText className="text-center">
        <p className="font-display text-2xl text-ink-soft">
          Trusted By Many <span className="text-ink">Brands</span>
        </p>
      </WipeText>
      <Parallax axis="x" distance={90} className="no-scrollbar relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
        <div className="marquee-track gap-16">
          {loop.map((b, i) => (
            <span
              key={i}
              className="font-display shrink-0 text-2xl font-medium tracking-tight text-ink-soft/50"
            >
              {b}
            </span>
          ))}
        </div>
      </Parallax>
    </section>
  );
}
