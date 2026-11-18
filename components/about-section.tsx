"use client"

import { useEffect, useRef } from "react"


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
            <img src="/guy-moore-portrait.jpg" alt="Guy Moore" className="absolute inset-0 w-full h-full object-cover object-top" />
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
              Cybersecurity, Technology & Business Leader · 20+ Years' Experience
            </p>

            <div className="w-16 h-px bg-moore-gold mb-8" />

            <p className="text-moore-charcoal/70 leading-relaxed mb-10 max-w-lg relative z-10">
              Guy brings more than 20 years of experience across cybersecurity, enterprise technology, government and business leadership. He works with organisations to understand their challenges, reduce cybersecurity risk, identify practical applications for AI and improve the way their systems and teams work together. Whether the priority is solving an operational problem, making a difficult technology decision or moving a project forward, his approach is straightforward: understand the business need, develop a practical plan and help turn it into action.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10 relative z-10">
              {[
                { value: "Reduce Risk", label: "Cybersecurity & Resilience" },
                { value: "Improve", label: "Processes & Productivity" },
                { value: "Deliver", label: "Practical Technology Outcomes" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-moore-navy text-xl lg:text-2xl font-light mb-2">{stat.value}</div>
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
