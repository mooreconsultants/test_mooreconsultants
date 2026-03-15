"use client"

import { useEffect, useRef } from "react"
import { Search, FileSearch, Calculator, HardHat, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "Understand your goals, budget, timeline, and risk tolerance to create a tailored strategy.",
    icon: Search,
  },
  {
    number: "02",
    title: "Site Tour",
    description: "Walk completed Adelaide projects with Guy — see real results and get behind-the-scenes insights before you commit.",
    icon: FileSearch,
  },
  {
    number: "03",
    title: "Foundations",
    description: "One-on-one coaching to build your knowledge, validate your numbers, and prepare you to move with confidence.",
    icon: Calculator,
  },
  {
    number: "04",
    title: "Site Find",
    description: "Identify and validate high-potential development sites — market analysis, feasibility modeling, and negotiation support.",
    icon: HardHat,
  },
  {
    number: "05",
    title: "Full Project Management",
    description: "End-to-end support from DA through to settlement — builder selection, construction oversight, and sales execution.",
    icon: TrendingUp,
  },
]

export function ProcessSection() {
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
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">THE PROCESS</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">Your Path to Profit</h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
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

                  {/* Content */}
                  <div className={`${isEven ? "lg:pr-24 lg:text-right" : "lg:col-start-2 lg:pl-24"}`}>
                    <div className={`${isEven ? "lg:ml-auto" : ""} max-w-md`}>
                      {/* Mobile number */}
                      <span className="lg:hidden text-moore-gold text-4xl font-serif block mb-4">{step.number}</span>

                      <div className={`flex items-center gap-4 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 bg-moore-navy flex items-center justify-center">
                          <Icon className="w-5 h-5 text-moore-gold" />
                        </div>
                        <h3 className="font-serif text-2xl text-moore-navy">{step.title}</h3>
                      </div>

                      <p className="text-moore-charcoal/70 leading-relaxed">{step.description}</p>
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
