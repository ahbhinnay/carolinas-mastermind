import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import Venue from "@/components/Venue";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Speakers />
      <Venue />
      <Schedule />
      <Pricing />
      <FAQ />
      <Testimonials />
      <Footer />
    </main>
  );
}
