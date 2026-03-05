"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

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

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen w-full flex flex-col">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-modern-architectural-building-exterior-with.jpg"
          alt="Modern architectural development"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-moore-offwhite/95 via-moore-offwhite/80 to-moore-offwhite/20" />
      </div>

      {/* Content overlay – left-aligned, max-width, with space for nav at top */}
      <div className="relative z-10 flex flex-col justify-center flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 lg:pt-36 pb-48 lg:pb-56">
        <div ref={contentRef} className="opacity-0 transition-opacity duration-1000 max-w-xl">
          <span className="text-moore-gold text-xs tracking-[0.4em] font-light mb-6 block">MOORE CONSULTANTS</span>

          <h1 className="font-serif text-5xl lg:text-7xl text-moore-navy leading-[1.1] mb-6">
            From Theory
            <br />
            <span className="text-moore-charcoal">to Reality</span>
          </h1>

          <div className="w-16 h-px bg-moore-gold mb-8 rounded-full" />

          <h2 className="text-xl lg:text-2xl text-moore-charcoal font-light mb-6">
            Your Partner in Profitable Property Development
          </h2>

          <p className="text-moore-charcoal/80 leading-relaxed mb-10 max-w-md">
            The only property development consultancy in Australia that provides personalised, one-on-one coaching and
            end-to-end project management to ensure you successfully complete your first profitable development project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-moore-gold text-moore-white px-8 py-4 rounded-xl text-sm font-medium tracking-widest uppercase transition-all hover:bg-moore-blue shadow-lg"
            >
              Book Your Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-moore-charcoal text-sm tracking-wide hover:text-moore-gold transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Free Feasibility Checklist
          </a>
        </div>
      </div>

      {/* Trust bar – full width, rounded top */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 lg:px-8 pb-4 lg:pb-6">
        <div className="max-w-[1400px] mx-auto bg-moore-navy/95 backdrop-blur-md text-moore-offwhite px-8 lg:px-12 py-6 lg:py-8 flex flex-col sm:flex-row gap-6 lg:gap-16 rounded-t-3xl shadow-xl">
          {[
            { value: "$23M+", label: "New Homes Built & Sold" },
            { value: "7 Yrs", label: "To Build the Portfolio" },
            { value: "Scott", label: "Current Active Client" },
          ].map((stat, index) => (
            <div key={index} className="text-center sm:text-left">
              <div className="text-moore-gold text-3xl lg:text-4xl font-light mb-1">{stat.value}</div>
              <div className="text-moore-offwhite/60 text-xs tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
