"use client"

import { useEffect, useRef } from "react"

export function LpbStatement() {
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
              Every week you wait, the Adelaide market moves without you.
            </h2>
            <div className="w-16 h-px bg-moore-gold mb-8" />
            <p className="text-moore-offwhite/70 text-lg leading-relaxed mb-6">
              You have already invested in property development education. You understand the fundamentals. The
              barrier is not knowledge — it is finding someone you trust enough to commit alongside. Someone with
              real numbers from real Adelaide projects, not polished case studies from someone else's portfolio.
            </p>
            <p className="text-moore-offwhite/70 text-lg leading-relaxed">
              You don't need another course. You need validation from an active developer who is navigating the
              Adelaide market right now, with his own money, and who will tell you honestly whether a deal stacks
              up before you commit.
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
                <div className="text-moore-gold text-sm tracking-wide">Scott Applebee</div>
                <div className="text-moore-offwhite/50 text-xs mt-1">First time developer - Adelaide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
