"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    location: "SOUTH BRIGHTON, SA",
    profit: "$857,000",
    metrics: [
      { label: "CoC Return", value: "163%" },
      { label: "Timeline", value: "24 Months" },
      { label: "Type", value: "Dual Occupancy" },
    ],
    image: "/luxury-modern-dual-occupancy-home-exterior-coastal.jpg",
  },
  {
    location: "GLENELG EAST, SA",
    profit: "$642,000",
    metrics: [
      { label: "CoC Return", value: "128%" },
      { label: "Timeline", value: "18 Months" },
      { label: "Type", value: "Townhouses" },
    ],
    image: "/modern-townhouse-development-adelaide-coastal-aust.jpg",
  },
  {
    location: "SOMERTON PARK, SA",
    profit: "$523,000",
    metrics: [
      { label: "CoC Return", value: "112%" },
      { label: "Timeline", value: "20 Months" },
      { label: "Type", value: "Subdivision" },
    ],
    image: "/images/properties/somerton-park-render-exterior.webp",
  },
]

export function CaseStudiesSection() {
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
    <section id="case-studies" className="py-24 lg:py-32 bg-moore-white">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">PORTFOLIO</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">Real Projects. Real Profits.</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-moore-charcoal text-sm tracking-widest uppercase hover:text-moore-gold transition-colors group mt-6 lg:mt-0"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative h-[400px] lg:h-[500px] overflow-hidden cursor-pointer">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.location}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-moore-navy/90 via-moore-navy/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <span className="text-moore-gold text-xs tracking-[0.3em] mb-4">{project.location}</span>

                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                  <div>
                    <div className="text-moore-offwhite text-6xl lg:text-8xl font-light mb-4">{project.profit}</div>
                    <span className="text-moore-offwhite/60 text-sm tracking-widest uppercase">Net Profit</span>
                  </div>

                  <div className="flex gap-8 lg:gap-12">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center lg:text-right">
                        <div className="text-moore-offwhite text-2xl lg:text-3xl font-light mb-1">{metric.value}</div>
                        <div className="text-moore-offwhite/60 text-xs tracking-wider uppercase">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-2 text-moore-gold text-sm tracking-widest uppercase">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
