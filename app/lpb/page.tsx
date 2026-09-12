import { LpbNavigation } from "@/components/lpb/lpb-navigation"
import { LpbHero } from "@/components/lpb/lpb-hero"
import { LpbStatement } from "@/components/lpb/lpb-statement"
import { LpbProblem } from "@/components/lpb/lpb-problem"
import { LpbServices } from "@/components/lpb/lpb-services"
import { LpbOnTheGround } from "@/components/lpb/lpb-on-the-ground"
import { LpbTestimonials } from "@/components/lpb/lpb-testimonials"
import { LpbDifferentiation } from "@/components/lpb/lpb-differentiation"
import { LpbAbout } from "@/components/lpb/lpb-about"
import { LpbProcess } from "@/components/lpb/lpb-process"
import { LpbContact } from "@/components/lpb/lpb-contact"
import { Footer } from "@/components/footer"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "You've Done the Courses. Now Execute. | Moore Consultants",
  description:
    "One-on-one property development coaching for Adelaide professionals who have the knowledge but haven't pulled the trigger on their first development. Guy Moore closes the gap between theory and action. Book a free 30-min consultation.",
  openGraph: {
    title: "You've Done the Courses. Now Execute. | Moore Consultants",
    description: "Stop researching and start building. Guy Moore works one-on-one with Adelaide professionals who have the knowledge — and need the conviction.",
    url: "https://mooreconsultants.com.au/lpb",
    images: [{ url: "https://mooreconsultants.com.au/Hero.jpg", width: 1920, height: 1080 }],
  },
}

export default function LpbPage() {
  return (
    <main className="min-h-screen bg-moore-offwhite">
      <LpbNavigation />
      <LpbHero />
      <LpbStatement />
      <LpbProblem />
      <LpbServices />
      <LpbOnTheGround />
      <LpbTestimonials />
      <LpbDifferentiation />
      <LpbAbout />
      <LpbProcess />
      <LpbContact />
      <Footer />
    </main>
  )
}
