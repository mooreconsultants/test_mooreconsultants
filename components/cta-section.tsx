"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    budget: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/modern-architectural-home-interior-with-natural-li.jpg" alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-moore-navy/90" />
      </div>

      <div ref={sectionRef} className="relative max-w-[900px] mx-auto px-8 opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-12">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 block">GET STARTED</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-moore-offwhite mb-6">
            Ready to Start Your First
            <br />
            Profitable Development?
          </h2>
          <p className="text-moore-offwhite/70 text-lg max-w-xl mx-auto">
            Book a free 30-minute consultation to discuss your goals.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-transparent border border-moore-offwhite/30 rounded-xl px-6 py-4 text-moore-offwhite placeholder:text-moore-offwhite/50 focus:border-moore-gold focus:outline-none transition-colors"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-transparent border border-moore-offwhite/30 rounded-xl px-6 py-4 text-moore-offwhite placeholder:text-moore-offwhite/50 focus:border-moore-gold focus:outline-none transition-colors"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-transparent border border-moore-offwhite/30 rounded-xl px-6 py-4 text-moore-offwhite placeholder:text-moore-offwhite/50 focus:border-moore-gold focus:outline-none transition-colors"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="bg-transparent border border-moore-offwhite/30 rounded-xl px-6 py-4 text-moore-offwhite focus:border-moore-gold focus:outline-none transition-colors appearance-none cursor-pointer"
              required
            >
              <option value="" className="bg-moore-navy">
                Primary Goal
              </option>
              <option value="first-project" className="bg-moore-navy">
                Complete First Development
              </option>
              <option value="scale" className="bg-moore-navy">
                Scale Existing Portfolio
              </option>
              <option value="learn" className="bg-moore-navy">
                Learn the Process
              </option>
              <option value="other" className="bg-moore-navy">
                Other
              </option>
            </select>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="bg-transparent border border-moore-offwhite/30 rounded-xl px-6 py-4 text-moore-offwhite focus:border-moore-gold focus:outline-none transition-colors appearance-none cursor-pointer"
              required
            >
              <option value="" className="bg-moore-navy">
                Estimated Budget
              </option>
              <option value="under-500k" className="bg-moore-navy">
                Under $500k
              </option>
              <option value="500k-1m" className="bg-moore-navy">
                $500k - $1M
              </option>
              <option value="1m-2m" className="bg-moore-navy">
                $1M - $2M
              </option>
              <option value="over-2m" className="bg-moore-navy">
                Over $2M
              </option>
            </select>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-3 bg-moore-gold text-moore-white px-12 py-5 rounded-xl text-sm tracking-widest uppercase transition-all hover:bg-moore-blue font-medium shadow-lg"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-moore-offwhite/50 text-sm mt-6">No obligation. No sales pitch. Just honest advice.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
