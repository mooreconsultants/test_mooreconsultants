"use client"

import { useEffect, useRef } from "react"

const problems = [
  {
    number: "01",
    title: "You don't know if you have enough capital",
    body: "Everyone says you need $500k or more. But what does that actually mean for your situation? What structures can you use? What finance options are available? These questions stop most people before they even start.",
  },
  {
    number: "02",
    title: "You don't know how to find the right site",
    body: "Finding a profitable development site is not about browsing realestate.com.au. It requires specific knowledge of what to look for, how to run a feasibility, and how to negotiate. Without a guide, the risk of getting it wrong is significant.",
  },
  {
    number: "03",
    title: "You have no one to validate your decisions",
    body: "Property development is full of decision points where the wrong call costs you tens of thousands of dollars. Without an experienced mentor in your corner, you are making those calls alone.",
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
              Three things that stop first-time developers
            </h2>
            <div className="w-16 h-px bg-moore-gold mb-8" />
            <p className="text-moore-charcoal/70 leading-relaxed">
              These are not unique problems. They are the same barriers that come up in almost every conversation Guy
              Moore has with someone who wants to develop property. And they are all solvable.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              <img
                src="/professional-consultant-reviewing-architectural-pl.jpg"
                alt="Guy Moore reviewing development plans with a client"
                className="w-full h-[350px] lg:h-[420px] object-cover mb-0"
              />

              <div className="bg-moore-navy p-8 lg:p-12 lg:absolute lg:-bottom-12 lg:-left-16 lg:w-[85%]">
                <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">THE SOLUTION</span>
                <h3 className="font-serif text-2xl text-moore-offwhite mb-4">
                  Personalised coaching that removes the guesswork
                </h3>
                <p className="text-moore-offwhite/70 leading-relaxed text-sm">
                  Guy Moore works with you one-on-one, sharing his own financials, his own process, and his own hard-won
                  lessons. You do not get a course. You get a partner who has done it himself.
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
