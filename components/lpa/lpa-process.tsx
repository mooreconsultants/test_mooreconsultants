"use client"

import { useEffect, useRef } from "react"
import { BookOpen, MapPin, HardHat } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Get Ready",
    subtitle: "Foundations — $2,000",
    description:
      "Start with the Foundations programme to get your structures, finance position, and Adelaide-specific strategy right. This is the groundwork every successful developer needs before they look at a single site. You will leave with an entity structure, a finance readiness assessment, and a first project action plan tailored to the Adelaide market.",
    icon: BookOpen,
    optional: "Or begin with the Tour de Coastal ($500) to walk active Adelaide development sites with Guy before committing to anything further.",
  },
  {
    number: "02",
    title: "Find Your Site",
    subtitle: "Live Deals — $8,000",
    description:
      "Work with Guy to identify, evaluate, and secure a profitable development site in Adelaide. This is where the real coaching happens. Guy is alongside you at every decision point, from initial site search through feasibility modelling, due diligence, and negotiation. You are never making a $100,000 decision alone.",
    icon: MapPin,
    optional: null,
  },
  {
    number: "03",
    title: "Build and Profit",
    subtitle: "Project Management — From $50,000",
    description:
      "For clients who have completed the coaching programmes and are ready to execute, Guy can manage the entire Adelaide development alongside you. DA coordination, builder selection, construction oversight, and sales strategy. You make the major decisions. Guy handles everything else.",
    icon: HardHat,
    optional: null,
  },
]

export function LpaProcess() {
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
    <section id="process" className="py-24 lg:py-32 bg-moore-offwhite overflow-hidden">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-20">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">THE JOURNEY</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy mb-6">
            Your Path to a Profitable Adelaide Development
          </h2>
          <p className="text-moore-charcoal/60 max-w-xl mx-auto leading-relaxed">
            Every client starts at a different point. The journey below is the natural progression, but you can enter
            at whichever step makes sense for where you are right now. Guy will tell you honestly which starting point
            is right for your situation.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-moore-gold/20 hidden lg:block" />

          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                    index !== steps.length - 1 ? "lg:pb-24" : ""
                  }`}
                >
                  {/* Number on line */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 w-16 h-16 bg-moore-white border border-moore-gold items-center justify-center z-10">
                    <span className="text-moore-gold font-serif text-xl">{step.number}</span>
                  </div>

                  <div className={`${isEven ? "lg:pr-24 lg:text-right" : "lg:col-start-2 lg:pl-24"}`}>
                    <div className={`${isEven ? "lg:ml-auto" : ""} max-w-md`}>
                      <span className="lg:hidden text-moore-gold text-4xl font-serif block mb-4">{step.number}</span>

                      <div className={`flex items-center gap-4 mb-2 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 bg-moore-navy flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-moore-gold" />
                        </div>
                        <h3 className="font-serif text-2xl text-moore-navy">{step.title}</h3>
                      </div>

                      <p className={`text-moore-gold text-xs tracking-widest uppercase mb-4 ${isEven ? "lg:text-right" : ""}`}>
                        {step.subtitle}
                      </p>

                      <p className="text-moore-charcoal/70 leading-relaxed mb-4">{step.description}</p>

                      {step.optional && (
                        <p className="text-moore-charcoal/50 text-sm italic">{step.optional}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
