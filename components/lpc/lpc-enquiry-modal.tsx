"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight, CheckCircle, Clock } from "lucide-react"

export type EarlyBirdKey =
  | "tour"
  | "foundations"
  | "foundations-bundle"
  | "full-pathway"
  | "discovery"

interface EarlyBirdModalContent {
  eyebrow: string
  headline: string
  subheadline: string
  bullets: string[]
  formHeading: string
  ctaLabel: string
  earlyBirdPrice: string
  standardPrice: string
  saving: string
  urgency: string
}

const modalContent: Record<EarlyBirdKey, EarlyBirdModalContent> = {
  discovery: {
    eyebrow: "FREE EARLY BIRD CONSULTATION",
    headline: "Find out if you qualify for early bird pricing before it closes",
    subheadline:
      "A free, no-obligation call with Guy Moore. In 30 minutes you will know which service is right for your situation, whether you qualify for the current early bird rates, and what your path to a first Adelaide development could look like.",
    bullets: [
      "Confirm your eligibility for early bird pricing before the offer closes",
      "Get an honest assessment of your Adelaide capital and finance position",
      "Ask any questions you have about the development process",
      "No obligation to proceed -- just clarity on your next step",
    ],
    formHeading: "Book your free Adelaide consultation",
    ctaLabel: "BOOK MY FREE CONSULTATION",
    earlyBirdPrice: "Free",
    standardPrice: "",
    saving: "",
    urgency: "Early bird pricing closes at the end of this month.",
  },
  tour: {
    eyebrow: "EARLY BIRD -- TOUR DE COASTAL",
    headline: "Walk Adelaide development sites with Guy at the early bird rate.",
    subheadline:
      "The Tour de Coastal is the lowest-risk way to find out whether property development is right for you. Walk active and completed development sites in Adelaide's coastal suburbs with Guy Moore, see his real financials, and leave with a clear picture of what your first development could look like. Early bird pricing is available for a limited time only.",
    bullets: [
      "Private site visits to active and completed Adelaide projects",
      "Guy shares his real project financials, not a case study",
      "Adelaide zoning, overlay, and feasibility analysis on the ground",
      "Early bird price: $500 (standard price: $650 -- save $150)",
    ],
    formHeading: "Claim your early bird Tour de Coastal",
    ctaLabel: "CLAIM EARLY BIRD PRICING",
    earlyBirdPrice: "$500",
    standardPrice: "$650",
    saving: "Save $150 -- early bird rate",
    urgency: "Early bird pricing closes at the end of this month. Standard price resumes after.",
  },
  foundations: {
    eyebrow: "EARLY BIRD -- FOUNDATIONS",
    headline: "Get your Adelaide development strategy right at the early bird rate.",
    subheadline:
      "The Foundations programme sets up everything you need before you spend a dollar on a site. Entity structuring, finance readiness, and a first Adelaide project action plan, all one-on-one with Guy Moore. Early bird pricing is available for a limited time only.",
    bullets: [
      "Entity structuring for Adelaide property development",
      "Finance readiness and capital position assessment",
      "First Adelaide project action plan",
      "Early bird price: $2,000 (standard price: $2,500 -- save $500)",
    ],
    formHeading: "Claim your early bird Foundations programme",
    ctaLabel: "CLAIM EARLY BIRD PRICING",
    earlyBirdPrice: "$2,000",
    standardPrice: "$2,500",
    saving: "Save $500 -- early bird rate",
    urgency: "Early bird pricing closes at the end of this month. Standard price resumes after.",
  },
  "foundations-bundle": {
    eyebrow: "EARLY BIRD -- TOUR + FOUNDATIONS BUNDLE",
    headline: "See it, then build the strategy. Both at early bird rates.",
    subheadline:
      "The Tour de Coastal and Foundations combined at early bird pricing. Walk Adelaide development sites with Guy, then move straight into the Foundations coaching programme. Both services at their early bird rates, bundled together for maximum value.",
    bullets: [
      "Tour de Coastal at early bird rate: $500 (save $150)",
      "Foundations at early bird rate: $2,000 (save $500)",
      "Bundle total: $2,500 (versus $3,200 at standard individual prices)",
      "Total saving: $700 versus standard individual pricing",
    ],
    formHeading: "Claim your early bird Tour + Foundations bundle",
    ctaLabel: "CLAIM EARLY BIRD PRICING",
    earlyBirdPrice: "$2,500",
    standardPrice: "$3,200",
    saving: "Save $700 versus standard individual prices",
    urgency: "Early bird pricing closes at the end of this month. Standard prices resume after.",
  },
  "full-pathway": {
    eyebrow: "EARLY BIRD -- FULL DEVELOPMENT PATHWAY",
    headline: "Foundations and Live Deals. Both at early bird rates. Pay in milestones.",
    subheadline:
      "The Full Development Pathway combines Foundations and Live Deals into a single end-to-end coaching programme for the Adelaide market. Both services at their early bird rates, with flexible milestone-based payments so you are never paying for a stage you have not started.",
    bullets: [
      "Foundations at early bird rate: $2,000 (save $500)",
      "Live Deals at early bird rate: $8,000 (save $2,000)",
      "Bundle total: $10,000 (versus $12,000 at standard bundle price)",
      "Flexible payment plan: 20% upfront ($2,000), then 3 x 25% at agreed milestones",
    ],
    formHeading: "Claim your early bird Full Development Pathway",
    ctaLabel: "CLAIM EARLY BIRD PRICING",
    earlyBirdPrice: "$10,000",
    standardPrice: "$12,000",
    saving: "Save $2,000 versus standard bundle price",
    urgency: "Early bird pricing closes at the end of this month. Standard prices resume after.",
  },
}

interface LpcEnquiryModalProps {
  service: EarlyBirdKey | null
  onClose: () => void
}

export function LpcEnquiryModal({ service, onClose }: LpcEnquiryModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [service])

  if (!service) return null

  const content = modalContent[service]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Early bird enquiry submitted:", { service, name, email, phone, message })
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-moore-navy/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-moore-white shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center text-moore-charcoal hover:text-moore-navy transition-colors" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center px-8 py-20 lg:py-28">
            <div className="w-16 h-16 bg-moore-gold/10 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-moore-gold" />
            </div>
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">{content.eyebrow}</span>
            <h3 className="font-serif text-3xl text-moore-navy mb-4">Your early bird spot is reserved.</h3>
            <p className="text-moore-charcoal/60 max-w-md leading-relaxed mb-8">
              Guy personally reviews every enquiry. No sales team. No automated responses. You can expect to hear back within one business day to confirm your early bird pricing.
            </p>
            <button onClick={onClose} className="text-moore-charcoal text-sm tracking-widest uppercase hover:text-moore-gold transition-colors">Close</button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2">
            <div className="bg-moore-navy px-8 lg:px-10 py-12 lg:py-14">
              <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">{content.eyebrow}</span>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-moore-gold text-4xl font-light">{content.earlyBirdPrice}</span>
                {content.standardPrice && (
                  <span className="text-moore-offwhite/30 text-lg line-through">{content.standardPrice}</span>
                )}
              </div>
              {content.saving && (
                <div className="inline-block bg-moore-gold/20 border border-moore-gold/40 text-moore-gold text-xs tracking-wide px-3 py-1 mb-4">
                  {content.saving}
                </div>
              )}
              <h3 className="font-serif text-2xl lg:text-3xl text-moore-offwhite mb-4 leading-snug">{content.headline}</h3>
              <p className="text-moore-offwhite/60 text-sm leading-relaxed mb-8">{content.subheadline}</p>
              <ul className="space-y-4 mb-8">
                {content.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-moore-offwhite/80">
                    <CheckCircle className="w-4 h-4 text-moore-gold flex-shrink-0 mt-0.5" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex items-start gap-2 bg-moore-gold/10 border border-moore-gold/30 px-4 py-3">
                <Clock className="w-4 h-4 text-moore-gold flex-shrink-0 mt-0.5" />
                <p className="text-moore-gold text-xs leading-relaxed">{content.urgency}</p>
              </div>
            </div>

            <div className="px-8 lg:px-10 py-12 lg:py-14">
              <h4 className="font-serif text-xl text-moore-navy mb-8">{content.formHeading}</h4>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-moore-charcoal/60 mb-2">Full Name <span className="text-moore-gold">*</span></label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className="w-full border border-moore-charcoal/20 bg-moore-offwhite px-4 py-3 text-sm text-moore-navy placeholder:text-moore-charcoal/40 focus:outline-none focus:border-moore-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-moore-charcoal/60 mb-2">Email Address <span className="text-moore-gold">*</span></label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="w-full border border-moore-charcoal/20 bg-moore-offwhite px-4 py-3 text-sm text-moore-navy placeholder:text-moore-charcoal/40 focus:outline-none focus:border-moore-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-moore-charcoal/60 mb-2">Phone Number</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="04XX XXX XXX" className="w-full border border-moore-charcoal/20 bg-moore-offwhite px-4 py-3 text-sm text-moore-navy placeholder:text-moore-charcoal/40 focus:outline-none focus:border-moore-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-moore-charcoal/60 mb-2">Where are you in your Adelaide property journey?</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="A brief note about your situation helps Guy prepare for your call..." className="w-full border border-moore-charcoal/20 bg-moore-offwhite px-4 py-3 text-sm text-moore-navy placeholder:text-moore-charcoal/40 focus:outline-none focus:border-moore-gold transition-colors resize-none" />
                </div>
                <button type="submit" className="group w-full bg-moore-navy text-moore-offwhite text-xs tracking-widest uppercase px-8 py-4 hover:bg-moore-gold hover:text-moore-navy transition-all duration-300 flex items-center justify-center gap-3">
                  {content.ctaLabel}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-moore-charcoal/40 text-xs text-center leading-relaxed">
                  Guy personally reviews every enquiry. No sales team. No automated responses.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
