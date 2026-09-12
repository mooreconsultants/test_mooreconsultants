"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const problems = [
  {
    number: "01",
    segment: "The Capital Holder",
    title: "You have the money. You don't have the starting point.",
    body: "You have $200k–$500k earmarked for property development. You know it is a better vehicle than leaving it in the bank. But without a clear first step — which suburb, what type of development, how the numbers actually work in Adelaide — the capital sits idle. That is not a problem with your resources. It is a starting-point problem.",
  },
  {
    number: "02",
    segment: "The Risk Manager",
    title: "You won't commit until you understand the real downside.",
    body: "You have seen the numbers work on paper. But without seeing real Adelaide project financials — the actual margin from actual local sites — you cannot fully trust the model. Guy shares the real numbers from his own $23M Adelaide portfolio. Not estimates. His actual results from Glenelg, Brighton, and Somerton Park.",
  },
  {
    number: "03",
    segment: "The Late Starter",
    title: "You know the Adelaide market is moving. You are not in it yet.",
    body: "Adelaide's coastal suburbs are changing. Sites that were available twelve months ago are already gone. The professionals who move in the next six months are the ones who will complete a first project in a market that is still favourable. The question is not whether to start. It is how to start right.",
  },
]

export function LpaProblem() {
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
              You have what it takes. You need what comes next.
            </h2>
            <div className="w-16 h-px bg-moore-gold mb-8" />
            <p className="text-moore-charcoal/70 leading-relaxed">
              Every capital holder Guy Moore works with is different. But the starting-point barrier is consistent:
              not knowing what to do first, and not having someone in their corner who has done it before in the
              same market.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              <div className="relative w-full h-[350px] lg:h-[420px]">
                <Image
                  src="/guy-moore-site-visit-mobile.jpg"
                  alt="Guy Moore on site at an Adelaide development"
                  fill
                  className="object-cover"
                />
              </div>

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
