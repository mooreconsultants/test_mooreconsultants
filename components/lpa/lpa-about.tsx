"use client"

import { useEffect, useRef } from "react"

export function LpaAbout() {
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
          {/* Portrait */}
          <div className="lg:col-span-6 relative h-[500px] lg:h-auto">
            <img src="/guy-moore-portrait.jpg" alt="Guy Moore" className="w-full h-full object-cover object-top" />
            <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-moore-gold" />
          </div>

          {/* Content */}
          <div className="lg:col-span-6 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24 relative">
            <div className="absolute top-16 right-16 text-[200px] font-serif text-moore-navy/5 leading-none hidden lg:block">
              M
            </div>

            <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 relative z-10">MEET YOUR PARTNER</span>

            <h2 className="font-serif text-4xl lg:text-6xl text-moore-navy mb-4 relative z-10">Guy Moore</h2>

            <p className="text-moore-charcoal text-xl lg:text-2xl font-light mb-8 relative z-10">
              The developer who shows you his numbers
            </p>

            <div className="w-16 h-px bg-moore-gold mb-8" />

            <p className="text-moore-charcoal/70 leading-relaxed mb-6 max-w-lg relative z-10">
              Guy Moore is not a coach who teaches theory. He is an active property developer in Adelaide who has built
              a $23M portfolio from a $450k starting point over more than a decade. His clients do not just learn how
              development works. They see the actual financials, the actual margins, and the actual risks of every
              project he has completed.
            </p>

            <p className="text-moore-charcoal/70 leading-relaxed mb-10 max-w-lg relative z-10">
              That level of transparency is rare. It is also what gives his clients the conviction to act. When you can
              see exactly what is possible and exactly what it takes, the decision to move forward becomes a lot
              clearer.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 relative z-10">
              {[
                { value: "$23M", label: "Completed Projects" },
                { value: "10+", label: "Years Experience" },
                { value: "163%", label: "Best CoC Return" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-moore-navy text-3xl lg:text-4xl font-light mb-2">{stat.value}</div>
                  <div className="text-moore-charcoal/60 text-xs tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
