"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

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
    <section className="relative h-screen w-full flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="lg:hidden absolute inset-0">
          <Image
            src="/guy-moore-site-visit-mobile.jpg"
            alt="Guy Moore reviewing development plans on site in Adelaide"
            className="w-full h-full object-cover"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="/Hero.jpg"
            alt="Completed Adelaide property development"
            className="w-full h-full object-cover object-center"
            fill
            sizes="100vw"
            priority
          />
        </div>
        {/* Dark left-to-right gradient — photo visible on right, dark anchor on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-moore-navy/90 via-moore-navy/60 to-moore-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-moore-navy/60 via-transparent to-transparent" />
      </div>

      {/* Rotated side label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block z-10">
        <span className="text-moore-offwhite/20 text-xs tracking-[0.5em] uppercase [writing-mode:vertical-rl] rotate-180">
          Adelaide Property Development
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-20 pt-28 lg:pt-36 pb-36 lg:pb-40">
        <div ref={contentRef} className="opacity-0 transition-opacity duration-1000 max-w-xl">
          <span className="text-moore-gold text-xs tracking-[0.4em] font-light mb-6 block">MOORE CONSULTANTS</span>

          <h1 className="font-serif text-5xl lg:text-7xl text-moore-offwhite leading-[1.1] mb-6">
            From Theory
            <br />
            <span className="text-moore-gold">to Reality</span>
          </h1>

          <div className="w-16 h-px bg-moore-gold mb-8" />

          <h2 className="text-xl lg:text-2xl text-moore-offwhite/80 font-light mb-6">
            Your Partner in Profitable Property Development
          </h2>

          <p className="text-moore-offwhite/60 leading-relaxed mb-10 max-w-md">
            The only property development consultancy in Australia that provides personalised, one-on-one coaching and
            end-to-end project management to ensure you successfully complete your first profitable development project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-moore-gold text-moore-navy px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all hover:bg-moore-offwhite"
            >
              Book Your Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex flex-col sm:flex-row gap-6 lg:gap-16 bg-moore-navy/95 backdrop-blur-sm text-moore-offwhite ml-6 lg:ml-20 px-8 lg:px-12 py-6 lg:py-8 rounded-tr-3xl">
            {[
              { value: "$23M", label: "Adelaide Projects Completed" },
              { value: "10+", label: "Years in Adelaide Market" },
              { value: "163%", label: "Best CoC Return" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-moore-gold text-3xl lg:text-4xl font-light mb-1">{stat.value}</div>
                <div className="text-moore-offwhite/60 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
