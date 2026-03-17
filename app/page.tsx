import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Results from '@/components/Results';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Results />
      <CaseStudies />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
