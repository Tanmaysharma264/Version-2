import Nav from "./components/Nav";
import Hero from "./components/Hero";
import TrustedBrands from "./components/TrustedBrands";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Stack from "./components/Stack";
import About from "./components/About";
import Experience from "./components/Experience";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <TrustedBrands />
        <Projects />
        <Services />
        <Stack />
        <About />
        <Experience />
        <Pricing />
        <Process />
        <Testimonials />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
