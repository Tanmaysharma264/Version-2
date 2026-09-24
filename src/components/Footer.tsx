import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden px-6 pb-40 pt-20 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#f3ead6] via-[#f6e2d3] to-[#f9d9c8]" />
      <Reveal>
        <p className="flex items-center justify-center gap-2 text-sm font-medium text-ink-soft">
          <span className="h-2 w-2 rounded-full bg-moss" />
          Available for work
        </p>
        <a
          href="mailto:hello@miravoss.com"
          className="font-display mt-3 block text-[clamp(1.6rem,5vw,2.75rem)] text-ink underline decoration-line decoration-2 underline-offset-8 transition-colors hover:text-coral"
        >
          hello@miravoss.com
        </a>
        <p className="mx-auto mt-6 max-w-md text-sm text-ink-soft">
          I create stunning digital experiences that captivate — welcome to my studio.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 text-ink-soft">
          <a href="#" aria-label="X" className="transition-colors hover:text-ink">✕</a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-ink">in</a>
          <a href="#" aria-label="Dribbble" className="transition-colors hover:text-ink">●</a>
        </div>
        <p className="mt-8 text-xs text-ink-soft">© 2025 Mira Voss</p>
      </Reveal>
    </footer>
  );
}
