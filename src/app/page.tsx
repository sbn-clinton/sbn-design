import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Plan from "@/components/Plan";
import Support from "@/components/Support";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Support />
      <Features />
      <Benefits />
      <Plan />
      <Footer />
    </div>
  );
}
