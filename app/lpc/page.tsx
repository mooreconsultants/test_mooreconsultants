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
  title: "Scale Beyond Your First Development | Moore Consultants | Adelaide",
  description:
    "One-on-one property development coaching for Adelaide professionals who have completed their first development and are ready to build a portfolio. Capital recycling, site stacking, and portfolio strategy with Guy Moore. Book a free 30-min consultation.",
  openGraph: {
    title: "Scale Beyond Your First Development | Moore Consultants | Adelaide",
    description: "You've done one. Now build the portfolio. Guy Moore works with experienced Adelaide developers navigating their second project and beyond.",
    url: "https://mooreconsultants.com.au/lpc",
    images: [{ url: "https://mooreconsultants.com.au/Hero.jpg", width: 1920, height: 1080 }],
  },
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
