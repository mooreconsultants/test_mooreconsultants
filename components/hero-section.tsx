"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"


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
    <section className="relative min-h-screen lg:h-screen w-full flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="lg:hidden absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1300&q=85"
            alt="Technology professionals collaborating"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="hidden lg:block absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=85"
            alt="Modern technology infrastructure"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
        {/* Dark left-to-right gradient — photo visible on right, dark anchor on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-moore-navy/90 via-moore-navy/60 to-moore-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-moore-navy/60 via-transparent to-transparent" />
      </div>

      {/* Rotated side label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <span className="text-moore-offwhite/20 text-xs tracking-[0.5em] uppercase [writing-mode:vertical-rl] rotate-180">
          Cybersecurity & AI Strategy
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-20 pt-12 sm:pt-20 lg:pt-36 pb-12 lg:pb-40">
        <div ref={contentRef} className="opacity-0 transition-opacity duration-1000 max-w-xl">
          <span className="text-moore-gold text-xs tracking-[0.4em] font-light mb-6 block">MOORE DEVELOPMENTS</span>

          <h1 className="font-serif text-[clamp(2.65rem,10vw,3.7rem)] lg:text-7xl text-moore-offwhite leading-[1.1] mb-6">
            From Complexity
            <br />
            <span className="text-moore-gold">to Clarity</span>
          </h1>

          <div className="w-16 h-px bg-moore-gold mb-8" />

          <h2 className="text-xl lg:text-2xl text-moore-offwhite/80 font-light mb-6">
            Your Partner in Cybersecurity, AI & Technology Strategy
          </h2>

          <p className="text-moore-offwhite/60 leading-relaxed mb-10 max-w-md">
            Independent strategic advice grounded in more than 20 years across enterprise IT, Australian Government and Defence. We turn complexity into clearer decisions and meaningful business outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-moore-gold text-moore-navy px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all hover:bg-moore-offwhite"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative lg:absolute lg:bottom-0 left-0 right-0 z-10 shrink-0">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:inline-flex lg:flex-row gap-5 sm:gap-8 lg:gap-16 bg-moore-navy/95 backdrop-blur-sm text-moore-offwhite mx-6 lg:ml-20 lg:mr-0 px-6 lg:px-12 py-6 lg:py-8 rounded-t-2xl lg:rounded-t-none lg:rounded-tr-3xl">
            {[
              { value: "Reduce Risk", label: "Cybersecurity & Resilience" },
              { value: "Save Time", label: "AI, Automation & Efficiency" },
              { value: "Work Smarter", label: "Technology & Business Improvement" },
            ].map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-moore-gold text-xl sm:text-2xl lg:text-3xl font-light mb-1">{stat.value}</div>
                <div className="text-moore-offwhite/60 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
