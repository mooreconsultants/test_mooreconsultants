"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"

export function LpaContact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder: Resend API integration to be connected on client approval
    console.log("Form submission:", formData)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/modern-architectural-home-interior-with-natural-li.jpg"
          alt="Modern property development interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-moore-navy/90" />
      </div>

      <div ref={sectionRef} className="relative max-w-[900px] mx-auto px-8 opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-12">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 block">GET STARTED</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-moore-offwhite mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-moore-offwhite/70 text-lg max-w-xl mx-auto leading-relaxed">
            Book a free, no-obligation discovery call with Guy Moore. In 30 minutes, you will know exactly which
            service is the right starting point for your situation.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 border border-moore-gold mb-6">
              <CheckCircle className="w-8 h-8 text-moore-gold" />
            </div>
            <h3 className="font-serif text-3xl text-moore-offwhite mb-4">Thank you, we will be in touch shortly.</h3>
            <p className="text-moore-offwhite/60 max-w-md mx-auto">
              Guy or a member of the team will reach out within one business day to confirm your discovery call.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-transparent border border-moore-offwhite/30 px-6 py-4 text-moore-offwhite placeholder:text-moore-offwhite/50 focus:border-moore-gold focus:outline-none transition-colors"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border border-moore-offwhite/30 px-6 py-4 text-moore-offwhite placeholder:text-moore-offwhite/50 focus:border-moore-gold focus:outline-none transition-colors"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-transparent border border-moore-offwhite/30 px-6 py-4 text-moore-offwhite placeholder:text-moore-offwhite/50 focus:border-moore-gold focus:outline-none transition-colors"
              />
            </div>

            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-transparent border border-moore-offwhite/30 px-6 py-4 text-moore-offwhite focus:border-moore-gold focus:outline-none transition-colors appearance-none cursor-pointer"
              required
            >
              <option value="" className="bg-moore-navy">
                Which service are you interested in?
              </option>
              <option value="tour" className="bg-moore-navy">
                Tour de Coastal ($500)
              </option>
              <option value="foundations" className="bg-moore-navy">
                Foundations ($2,000)
              </option>
              <option value="live-deals" className="bg-moore-navy">
                Live Deals ($8,000)
              </option>
              <option value="project-management" className="bg-moore-navy">
                Project Management ($50,000+)
              </option>
              <option value="not-sure" className="bg-moore-navy">
                Not sure yet — I'd like to talk it through
              </option>
            </select>

            <textarea
              placeholder="Briefly tell us where you are in your property development journey (optional)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full bg-transparent border border-moore-offwhite/30 px-6 py-4 text-moore-offwhite placeholder:text-moore-offwhite/50 focus:border-moore-gold focus:outline-none transition-colors resize-none"
            />

            <div className="text-center pt-4">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 bg-moore-gold text-moore-navy px-12 py-5 text-sm tracking-widest uppercase transition-all hover:bg-moore-offwhite font-medium"
              >
                Book My Free Discovery Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-moore-offwhite/50 text-sm mt-6">
                No obligation. No sales pitch. Just an honest conversation about your goals.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
