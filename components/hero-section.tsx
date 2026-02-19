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
    <section className="relative min-h-screen flex">
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src="/guy-moore-site-visit-mobile.jpg"
          alt="Guy Moore reviewing development plans on site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-moore-offwhite/90 via-moore-offwhite/85 to-moore-offwhite/95" />
      </div>

      {/* Left Image Section - 60% (Desktop only) */}
      <div className="hidden lg:block w-[60%] relative">
        <div className="absolute inset-0 bg-moore-navy/20" />
        <img
          src="/luxury-modern-architectural-building-exterior-with.jpg"
          alt="Modern architectural development"
          className="w-full h-full object-cover"
        />
        {/* Vertical text accent */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
          <span className="text-moore-offwhite/30 text-xs tracking-[0.5em] uppercase">
            Property Development Excellence
          </span>
        </div>
      </div>

      {/* Right Content Section - 40% on desktop, full width on mobile */}
      <div className="w-full lg:w-[40%] bg-transparent lg:bg-moore-offwhite flex flex-col justify-center px-8 lg:px-16 py-32 lg:py-0 relative z-10">
        {/* Background pattern - desktop only */}
        <div
          className="absolute inset-0 opacity-[0.02] hidden lg:block"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230f172a' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div ref={contentRef} className="relative opacity-0 transition-opacity duration-1000">
          <span className="text-moore-gold text-xs tracking-[0.4em] font-light mb-8 block">MOORE CONSULTANTS</span>

          <h1 className="font-serif text-5xl lg:text-7xl text-moore-navy leading-[1.1] mb-6">
            From Theory
            <br />
            <span className="text-moore-charcoal">to Reality</span>
          </h1>

          <div className="w-16 h-px bg-moore-gold mb-8" />

          <h2 className="text-xl lg:text-2xl text-moore-charcoal font-light mb-6">
            Your Partner in Profitable Property Development
          </h2>

          <p className="text-moore-charcoal/70 leading-relaxed mb-10 max-w-md">
            The only property development consultancy in Australia that provides personalised, one-on-one coaching and
            end-to-end project management to ensure you successfully complete your first profitable development project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-moore-navy text-moore-offwhite px-8 py-4 text-sm tracking-widest uppercase transition-all hover:bg-moore-charcoal"
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

      {/* Floating Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 lg:left-[10%] lg:right-auto lg:bottom-12 lg:w-auto">
        <div className="bg-moore-navy text-moore-offwhite px-8 lg:px-12 py-6 lg:py-8 flex flex-col sm:flex-row gap-6 lg:gap-16">
          {[
            { value: "$23M", label: "Completed Projects" },
            { value: "10+", label: "Years Experience" },
            { value: "8", label: "Active Clients" },
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
