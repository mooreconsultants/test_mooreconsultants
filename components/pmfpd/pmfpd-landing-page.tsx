"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  ArrowRight,
  Download,
  CheckCircle,
  Search,
  FileSearch,
  Calculator,
  HardHat,
  TrendingUp,
  Star,
  Target,
  Award,
  Users,
  Handshake,
  Linkedin,
  Instagram,
  Facebook,
  Menu,
  X,
  ChevronDown,
  ClipboardCheck,
  Phone,
  BarChart3,
} from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { submitContactSubmission } from "@/lib/contact-submit"

/* ─── NAVIGATION ─── */

function PmNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-md py-4 rounded-b-2xl shadow-sm" : "bg-white py-6 shadow-sm",
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image src="/moore-consultants-logo.png" alt="Moore Consultants" width={180} height={40} priority className="h-10 w-auto lg:h-12" />
        </a>

        <div className="hidden lg:flex items-center gap-12">
          {["Services", "About", "Process", "Results"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs tracking-widest uppercase transition-colors hover:text-moore-gold text-black">
              {item}
            </a>
          ))}
          <a href="#contact" className="px-6 py-3 rounded-xl text-xs font-medium tracking-widest uppercase transition-all bg-moore-gold text-moore-white hover:bg-moore-blue shadow-md">
            Free Consultation
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="text-black" /> : <Menu className="text-black" />}
        </button>
      </div>

      <div className={cn("lg:hidden fixed inset-0 bg-moore-navy z-40 transition-transform duration-500", isMobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {["Services", "About", "Process", "Results", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMobileMenuOpen(false)} className="text-moore-offwhite text-2xl tracking-widest uppercase hover:text-moore-gold transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

/* ─── HERO ─── */

function PmHero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-fade-in") }),
      { threshold: 0.1 },
    )
    if (contentRef.current) obs.observe(contentRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen w-full flex flex-col">
      <div className="absolute inset-0 z-0">
        <Image src="/luxury-modern-architectural-building-exterior-with.jpg" alt="Modern property development under management" fill priority sizes="100vw" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-moore-offwhite/95 via-moore-offwhite/80 to-moore-offwhite/20" />
      </div>

      <div className="relative z-10 flex flex-col justify-center flex-1 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 lg:pt-36 pb-48 lg:pb-56">
        <div ref={contentRef} className="opacity-0 transition-opacity duration-1000 max-w-xl">
          <a href="/" className="text-moore-gold text-xs tracking-[0.4em] font-light mb-6 block hover:text-moore-blue transition-colors">MOORE CONSULTANTS</a>

          <h1 className="font-serif text-4xl lg:text-6xl text-moore-navy leading-[1.1] mb-6">
            Project Management
            <br />
            <span className="text-moore-charcoal">for Property Development</span>
          </h1>

          <div className="w-16 h-px bg-moore-gold mb-8 rounded-full" />

          <p className="text-moore-charcoal/80 leading-relaxed mb-10 max-w-md">
            End-to-end project management from site acquisition through to profitable sale — backed by $23M+ in
            completed developments and a hands-on approach that eliminates the guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-moore-gold text-moore-white px-8 py-4 rounded-xl text-sm font-medium tracking-widest uppercase transition-all hover:bg-moore-blue shadow-lg"
            >
              Book Your Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <a href="#lead-magnet" className="inline-flex items-center gap-2 text-moore-charcoal text-sm tracking-wide hover:text-moore-gold transition-colors">
            <Download className="w-4 h-4" />
            Download Free Project Management Checklist
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 px-4 lg:px-8 pb-4 lg:pb-6">
        <div className="max-w-[1400px] mx-auto bg-moore-navy/95 backdrop-blur-md text-moore-offwhite px-8 lg:px-12 py-6 lg:py-8 flex flex-col sm:flex-row gap-6 lg:gap-16 rounded-t-3xl shadow-xl">
          {[
            { value: "$23M+", label: "Projects Managed & Sold" },
            { value: "7 Years", label: "Managing Developments" },
            { value: "End-to-End", label: "Site Find to Sale" },
          ].map((stat, index) => (
            <div key={index} className="text-center sm:text-left">
              <div className="text-moore-gold text-3xl lg:text-4xl font-light mb-1">{stat.value}</div>
              <div className="text-moore-offwhite/60 text-xs tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── LEAD MAGNET ─── */

function PmLeadMagnet() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-fade-in") }),
      { threshold: 0.2 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="lead-magnet" className="py-24 lg:py-32 bg-moore-white">
      <div ref={ref} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-16">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">FREE RESOURCES</span>
          <h2 className="font-serif text-3xl lg:text-5xl text-moore-navy mb-4">Tools for Managing Your Development</h2>
          <p className="text-moore-charcoal/70 max-w-2xl mx-auto">
            Download the same project management tools used across $23M+ in completed developments — free, no obligation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Project Management Checklist",
              description: "The 35-point checklist Guy uses to manage every development from DA lodgement through to handover — covering timelines, milestones, and critical decision points.",
              cta: "Download Free Checklist",
              icon: ClipboardCheck,
            },
            {
              title: "Free 30-Minute Strategy Call",
              description: "A no-obligation call with Guy Moore to discuss your project, identify risks, and map out a management plan tailored to your development.",
              cta: "Book Free Call",
              icon: Phone,
              href: "#contact",
            },
            {
              title: "Development Feasibility Template",
              description: "The financial model Guy uses to assess every project — covering acquisition costs, construction budgets, holding costs, and profit projections.",
              cta: "Download Free Template",
              icon: BarChart3,
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="group bg-moore-offwhite p-8 lg:p-10 rounded-2xl border border-transparent hover:border-moore-gold transition-all duration-500 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 w-0 h-1 bg-moore-gold transition-all duration-500 group-hover:w-full" />
                <div className="w-12 h-12 bg-moore-navy flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-moore-gold" />
                </div>
                <h3 className="font-serif text-xl text-moore-navy mb-3">{item.title}</h3>
                <p className="text-moore-charcoal/70 text-sm leading-relaxed mb-6">{item.description}</p>
                <a href={item.href || "#contact"} className="inline-flex items-center gap-2 text-moore-navy text-sm tracking-wide hover:text-moore-gold transition-colors group/link font-medium">
                  {item.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── PROBLEM / SOLUTION ─── */

function PmProblem() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-fade-in") }),
      { threshold: 0.1 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-24 lg:py-32 bg-moore-offwhite overflow-hidden">
      <div ref={ref} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:-mt-12">
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 block">THE CHALLENGE</span>
            <h2 className="font-serif text-3xl lg:text-4xl text-moore-navy mb-10 leading-tight">
              Why Property Developments Fail Without Proper Management
            </h2>
            <ul className="space-y-6">
              {[
                "Builder delays and cost blowouts with no one holding them accountable",
                "Council approval processes that stall for months without expert coordination",
                "Financial feasibility errors that don't surface until it's too late",
                "No single point of accountability across the entire project lifecycle",
                "Missed deadlines, missed opportunities, and margin erosion",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-px bg-moore-gold mt-3 flex-shrink-0" />
                  <span className="text-moore-charcoal/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 relative lg:mt-24">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image src="/images/gemini-generated-image-lbbn98lbbn98lbbn.jpg" alt="Guy Moore managing a property development project" fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
              <div className="bg-moore-navy p-8 lg:p-12 lg:absolute lg:-bottom-16 lg:-left-24 lg:w-[90%]">
                <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">THE SOLUTION</span>
                <h3 className="font-serif text-2xl lg:text-3xl text-moore-offwhite mb-6">
                  Hands-On Project Management From an Active Developer
                </h3>
                <ul className="space-y-4">
                  {[
                    "Single point of accountability from site acquisition to sale",
                    "Proven project management systems refined across $23M+ in developments",
                    "Direct builder coordination, contract negotiation, and quality oversight",
                    "Real-time financial tracking against your feasibility model",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-moore-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-moore-offwhite/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── ABOUT ─── */

function PmAbout() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-fade-in") }),
      { threshold: 0.1 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 lg:py-0 bg-moore-white overflow-hidden">
      <div ref={ref} className="max-w-[1400px] mx-auto opacity-0 transition-opacity duration-1000">
        <div className="grid lg:grid-cols-12 min-h-[800px]">
          <div className="lg:col-span-6 relative h-[500px] lg:h-auto overflow-hidden rounded-r-2xl lg:rounded-2xl">
            <Image src="/guy-moore-portrait.jpg" alt="Guy Moore — property development project manager" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-top" />
            <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-px bg-moore-gold" />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-24 relative">
            <div className="absolute top-16 right-16 text-[200px] font-serif text-moore-navy/5 leading-none hidden lg:block">M</div>

            <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 relative z-10">YOUR PROJECT MANAGER</span>
            <h2 className="font-serif text-4xl lg:text-6xl text-moore-navy mb-4 relative z-10">Guy Moore</h2>
            <p className="text-moore-charcoal text-xl lg:text-2xl font-light mb-8 relative z-10">
              Managed Over $23M in Property Developments From Start to Finish
            </p>
            <div className="w-16 h-px bg-moore-gold mb-8" />
            <p className="text-moore-charcoal/70 leading-relaxed mb-10 max-w-lg relative z-10">
              Guy Moore has spent the past seven years managing property developments across Adelaide&apos;s coastal suburbs —
              from initial site identification and feasibility through council approvals, builder coordination, construction
              oversight, and sales execution. He is not a course seller or a theorist. He is an active developer who manages
              his own projects and shares the same systems, networks, and financial models with a small number of clients each year.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-10 relative z-10">
              {[
                { value: "$23M+", label: "Projects Managed" },
                { value: "7 Years", label: "Managing Developments" },
                { value: "163%", label: "Best CoC Return" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-moore-navy text-3xl lg:text-4xl font-light mb-2">{stat.value}</div>
                  <div className="text-moore-charcoal/60 text-xs tracking-wide uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <a href="#contact" className="inline-flex items-center gap-2 text-moore-navy text-sm tracking-widest uppercase hover:text-moore-gold transition-colors group">
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="/" className="inline-flex items-center gap-2 text-moore-charcoal/60 text-sm tracking-widest uppercase hover:text-moore-gold transition-colors group">
                Visit Moore Consultants
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── SERVICES ─── */

function PmServices() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-fade-in") }),
      { threshold: 0.1 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const services = [
    {
      number: "01",
      title: "Site Acquisition & Feasibility",
      description: "We find, validate, and financially model profitable development sites for you",
      deliverables: ["Market analysis & site identification", "Financial feasibility modeling", "Council zoning & overlay assessment", "Negotiation support"],
      investment: "From $10,000",
    },
    {
      number: "02",
      title: "Full Project Management",
      description: "End-to-end oversight from DA approval through to settlement",
      deliverables: ["DA/CDC coordination with councils", "Builder selection & contract management", "Construction oversight & quality control", "Sales strategy & settlement coordination"],
      investment: "Custom Pricing",
    },
    {
      number: "03",
      title: "Tour de Coastal",
      description: "In-person tour of completed developments with full financials",
      deliverables: ["Site visits to 3+ completed projects", "Behind-the-scenes project financials", "Q&A with Guy"],
      investment: "Limited Availability",
    },
  ]

  return (
    <section id="services" className="py-24 lg:py-32 bg-moore-offwhite">
      <div ref={ref} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">PROJECT MANAGEMENT SERVICES</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">How We Manage Your Development</h2>
          </div>
          <p className="text-moore-charcoal/70 max-w-md mt-6 lg:mt-0 leading-relaxed">
            Choose the level of project management support that matches your experience and goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-5 group">
            <div className="bg-moore-white p-8 lg:p-10 h-full rounded-2xl border border-transparent hover:border-moore-gold transition-all duration-500 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-0 h-1 bg-moore-gold transition-all duration-500 group-hover:w-full" />
              <span className="text-moore-gold text-6xl font-serif opacity-20 absolute top-4 right-6">{services[0].number}</span>
              <h3 className="font-serif text-2xl text-moore-navy mb-4 relative z-10">{services[0].title}</h3>
              <p className="text-moore-charcoal/70 mb-8 relative z-10">{services[0].description}</p>
              <ul className="space-y-3 mb-8 relative z-10">
                {services[0].deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-moore-charcoal/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-moore-gold flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mt-auto relative z-10">
                <span className="text-moore-navy font-medium">{services[0].investment}</span>
                <a href="#contact" className="inline-flex items-center gap-2 text-moore-charcoal text-sm hover:text-moore-gold transition-colors group/link">
                  Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
            <div className="group">
              <div className="bg-moore-white p-8 lg:p-10 rounded-2xl border border-transparent hover:border-moore-gold transition-all duration-500 relative overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 w-0 h-1 bg-moore-gold transition-all duration-500 group-hover:w-full" />
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-moore-gold text-4xl font-serif opacity-30 mb-4 block">{services[1].number}</span>
                    <h3 className="font-serif text-2xl text-moore-navy mb-3">{services[1].title}</h3>
                    <p className="text-moore-charcoal/70 mb-6">{services[1].description}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {services[1].deliverables.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-moore-charcoal/80 text-sm">
                          <CheckCircle className="w-3 h-3 text-moore-gold flex-shrink-0" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-4">
                    <span className="text-moore-navy font-medium">{services[1].investment}</span>
                    <a href="#contact" className="inline-flex items-center gap-2 text-moore-charcoal text-sm hover:text-moore-gold transition-colors group/link">
                      Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="bg-moore-navy p-8 lg:p-10 rounded-2xl relative overflow-hidden shadow-sm">
                <div className="absolute top-0 left-0 w-0 h-1 bg-moore-gold transition-all duration-500 group-hover:w-full" />
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <span className="text-moore-gold text-4xl font-serif opacity-50">{services[2].number}</span>
                    <div>
                      <h3 className="font-serif text-xl text-moore-offwhite mb-2">{services[2].title}</h3>
                      <p className="text-moore-offwhite/60 text-sm">{services[2].description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-moore-gold text-sm">{services[2].investment}</span>
                    <a href="#contact" className="inline-flex items-center gap-2 text-moore-offwhite text-sm hover:text-moore-gold transition-colors group/link">
                      Book Your Tour <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PROCESS ─── */

function PmProcess() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-fade-in") }),
      { threshold: 0.1 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const steps = [
    { number: "01", title: "Discovery & Strategy", description: "We assess your goals, budget, and risk tolerance, then build a tailored project management plan for your development.", icon: Search },
    { number: "02", title: "Site Acquisition", description: "Identify and validate high-potential development sites, run feasibility models, and negotiate the best terms.", icon: FileSearch },
    { number: "03", title: "Approvals & Planning", description: "Manage the DA/CDC process end-to-end — council submissions, consultant coordination, and approval follow-through.", icon: Calculator },
    { number: "04", title: "Construction Management", description: "Builder selection, contract negotiation, construction scheduling, quality oversight, and budget tracking through to completion.", icon: HardHat },
    { number: "05", title: "Sales & Settlement", description: "Strategic pricing, agent coordination, marketing oversight, and settlement management to maximise your return.", icon: TrendingUp },
  ]

  return (
    <section id="process" className="py-24 lg:py-32 bg-moore-offwhite overflow-hidden">
      <div ref={ref} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-20">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">PROJECT MANAGEMENT PROCESS</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">How We Manage Your Project</h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-moore-gold/20 hidden lg:block" />
          <div className="space-y-16 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              return (
                <div key={index} className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${index !== steps.length - 1 ? "lg:pb-24" : ""}`}>
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-0 w-16 h-16 bg-moore-white border border-moore-gold items-center justify-center z-10">
                    <span className="text-moore-gold font-serif text-xl">{step.number}</span>
                  </div>
                  <div className={`${isEven ? "lg:pr-24 lg:text-right" : "lg:col-start-2 lg:pl-24"}`}>
                    <div className={`${isEven ? "lg:ml-auto" : ""} max-w-md`}>
                      <span className="lg:hidden text-moore-gold text-4xl font-serif block mb-4">{step.number}</span>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 bg-moore-navy flex items-center justify-center">
                          <Icon className="w-5 h-5 text-moore-gold" />
                        </div>
                        <h3 className="font-serif text-2xl text-moore-navy">{step.title}</h3>
                      </div>
                      <p className="text-moore-charcoal/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── TESTIMONIALS ─── */

function PmTestimonials() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-fade-in") }),
      { threshold: 0.1 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const testimonials = [
    {
      quote: "Guy managed the entire project — from finding the site to handing over the keys. I went from paralysed by the complexity to completing my first profitable development in 18 months.",
      name: "Ben",
      role: "First-time developer",
      result: "$187k profit",
    },
    {
      quote: "Having Guy manage the builder relationship and council approvals took an enormous weight off my shoulders. Every decision was validated before I committed.",
      name: "Scott",
      role: "First-time developer",
      result: "$234k profit",
    },
    {
      quote: "The project management was worth every cent. Guy caught cost overruns early and kept the build on schedule when I would have missed them entirely.",
      name: "Bianca",
      role: "First-time developer",
      result: "$96k profit",
    },
  ]

  return (
    <section id="results" className="py-24 lg:py-32 bg-moore-white">
      <div ref={ref} className="max-w-[1400px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="mb-16">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">CLIENT RESULTS</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">Managed to Profit</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-7 bg-moore-offwhite p-8 lg:p-12 rounded-2xl relative shadow-sm">
            <span className="text-moore-gold text-8xl font-serif absolute top-4 left-8 opacity-20">&ldquo;</span>
            <blockquote className="font-serif text-xl lg:text-2xl text-moore-navy leading-relaxed mb-8 relative z-10 pt-8">
              {testimonials[0].quote}
            </blockquote>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-moore-gold text-moore-gold" />)}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-moore-navy font-medium">{testimonials[0].name}</div>
                <div className="text-moore-charcoal/60 text-sm">{testimonials[0].role}</div>
              </div>
              <div className="text-right">
                <div className="text-moore-gold text-2xl font-light">{testimonials[0].result}</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {testimonials.slice(1).map((t, index) => (
              <div key={index} className="bg-moore-offwhite p-8 rounded-2xl relative flex-1 shadow-sm">
                <span className="text-moore-gold text-5xl font-serif absolute top-2 left-6 opacity-20">&ldquo;</span>
                <blockquote className="text-moore-charcoal leading-relaxed mb-6 relative z-10 pt-4">{t.quote}</blockquote>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-moore-gold text-moore-gold" />)}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-moore-navy font-medium text-sm">{t.name}</div>
                    <div className="text-moore-charcoal/60 text-xs">{t.role}</div>
                  </div>
                  <div className="text-moore-gold text-lg font-light">{t.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── DIFFERENTIATION ─── */

function PmDifferentiation() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-fade-in") }),
      { threshold: 0.1 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const items = [
    { icon: Target, title: "Active Developer", description: "Guy manages his own projects — not just yours" },
    { icon: Award, title: "$23M Track Record", description: "Proven project management across dozens of developments" },
    { icon: Users, title: "One-on-One", description: "Personalised management, not delegated to junior staff" },
    { icon: Handshake, title: "Aligned Incentives", description: "Your project's success is our success" },
    { icon: ClipboardCheck, title: "End-to-End", description: "Single point of accountability from start to finish" },
  ]

  return (
    <section className="overflow-hidden">
      <div ref={ref} className="grid lg:grid-cols-2 opacity-0 transition-opacity duration-1000">
        <div className="bg-moore-navy px-8 lg:px-16 py-24 lg:py-32">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-8 block">WHY CHOOSE US</span>
          <h2 className="font-serif text-3xl lg:text-4xl text-moore-offwhite mb-12">
            Why Developers Choose Moore Consultants for Project Management
          </h2>
          <div className="space-y-8">
            {items.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-12 h-12 border border-moore-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-moore-gold" />
                  </div>
                  <div>
                    <h3 className="text-moore-offwhite text-lg mb-2">{item.title}</h3>
                    <p className="text-moore-offwhite/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative h-[500px] lg:h-auto">
          <Image src="/modern-luxury-property-development-aerial-view-ade.jpg" alt="Property development under professional management" fill sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-moore-navy/80 via-transparent to-transparent flex items-end p-8 lg:p-12">
            <div>
              <div className="text-moore-offwhite text-5xl lg:text-7xl font-light mb-2">$23M+</div>
              <div className="text-moore-offwhite/80 text-sm tracking-widest uppercase mb-4">In Managed Developments</div>
              <a href="/" className="inline-flex items-center gap-2 text-moore-gold text-sm tracking-wide hover:text-moore-offwhite transition-colors group">
                Learn more about Moore Consultants
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA / CONTACT FORM ─── */

function PmCta() {
  const ref = useRef<HTMLDivElement>(null)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", goal: "", budget: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-fade-in") }),
      { threshold: 0.1 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    setSubmitted(false)
    setIsSubmitting(true)
    try {
      await submitContactSubmission({
        sourcePage: "/project-management-for-property-development",
        sourceComponent: "PmCta",
        triggerLabel: "Book Free Consultation",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        details: { "Primary goal": formData.goal, "Estimated budget": formData.budget },
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
      <div className="absolute inset-0">
        <Image src="/modern-architectural-home-interior-with-natural-li.jpg" alt="Background" fill sizes="100vw" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-moore-navy/90" />
      </div>

      <div ref={ref} className="relative max-w-[900px] mx-auto px-8 opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-12">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-6 block">GET STARTED</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-moore-offwhite mb-6">
            Ready for Professional
            <br />
            Project Management?
          </h2>
          <p className="text-moore-offwhite/70 text-lg max-w-xl mx-auto">
            Book a free 30-minute consultation to discuss your development and how we can manage it to a profitable outcome.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-transparent border border-moore-offwhite/30 rounded-xl px-6 py-4 text-moore-offwhite placeholder:text-moore-offwhite/50 focus:border-moore-gold focus:outline-none transition-colors" required />
            <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-transparent border border-moore-offwhite/30 rounded-xl px-6 py-4 text-moore-offwhite placeholder:text-moore-offwhite/50 focus:border-moore-gold focus:outline-none transition-colors" required />
            <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-transparent border border-moore-offwhite/30 rounded-xl px-6 py-4 text-moore-offwhite placeholder:text-moore-offwhite/50 focus:border-moore-gold focus:outline-none transition-colors" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <select value={formData.goal} onChange={(e) => setFormData({ ...formData, goal: e.target.value })} className="bg-transparent border border-moore-offwhite/30 rounded-xl px-6 py-4 text-moore-offwhite focus:border-moore-gold focus:outline-none transition-colors appearance-none cursor-pointer" required>
              <option value="" className="bg-moore-navy">Primary Goal</option>
              <option value="first-project" className="bg-moore-navy">Manage First Development</option>
              <option value="scale" className="bg-moore-navy">Scale With Professional Management</option>
              <option value="rescue" className="bg-moore-navy">Take Over Stalled Project</option>
              <option value="other" className="bg-moore-navy">Other</option>
            </select>
            <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="bg-transparent border border-moore-offwhite/30 rounded-xl px-6 py-4 text-moore-offwhite focus:border-moore-gold focus:outline-none transition-colors appearance-none cursor-pointer" required>
              <option value="" className="bg-moore-navy">Estimated Budget</option>
              <option value="under-500k" className="bg-moore-navy">Under $500k</option>
              <option value="500k-1m" className="bg-moore-navy">$500k - $1M</option>
              <option value="1m-2m" className="bg-moore-navy">$1M - $2M</option>
              <option value="over-2m" className="bg-moore-navy">Over $2M</option>
            </select>
          </div>

          <div className="text-center pt-4">
            <button type="submit" disabled={isSubmitting} className="group inline-flex items-center justify-center gap-3 bg-moore-gold text-moore-white px-12 py-5 rounded-xl text-sm tracking-widest uppercase transition-all hover:bg-moore-blue font-medium shadow-lg">
              {isSubmitting ? "Sending..." : "Book Free Consultation"}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            {submitError && <p className="text-red-300 text-sm mt-4">{submitError}</p>}
            {submitted && <p className="text-moore-gold text-sm mt-4">Thanks, your enquiry has been sent.</p>}
            <p className="text-moore-offwhite/50 text-sm mt-6">No obligation. No sales pitch. Just honest advice from an active developer.</p>
          </div>
        </form>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */

function PmFaq() {
  const ref = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("animate-fade-in") }),
      { threshold: 0.1 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const faqs = [
    {
      question: "Project management for property development",
      answer: "Moore Consultants provides comprehensive project management for property development — covering every stage from site acquisition and feasibility analysis through to council approvals, builder selection, construction oversight, and profitable sale. Founded by Guy Moore, an active developer with over $23M in completed residential projects, our project management approach is grounded in real-world experience rather than textbook theory. Every client receives personalised, one-on-one guidance tailored to their specific development project, budget, and risk profile.",
    },
    {
      question: "Best project management for property development",
      answer: "The best project management for property development comes from someone who actively develops — not someone who only teaches. Moore Consultants stands apart because Guy Moore manages his own development projects using the same processes, builder networks, and financial models he shares with clients. With $23M+ in new homes built and sold over seven consecutive years, clients benefit from proven project management systems that have been refined across dozens of real developments. From DA coordination and builder contracts to construction scheduling and sales strategy, every element of our project management has been tested with real capital at stake.",
    },
    {
      question: "Project management for property development near me",
      answer: "Moore Consultants is based in Adelaide, South Australia, and provides hands-on project management for property development across the Adelaide metropolitan area. Guy Moore conducts in-person site visits, attends council meetings alongside clients, coordinates directly with builders on-site, and provides face-to-face oversight throughout every stage of the development process. Whether your project is in Adelaide's coastal suburbs, inner-city, or surrounding regions, Moore Consultants delivers local, on-the-ground project management with a proven track record of successful completions.",
    },
    {
      question: "Trusted project management for property development",
      answer: "Trust in property development project management is earned through transparency, accountability, and results. Moore Consultants earns that trust by sharing real project financials from completed developments, maintaining aligned incentives with every client, and providing hands-on oversight rather than delegating to junior staff. Guy Moore has guided first-time developers to successful project completions with documented profits, and he continues to invest his own capital in developments alongside his clients. With a seven-year track record, a $23M+ portfolio of completed projects, and a commitment to personalised project management over generic consulting, Moore Consultants is the trusted choice for property development project management.",
    },
  ]

  return (
    <section className="py-24 lg:py-32 bg-moore-offwhite">
      <div ref={ref} className="max-w-[900px] mx-auto px-8 lg:px-12 opacity-0 transition-opacity duration-1000">
        <div className="text-center mb-16">
          <span className="text-moore-gold text-xs tracking-[0.4em] mb-4 block">FREQUENTLY ASKED</span>
          <h2 className="font-serif text-4xl lg:text-5xl text-moore-navy">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-moore-white rounded-2xl overflow-hidden shadow-sm">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 lg:p-8 text-left">
                <h3 className="font-serif text-lg lg:text-xl text-moore-navy pr-8">{faq.question}</h3>
                <ChevronDown className={cn("w-5 h-5 text-moore-gold flex-shrink-0 transition-transform duration-300", openIndex === index && "rotate-180")} />
              </button>
              <div className={cn("overflow-hidden transition-all duration-500", openIndex === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0")}>
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <div className="w-12 h-px bg-moore-gold mb-4" />
                  <p className="text-moore-charcoal/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── FOOTER ─── */

function PmFooter() {
  return (
    <footer className="bg-moore-navy py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pb-12 border-b border-moore-offwhite/10">
          <div className="mb-8 lg:mb-0">
            <a href="/">
              <Image src="/moore-consultants-logo.png" alt="Moore Consultants" width={210} height={56} className="h-12 w-auto lg:h-14" />
            </a>
          </div>
          <nav className="flex flex-wrap gap-8 lg:gap-12 mb-8 lg:mb-0">
            <a href="/" className="text-moore-offwhite/70 text-sm tracking-wide hover:text-moore-gold transition-colors">Home</a>
            {["Services", "About", "Process", "Results", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-moore-offwhite/70 text-sm tracking-wide hover:text-moore-gold transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {[Linkedin, Instagram, Facebook].map((Icon, index) => (
              <a key={index} href="#" className="w-10 h-10 border border-moore-offwhite/20 flex items-center justify-center text-moore-offwhite/70 hover:border-moore-gold hover:text-moore-gold transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-8">
          <p className="text-moore-offwhite/50 text-sm mb-4 lg:mb-0">&copy; {new Date().getFullYear()} Moore Consultants. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="text-moore-offwhite/50 text-sm hover:text-moore-gold transition-colors">{item}</a>
            ))}
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="text-moore-offwhite/50 text-sm">Adelaide, South Australia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ─── MAIN PAGE COMPONENT ─── */

export function PmfpdLandingPage() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <PmNavigation />
      <PmHero />
      <PmLeadMagnet />
      <PmProblem />
      <PmAbout />
      <PmServices />
      <PmProcess />
      <PmTestimonials />
      <PmDifferentiation />
      <PmCta />
      <PmFaq />
      <PmFooter />
    </main>
  )
}
