"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const problems = [
  {
    number: "01",
    segment: "The Overeducated Undoer",
    title: "You know more than most people who have already developed. You still haven't started.",
    body: "You have completed the courses. You can talk feasibility, planning overlays, and development margins with confidence. But theoretical knowledge and the conviction to commit real money to an Adelaide site are two completely different things. Knowing is not the same as doing.",
  },
  {
    number: "02",
    segment: "The Validation Seeker",
    title: "Every time you think you have found a deal, the doubt sets in.",
    body: "You run the numbers and they stack up. Then you second-guess the inputs. Then you find another reason to keep looking. What you are missing is not a better spreadsheet — it is someone who can look at the same deal and tell you honestly whether it works. Guy Moore does exactly that, from 10+ years of active development in Adelaide.",
  },
  {
    number: "03",
    segment: "The Accountability Gap",
    title: "Without someone alongside you, the trigger never gets pulled.",
    body: "Most property courses sell you the knowledge and leave you to execute alone. There is no one to call when you find a site that looks right. No one to pressure-test the numbers. No one to tell you whether the DA risk is manageable. That is the gap Guy Moore fills — not with more education, but with presence.",
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
              You've done the courses. Something else is holding you back.
            </h2>
            <div className="w-16 h-px bg-moore-gold mb-8" />
            <p className="text-moore-charcoal/70 leading-relaxed">
              The barrier for most educated property investors is not what they know. It is the absence of someone
              to validate their decisions when real money is on the line. Guy Moore fills that role — one client
              at a time.
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
