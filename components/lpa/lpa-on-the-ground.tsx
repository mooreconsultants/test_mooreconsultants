"use client"

import { useEffect, useRef } from "react"
import { Eye, Ruler, MapPin, FileText } from "lucide-react"
import { ArrowRight } from "lucide-react"

const visitHighlights = [
  {
    icon: Eye,
    title: "Zoning and Overlay Analysis",
    description: "Identify development potential and planning constraints before you commit a single dollar.",
  },
  {
    icon: Ruler,
    title: "Site Measurements",
    description: "Assess dimensions, setbacks, and buildable area for maximum yield on any given block.",
  },
  {
    icon: MapPin,
    title: "Neighbourhood Assessment",
    description: "Evaluate surrounding developments, demographics, and real market demand in the area.",
  },
  {
    icon: FileText,
    title: "Preliminary Feasibility",
    description: "On-the-spot analysis of costs, returns, and deal viability before you waste time on a dud.",
  },
]

export function LpaOnTheGround() {
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
    <section className="py-24 lg:py-32 bg-moore-navy overflow-hidden">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">ON THE GROUND</span>
          <div className="lg:flex lg:items-end lg:justify-between">
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-moore-offwhite max-w-2xl leading-tight">
              See Opportunity Where Others See Obstacles
            </h2>
            <p className="text-moore-offwhite/60 max-w-md mt-6 lg:mt-0 leading-relaxed">
              The Tour de Coastal is where the coaching begins. You walk active and completed development sites with
              Guy Moore and see exactly how he reads a block of land, runs a feasibility, and spots the opportunities
              that most buyers walk straight past.
            </p>
          </div>
        </div>

        {/* Video and Content Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          {/* Video Container */}
          <div className="lg:col-span-7 relative mb-12 lg:mb-0">
            <div className="relative">
              {/* Gold accent frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-moore-gold" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-moore-gold" />

              {/* Video */}
              <div className="relative bg-moore-charcoal aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/aerial-view-of-residential-development-site.jpg"
                >
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video_Revision_Request_Granted-H2mpoYTRyghufHilHZuaBqV6bLxeRm.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <p className="text-moore-offwhite/40 text-sm mt-6 italic">
              A recent site assessment in Adelaide's coastal suburbs -- identifying a development opportunity the
              vendor had missed entirely.
            </p>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-5">
            <div className="lg:pl-8 lg:border-l border-moore-gold/20">
              <h3 className="font-serif text-2xl lg:text-3xl text-moore-offwhite mb-6">
                What You Learn on the Tour
              </h3>
              <p className="text-moore-offwhite/70 leading-relaxed mb-10">
                Most buyers see a block of land. Guy sees setback requirements, easement constraints, slope
                percentages, and council overlays. On the Tour de Coastal, you learn to see what he sees. In two
                hours on the ground, you will gain more actionable knowledge than weeks of desktop research.
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {visitHighlights.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-moore-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-moore-gold/20 transition-colors">
                          <Icon className="w-5 h-5 text-moore-gold" />
                        </div>
                        <div>
                          <h4 className="text-moore-offwhite font-medium mb-1 text-sm">{item.title}</h4>
                          <p className="text-moore-offwhite/50 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-moore-gold/20">
                <p className="text-moore-offwhite/60 text-sm mb-4">
                  The Tour de Coastal is $500 and the ideal first step before committing to anything further.
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-moore-gold hover:text-moore-offwhite transition-colors"
                >
                  <span className="text-sm tracking-wide">Book the Tour de Coastal</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
