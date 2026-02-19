"use client"

import { useEffect, useRef } from "react"
import { Target, Award, Users, Handshake } from "lucide-react"

const differentiators = [
  {
    icon: Target,
    title: "Execution-Focused",
    description: "We build with you, not just teach theory",
  },
  {
    icon: Award,
    title: "$23M Track Record",
    description: "Proven results across Adelaide's market",
  },
  {
    icon: Users,
    title: "Personalised Approach",
    description: "One-on-one coaching, not mass courses",
  },
  {
    icon: Handshake,
    title: "Aligned Incentives",
    description: "Your success is our success",
  },
]

export function DifferentiationSection() {
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
    <section className="overflow-hidden">
      <div ref={sectionRef} className="grid lg:grid-cols-2 opacity-0 transition-opacity duration-1000">
        {/* Left - Dark Section */}
        <div className="bg-moore-navy px-8 lg:px-16 py-24 lg:py-32">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-8 block">WHY CHOOSE US</span>

          <h2 className="font-serif text-3xl lg:text-4xl text-moore-offwhite mb-12">Why Moore Consultants?</h2>

          <div className="space-y-8">
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-moore-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-moore-gold" />
                  </div>
                  <div>
                    <h3 className="text-moore-offwhite text-lg mb-2">{item.title}</h3>
                    <p className="text-moore-offwhite/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right - Image with Quote */}
        <div className="relative h-[500px] lg:h-auto">
          <img
            src="/modern-luxury-property-development-aerial-view-ade.jpg"
            alt="Moore Consultants project"
            className="w-full h-full object-cover"
          />

          {/* Overlay Quote */}
          <div className="absolute inset-0 bg-gradient-to-t from-moore-navy/80 via-transparent to-transparent flex items-end p-8 lg:p-12">
            <div>
              <div className="text-moore-offwhite text-5xl lg:text-7xl font-light mb-2">$23M+</div>
              <div className="text-moore-offwhite/80 text-sm tracking-widest uppercase">In Completed Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
