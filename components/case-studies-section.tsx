"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    location: "SEACLIFF PARK, SA",
    profit: "$857,000",
    metrics: [
      { label: "CoC Return", value: "163%" },
      { label: "Timeline", value: "24 Months" },
      { label: "Type", value: "Row Terrace" },
    ],
    image: "/images/properties/seacliff-park-exterior.webp",
    featured: true,
  },
  {
    location: "SOMERTON PARK, SA",
    profit: "$523,000",
    metrics: [
      { label: "CoC Return", value: "112%" },
      { label: "Timeline", value: "20 Months" },
      { label: "Type", value: "Detached" },
    ],
    image: "/images/properties/seacliff-park-interior-living.webp",
    featured: false,
  },
  {
    location: "SOMERTON PARK, SA",
    profit: "$642,000",
    metrics: [
      { label: "CoC Return", value: "128%" },
      { label: "Timeline", value: "18 Months" },
      { label: "Type", value: "Row Terrace" },
    ],
    image: "/images/properties/somerton-park-interior-kitchen.webp",
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
    <section id="case-studies" className="py-24 lg:py-32 bg-moore-white">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">PORTFOLIO</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">Real Projects. Real Profits.</h2>
          </div>
        </div>

        {/* Asymmetric grid: featured left, two stacked right */}
        <div className="grid lg:grid-cols-5 gap-4 lg:gap-6">

          {/* Featured card — spans 3 cols */}
          <div className="lg:col-span-3 group relative h-[420px] lg:h-[640px] overflow-hidden rounded-2xl cursor-pointer shadow-md">
            <Image
              src={featured.image}
              alt={featured.location}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-moore-navy/90 via-moore-navy/30 to-transparent" />
            <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-end">
              <div className="text-moore-offwhite text-5xl lg:text-7xl font-light mb-2">{featured.profit}</div>
              <span className="text-moore-offwhite/50 text-xs tracking-widest uppercase mb-6">Net Profit</span>
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
                <Image
                  src={project.image}
                  alt={project.location}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-moore-navy/90 via-moore-navy/30 to-transparent" />
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <div className="text-moore-offwhite text-3xl lg:text-4xl font-light mb-1">{project.profit}</div>
                  <span className="text-moore-offwhite/50 text-xs tracking-widest uppercase mb-4">Net Profit</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
