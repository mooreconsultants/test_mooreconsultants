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
              Most people who want to develop property never start.
            </h2>
            <div className="w-16 h-px bg-moore-gold mb-8" />
            <p className="text-moore-offwhite/70 text-lg leading-relaxed">
              You have probably run the numbers in your head a dozen times. You know there is serious money to be made
              in property development. But every time you get close to taking action, the same questions stop you. How
              much capital do I actually need? How do I find the right site? What happens if I get it wrong?
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-moore-gold/30 p-8 lg:p-10">
              <p className="font-serif text-xl lg:text-2xl text-moore-offwhite leading-relaxed italic">
                "Guy showed me his actual financials from his own projects. That was the moment I knew this was
                different from every other course or coach I had looked at."
              </p>
              <div className="mt-6 pt-6 border-t border-moore-gold/20">
                <div className="text-moore-gold text-sm tracking-wide">Active Client</div>
                <div className="text-moore-offwhite/50 text-xs mt-1">Adelaide, SA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
