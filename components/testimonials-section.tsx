"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "I had done three property development courses before I found Guy. I understood the theory completely. But I was frozen. I could not pull the trigger on a site because I had no one to tell me whether I was reading it correctly. Guy changed that. He walked me through his own Glenelg East project financials on our first meeting. Real numbers. Real margins. Real lessons. I went from paralysed to completing my first development in 18 months.",
    name: "Ben",
    role: "First time developer, Adelaide",
    location: "Somerton Park, SA",
    result: "$187k profit",
    size: "large",
  },
  {
    quote:
      "Guy showed me his actual financials from his own projects. That was the moment I knew this was different from every other course or coach I had looked at.",
    name: "Scott",
    role: "First time developer, Adelaide",
    location: "Brighton, SA",
    result: "$234k profit",
    size: "medium",
  },
  {
    quote:
      "I was sceptical. I had seen enough property gurus to know the difference between someone who teaches and someone who does. Guy does. He is active in the Adelaide market right now. That is what made the difference.",
    name: "Bianca",
    role: "First time developer, Adelaide",
    location: "Somerton Park, SA",
    result: "$96k profit",
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
          <div className="lg:flex lg:items-end lg:justify-between">
            <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">Client Success Stories</h2>
            <p className="text-moore-charcoal/60 max-w-md mt-4 lg:mt-0 leading-relaxed">
              Adelaide professionals who moved from theory to reality with Guy Moore alongside them.
            </p>
          </div>
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
                <div className="text-moore-charcoal/40 text-xs mt-1">First development</div>
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
                    <div className="text-moore-charcoal/60 text-xs">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-moore-gold text-lg font-light">{testimonial.result}</div>
                    <div className="text-moore-charcoal/40 text-xs mt-1">First development</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border border-moore-charcoal/10 p-8 lg:p-10">
          <div className="lg:flex lg:items-center lg:justify-between gap-8">
            <div className="mb-6 lg:mb-0">
              <span className="text-moore-gold text-xs tracking-[0.4em] mb-2 block">ADELAIDE CASE STUDIES</span>
              <p className="text-moore-charcoal/70 text-sm leading-relaxed max-w-2xl">
                Guy&apos;s own Adelaide projects include South Brighton ($857k profit, 163% CoC return), Glenelg East,
                and Somerton Park. These are the real numbers he shares with every client.
              </p>
            </div>
            <div className="flex gap-8 flex-shrink-0">
              <div className="text-center">
                <div className="text-moore-navy text-3xl font-light">$857k</div>
                <div className="text-moore-charcoal/50 text-xs tracking-wide uppercase mt-1">South Brighton</div>
              </div>
              <div className="text-center">
                <div className="text-moore-navy text-3xl font-light">163%</div>
                <div className="text-moore-charcoal/50 text-xs tracking-wide uppercase mt-1">CoC Return</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
