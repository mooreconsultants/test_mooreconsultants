"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, CheckCircle, Tag } from "lucide-react"
import { LpbEnquiryModal, type BundleKey } from "@/components/lpb/lpb-enquiry-modal"

const bundles = [
  {
    key: "tour-foundations" as BundleKey,
    number: "01",
    eyebrow: "Most Popular Starting Point",
    name: "Tour + Foundations",
    tagline: "See it, then build the strategy",
    price: "$2,500",
    originalPrice: "$3,000",
    saving: "Save $500 — Tour included free",
    highlight: false,
    description:
      "The ideal entry point for Adelaide professionals who want to see the reality before they commit. Walk active development sites in Glenelg, Brighton, and Somerton Park with Guy Moore, then move straight into the Foundations coaching programme. The Tour de Coastal is included at no extra cost.",
    includes: [
      "Tour de Coastal (valued at $500) — included free",
      "Foundations one-on-one coaching programme",
      "Entity structuring and Adelaide finance readiness",
      "First Adelaide project action plan",
    ],
    cta: "Claim This Bundle",
  },
  {
    key: "tour-to-foundations" as BundleKey,
    number: "02",
    eyebrow: "Lowest Entry Point",
    name: "Tour to Foundations",
    tagline: "Book the Tour. Unlock 25% off Foundations.",
    price: "$500 to start",
    originalPrice: null,
    saving: "Save $625 on Foundations if you proceed within 3 months",
    highlight: false,
    description:
      "The easiest way to get started. Book the Tour de Coastal for $500 and walk real Adelaide development sites with Guy. If you decide to proceed to Foundations within three months, Guy personally honours a 25% discount. No automated codes. No fine print. Just his word.",
    includes: [
      "Tour de Coastal at standard price: $500",
      "25% off Foundations if you proceed within 3 months",
      "No obligation after the tour",
      "Total if you proceed: $2,375 (versus $3,000 separately)",
    ],
    cta: "Book the Tour",
  },
  {
    key: "full-pathway" as BundleKey,
    number: "03",
    eyebrow: "Best Value",
    name: "Full Development Pathway",
    tagline: "From ready to go, to Adelaide site secured",
    price: "$10,000",
    originalPrice: "$10,500",
    saving: "Save $500 + flexible milestone payments",
    highlight: true,
    description:
      "Foundations and Live Deals combined into a single end-to-end coaching programme for the Adelaide market. You get the preparation and the execution, with Guy alongside you from your first strategy session through to securing your first site. Pay in milestones, not upfront.",
    includes: [
      "Foundations: entity structuring, finance readiness, first Adelaide project strategy",
      "Live Deals: Adelaide site identification, feasibility modelling, due diligence, negotiation",
      "Flexible payment plan available",
      "20% upfront ($2,000), then 3 x 25% ($2,500 each) at agreed milestones",
    ],
    cta: "Enquire Now",
  },
  {
    key: "full-journey" as BundleKey,
    number: "04",
    eyebrow: "Complete Track",
    name: "Full Journey",
    tagline: "The complete Adelaide coaching track, start to finish",
    price: "$11,500",
    originalPrice: "$13,000",
    saving: "Save $1,500 + flexible milestone payments",
    highlight: false,
    description:
      "All three coaching programmes bundled into one. Tour de Coastal, Foundations, and Live Deals. The most comprehensive way to work with Guy Moore and the clearest path from zero to a completed, profitable Adelaide development. Milestone payments available.",
    includes: [
      "Tour de Coastal: see real Adelaide projects and real financials",
      "Foundations: get your structures, finance, and Adelaide strategy right",
      "Live Deals: find, assess, and secure your first profitable Adelaide site",
      "Flexible milestone payment plan available",
    ],
    cta: "Enquire Now",
  },
]

export function LpbServices() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeModal, setActiveModal] = useState<BundleKey | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section id="services" className="py-24 lg:py-32 bg-moore-offwhite">
        <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">OUR BUNDLES</span>
            <div className="lg:flex lg:items-end lg:justify-between">
              <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-moore-navy max-w-2xl leading-tight">
                Choose the Bundle That Matches Your Commitment
              </h2>
              <p className="text-moore-charcoal/60 max-w-md mt-6 lg:mt-0 leading-relaxed">
                Every bundle gives you more of Guy's time and expertise for less than purchasing services separately.
                Start where you are. Build from there. Guy will tell you honestly which one is right for your situation.
              </p>
            </div>
          </div>

          {/* Bundle Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
            {bundles.map((bundle) => (
              <div
                key={bundle.key}
                className={`relative flex flex-col ${
                  bundle.highlight
                    ? "bg-moore-navy text-moore-offwhite"
                    : "bg-moore-white border border-moore-charcoal/10"
                }`}
              >
                {bundle.highlight && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-moore-gold text-moore-navy text-xs tracking-widest uppercase px-4 py-1 font-medium">
                      Best Value
                    </span>
                  </div>
                )}

                <div className="p-8 lg:p-10 flex flex-col flex-1">
                  {/* Number + Eyebrow */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs tracking-[0.4em] uppercase text-moore-gold">
                      {bundle.eyebrow}
                    </span>
                    <span
                      className={`font-serif text-5xl font-light ${
                        bundle.highlight ? "text-moore-offwhite/10" : "text-moore-navy/10"
                      }`}
                    >
                      {bundle.number}
                    </span>
                  </div>

                  {/* Name + Tagline */}
                  <h3
                    className={`font-serif text-2xl lg:text-3xl mb-2 ${
                      bundle.highlight ? "text-moore-offwhite" : "text-moore-navy"
                    }`}
                  >
                    {bundle.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      bundle.highlight ? "text-moore-offwhite/60" : "text-moore-charcoal/60"
                    }`}
                  >
                    {bundle.tagline}
                  </p>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span
                        className={`text-3xl font-light ${
                          bundle.highlight ? "text-moore-gold" : "text-moore-navy"
                        }`}
                      >
                        {bundle.price}
                      </span>
                      {bundle.originalPrice && (
                        <span
                          className={`text-sm line-through ${
                            bundle.highlight ? "text-moore-offwhite/30" : "text-moore-charcoal/30"
                          }`}
                        >
                          {bundle.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-1.5">
                      <Tag className="w-3 h-3 text-moore-gold" />
                      <span className="text-moore-gold text-xs tracking-wide">{bundle.saving}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className={`w-full h-px mb-6 ${
                      bundle.highlight ? "bg-moore-offwhite/10" : "bg-moore-charcoal/10"
                    }`}
                  />

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      bundle.highlight ? "text-moore-offwhite/70" : "text-moore-charcoal/70"
                    }`}
                  >
                    {bundle.description}
                  </p>

                  {/* Includes */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {bundle.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-moore-gold" />
                        <span className={bundle.highlight ? "text-moore-offwhite/80" : "text-moore-charcoal/80"}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => setActiveModal(bundle.key)}
                    className={`group w-full flex items-center justify-center gap-3 px-8 py-4 text-xs tracking-widest uppercase transition-all ${
                      bundle.highlight
                        ? "bg-moore-gold text-moore-navy hover:bg-moore-offwhite"
                        : "bg-moore-navy text-moore-offwhite hover:bg-moore-charcoal"
                    }`}
                  >
                    {bundle.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Project Management Secondary Panel */}
          <div className="border border-moore-charcoal/10 bg-moore-white p-8 lg:p-10">
            <div className="lg:flex lg:items-center lg:justify-between gap-8">
              <div className="mb-6 lg:mb-0">
                <span className="text-moore-gold text-xs tracking-[0.4em] mb-3 block">FURTHER IN YOUR JOURNEY?</span>
                <h3 className="font-serif text-2xl text-moore-navy mb-3">Full Project Management</h3>
                <p className="text-moore-charcoal/60 text-sm leading-relaxed max-w-2xl">
                  For clients who have completed the coaching programmes and are ready to execute their first Adelaide
                  development. Guy manages the entire project alongside you, from DA coordination with Adelaide councils
                  and builder selection through to construction oversight and final sale. Typically suited to clients who
                  have completed the Full Development Pathway or Full Journey bundle and are ready to build.
                </p>
              </div>
              <div className="flex-shrink-0 text-right lg:text-left">
                <div className="text-moore-navy text-2xl font-light mb-1">From $50,000</div>
                <button
                  onClick={() => setActiveModal("discovery")}
                  className="group inline-flex items-center gap-2 text-moore-gold hover:text-moore-navy transition-colors text-sm tracking-wide"
                >
                  Enquire
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LpbEnquiryModal
        bundle={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </>
  )
}
