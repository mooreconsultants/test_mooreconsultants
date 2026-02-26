"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
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
    <section id="about" className="py-24 lg:py-0 bg-moore-white overflow-hidden">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto opacity-0 transition-opacity duration-1000">
        <div className="grid lg:grid-cols-12 min-h-[800px]">
          {/* Left - Large Portrait */}
          <div className="lg:col-span-6 relative h-[500px] lg:h-auto overflow-hidden rounded-r-2xl lg:rounded-2xl">
            <img src="/guy-moore-portrait.jpg" alt="Guy Moore" className="w-full h-full object-cover object-top" />
            {/* Vertical accent */}
            <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-moore-gold" />
          </div>

          {/* Right - Content */}
          <div className="lg:col-span-6 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24 relative">
            {/* Decorative element */}
            <div className="absolute top-16 right-16 text-[200px] font-serif text-moore-navy/5 leading-none hidden lg:block">
              M
            </div>

            <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 relative z-10">MEET YOUR PARTNER</span>

            <h2 className="font-serif text-4xl lg:text-6xl text-moore-navy mb-4 relative z-10">Guy Moore</h2>

            <p className="text-moore-charcoal text-xl lg:text-2xl font-light mb-8 relative z-10">
              Built and Sold Over $23M in New Adelaide Homes in 7 Years
            </p>

            <div className="w-16 h-px bg-moore-gold mb-8" />

            <p className="text-moore-charcoal/70 leading-relaxed mb-10 max-w-lg relative z-10">
              Guy Moore has spent the past seven years building and selling new homes across Adelaide's coastal suburbs, accumulating over $23M in completed projects. He is not a course seller or a theorist. He is an active developer who works alongside a small number of clients each year, sharing the same strategies, sites, and financial models he uses in his own business.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10 relative z-10">
              {[
                { value: "$23M+", label: "New Homes Built & Sold" },
                { value: "7 Years", label: "To Build the Portfolio" },
                { value: "163%", label: "Best CoC Return" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-moore-navy text-3xl lg:text-4xl font-light mb-2">{stat.value}</div>
                  <div className="text-moore-charcoal/60 text-xs tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-moore-navy text-sm tracking-widest uppercase hover:text-moore-gold transition-colors group relative z-10"
            >
              Read Full Story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
