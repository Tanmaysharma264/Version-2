import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream via-[#f6f1df] to-[#eef3e6]" />
      <Reveal>
        <h2 className="font-display mx-auto max-w-2xl text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.1] text-ink">
          Let's give your website a professional look
        </h2>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-coral px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.04] active:scale-95"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.04] active:scale-95"
          >
            See Works
          </a>
        </div>
      </Reveal>
    </section>
  );
}
