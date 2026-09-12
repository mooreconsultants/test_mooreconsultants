"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { LpcEnquiryModal, type EarlyBirdKey } from "@/components/lpc/lpc-enquiry-modal"

export function LpcHero() {
  const [activeModal, setActiveModal] = useState<EarlyBirdKey | null>(null)

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center bg-moore-navy">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('/Hero.jpg')" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-moore-navy via-moore-navy/90 to-moore-navy/60" />
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <span className="text-moore-offwhite/20 text-xs tracking-[0.5em] uppercase [writing-mode:vertical-rl] rotate-180">Adelaide Property Development</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-32 lg:py-0 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div className="lg:pt-24">
            <span className="text-moore-gold text-xs tracking-[0.4em] uppercase mb-6 block">MOORE CONSULTANTS · ADELAIDE</span>
            <h1 className="font-serif text-5xl lg:text-7xl text-moore-offwhite leading-[1.05] mb-6">
              One Down.<br />Now Build<br /><span className="text-moore-gold">the Portfolio.</span>
            </h1>
            <p className="text-moore-offwhite/60 text-lg leading-relaxed mb-8 max-w-lg">
              Your first development taught you what no course ever could. You know the process, the approvals,
              and what the real margins look like. Moving from one project to a portfolio requires a different
              approach — capital recycling, site stacking, structure optimisation. Guy Moore has built $23M in
              Adelaide developments across multiple coastal sites. He knows what the second project requires that
              the first one doesn't.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setActiveModal("discovery")} className="group bg-moore-gold text-moore-navy text-xs tracking-widest uppercase px-8 py-4 hover:bg-moore-offwhite transition-all duration-300 flex items-center justify-center gap-3">
                Book a Free 30-Min Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            <p className="text-moore-offwhite/40 text-sm mt-4">
              No obligation. Guy will tell you honestly whether the timing is right for your next project.
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="bg-moore-offwhite/5 border border-moore-offwhite/10 p-8">
              <p className="text-moore-gold text-xs tracking-[0.4em] uppercase mb-6">GUY'S ADELAIDE TRACK RECORD</p>
              <div className="space-y-0">
                {[
                  { label: "Total Adelaide Projects Completed", value: "$23M+" },
                  { label: "Best Single Project Profit", value: "$857k" },
                  { label: "Best Cash-on-Cash Return", value: "163%" },
                  { label: "Years Active in Adelaide Market", value: "10+" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-4 border-b border-moore-offwhite/10 last:border-0">
                    <p className="text-moore-offwhite/60 text-sm">{item.label}</p>
                    <p className="text-moore-gold text-xl font-light">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-moore-offwhite/10">
                <p className="text-moore-offwhite/40 text-xs">Proudly Adelaide-based. Active developer, not just a coach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LpcEnquiryModal service={activeModal} onClose={() => setActiveModal(null)} />
    </>
  )
}
