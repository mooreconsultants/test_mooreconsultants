"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { LpaEnquiryModal, type ServiceKey } from "@/components/lpa/lpa-enquiry-modal"

const coreServices: {
  number: string
  title: string
  price: string
  tagline: string
  description: string
  deliverables: string[]
  highlight: boolean
  serviceKey: ServiceKey
}[] = [
  {
    number: "01",
    title: "Tour de Coastal",
    price: "$500",
    tagline: "The lowest-risk first step",
    description:
      "Walk active and completed development sites in Adelaide's coastal suburbs with Guy Moore. See how he reads a block, runs a preliminary feasibility, and identifies the opportunities most buyers walk straight past. This is not a seminar. It is Guy, on the ground, in the Adelaide suburbs where he has completed $23M in projects.",
    deliverables: [
      "Private site visits to active and completed Adelaide projects",
      "Behind-the-scenes look at real project financials and margins",
      "One-on-one Q&A with Guy throughout the tour",
      "Understand Adelaide's planning overlays and council requirements",
    ],
    highlight: false,
    serviceKey: "tour",
  },
  {
    number: "02",
    title: "Foundations",
    price: "$2,000",
    tagline: "Get your structures and strategy right",
    description:
      "The essential groundwork before you look at a single Adelaide site. This one-on-one coaching programme covers how to structure your entity, understand your finance position, and build a clear strategy for your first project. Most property courses skip this step entirely. Guy does not.",
    deliverables: [
      "Entity structuring for Adelaide property development",
      "Finance readiness assessment and borrowing capacity review",
      "Adelaide-specific development types and feasibility introduction",
      "First project action plan tailored to your goals and capital",
    ],
    highlight: false,
    serviceKey: "foundations",
  },
  {
    number: "03",
    title: "Live Deals",
    price: "$8,000",
    tagline: "Find and secure your first profitable Adelaide site",
    description:
      "The most critical step in any development. This coaching programme takes you through the entire site identification and acquisition process in the Adelaide market, from understanding what to look for in Glenelg, Brighton, Burnside, and Unley, to running a full feasibility and negotiating the deal. Guy is alongside you at every decision point.",
    deliverables: [
      "Adelaide site identification criteria and search strategy",
      "Full financial feasibility modelling with real Adelaide numbers",
      "Due diligence process, planning checks, and risk assessment",
      "Negotiation coaching and acquisition support through to settlement",
    ],
    highlight: true,
    serviceKey: "livedeals",
  },
]

export function LpaServices() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeService, setActiveService] = useState<ServiceKey | null>(null)

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
      <section id="services" className="py-24 lg:py-32 bg-moore-white overflow-hidden">
        <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">OUR SERVICES</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">Choose Your Starting Point</h2>
            </div>
            <p className="text-moore-charcoal/70 max-w-md mt-6 lg:mt-0 leading-relaxed">
              Every client starts somewhere different. Choose the service that matches where you are right now.
              Guy will tell you honestly if a different starting point makes more sense for your situation.
            </p>
          </div>

          {/* Core Services Grid */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
            {coreServices.map((service) => (
              <div key={service.number} className="group relative">
                <div
                  className={`h-full relative overflow-hidden transition-all duration-500 ${
                    service.highlight
                      ? "bg-moore-navy border border-moore-gold"
                      : "bg-moore-offwhite border border-transparent hover:border-moore-gold"
                  }`}
                >
                  {/* Top accent line */}
                  {!service.highlight && (
                    <div className="absolute top-0 left-0 w-0 h-1 bg-moore-gold transition-all duration-500 group-hover:w-full" />
                  )}
                  {service.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-moore-gold" />
                  )}

                  <div className="p-8 lg:p-10">
                    {service.highlight && (
                      <div className="inline-block bg-moore-gold text-moore-navy text-xs tracking-widest uppercase px-3 py-1 mb-6 font-medium">
                        Most Popular
                      </div>
                    )}

                    <span className="text-6xl font-serif opacity-15 block mb-4 text-moore-gold">
                      {service.number}
                    </span>

                    <h3
                      className={`font-serif text-2xl mb-2 ${
                        service.highlight ? "text-moore-offwhite" : "text-moore-navy"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`text-sm tracking-wide mb-4 ${
                        service.highlight ? "text-moore-gold" : "text-moore-charcoal/60"
                      }`}
                    >
                      {service.tagline}
                    </p>

                    <div
                      className={`text-3xl font-light mb-6 ${
                        service.highlight ? "text-moore-gold" : "text-moore-navy"
                      }`}
                    >
                      {service.price}
                    </div>

                    <p
                      className={`text-sm leading-relaxed mb-8 ${
                        service.highlight ? "text-moore-offwhite/70" : "text-moore-charcoal/70"
                      }`}
                    >
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-10">
                      {service.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-3 text-sm ${
                            service.highlight ? "text-moore-offwhite/80" : "text-moore-charcoal/80"
                          }`}
                        >
                          <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-moore-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setActiveService(service.serviceKey)}
                      className={`group/link inline-flex items-center gap-2 text-sm tracking-widest uppercase transition-colors ${
                        service.highlight
                          ? "text-moore-gold hover:text-moore-offwhite"
                          : "text-moore-charcoal hover:text-moore-gold"
                      }`}
                    >
                      Enquire Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Management - Secondary Offering */}
          <div className="border border-moore-charcoal/20 p-8 lg:p-10 mt-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <span className="text-moore-charcoal/50 text-xs tracking-[0.4em] mb-3 block">FURTHER IN YOUR JOURNEY?</span>
                <h3 className="font-serif text-2xl text-moore-navy mb-2">Full Project Management</h3>
                <p className="text-moore-charcoal/60 text-sm leading-relaxed max-w-2xl">
                  For clients who have completed the coaching programmes and are ready to execute their first Adelaide
                  development. Guy manages the entire project alongside you, from DA coordination and builder selection
                  through to construction oversight and final sale. You make the major decisions. He handles everything
                  else. Typically suited to clients who have completed Foundations and Live Deals and are ready to build.
                </p>
              </div>
              <div className="flex flex-col items-start lg:items-end gap-4 flex-shrink-0">
                <div className="text-moore-navy text-2xl font-light">From $50,000</div>
                <button
                  onClick={() => setActiveService("pm")}
                  className="group/link inline-flex items-center gap-2 text-moore-charcoal text-sm tracking-widest uppercase hover:text-moore-gold transition-colors"
                >
                  Enquire
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product-specific Enquiry Modal */}
      <LpaEnquiryModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </>
  )
}
