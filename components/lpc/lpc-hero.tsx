"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Clock } from "lucide-react"
import { LpcEnquiryModal, type EarlyBirdKey } from "@/components/lpc/lpc-enquiry-modal"

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const now = new Date()
    const deadline = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0)
    const tick = () => {
      const diff = deadline.getTime() - Date.now()
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n: number) => String(n).padStart(2, "0")
  return (
    <div className="flex items-center gap-2 text-moore-gold">
      {[{ val: pad(timeLeft.days), label: "Days" }, { val: pad(timeLeft.hours), label: "Hrs" }, { val: pad(timeLeft.minutes), label: "Min" }, { val: pad(timeLeft.seconds), label: "Sec" }].map((unit, i, arr) => (
        <div key={unit.label} className="flex items-center gap-2">
          <div className="text-center">
            <div className="text-2xl font-light tabular-nums leading-none">{unit.val}</div>
            <div className="text-[10px] tracking-widest uppercase opacity-60 mt-1">{unit.label}</div>
          </div>
          {i < arr.length - 1 && <span className="text-xl font-light opacity-40 -mt-4">:</span>}
        </div>
      ))}
    </div>
  )
}

export function LpcHero() {
  const [activeModal, setActiveModal] = useState<EarlyBirdKey | null>(null)

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-moore-navy">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-moore-navy via-moore-navy/90 to-moore-navy/60" />
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
          <span className="text-moore-offwhite/20 text-xs tracking-[0.5em] uppercase [writing-mode:vertical-rl] rotate-180">Adelaide Property Development</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-32 lg:py-0 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <span className="text-moore-gold text-xs tracking-[0.4em] uppercase mb-6 block">EARLY BIRD PRICING -- LIMITED TIME ONLY</span>
            <h1 className="font-serif text-5xl lg:text-7xl text-moore-offwhite leading-[1.05] mb-6">
              Your First<br />Development.<br /><span className="text-moore-gold">For Less.</span>
            </h1>
            <p className="text-moore-offwhite/60 text-lg leading-relaxed mb-8 max-w-lg">
              For a limited time, Guy Moore is offering early bird pricing across all coaching services for Adelaide professionals ready to commit to their first property development. When the month ends, standard prices resume. No exceptions.
            </p>
            <div className="flex items-center gap-4 bg-moore-offwhite/5 border border-moore-gold/30 px-5 py-4 mb-8 max-w-sm">
              <Clock className="w-5 h-5 text-moore-gold flex-shrink-0" />
              <div>
                <p className="text-moore-gold text-xs tracking-widest uppercase mb-2">Early bird pricing closes in</p>
                <CountdownTimer />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setActiveModal("discovery")} className="group bg-moore-gold text-moore-navy text-xs tracking-widest uppercase px-8 py-4 hover:bg-moore-offwhite transition-all duration-300 flex items-center justify-center gap-3">
                CLAIM EARLY BIRD PRICING
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={() => setActiveModal("tour")} className="group border border-moore-offwhite/30 text-moore-offwhite text-xs tracking-widest uppercase px-8 py-4 hover:border-moore-gold hover:text-moore-gold transition-all duration-300">
                START WITH THE TOUR ($400)
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-moore-offwhite/5 border border-moore-offwhite/10 p-8">
              <p className="text-moore-gold text-xs tracking-[0.4em] uppercase mb-6">EARLY BIRD RATES THIS MONTH</p>
              <div className="space-y-0">
                {[
                  { name: "Tour de Coastal", early: "$400", standard: "$500", saving: "Save $100" },
                  { name: "Foundations", early: "$1,750", standard: "$2,000", saving: "Save $250" },
                  { name: "Tour + Foundations Bundle", early: "$2,150", standard: "$3,000", saving: "Save $850" },
                  { name: "Full Development Pathway", early: "$8,500", standard: "$10,000", saving: "Save $1,500" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-4 border-b border-moore-offwhite/10 last:border-0">
                    <div>
                      <p className="text-moore-offwhite text-sm">{item.name}</p>
                      <p className="text-moore-gold text-xs mt-0.5">{item.saving}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-moore-gold text-xl font-light">{item.early}</p>
                      <p className="text-moore-offwhite/30 text-xs line-through">{item.standard}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-moore-offwhite/10 flex items-center gap-2">
                <div className="w-2 h-2 bg-moore-gold rounded-full animate-pulse" />
                <p className="text-moore-offwhite/50 text-xs">Offer expires end of month. Standard prices resume automatically.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-px bg-moore-offwhite/10 mt-4">
              {[
                { value: "$23M", label: "Completed Adelaide Projects" },
                { value: "$857k", label: "Best Single Project Profit" },
                { value: "163%", label: "Best CoC Return" },
              ].map((stat) => (
                <div key={stat.label} className="bg-moore-navy px-4 py-5 text-center">
                  <div className="text-moore-gold text-2xl font-light mb-1">{stat.value}</div>
                  <div className="text-moore-offwhite/40 text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LpcEnquiryModal service={activeModal} onClose={() => setActiveModal(null)} />
    </>
  )
}
