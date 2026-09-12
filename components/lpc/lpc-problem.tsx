"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const problems = [
  {
    number: "01",
    segment: "The Capital Recycling Problem",
    title: "Your equity is locked in the asset. You don't know how to structure the next deal.",
    body: "After your first project, most of the profit is tied up. Understanding how to recycle that capital — refinance, equity release, joint venture structures — while managing development risk is a different skill set from the first project. Guy Moore has navigated this multiple times across Adelaide's coastal suburbs.",
  },
  {
    number: "02",
    segment: "The Scaling Mindset",
    title: "What got you to the first development won't get you to the portfolio.",
    body: "Your first development was about proving the model. The second and third are about building a system — site selection discipline, builder relationships, entity structures that support multiple concurrent developments. These require a level of operational clarity that most one-off developers never develop.",
  },
  {
    number: "03",
    segment: "The Market Depth Problem",
    title: "You know one suburb. A portfolio requires knowing several.",
    body: "You completed your first project in one area. Scaling means knowing which Adelaide coastal suburbs offer genuine development margin right now — Glenelg, Brighton, Somerton Park, Burnside, Unley — and which ones look good on paper but don't stack up when the numbers are run properly.",
  },
]

export function LpcProblem() {
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
              Three barriers that stop first-time developers from becoming portfolio developers.
            </h2>
            <div className="w-16 h-px bg-moore-gold mb-8" />
            <p className="text-moore-charcoal/70 leading-relaxed">
              Every developer who has completed their first project faces a different challenge for the second.
              Guy Moore has navigated all of them in Adelaide's coastal suburbs — with his own money, on his
              own projects.
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
