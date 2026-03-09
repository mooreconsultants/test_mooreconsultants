"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight, CheckCircle } from "lucide-react"
import { submitContactSubmission } from "@/lib/contact-submit"

export type BundleKey = "tour-foundations" | "tour-to-foundations" | "full-pathway" | "project-management" | "discovery"

interface BundleModalContent {
  eyebrow: string
  headline: string
  subheadline: string
  bullets: string[]
  formHeading: string
  ctaLabel: string
  price: string
  saving: string
}

const modalContent: Record<BundleKey, BundleModalContent> = {
  discovery: {
    eyebrow: "FREE ADELAIDE CONSULTATION",
    headline: "Find out which bundle is right for you in 30 minutes",
    subheadline:
      "A free, no-obligation call with Guy Moore. In 30 minutes you will know which bundle matches your situation, what your realistic capital position needs to look like, and what your path to a first Adelaide development could look like. Guy gives you honest advice, not a sales pitch.",
    bullets: [
      "Understand which bundle matches where you are right now",
      "Get an honest assessment of your Adelaide capital and finance position",
      "Ask any questions you have about the development process",
      "No obligation to proceed -- just clarity on your next step",
    ],
    formHeading: "Book your free Adelaide consultation",
    ctaLabel: "BOOK MY FREE CONSULTATION",
    price: "Free",
    saving: "",
  },
  "tour-foundations": {
    eyebrow: "BUNDLE 01 -- TOUR + FOUNDATIONS",
    headline: "Walk Adelaide development sites with Guy, then build your strategy. The Tour is on us.",
    subheadline:
      "Start with a private site tour alongside Guy Moore in Adelaide's coastal suburbs, then move straight into the Foundations coaching programme. Normally $3,000 purchased separately, this bundle gives you both for $2,500. The Tour de Coastal is included at no extra cost. It is the ideal entry point for Adelaide professionals who want to see the reality before they commit.",
    bullets: [
      "Tour de Coastal: private site visits to active and completed Adelaide projects (valued at $500, included free)",
      "Foundations coaching: entity structuring, finance readiness, and your first Adelaide project action plan",
      "Seamless progression from seeing it to planning it",
      "Save $500 versus purchasing separately",
    ],
    formHeading: "Enquire about Tour + Foundations",
    ctaLabel: "CLAIM THIS BUNDLE",
    price: "$2,500",
    saving: "Save $500 (Tour included free)",
  },
  "tour-to-foundations": {
    eyebrow: "BUNDLE 02 -- TOUR TO FOUNDATIONS",
    headline: "Book the Tour. Unlock 25% off Foundations. No obligation.",
    subheadline:
      "The easiest way to get started. Book the Tour de Coastal for $500 and walk active Adelaide development sites with Guy Moore. If you decide to proceed to Foundations within three months, Guy will personally honour a 25% discount, bringing Foundations from $2,500 down to $1,875. No automated codes. No fine print. Just Guy's word.",
    bullets: [
      "Tour de Coastal at standard price: $500",
      "25% off Foundations ($625 saving) if you proceed within 3 months",
      "No obligation to continue after the tour",
      "Total if you proceed: $2,375 versus $3,000 purchased separately",
    ],
    formHeading: "Book the Tour de Coastal",
    ctaLabel: "BOOK THE TOUR",
    price: "$500 to start",
    saving: "Save up to $625 if you proceed to Foundations",
  },
  "full-pathway": {
    eyebrow: "BUNDLE 03 -- FULL SITE FIND PATHWAY",
    headline: "From ready to go, to Adelaide site secured. One programme, one price.",
    subheadline:
      "The Full Site Find Pathway combines Foundations and Live Deals into a single end-to-end site-find coaching programme for the Adelaide market. You get the preparation and the execution, with Guy alongside you from your first strategy session through to securing your first site. This pathway is about getting your structures right and finding the right site, not project managing the build. Flexible milestone-based payments mean you are never paying for a stage you have not started.",
    bullets: [
      "Foundations: entity structuring, finance readiness, and first Adelaide project strategy",
      "Live Deals: Adelaide site identification, feasibility modelling, due diligence, and negotiation coaching",
      "Valued at $10,500 purchased separately",
      "Flexible payment plan: 20% upfront ($2,000), then 3 x 25% ($2,500 each) at agreed milestones",
    ],
    formHeading: "Enquire about the Full Site Find Pathway",
    ctaLabel: "ENQUIRE NOW",
    price: "$9,500",
    saving: "Save $1,000 + flexible milestone payments",
  },
  "project-management": {
    eyebrow: "FURTHER IN YOUR JOURNEY?",
    headline: "Full Project Management",
    subheadline:
      "For clients who have completed the coaching programmes and are ready to execute their first Adelaide development. Guy manages the entire project alongside you, from DA coordination and builder selection through to construction oversight and final sale. You make the major decisions. He handles everything else. Typically suited to clients who have completed Foundations and Live Deals and are ready to build.",
    bullets: [],
    formHeading: "Enquire about Full Project Management",
    ctaLabel: "ENQUIRE",
    price: "From $50,000",
    saving: "",
  },
}

interface LpbEnquiryModalProps {
  bundle: BundleKey | null
  onClose: () => void
}

export function LpbEnquiryModal({ bundle, onClose }: LpbEnquiryModalProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  useEffect(() => {
    if (bundle) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [bundle])

  if (!bundle) return null

  const content = modalContent[bundle]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    setIsSubmitting(true)

    try {
      await submitContactSubmission({
        sourcePage: "/lpb",
        sourceComponent: "LpbEnquiryModal",
        triggerLabel: content.eyebrow,
        name,
        email,
        phone,
        message,
        details: {
          "Selected bundle key": bundle,
          "Offer headline": content.headline,
          "Offer price": content.price,
          Saving: content.saving || "-",
        },
      })
      setSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to send your enquiry.")
    } finally {
      setIsSubmitting(false)
    }
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
            {/* Left: Bundle Info */}
            <div className="bg-moore-navy px-8 lg:px-10 py-12 lg:py-14">
              <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">{content.eyebrow}</span>
              <div className="text-moore-gold text-3xl font-light mb-2">{content.price}</div>
              {content.saving && (
                <div className="inline-block bg-moore-gold/20 border border-moore-gold/40 text-moore-gold text-xs tracking-wide px-3 py-1 mb-4">
                  {content.saving}
                </div>
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
                  disabled={isSubmitting}
                  className="group w-full bg-moore-navy text-moore-offwhite text-xs tracking-widest uppercase px-8 py-4 hover:bg-moore-gold hover:text-moore-navy transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : content.ctaLabel}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                {submitError && <p className="text-red-500 text-xs text-center leading-relaxed">{submitError}</p>}
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
