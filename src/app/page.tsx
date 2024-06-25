import Header from "@/components/header"
import { ModeToggle } from "@/components/mode-toggle"
import { Separator } from "@/components/ui/separator"
import { TracingBeam } from "@/components/ui/tracing-beam"
import CTA from "@/sections/cta"
import Footer from "@/sections/footer"
import Hero from "@/sections/hero"
import PopularProducts from "@/sections/popular-products"
import Services from "@/sections/services"
import TechStack from "@/sections/tech-stack"
import Testimonials from "@/sections/testimonials"
import Ventures from "@/sections/ventures"
import Work from "@/sections/work"

export default function Home() {
  return (
    <main className="py-6 pb-24">
      {/* <ModeToggle /> */}
      <Header />
      <div className="space-y-20">
        <Hero />
        <div className="container">
          <Separator className="" />
        </div>
        <Work />
        <Ventures />
        <Services />
        <PopularProducts />
        <Testimonials />
        <TechStack />
        <CTA />
        <Footer />
      </div>
    </main>
    // <div className="py-32 w-full"></div>
  )
}
