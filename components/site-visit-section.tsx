"use client"

import { useEffect, useRef } from "react"
import { MapPin, Eye, Ruler, FileText } from "lucide-react"

const visitHighlights = [
  {
    icon: Eye,
    title: "Security & Risk Review",
    description: "Understand security priorities, exposure and risk.",
  },
  {
    icon: Ruler,
    title: "AI Opportunity Discovery",
    description: "Identify valuable use cases and suitable workflows.",
  },
  {
    icon: MapPin,
    title: "Systems & Integration",
    description: "Explore connections across business applications.",
  },
  {
    icon: FileText,
    title: "Strategic Roadmap",
    description: "Turn insights into prioritised practical next steps.",
  },
]

export function SiteVisitSection() {
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
    <section id="site-visit" className="py-24 lg:py-32 bg-moore-navy overflow-hidden">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">IN PRACTICE</span>
          <div className="lg:flex lg:items-end lg:justify-between">
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-moore-white max-w-2xl text-balance">
              See Opportunity Where Others See Complexity
            </h2>
            <p className="text-moore-white/60 max-w-md mt-6 lg:mt-0 leading-relaxed">
              A close look at existing systems, workflows and risks can reveal practical opportunities for cybersecurity, AI and technology improvement.
            </p>
          </div>
        </div>

        {/* Video & Content Grid */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          {/* Video Container */}
          <div className="lg:col-span-7 relative mb-12 lg:mb-0">
            <div className="relative">
              {/* Gold accent frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-moore-gold" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-moore-gold" />

              {/* Video */}
              <div className="relative bg-moore-charcoal aspect-video rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1500&q=85" alt="Abstract AI and technology visualisation" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

          {/* Content Side */}
          <div className="lg:col-span-5">
            <div className="lg:pl-8 lg:border-l border-moore-gold/20">
              <h3 className="font-serif text-2xl lg:text-3xl text-moore-white mb-6">
                What Happens During an Opportunity Review
              </h3>
              <p className="text-moore-white/70 leading-relaxed mb-10">
                We start with the business challenge — looking at your people, systems and priorities before recommending a practical path forward.
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
                          <h4 className="text-moore-white font-medium mb-1 text-sm">{item.title}</h4>
                          <p className="text-moore-white/50 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="mt-10 pt-8 border-t border-moore-gold/20">
                <p className="text-moore-white/60 text-sm mb-4">
                  Have a business challenge in mind? Let's explore it.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-moore-gold hover:text-moore-white transition-colors group"
                >
                  <span className="text-sm tracking-wide">Start a Conversation</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
