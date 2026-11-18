"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { submitContactSubmission } from "@/lib/contact-submit"


export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    budget: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    setSubmitted(false)
    setIsSubmitting(true)

    try {
      await submitContactSubmission({
        sourcePage: "/",
        sourceComponent: "CTASection",
        triggerLabel: "Start a Conversation",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        details: {
          "Primary area of interest": formData.goal,
          "Engagement stage": formData.budget,
        },
      })
      setSubmitted(true)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to send your enquiry.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=85" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-moore-navy/90" />
      </div>

      <div ref={sectionRef} className="relative max-w-[900px] mx-auto px-8 opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-12">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 block">GET STARTED</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-moore-offwhite mb-6">
            Ready to Make Better
            <br />
            Technology Decisions?
          </h2>
          <p className="text-moore-offwhite/70 text-lg max-w-xl mx-auto">
            Tell us what you're working through — cybersecurity, AI or broader technology strategy.
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
                Area of Interest
              </option>
              <option value="first-project" className="bg-moore-navy">
                Cybersecurity Strategy
              </option>
              <option value="scale" className="bg-moore-navy">
                AI Strategy & Adoption
              </option>
              <option value="learn" className="bg-moore-navy">
                Technology & Transformation
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
                Where Are You Now?
              </option>
              <option value="under-500k" className="bg-moore-navy">
                Exploring Options
              </option>
              <option value="500k-1m" className="bg-moore-navy">
                Planning a Project
              </option>
              <option value="1m-2m" className="bg-moore-navy">
                Ready to Move Forward
              </option>
              <option value="over-2m" className="bg-moore-navy">
                Ongoing Advisory
              </option>
            </select>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center justify-center gap-3 bg-moore-gold text-moore-white px-12 py-5 rounded-xl text-sm tracking-widest uppercase transition-all hover:bg-moore-blue font-medium shadow-lg"
            >
              {isSubmitting ? "Sending..." : "Book Free Consultation"}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {submitError && <p className="text-red-300 text-sm mt-4">{submitError}</p>}
            {submitted && <p className="text-moore-gold text-sm mt-4">Thanks, your enquiry has been sent.</p>}
            <p className="text-moore-offwhite/50 text-sm mt-6">No obligation. No sales pitch. Just honest advice.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
