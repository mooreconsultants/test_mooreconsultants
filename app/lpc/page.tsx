import type { Metadata } from "next"
import { LpcNavigation } from "@/components/lpc/lpc-navigation"
import { LpcHero } from "@/components/lpc/lpc-hero"
import { LpcStatement } from "@/components/lpc/lpc-statement"
import { LpcProblem } from "@/components/lpc/lpc-problem"
import { LpcServices } from "@/components/lpc/lpc-services"
import { LpcOnTheGround } from "@/components/lpc/lpc-on-the-ground"
import { LpcTestimonials } from "@/components/lpc/lpc-testimonials"
import { LpcDifferentiation } from "@/components/lpc/lpc-differentiation"
import { LpcAbout } from "@/components/lpc/lpc-about"
import { LpcProcess } from "@/components/lpc/lpc-process"
import { LpcContact } from "@/components/lpc/lpc-contact"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Early Bird Pricing | Moore Consultants | Adelaide Property Development Coaching",
  description:
    "Limited time early bird pricing on all Adelaide property development coaching services. Tour de Coastal from $400, Foundations from $1,750. Offer ends end of month.",
}

export default function LpcPage() {
  return (
    <main className="min-h-screen bg-moore-offwhite">
      <LpcNavigation />
      <LpcHero />
      <LpcStatement />
      <LpcProblem />
      <LpcServices />
      <LpcOnTheGround />
      <LpcTestimonials />
      <LpcDifferentiation />
      <LpcAbout />
      <LpcProcess />
      <LpcContact />
      <Footer />
    </main>
  )
}
