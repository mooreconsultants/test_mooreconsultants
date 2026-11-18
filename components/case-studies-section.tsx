"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"


const projects = [
  {
    location: "FEDERAL GOVERNMENT & DEFENCE",
    profit: "~40",
    metrics: [
      { label: "Focus", value: "Leadership" },
      { label: "Sector", value: "Federal" },
      { label: "Domain", value: "Cyber" },
    ],
    image: "https://images.unsplash.com/photo-1564457461758-8ff96e439e83?auto=format&fit=crop&w=1400&q=85",
    featured: true,
  },
  {
    location: "SOVEREIGN CYBERSECURITY",
    profit: "IRAP",
    metrics: [
      { label: "Focus", value: "Assessment" },
      { label: "Sector", value: "Federal" },
      { label: "Domain", value: "Cyber" },
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85",
    featured: false,
  },
  {
    location: "STATE GOVERNMENT CYBER",
    profit: "JAPAC",
    metrics: [
      { label: "Focus", value: "Growth" },
      { label: "Sector", value: "State" },
      { label: "Domain", value: "Cyber" },
    ],
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
    featured: false,
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

  const [featured, ...rest] = projects

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-moore-white">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">EXPERIENCE</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">Real Experience. Real Perspective.</h2>
          </div>
        </div>

        {/* Asymmetric grid: featured left, two stacked right */}
        <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">

          {/* Featured card — spans 3 cols */}
          <div className="lg:col-span-3 group relative h-[420px] lg:h-[640px] overflow-hidden rounded-2xl cursor-pointer shadow-md">
            <img
              src={featured.image}
              alt={featured.location}
              className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moore-navy/90 via-moore-navy/30 to-transparent" />
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
              <div className="text-moore-offwhite text-5xl lg:text-7xl font-light mb-2">{featured.profit}</div>
              <span className="text-moore-offwhite/50 text-xs tracking-widest uppercase mb-6">Experience</span>
              <div className="flex gap-8">
                {featured.metrics.map((m, i) => (
                  <div key={i}>
                    <div className="text-moore-offwhite text-xl lg:text-2xl font-light mb-0.5">{m.value}</div>
                    <div className="text-moore-offwhite/50 text-xs tracking-wider uppercase">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Two stacked cards — spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4 lg:gap-6">
            {rest.map((project, index) => (
              <div key={index} className="group relative h-[300px] lg:h-full overflow-hidden rounded-2xl cursor-pointer shadow-md flex-1">
                <img
                  src={project.image}
                  alt={project.location}
                  className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-moore-navy/90 via-moore-navy/30 to-transparent" />
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <div className="text-moore-offwhite text-3xl lg:text-4xl font-light mb-1">{project.profit}</div>
                  <span className="text-moore-offwhite/50 text-xs tracking-widest uppercase mb-4">Experience</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
