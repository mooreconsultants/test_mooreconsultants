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
  title: "Bundle Packages | Moore Consultants",
  description:
    "Bundle packages for Adelaide professionals ready to commit to their first property development. More of Guy Moore's time and expertise, for less.",
  openGraph: {
    title: "Bundle Packages | Moore Consultants",
    description: "Bundle packages for Adelaide professionals ready to commit to their first property development.",
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
