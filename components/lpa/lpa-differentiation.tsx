"use client"

import { useEffect, useRef } from "react"
import { Target, Award, Users, MapPin, ShieldCheck, TrendingUp } from "lucide-react"

const differentiators = [
  {
    icon: MapPin,
    title: "Adelaide expertise, not national theory",
    description:
      "Guy Moore has spent 10+ years navigating Adelaide's specific planning system, council approval processes, and local market dynamics. Glenelg. Brighton. Somerton Park. Burnside. Unley. He knows which suburbs offer genuine development margin and which ones look good on paper but do not stack up. No interstate consultant or national course can replicate that.",
  },
  {
    icon: Target,
    title: "We build with you, not just teach you",
    description:
      "Most property courses leave you stranded with theory. Moore Consultants is different. Guy is an active Adelaide developer right now, and every coaching engagement is grounded in what he is doing in the market today. You get real-world knowledge at the point it is most relevant.",
  },
  {
    icon: Award,
    title: "A $23M track record you can verify",
    description:
      "Guy shares his actual Adelaide project financials with clients. You will see the real numbers, the real margins, and the real lessons from South Brighton, Glenelg East, and Somerton Park. Not polished pitch decks. Not estimated returns. The truth.",
  },
  {
    icon: Users,
    title: "One-on-one, not a group course",
    description:
      "Every client gets direct access to Guy. There is no cohort, no online portal, and no recorded videos. Your coaching is tailored to your situation, your capital position, and your goals as an Adelaide professional.",
  },
  {
    icon: ShieldCheck,
    title: "Expert validation at every decision point",
    description:
      "The fear of a $100,000 mistake is the single biggest barrier for first-time developers. Guy's role is to de-risk your investment by validating every major decision before you commit. Site selection. Feasibility. Builder selection. DA strategy. You are never making those calls alone.",
  },
  {
    icon: TrendingUp,
    title: "Limited to eight active clients at any time",
    description:
      "Guy personally oversees every engagement. That means he limits his client intake to ensure every client gets the attention and accountability they need to actually execute. When a spot opens, it fills quickly.",
  },
]

export function LpaDifferentiation() {
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
    <section className="overflow-hidden">
      <div ref={sectionRef} className="grid lg:grid-cols-2 opacity-0 transition-opacity duration-1000">
        {/* Left - Dark Section */}
        <div className="bg-moore-navy px-8 lg:px-16 py-24 lg:py-32">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-8 block">WHY CHOOSE US</span>

          <h2 className="font-serif text-3xl lg:text-4xl text-moore-offwhite mb-4">Why Moore Consultants?</h2>

          <p className="text-moore-offwhite/60 leading-relaxed mb-12 max-w-md">
            There is no shortage of property development courses and coaches in Australia. Most of them are national
            operators with no local execution. Here is what makes Moore Consultants different.
          </p>

          <div className="space-y-10">
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-moore-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-moore-gold" />
                  </div>
                  <div>
                    <h3 className="text-moore-offwhite text-base font-medium mb-2">{item.title}</h3>
                    <p className="text-moore-offwhite/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right - Image with Stat Overlay */}
        <div className="relative h-[500px] lg:h-auto">
          <img
            src="/Why-Moore-Consultants.jpg"
            alt="Completed Moore Consultants Adelaide development project"
            className="w-full h-full object-cover"
          />

          {/* Overlay Stats */}
          <div className="absolute inset-0 bg-gradient-to-t from-moore-navy/90 via-moore-navy/30 to-transparent flex items-end p-8 lg:p-12">
            <div className="space-y-6 w-full">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-moore-gold text-4xl lg:text-5xl font-light mb-1">$857k</div>
                  <div className="text-moore-offwhite/70 text-xs tracking-widest uppercase">Profit, South Brighton</div>
                </div>
                <div>
                  <div className="text-moore-gold text-4xl lg:text-5xl font-light mb-1">163%</div>
                  <div className="text-moore-offwhite/70 text-xs tracking-widest uppercase">Cash-on-Cash Return</div>
                </div>
              </div>
              <div>
                <div className="text-moore-offwhite/50 text-xs tracking-wide">
                  Proudly Adelaide-based. Serving SA property developers since 2014.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
