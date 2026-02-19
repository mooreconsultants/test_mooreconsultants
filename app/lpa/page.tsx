import { LpaNavigation } from "@/components/lpa/lpa-navigation"
import { LpaHero } from "@/components/lpa/lpa-hero"
import { LpaStatement } from "@/components/lpa/lpa-statement"
import { LpaProblem } from "@/components/lpa/lpa-problem"
import { LpaServices } from "@/components/lpa/lpa-services"
import { LpaAbout } from "@/components/lpa/lpa-about"
import { LpaOnTheGround } from "@/components/lpa/lpa-on-the-ground"
import { LpaDifferentiation } from "@/components/lpa/lpa-differentiation"
import { LpaProcess } from "@/components/lpa/lpa-process"
import { LpaTestimonials } from "@/components/lpa/lpa-testimonials"
import { LpaContact } from "@/components/lpa/lpa-contact"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Your First Property Development, Done Right | Moore Consultants",
  description:
    "One-on-one property development coaching for Australians ready to build real wealth. Tour de Coastal, Foundations, and Live Deals programmes available. Book a free discovery call.",
}

export default function LandingPageA() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <LpaNavigation />
      <LpaHero />
      <LpaStatement />
      <LpaProblem />
      <LpaServices />
      <LpaOnTheGround />
      <LpaDifferentiation />
      <LpaAbout />
      <LpaProcess />
      <LpaTestimonials />
      <LpaContact />
      <Footer />
    </main>
  )
}
