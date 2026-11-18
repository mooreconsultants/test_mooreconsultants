"use client"

import { useEffect, useRef } from "react"

const experience = [
  {
    title: "Federal Government & Defence",
    description: "Rebuilt and led Palo Alto Networks' Federal Government and Defence business, establishing leadership structures and helping grow the Canberra operation to approximately 40 people.",
    label: "Leadership and growth",
    metric: "~40",
    metricLabel: "Canberra operation"
  },
  {
    title: "Sovereign Cybersecurity",
    description: "Led the team responsible for achieving IRAP assessment of multinational cybersecurity capabilities for Australian sovereign delivery.",
    label: "Security strategy",
    metric: "IRAP",
    metricLabel: "Assessment"
  },
  {
    title: "State Government Cybersecurity",
    description: "Helped establish strategic South Australian Government relationships and landmark whole-of-government agreements. Recognised as JAPAC Salesperson of the Year.",
    label: "Technology leadership",
    metric: "JAPAC",
    metricLabel: "Recognition"
  }
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("animate-fade-in")
    }), { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  return (
    <section className="py-24 lg:py-32 bg-moore-white">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="mb-16">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">EXPERIENCE HIGHLIGHTS</span>
          <div className="lg:flex lg:items-end lg:justify-between">
            <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">Leadership in Practice</h2>
            <p className="text-moore-charcoal/60 max-w-md mt-4 lg:mt-0 leading-relaxed">Career milestones that inform the practical guidance offered today.</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-7 bg-moore-offwhite p-8 lg:p-12 relative">
            <span className="text-moore-gold text-8xl font-serif absolute top-4 left-8 opacity-20">01</span>
            <div className="relative z-10 pt-16">
              <h3 className="font-serif text-2xl lg:text-3xl text-moore-navy mb-7">{experience[0].title}</h3>
              <p className="text-moore-charcoal/80 text-lg leading-relaxed mb-10">{experience[0].description}</p>
              <div className="flex items-center justify-between gap-8 border-t border-moore-charcoal/10 pt-6">
                <div className="text-moore-charcoal/60 text-sm">{experience[0].label}</div>
                <div className="text-right">
                  <div className="text-moore-gold text-2xl font-light">{experience[0].metric}</div>
                  <div className="text-moore-charcoal/40 text-xs">{experience[0].metricLabel}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {experience.slice(1).map((item, index) => (
              <div key={item.title} className="bg-moore-offwhite p-8 relative flex-1">
                <span className="text-moore-gold text-4xl font-serif opacity-40">0{index + 2}</span>
                <h3 className="font-serif text-xl text-moore-navy mt-3 mb-4">{item.title}</h3>
                <p className="text-moore-charcoal/80 leading-relaxed text-sm mb-8">{item.description}</p>
                <div className="flex items-center justify-between border-t border-moore-charcoal/10 pt-5">
                  <span className="text-moore-charcoal/60 text-xs">{item.label}</span>
                  <span className="text-moore-gold text-xl font-light">{item.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border border-moore-charcoal/10 p-8 lg:p-10">
          <div className="lg:flex lg:items-center lg:justify-between gap-8">
            <div className="mb-6 lg:mb-0">
              <span className="text-moore-gold text-xs tracking-[0.4em] mb-2 block">MOORE DEVELOPMENTS TODAY</span>
              <p className="text-moore-charcoal/70 text-sm leading-relaxed max-w-2xl">Advisory across cybersecurity strategy, AI adoption and business process improvement. Recent work includes assessing potential workflow efficiencies and coaching people developing applications with AI-assisted tools.</p>
            </div>
            <div className="flex gap-8 flex-shrink-0">
              <div className="text-center">
                <div className="text-moore-navy text-3xl font-light">20+</div>
                <div className="text-moore-charcoal/50 text-xs tracking-wide uppercase mt-1">Years in Tech</div>
              </div>
              <div className="text-center">
                <div className="text-moore-navy text-3xl font-light">8</div>
                <div className="text-moore-charcoal/50 text-xs tracking-wide uppercase mt-1">PANW Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
