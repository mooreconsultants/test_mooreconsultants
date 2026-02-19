"use client"

import { useEffect, useRef } from "react"

export function StatementSection() {
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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-32 lg:py-48 bg-moore-white">
      <div
        ref={sectionRef}
        className="max-w-[1000px] mx-auto px-8 text-center opacity-0 transition-opacity duration-1000"
      >
        <div className="w-px h-16 bg-moore-gold mx-auto mb-12" />

        <blockquote className="font-serif text-3xl lg:text-5xl text-moore-navy leading-tight mb-8">
          "Most property courses leave you stranded with theory.
          <br />
          <span className="text-moore-charcoal">We build with you."</span>
        </blockquote>

        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-moore-gold" />
          <cite className="text-moore-charcoal text-sm tracking-widest uppercase not-italic">Guy Moore, Founder</cite>
          <div className="w-12 h-px bg-moore-gold" />
        </div>
      </div>
    </section>
  )
}
