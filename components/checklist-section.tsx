"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const PREVIEW_ITEMS = [
  {
    num: "01",
    title: "Does the zoning actually permit what you want to build?",
    sting: "A Character Overlay alone can make an otherwise viable site completely unworkable. Most buyers never check.",
  },
  {
    num: "02",
    title: "Are there protected trees on or near the frontage?",
    sting: "SA tree laws have tightened hard. One verge tree in the wrong spot and you can't get parking. Deal over.",
  },
  {
    num: "03",
    title: "Can you physically get a crossover in?",
    sting: "Power poles, SA Water pits, bus stops — any one of them can block your access. Check Street View metre by metre before you get excited.",
  },
  {
    num: "08",
    title: "Has someone already tried to develop this and failed?",
    sting: "Vendors don't have to tell you. Ask the agent why they're selling. A refused DA is a red flag that could cost you months.",
  },
  {
    num: "10",
    title: "What's on the site — and is demolition clean?",
    sting: "Pre-1990 buildings almost certainly contain asbestos — and demolition costs blow out fast. Most buyers never ask until it's too late.",
  },
]

export function ChecklistSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/checklist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong.")
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-moore-offwhite overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 block">FREE DOWNLOAD</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy mb-6 leading-tight">
            Most development sites fail one of these 10 checks.<br />
            <em className="not-italic text-moore-gold">Do you know which ones?</em>
          </h2>
          <p className="text-moore-charcoal/70 text-xl leading-relaxed max-w-2xl">
            Guy has assessed hundreds of Adelaide sites over 25+ years. The same problems kill deals over and over — and most buyers never see them coming until they've already spent money on due diligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — teaser items */}
          <div>
            <p className="text-moore-charcoal/50 text-xs tracking-[0.3em] uppercase mb-6">5 of the 10 checks — inside the free document</p>
            <div className="space-y-0">
              {PREVIEW_ITEMS.map((item) => (
                <div key={item.num} className="border-t border-moore-navy/10 py-6">
                  <div className="flex items-start gap-5">
                    <span className="font-serif text-3xl font-black text-moore-navy/10 leading-none flex-shrink-0 w-10 mt-1">
                      {item.num}
                    </span>
                    <div>
                      <p className="text-moore-navy font-semibold text-base mb-1 leading-snug">{item.title}</p>
                      <p className="text-moore-charcoal/55 text-sm leading-relaxed">{item.sting}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-moore-navy/10 pt-6">
                <p className="text-moore-charcoal/40 text-sm italic">
                  + 5 more checks in the full document — easements, road type, allotment size, frontage minimums, and site slope. Each one includes the exact numbers to look for, where to find them, and what to do when you strike a problem. Plus a bonus section: the Cooling-Off Sprint — exactly who to call the moment your offer is accepted and why.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Gate */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-moore-navy p-10 lg:p-12">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-moore-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ArrowRight className="w-6 h-6 text-moore-gold" />
                  </div>
                  <h3 className="font-serif text-2xl text-moore-offwhite mb-3">Check your inbox.</h3>
                  <p className="text-moore-offwhite/60 text-sm leading-relaxed">
                    The checklist is on its way to{" "}
                    <span className="text-moore-gold">{email}</span>.
                    <br />Check junk if you don't see it within a minute.
                  </p>
                </div>
              ) : (
                <>
                  <span className="text-moore-gold text-xs tracking-[0.4em] mb-5 block">GET THE FULL CHECKLIST FREE</span>
                  <h3 className="font-serif text-2xl lg:text-3xl text-moore-offwhite mb-4 leading-tight">
                    Don't make an offer without running these 10 checks first.
                  </h3>
                  <p className="text-moore-offwhite/55 text-sm leading-relaxed mb-8">
                    Built from $23M+ of completed Adelaide coastal developments. The exact checks Guy runs on every site — before he calls the agent. Takes 30–60 minutes. Could save you a six-figure mistake.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-transparent border border-moore-offwhite/20 px-5 py-4 text-moore-offwhite placeholder:text-moore-offwhite/35 focus:border-moore-gold focus:outline-none transition-colors text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-transparent border border-moore-offwhite/20 px-5 py-4 text-moore-offwhite placeholder:text-moore-offwhite/35 focus:border-moore-gold focus:outline-none transition-colors text-sm"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full flex items-center justify-center gap-3 bg-moore-gold text-moore-navy px-8 py-5 text-xs tracking-widest uppercase font-bold transition-all hover:bg-moore-offwhite disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Send Me the Checklist"}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
                  </form>

                  <div className="mt-6 pt-6 border-t border-moore-offwhite/10">
                    <p className="text-moore-offwhite/30 text-xs leading-relaxed">
                      Sent immediately to your inbox. No sales sequence. Just the document.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
