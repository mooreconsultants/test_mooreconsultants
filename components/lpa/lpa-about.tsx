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
            <img src="/guy-moore-portrait.jpg" alt="Guy Moore, Adelaide property developer" className="w-full h-full object-cover object-top" />
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
              Adelaide's only execution-focused development partner
            </p>

            <div className="w-16 h-px bg-moore-gold mb-8" />

            <p className="text-moore-charcoal/70 leading-relaxed mb-6 max-w-lg relative z-10">
              Guy Moore is not a course creator. He is an active Adelaide property developer who has built a $23M
              portfolio from a $450k starting point over more than a decade, working exclusively in Adelaide's coastal
              and eastern suburbs. Glenelg. Brighton. Somerton Park. Burnside. These are not case studies from
              someone else's portfolio. They are his own projects, and he shares the real numbers with every client.
            </p>

            <p className="text-moore-charcoal/70 leading-relaxed mb-6 max-w-lg relative z-10">
              He understands Adelaide's planning system, the council approval process, and the specific dynamics of
              the local market in a way that no national course or interstate consultant can replicate. When you work
              with Guy, you are not getting theory. You are getting a partner who is navigating the same market,
              right now, alongside you.
            </p>

            <p className="text-moore-charcoal/70 leading-relaxed mb-10 max-w-lg relative z-10">
              That level of transparency and local expertise is rare. It is also what gives his clients the conviction
              to act. When you can see exactly what is possible in Adelaide and exactly what it takes, the decision to
              move forward becomes a lot clearer.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 relative z-10">
              {[
                { value: "$23M", label: "Adelaide Projects" },
                { value: "10+", label: "Years in Adelaide" },
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
