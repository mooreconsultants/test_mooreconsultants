import { HeroSection } from "@/components/hero-section"
import { StatementSection } from "@/components/statement-section"
import { ProblemSection } from "@/components/problem-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { SiteVisitSection } from "@/components/site-visit-section"
import { DifferentiationSection } from "@/components/differentiation-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <StatementSection />
      <ProblemSection />
      <AboutSection />
      <ServicesSection />
      <SiteVisitSection />
      <DifferentiationSection />
      <CTASection />
      <Footer />
    </main>
  )
}
