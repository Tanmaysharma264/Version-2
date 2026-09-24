import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 left-1/2 z-50 flex w-[min(94vw,560px)] -translate-x-1/2 items-center gap-1 rounded-full border border-line/80 bg-cream/90 p-1.5 shadow-[0_10px_30px_-10px_rgba(23,20,15,0.25)] backdrop-blur-md"
    >
      <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-coral to-moss" />
      <div className="hidden flex-1 items-center justify-center gap-1 sm:flex">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-cream-dim hover:text-ink"
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="ml-auto shrink-0 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-cream transition-transform hover:scale-[1.03] active:scale-95"
      >
        Contact Me
      </a>
    </motion.nav>
  );
}
