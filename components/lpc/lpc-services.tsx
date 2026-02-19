"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle, Clock } from "lucide-react"
import { LpcEnquiryModal, type EarlyBirdKey } from "@/components/lpc/lpc-enquiry-modal"

const services = [
  {
    key: "tour" as EarlyBirdKey,
    number: "01",
    eyebrow: "LOWEST ENTRY POINT",
    name: "Tour de Coastal",
    tagline: "Walk Adelaide development sites with Guy",
    earlyBirdPrice: "$500",
    standardPrice: "$650",
    saving: "Save $150 -- early bird rate",
    highlight: false,
    description:
      "Walk active and completed development sites in Adelaide's coastal suburbs with Guy Moore. See his real project financials, not a case study. The lowest-risk way to find out whether property development is right for you.",
    includes: [
      "Private site visits to active Adelaide projects",
      "Guy's real project financials, on the ground",
      "Adelaide zoning and overlay analysis",
      "On-the-spot feasibility walkthrough",
    ],
    cta: "CLAIM EARLY BIRD RATE",
  },
  {
    key: "foundations" as EarlyBirdKey,
    number: "02",
    eyebrow: "MOST POPULAR STARTING POINT",
    name: "Foundations",
    tagline: "Get your Adelaide development strategy right",
    earlyBirdPrice: "$2,000",
    standardPrice: "$2,500",
    saving: "Save $500 -- early bird rate",
    highlight: true,
    description:
      "Get your entity structures, finance position, and Adelaide development strategy right before you spend a dollar on a site. One-on-one with Guy Moore. The foundation everything else is built on.",
    includes: [
      "Entity structuring for Adelaide property development",
      "Finance readiness and capital position review",
      "First Adelaide project action plan",
      "One-on-one coaching with Guy Moore",
    ],
    cta: "CLAIM EARLY BIRD RATE",
  },
  {
    key: "foundations-bundle" as EarlyBirdKey,
    number: "03",
    eyebrow: "BEST VALUE ENTRY",
    name: "Tour + Foundations Bundle",
    tagline: "See it, then build the strategy. Both at early bird rates.",
    earlyBirdPrice: "$2,500",
    standardPrice: "$3,200",
    saving: "Save $700 -- both at early bird rates",
    highlight: false,
    description:
      "The Tour de Coastal and Foundations combined at early bird pricing. Walk Adelaide development sites with Guy, then move straight into the Foundations coaching programme. The most efficient way to start.",
    includes: [
      "Tour de Coastal at early bird rate ($500)",
      "Foundations at early bird rate ($2,000)",
      "Seamless progression from seeing it to planning it",
      "Total saving: $700 versus standard individual prices",
    ],
    cta: "CLAIM EARLY BIRD RATE",
  },
  {
    key: "full-pathway" as EarlyBirdKey,
    number: "04",
    eyebrow: "COMPLETE COACHING TRACK",
    name: "Full Development Pathway",
    tagline: "From strategy to Adelaide site secured",
    earlyBirdPrice: "$10,000",
    standardPrice: "$12,000",
    saving: "Save $2,000 + milestone payment plan",
    highlight: false,
    description:
      "Foundations and Live Deals combined into a single end-to-end coaching programme for the Adelaide market. Both at early bird rates. Pay in milestones, not upfront. From strategy to site secured.",
    includes: [
      "Foundations at early bird rate ($2,000)",
      "Live Deals at early bird rate ($8,000)",
      "Flexible payment plan: 20% upfront, then 3 x 25% at milestones",
      "Total saving: $2,000 versus standard bundle price",
    ],
    cta: "CLAIM EARLY BIRD RATE",
  },
]

export function LpcServices() {
  const [activeModal, setActiveModal] = useState<EarlyBirdKey | null>(null)

  return (
    <>
      <section id="services" className="py-24 lg:py-32 bg-moore-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          {/* Header */}
          <div className="mb-16 lg:mb-20">
            <span className="text-moore-gold text-xs tracking-[0.4em] uppercase mb-4 block">EARLY BIRD PRICING</span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy max-w-xl leading-tight">
                Choose Your Starting Point
              </h2>
              <div className="flex items-center gap-2 bg-moore-gold/10 border border-moore-gold/30 px-4 py-3 max-w-xs">
                <Clock className="w-4 h-4 text-moore-gold flex-shrink-0" />
                <p className="text-moore-charcoal text-xs leading-relaxed">
                  Early bird pricing closes end of month. Standard prices resume after.
                </p>
              </div>
            </div>
            <p className="text-moore-charcoal/60 mt-4 max-w-2xl leading-relaxed">
              All four coaching services are available at early bird rates this month only. Start where you are.
              Guy will tell you honestly which service is the right entry point for your situation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <div
                key={service.key}
                className={`relative flex flex-col border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  service.highlight
                    ? "border-moore-gold bg-moore-navy"
                    : "border-moore-charcoal/10 bg-moore-white"
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-moore-gold text-moore-navy text-[10px] tracking-widest uppercase px-3 py-1 font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs tracking-[0.4em] uppercase ${ service.highlight ? "text-moore-gold/60" : "text-moore-charcoal/40"}`}>
                      {service.number}
                    </span>
                    <span className={`text-[10px] tracking-wider uppercase px-2 py-0.5 border ${ service.highlight ? "border-moore-gold/30 text-moore-gold" : "border-moore-charcoal/20 text-moore-charcoal/60"}`}>
                      {service.eyebrow}
                    </span>
                  </div>

                  <h3 className={`font-serif text-2xl mb-1 ${ service.highlight ? "text-moore-offwhite" : "text-moore-navy"}`}>
                    {service.name}
                  </h3>
                  <p className={`text-xs mb-4 ${ service.highlight ? "text-moore-offwhite/50" : "text-moore-charcoal/50"}`}>
                    {service.tagline}
                  </p>

                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-light ${ service.highlight ? "text-moore-gold" : "text-moore-navy"}`}>
                        {service.earlyBirdPrice}
                      </span>
                      <span className={`text-sm line-through ${ service.highlight ? "text-moore-offwhite/30" : "text-moore-charcoal/30"}`}>
                        {service.standardPrice}
                      </span>
                    </div>
                    <div className={`inline-block text-[10px] tracking-wide px-2 py-0.5 mt-1 ${ service.highlight ? "bg-moore-gold/20 text-moore-gold" : "bg-moore-gold/10 text-moore-charcoal"}`}>
                      {service.saving}
                    </div>
                  </div>

                  <p className={`text-sm leading-relaxed mb-6 ${ service.highlight ? "text-moore-offwhite/60" : "text-moore-charcoal/60"}`}>
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {service.includes.map((item, i) => (
                      <li key={i} className={`flex items-start gap-2 text-xs ${ service.highlight ? "text-moore-offwhite/80" : "text-moore-charcoal/70"}`}>
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-moore-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setActiveModal(service.key)}
                    className={`w-full text-xs tracking-widest uppercase py-4 transition-all duration-300 flex items-center justify-center gap-2 ${
                      service.highlight
                        ? "bg-moore-gold text-moore-navy hover:bg-moore-offwhite"
                        : "bg-moore-navy text-moore-offwhite hover:bg-moore-gold hover:text-moore-navy"
                    }`}
                  >
                    {service.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
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

      <LpcEnquiryModal
        service={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </>
  )
}
