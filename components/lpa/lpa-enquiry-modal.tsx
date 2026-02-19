"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight, CheckCircle } from "lucide-react"

export type ServiceKey = "tour" | "foundations" | "livedeals" | "pm" | "discovery"

interface ServiceModalContent {
  eyebrow: string
  headline: string
  subheadline: string
  bullets: string[]
  formHeading: string
  ctaLabel: string
  price: string
  priceNote?: string
}

const modalContent: Record<ServiceKey, ServiceModalContent> = {
  discovery: {
    eyebrow: "FREE ADELAIDE CONSULTATION",
    headline: "Find out exactly where to start in 30 minutes",
    subheadline:
      "A free, no-obligation call with Guy Moore. In 30 minutes you will know which service is the right starting point for your situation, what your realistic capital position needs to look like, and what your path to a first Adelaide development could look like. Guy gives you honest advice, not a sales pitch.",
    bullets: [
      "Understand which service matches where you are right now",
      "Get an honest assessment of your capital and Adelaide finance position",
      "Ask any questions you have about the Adelaide development process",
      "No obligation to proceed -- just clarity on your next step",
    ],
    formHeading: "Book your free Adelaide consultation",
    ctaLabel: "BOOK MY FREE CONSULTATION",
    price: "Free",
  },
  tour: {
    eyebrow: "TOUR DE COASTAL · $500",
    headline: "See a real Adelaide development before you commit to anything",
    subheadline:
      "The Tour de Coastal is a private site visit with Guy Moore across active and completed development projects in Adelaide's coastal suburbs. Glenelg. Brighton. Somerton Park. You will see how Guy reads a block, runs a preliminary feasibility, and identifies the opportunities most buyers walk straight past. It is the lowest-risk way to find out if property development is right for you.",
    bullets: [
      "Walk active and completed Adelaide development sites with Guy",
      "See real Adelaide project financials and margins firsthand",
      "Understand Adelaide's planning overlays and council requirements on the ground",
      "No obligation to proceed further afterwards",
    ],
    formHeading: "Book your Tour de Coastal",
    ctaLabel: "BOOK MY TOUR",
    price: "$500",
  },
  foundations: {
    eyebrow: "FOUNDATIONS · $2,000",
    headline: "Get your structures and strategy right before you spend a dollar on an Adelaide site",
    subheadline:
      "Most first-time developers get this wrong. They find a site before they have the right entity structure, the right finance position, or a clear strategy for the Adelaide market. Foundations fixes that. It is the one-on-one coaching programme that gets you genuinely ready to develop.",
    bullets: [
      "Entity structuring for Adelaide property development (trusts, companies, joint ventures)",
      "Finance readiness assessment and Adelaide borrowing capacity review",
      "Adelaide-specific development types and feasibility modelling introduction",
      "A clear, written action plan for your first Adelaide project",
    ],
    formHeading: "Enquire about Foundations",
    ctaLabel: "ENQUIRE NOW",
    price: "$2,000",
  },
  livedeals: {
    eyebrow: "LIVE DEALS · $4,000 UPFRONT + $4,000 ON SUCCESS",
    headline: "Find and secure your first profitable Adelaide development site",
    subheadline:
      "This is the most critical step in any development. Live Deals takes you through the entire site identification and acquisition process in the Adelaide market, with Guy Moore coaching you on real sites in real time. Glenelg. Brighton. Burnside. Unley. You do not just learn the theory -- you apply it, with Guy alongside you at every decision point.",
    bullets: [
      "Adelaide site identification criteria and search strategy tailored to your capital",
      "Full financial feasibility modelling with real Adelaide suburb numbers",
      "Due diligence process, Adelaide planning checks, and risk assessment",
      "Negotiation coaching and acquisition support through to contract",
    ],
    formHeading: "Enquire about Live Deals",
    ctaLabel: "ENQUIRE NOW",
    price: "$8,000",
    priceNote: "$4,000 upfront. $4,000 payable on successful site acquisition.",
  },
  pm: {
    eyebrow: "PROJECT MANAGEMENT · FROM $50,000",
    headline: "Guy Moore alongside you for the entire Adelaide development",
    subheadline:
      "For clients who have completed the coaching programmes and are ready to execute their first Adelaide development. This is a true end-to-end partnership. Guy manages the entire project alongside you, from DA coordination with Adelaide councils through to builder selection, construction oversight, and final sale. You make the major decisions. He handles everything else.",
    bullets: [
      "DA coordination and Adelaide council liaison",
      "Builder selection and contract negotiation",
      "Construction oversight and progress management",
      "Sales strategy and settlement coordination",
    ],
    formHeading: "Enquire about Project Management",
    ctaLabel: "ENQUIRE NOW",
    price: "From $50,000",
  },
}

interface LpaEnquiryModalProps {
  service: ServiceKey | null
  onClose: () => void
}

export function LpaEnquiryModal({ service, onClose }: LpaEnquiryModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  // Prevent body scroll when modal is open
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
    // Resend API integration to be wired in post-approval
    console.log("Enquiry submitted:", { service, name, email, phone, message })
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-moore-navy/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-moore-white shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center text-moore-charcoal hover:text-moore-navy transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success State */
          <div className="flex flex-col items-center justify-center text-center px-8 py-20 lg:py-28">
            <div className="w-16 h-16 bg-moore-gold/10 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-moore-gold" />
            </div>
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">{content.eyebrow}</span>
            <h3 className="font-serif text-3xl text-moore-navy mb-4">Thanks. Guy will be in touch shortly.</h3>
            <p className="text-moore-charcoal/60 max-w-md leading-relaxed mb-8">
              Guy personally reviews every enquiry. No sales team. No automated responses. You can expect to hear
              back within one business day.
            </p>
            <button
              onClick={onClose}
              className="text-moore-charcoal text-sm tracking-widest uppercase hover:text-moore-gold transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2">
            {/* Left: Product Info */}
            <div className="bg-moore-navy px-8 lg:px-10 py-12 lg:py-14">
              <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 block">{content.eyebrow}</span>
              <div className="text-moore-gold text-3xl font-light mb-1">{content.price}</div>
              {content.priceNote && (
                <div className="text-moore-offwhite/40 text-xs mb-4">{content.priceNote}</div>
              )}
              <h3 className="font-serif text-2xl lg:text-3xl text-moore-offwhite mb-4 leading-snug">
                {content.headline}
              </h3>
              <p className="text-moore-offwhite/60 text-sm leading-relaxed mb-8">
                {content.subheadline}
              </p>
              <ul className="space-y-4">
                {content.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-moore-offwhite/80">
                    <CheckCircle className="w-4 h-4 text-moore-gold flex-shrink-0 mt-0.5" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form */}
            <div className="px-8 lg:px-10 py-12 lg:py-14">
              <h4 className="font-serif text-xl text-moore-navy mb-8">{content.formHeading}</h4>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-moore-charcoal/60 mb-2">
                    Full Name <span className="text-moore-gold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full border border-moore-charcoal/20 bg-moore-offwhite px-4 py-3 text-sm text-moore-navy placeholder:text-moore-charcoal/40 focus:outline-none focus:border-moore-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-moore-charcoal/60 mb-2">
                    Email Address <span className="text-moore-gold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full border border-moore-charcoal/20 bg-moore-offwhite px-4 py-3 text-sm text-moore-navy placeholder:text-moore-charcoal/40 focus:outline-none focus:border-moore-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-moore-charcoal/60 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="04XX XXX XXX"
                    className="w-full border border-moore-charcoal/20 bg-moore-offwhite px-4 py-3 text-sm text-moore-navy placeholder:text-moore-charcoal/40 focus:outline-none focus:border-moore-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-moore-charcoal/60 mb-2">
                    Where are you in your Adelaide property journey?
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    placeholder="A brief note about your situation helps Guy prepare for your call..."
                    className="w-full border border-moore-charcoal/20 bg-moore-offwhite px-4 py-3 text-sm text-moore-navy placeholder:text-moore-charcoal/40 focus:outline-none focus:border-moore-gold transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full bg-moore-navy text-moore-offwhite text-xs tracking-widest uppercase px-8 py-4 hover:bg-moore-gold hover:text-moore-navy transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {content.ctaLabel}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-moore-charcoal/40 text-xs text-center leading-relaxed">
                  Guy personally reviews every enquiry. No sales team. No automated responses. Proudly Adelaide-based since 2014.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
