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

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "You Have the Capital. Here's the Starting Point. | Moore Consultants",
  description:
    "One-on-one property development coaching for Adelaide professionals with capital ready to deploy. Clarity on the right first step, the right suburb, and the right structure. Book a free 30-min consultation.",
  openGraph: {
    title: "You Have the Capital. Here's the Starting Point. | Moore Consultants",
    description: "One-on-one coaching for Adelaide professionals ready to make their first development move. Real numbers. No theory.",
    url: "https://mooreconsultants.com.au/lpa",
    images: [{ url: "https://mooreconsultants.com.au/Hero.jpg", width: 1920, height: 1080 }],
  },
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
      <LpaTestimonials />
      <LpaDifferentiation />
      <LpaAbout />
      <LpaProcess />
      <LpaContact />
      <Footer />
    </main>
  )
}
