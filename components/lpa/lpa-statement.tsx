"use client"

import { useEffect, useRef } from "react"

export function LpaStatement() {
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
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 block">THE REALITY</span>
            <h2 className="font-serif text-4xl lg:text-6xl text-moore-offwhite leading-tight mb-8">
              Most high-achieving Adelaide professionals who want to develop property never start.
            </h2>
            <div className="w-16 h-px bg-moore-gold mb-8" />
            <p className="text-moore-offwhite/70 text-lg leading-relaxed mb-6">
              Not because they lack the capital. Not because the opportunity is not there in Glenelg, Brighton, Unley,
              or Burnside. But because they have no one to validate their decisions, and the cost of getting it wrong
              feels too high.
            </p>
            <p className="text-moore-offwhite/70 text-lg leading-relaxed">
              You have consumed the courses. You understand feasibility, zoning, and development margins. But when it
              comes to committing real money to a real Adelaide site, the fear of a $100,000 mistake stops you cold.
              That is not a knowledge problem. That is an execution problem. And it is exactly what Guy Moore solves.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-moore-gold/30 p-8 lg:p-10">
              <p className="font-serif text-xl lg:text-2xl text-moore-offwhite leading-relaxed italic">
                "Guy showed me his actual financials from his own Adelaide projects. Not a course. Not a case study.
                His real numbers. That was the moment I knew this was completely different from anything else I had
                looked at."
              </p>
              <div className="mt-6 pt-6 border-t border-moore-gold/20">
                <div className="text-moore-gold text-sm tracking-wide">Dr. Sarah</div>
                <div className="text-moore-offwhite/50 text-xs mt-1">Surgeon · Glenelg East, Adelaide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
