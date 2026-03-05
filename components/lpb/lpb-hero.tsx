"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, Tag } from "lucide-react"
import { LpbEnquiryModal, type BundleKey } from "@/components/lpb/lpb-enquiry-modal"

export function LpbHero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [activeModal, setActiveModal] = useState<BundleKey | null>(null)

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
    <>
      <section className="relative min-h-screen flex">
        {/* Mobile background */}
        <div className="lg:hidden absolute inset-0 z-0">
          <Image
            src="/guy-moore-site-visit-mobile.jpg"
            alt="Guy Moore reviewing development plans on an Adelaide site"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-moore-offwhite/90 via-moore-offwhite/85 to-moore-offwhite/95" />
        </div>

        {/* Left Image - Desktop */}
        <div className="hidden lg:block w-[60%] relative">
          <div className="absolute inset-0 bg-moore-navy/20" />
          <Image
            src="/luxury-modern-architectural-building-exterior-with.jpg"
            alt="Modern Adelaide property development"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
            <span className="text-moore-offwhite/30 text-xs tracking-[0.5em] uppercase">
              Adelaide Property Development
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[40%] bg-transparent lg:bg-moore-offwhite flex flex-col justify-center px-8 lg:px-16 py-32 lg:py-0 relative z-10">
          <div
            className="absolute inset-0 opacity-[0.02] hidden lg:block"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%230f172a' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div ref={contentRef} className="relative opacity-0 transition-opacity duration-1000">
            <div className="inline-flex items-center gap-2 bg-moore-gold/10 border border-moore-gold/30 px-3 py-1.5 mb-6">
              <Tag className="w-3 h-3 text-moore-gold" />
              <span className="text-moore-gold text-xs tracking-[0.3em] uppercase">Bundle Packages</span>
            </div>

            <h1 className="font-serif text-5xl lg:text-7xl text-moore-navy leading-[1.1] mb-6">
              More of Guy.
              <br />
              <span className="text-moore-charcoal">Less to Pay.</span>
              <br />
              Done Right.
            </h1>

            <div className="w-16 h-px bg-moore-gold mb-8" />

            <h2 className="text-xl lg:text-2xl text-moore-charcoal font-light mb-6">
              Bundle Packages for Adelaide Professionals Ready to Commit to Their First Development
            </h2>

            <p className="text-moore-charcoal/70 leading-relaxed mb-10 max-w-md">
              Guy Moore has structured four bundle packages that give you more coaching, more momentum, and more
              value than purchasing services separately. Every bundle is built around the Adelaide market, with
              Guy alongside you at every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => setActiveModal("discovery")}
                className="group inline-flex items-center justify-center gap-3 bg-moore-navy text-moore-offwhite px-8 py-4 text-sm tracking-widest uppercase transition-all hover:bg-moore-charcoal"
              >
                Book a Free Adelaide Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <p className="text-moore-charcoal/50 text-sm">
              No obligation. Guy will tell you honestly which bundle, if any, is right for your situation.
            </p>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="absolute bottom-0 left-0 right-0 lg:left-[10%] lg:right-auto lg:bottom-12 lg:w-auto">
          <div className="bg-moore-navy text-moore-offwhite px-8 lg:px-12 py-6 lg:py-8 flex flex-col sm:flex-row gap-6 lg:gap-16">
            {[
              { value: "$23M", label: "Completed Adelaide Projects" },
              { value: "$857k", label: "Best Single Project Profit" },
              { value: "163%", label: "Best CoC Return" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-moore-gold text-3xl lg:text-4xl font-light mb-1">{stat.value}</div>
                <div className="text-moore-offwhite/60 text-xs tracking-widest uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LpbEnquiryModal
        bundle={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </>
  )
}
