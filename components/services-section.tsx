"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Site Acquisition & Feasibility",
    description: "We find and validate profitable development sites for you",
    deliverables: [
      "Market analysis & site identification",
      "Financial feasibility modeling",
      "Risk assessment & due diligence",
      "Negotiation support",
    ],
    investment: "From $10,000",
    size: "large",
  },
  {
    number: "02",
    title: "Full Project Management",
    description: "End-to-end support from approval to sale",
    deliverables: [
      "DA/CDC coordination",
      "Builder selection & contracts",
      "Construction oversight",
      "Sales strategy & execution",
    ],
    investment: "Custom Pricing",
    size: "medium",
  },
  {
    number: "03",
    title: "Tour de Coastal",
    description: "In-person tour of completed Adelaide projects",
    deliverables: ["Site visits to 3+ projects", "Behind-the-scenes insights", "Q&A with Guy"],
    investment: "Limited Availability",
    size: "small",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section id="services" className="py-24 lg:py-32 bg-moore-offwhite">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">OUR SERVICES</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">How We Work Together</h2>
          </div>
          <p className="text-moore-charcoal/70 max-w-md mt-6 lg:mt-0 leading-relaxed">
            Choose the level of support that matches your experience and goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Card */}
          <div className="lg:col-span-5 group">
            <div className="bg-moore-white p-8 lg:p-10 h-full rounded-2xl border border-transparent hover:border-moore-gold transition-all duration-500 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-0 h-1 bg-moore-gold transition-all duration-500 group-hover:w-full" />

              <span className="text-moore-gold text-6xl font-serif opacity-20 absolute top-4 right-6">
                {services[0].number}
              </span>

              <h3 className="font-serif text-2xl text-moore-navy mb-4 relative z-10">{services[0].title}</h3>

              <p className="text-moore-charcoal/70 mb-8 relative z-10">{services[0].description}</p>

              <ul className="space-y-3 mb-8 relative z-10">
                {services[0].deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-moore-charcoal/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-moore-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-auto relative z-10">
                <span className="text-moore-navy font-medium">{services[0].investment}</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-moore-charcoal text-sm hover:text-moore-gold transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Stacked Medium and Small Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
            {/* Medium Card */}
            <div className="group">
              <div className="bg-moore-white p-8 lg:p-10 rounded-2xl border border-transparent hover:border-moore-gold transition-all duration-500 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 w-0 h-1 bg-moore-gold transition-all duration-500 group-hover:w-full" />

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-moore-gold text-4xl font-serif opacity-30 mb-4 block">
                      {services[1].number}
                    </span>
                    <h3 className="font-serif text-2xl text-moore-navy mb-3">{services[1].title}</h3>
                    <p className="text-moore-charcoal/70 mb-6">{services[1].description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {services[1].deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-moore-charcoal/80 text-sm">
                          <CheckCircle className="w-3 h-3 text-moore-gold flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-4">
                    <span className="text-moore-navy font-medium">{services[1].investment}</span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-moore-charcoal text-sm hover:text-moore-gold transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Card - Different styling */}
            <div className="group">
              <div className="bg-moore-navy p-8 lg:p-10 rounded-2xl relative overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 w-0 h-1 bg-moore-gold transition-all duration-500 group-hover:w-full" />

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <span className="text-moore-gold text-4xl font-serif opacity-50">{services[2].number}</span>
                    <div>
                      <h3 className="font-serif text-xl text-moore-offwhite mb-2">{services[2].title}</h3>
                      <p className="text-moore-offwhite/60 text-sm">{services[2].description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-moore-gold text-sm">{services[2].investment}</span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-moore-offwhite text-sm hover:text-moore-gold transition-colors group/link"
                    >
                      Book Your Tour
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
