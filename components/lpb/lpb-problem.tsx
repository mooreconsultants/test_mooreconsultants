"use client"

import { useEffect, useRef } from "react"

const problems = [
  {
    number: "01",
    segment: "The Paralysed Learner",
    title: "You have consumed the courses. You are still not executing.",
    body: "You understand feasibility. You know what a planning overlay is. You have run the numbers on paper. But when it comes to committing real money to a real Adelaide site, analysis paralysis sets in. You need expert validation at every decision point, not more theory.",
  },
  {
    number: "02",
    segment: "The Time-Poor Professional",
    title: "Your career demands 60 hours a week. You cannot afford to learn on the job.",
    body: "As a doctor, lawyer, engineer, or senior executive, your time is worth too much to spend navigating Adelaide council approvals, vetting builders, and running feasibilities. You need a partner who handles the complexity while you focus on your career.",
  },
  {
    number: "03",
    segment: "The Experienced Investor",
    title: "Passive investment returns are no longer enough.",
    body: "You already own investment properties in Adelaide. You understand the market. But the gap between passive investment and active development feels significant. You need someone who has made that transition successfully and can accelerate your path to your first profitable development.",
  },
]

export function LpbProblem() {
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
          <div className="lg:col-span-4">
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 block">THE CHALLENGE</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-moore-navy mb-6 leading-tight">
              Three types of Adelaide professional. One solution.
            </h2>
            <div className="w-16 h-px bg-moore-gold mb-8" />
            <p className="text-moore-charcoal/70 leading-relaxed">
              Every client Guy Moore works with is different. But the barriers they face are remarkably consistent.
              Whether you are paralysed by fear, time-poor, or ready to scale, the path forward is the same: expert
              guidance from someone who has done it in Adelaide, with real money, on real sites.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              <img
                src="/professional-consultant-reviewing-architectural-pl.jpg"
                alt="Guy Moore reviewing Adelaide development plans with a client"
                className="w-full h-[350px] lg:h-[420px] object-cover mb-0"
              />

              <div className="bg-moore-navy p-8 lg:p-12 lg:absolute lg:-bottom-12 lg:-left-16 lg:w-[85%]">
                <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">THE SOLUTION</span>
                <h3 className="font-serif text-2xl text-moore-offwhite mb-4">
                  We build with you. Not just teach you.
                </h3>
                <p className="text-moore-offwhite/70 leading-relaxed text-sm">
                  Most property courses leave you stranded with theory. Moore Consultants is different. Guy works with
                  you one-on-one, sharing his own Adelaide project financials, his own process, and his own hard-won
                  lessons from 10+ years in this market. You do not get a course. You get a partner.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-24 lg:mt-32">
          {problems.map((problem) => (
            <div key={problem.number} className="relative">
              <span className="text-moore-gold text-6xl font-serif opacity-15 absolute -top-4 -left-2">
                {problem.number}
              </span>
              <div className="pt-8">
                <span className="text-moore-gold text-xs tracking-[0.3em] uppercase mb-3 block">{problem.segment}</span>
                <h3 className="font-serif text-xl text-moore-navy mb-4 leading-snug">{problem.title}</h3>
                <p className="text-moore-charcoal/70 leading-relaxed text-sm">{problem.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
