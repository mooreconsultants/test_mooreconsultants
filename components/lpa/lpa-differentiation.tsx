"use client"

import { useEffect, useRef } from "react"
import { Target, Award, Users, Handshake } from "lucide-react"

const differentiators = [
  {
    icon: Target,
    title: "He builds with you, not just teaches you",
    description:
      "Guy Moore is an active developer. When he coaches you, he is drawing on projects he is running right now, not case studies from ten years ago. You get real-world knowledge at the point it is most relevant.",
  },
  {
    icon: Award,
    title: "A $23M track record you can verify",
    description:
      "Guy shares his actual project financials with clients. You will see the real numbers, the real margins, and the real lessons from every development he has completed. No polished pitch decks. Just the truth.",
  },
  {
    icon: Users,
    title: "One-on-one, not a group course",
    description:
      "Every client gets direct access to Guy. There is no cohort, no online portal, and no recorded videos. Your coaching is tailored to your situation, your capital position, and your goals.",
  },
  {
    icon: Handshake,
    title: "Your success is the only metric that matters",
    description:
      "Guy takes a limited number of clients at any one time. That is by design. It means every client gets the attention and accountability they need to actually execute, not just learn.",
  },
]

export function LpaDifferentiation() {
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

          <h2 className="font-serif text-3xl lg:text-4xl text-moore-offwhite mb-4">Why Moore Consultants?</h2>

          <p className="text-moore-offwhite/60 leading-relaxed mb-12 max-w-md">
            There is no shortage of property development courses and coaches in Australia. Here is what makes this
            different.
          </p>

          <div className="space-y-10">
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-moore-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-moore-gold" />
                  </div>
                  <div>
                    <h3 className="text-moore-offwhite text-base font-medium mb-2">{item.title}</h3>
                    <p className="text-moore-offwhite/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right - Image with Stat Overlay */}
        <div className="relative h-[500px] lg:h-auto">
          <img
            src="/modern-luxury-property-development-aerial-view-ade.jpg"
            alt="Moore Consultants completed development project"
            className="w-full h-full object-cover"
          />

          {/* Overlay Stat */}
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
