import Header from "@/components/header";
import Navbar from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import CTA from "@/sections/cta";
import Footer from "@/sections/footer";
import Hero from "@/sections/hero";
import PopularProducts from "@/sections/popular-products";
import Services from "@/sections/services";
import TechStack from "@/sections/tech-stack";
import Testimonials from "@/sections/testimonials";
import Ventures from "@/sections/ventures";
import Works from "@/sections/works";

export default function Home() {
  return (
    <main className="py-6 pt-10 pb-24">
      {/* <ModeToggle /> */}
      <Header />
      <div className="space-y-16">
        <Hero />
        <div className="container">
          <Separator className="" />
        </div>
        <Works />
        <Ventures />
        <Services />
        <PopularProducts />
        <Testimonials />
        <TechStack />
        <CTA />
        <Footer />
      </div>
      <Navbar />
    </main>
    // <div className="py-32 w-full"></div>
  );
}
