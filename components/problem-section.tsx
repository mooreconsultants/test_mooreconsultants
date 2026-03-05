"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function ProblemSection() {
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
    <section className="py-24 lg:py-32 bg-moore-offwhite overflow-hidden">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column - Problem */}
          <div className="lg:col-span-5 lg:-mt-12">
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 block">THE CHALLENGE</span>

            <h2 className="font-serif text-3xl lg:text-4xl text-moore-navy mb-10 leading-tight">
              The Problem with Property Development Courses
            </h2>

            <ul className="space-y-6">
              {[
                "You've consumed the content but can't take action",
                "Analysis paralysis keeps you stuck",
                "Fear of making a $100k+ mistake",
                "No one to validate your decisions",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-px bg-moore-gold mt-3 flex-shrink-0" />
                  <span className="text-moore-charcoal/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Solution with Image */}
          <div className="lg:col-span-7 relative lg:mt-24">
            <div className="relative">
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src="/images/gemini-generated-image-lbbn98lbbn98lbbn.jpg"
                  alt="Guy Moore reviewing architectural plans with client"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </div>

              {/* Overlapping Solution Box */}
              <div className="bg-moore-navy p-8 lg:p-12 lg:absolute lg:-bottom-16 lg:-left-24 lg:w-[90%]">
                <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">THE SOLUTION</span>

                <h3 className="font-serif text-2xl lg:text-3xl text-moore-offwhite mb-6">
                  The Moore Consultants Difference
                </h3>

                <ul className="space-y-4">
                  {[
                    "Personalised, hands-on guidance from site-find to sale",
                    "Expert validation at every decision point",
                    "Proven methodology that de-risks your investment",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-moore-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-moore-offwhite/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
