"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Guy's hands-on approach transformed my theoretical knowledge into real profit. I went from paralysed by fear to completing my first $450k development in 18 months.",
    name: "Dr. Sarah Chen",
    role: "Surgeon",
    location: "Glenelg East Project",
    result: "$187k profit",
    size: "large",
  },
  {
    quote:
      "The personalised guidance was invaluable. Having Guy validate every major decision gave me the confidence to execute.",
    name: "Mark Thompson",
    role: "Senior Engineer",
    location: "Brighton Project",
    result: "$234k profit",
    size: "medium",
  },
  {
    quote: "Worth every cent. The ROI speaks for itself.",
    name: "James Liu",
    role: "Corporate Lawyer",
    location: "Somerton Park Project",
    result: "$156k profit",
    size: "small",
  },
]

export function TestimonialsSection() {
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
    <section className="py-24 lg:py-32 bg-moore-white">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="mb-16">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">TESTIMONIALS</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">Client Success Stories</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large testimonial */}
          <div className="lg:col-span-7 bg-moore-offwhite p-8 lg:p-12 relative">
            <span className="text-moore-gold text-8xl font-serif absolute top-4 left-8 opacity-20">"</span>

            <blockquote className="font-serif text-xl lg:text-2xl text-moore-navy leading-relaxed mb-8 relative z-10 pt-8">
              {testimonials[0].quote}
            </blockquote>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-moore-gold text-moore-gold" />
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-moore-navy font-medium">{testimonials[0].name}</div>
                <div className="text-moore-charcoal/60 text-sm">{testimonials[0].role}</div>
                <div className="text-moore-charcoal/60 text-sm">{testimonials[0].location}</div>
              </div>
              <div className="text-right">
                <div className="text-moore-gold text-2xl font-light">{testimonials[0].result}</div>
              </div>
            </div>
          </div>

          {/* Stacked smaller testimonials */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div key={index} className="bg-moore-offwhite p-8 relative flex-1">
                <span className="text-moore-gold text-5xl font-serif absolute top-2 left-6 opacity-20">"</span>

                <blockquote className="text-moore-charcoal leading-relaxed mb-6 relative z-10 pt-4">
                  {testimonial.quote}
                </blockquote>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-moore-gold text-moore-gold" />
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-moore-navy font-medium text-sm">{testimonial.name}</div>
                    <div className="text-moore-charcoal/60 text-xs">{testimonial.role}</div>
                  </div>
                  <div className="text-moore-gold text-lg font-light">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
