"use client"

import { useEffect, useRef } from "react"
import { Target, Award, Users, Handshake } from "lucide-react"


const differentiators = [
  {
    icon: Target,
    title: "Practical Advice",
    description: "Clear decisions and priorities, not hype or jargon",
  },
  {
    icon: Award,
    title: "20+ Years’ Experience",
    description: "Technology, cybersecurity, government and Defence leadership",
  },
  {
    icon: Users,
    title: "Independent Perspective",
    description: "Advice grounded in your organisation and priorities",
  },
  {
    icon: Handshake,
    title: "Commercial Understanding",
    description: "Connect technology decisions to business outcomes",
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

          <h2 className="font-serif text-3xl lg:text-4xl text-moore-offwhite mb-12">Why Moore Developments?</h2>

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
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85"
            alt="Modern professional workplace"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay Quote */}
          <div className="absolute inset-0 bg-gradient-to-t from-moore-navy/80 via-transparent to-transparent flex items-end p-8 lg:p-12">
            <div>
              <div className="text-moore-offwhite text-5xl lg:text-7xl font-light mb-2">20+</div>
              <div className="text-moore-offwhite/80 text-sm tracking-widest uppercase">Years of Technology Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
