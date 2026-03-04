"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { submitContactSubmission } from "@/lib/contact-submit"

/* ───────────────────────── DATA ───────────────────────── */

const stats = [
  { value: "$23M+", label: "In Completed Projects" },
  { value: "163%", label: "Best Cash-on-Cash Return" },
  { value: "7", label: "Years Active in Adelaide" },
]

const services = [
  {
    num: "01",
    title: "Site Acquisition & Feasibility",
    body: "We find and validate profitable development sites — market analysis, financial modelling, risk assessment, and negotiation support.",
    tag: "FROM $10K",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    num: "02",
    title: "Full Project Management",
    body: "End-to-end support from DA coordination and builder selection through construction oversight to strategic sales execution.",
    tag: "CUSTOM",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    num: "03",
    title: "Tour de Coastal",
    body: "Walk completed Adelaide projects in person. See the builds, hear the stories, ask anything — limited to small groups.",
    tag: "LIMITED",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
]

const testimonials = [
  {
    quote: "Guy's hands-on approach transformed my theoretical knowledge into real profit. I went from paralysed by fear to completing my first development in 18 months.",
    name: "Sarah",
    role: "Surgeon",
    result: "$187k",
    project: "Glenelg East",
  },
  {
    quote: "The personalised guidance was invaluable. Having Guy validate every major decision gave me the confidence to execute.",
    name: "Mark",
    role: "Senior Engineer",
    result: "$234k",
    project: "Brighton",
  },
  {
    quote: "Worth every cent. The ROI speaks for itself.",
    name: "James",
    role: "Corporate Lawyer",
    result: "$156k",
    project: "Somerton Park",
  },
]

const processSteps = [
  { num: "01", title: "Discovery Call", body: "Understand your goals, budget, timeline, and risk tolerance to create a tailored strategy." },
  { num: "02", title: "Site Acquisition", body: "Identify and validate high-potential development opportunities in your target market." },
  { num: "03", title: "Feasibility & Planning", body: "Comprehensive financial modelling, DA preparation, and council approval coordination." },
  { num: "04", title: "Execution", body: "Builder selection, contract negotiation, and hands-on construction oversight." },
  { num: "05", title: "Profit & Scale", body: "Strategic sales execution and planning for your next profitable development." },
]

/* ───────────────────────── CSS KEYFRAMES (injected once) ───────────────────────── */

const styleId = "alt-page-keyframes"

function injectKeyframes() {
  if (typeof document === "undefined") return
  if (document.getElementById(styleId)) return
  const style = document.createElement("style")
  style.id = styleId
  style.textContent = `
    @keyframes alt-float { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(-12px) } }
    @keyframes alt-glow-pulse { 0%,100%{ opacity: 0.04 } 50%{ opacity: 0.08 } }
    @keyframes alt-scale-in { from { opacity:0; transform: scale(0.92) translateY(40px); } to { opacity:1; transform: scale(1) translateY(0); } }
    @keyframes alt-slide-up { from { opacity:0; transform: translateY(60px) rotate(2deg); } to { opacity:1; transform: translateY(0) rotate(0deg); } }
    @keyframes alt-slide-right { from { opacity:0; transform: translateX(-80px); } to { opacity:1; transform: translateX(0); } }
    @keyframes alt-slide-left { from { opacity:0; transform: translateX(80px); } to { opacity:1; transform: translateX(0); } }
    @keyframes alt-counter-spin { from { opacity:0; transform: scale(0.9) rotate(-3deg); } to { opacity:1; transform: scale(1) rotate(0deg); } }
    @keyframes alt-line-grow { from { transform: scaleX(0); } to { transform: scaleX(1); } }
    @keyframes alt-number-count { from { opacity:0; transform: translateY(20px) scale(1.3); } to { opacity:1; transform: translateY(0) scale(1); } }

    [data-anim] { opacity: 0; }
    [data-anim].is-visible { animation-fill-mode: both; }
    [data-anim="scale-in"].is-visible { animation: alt-scale-in 1s cubic-bezier(0.22,1,0.36,1) var(--delay, 0s) both; }
    [data-anim="slide-up"].is-visible { animation: alt-slide-up 1s cubic-bezier(0.22,1,0.36,1) var(--delay, 0s) both; }
    [data-anim="slide-right"].is-visible { animation: alt-slide-right 1.2s cubic-bezier(0.22,1,0.36,1) var(--delay, 0s) both; }
    [data-anim="slide-left"].is-visible { animation: alt-slide-left 1.2s cubic-bezier(0.22,1,0.36,1) var(--delay, 0s) both; }
    [data-anim="counter-spin"].is-visible { animation: alt-counter-spin 1s cubic-bezier(0.22,1,0.36,1) var(--delay, 0s) both; }
    [data-anim="number-count"].is-visible { animation: alt-number-count 0.8s cubic-bezier(0.22,1,0.36,1) var(--delay, 0s) both; }
  `
  document.head.appendChild(style)
}

/* ───────────────────────── COMPONENT ───────────────────────── */

export function AlternativeHomepage() {
  const [scrollY, setScrollY] = useState(0)
  const [vh, setVh] = useState(0)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    injectKeyframes()
  }, [])

  useEffect(() => {
    setVh(window.innerHeight)
    const onScroll = () => setScrollY(window.scrollY)
    const onResize = () => setVh(window.innerHeight)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  /* data-reveal for simple fades (hero area) */
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]")
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).style.opacity = "1"
            ;(e.target as HTMLElement).style.transform = "translateY(0) rotate(0deg)"
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  /* data-anim for keyframe-driven animations (second half) */
  useEffect(() => {
    const els = document.querySelectorAll("[data-anim]")
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible")
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const heroParallax = scrollY * 0.35

  return (
    <div className="relative overflow-x-hidden bg-[#f8fafb]" style={{ fontFamily: "'Geist', system-ui, sans-serif" }}>
      {/* ── FLOATING PILL NAVIGATION ── */}
      <header className="fixed top-3 left-0 right-0 z-50">
        <div className="max-w-[1100px] mx-auto px-4 lg:px-0">
          <div className="px-6 lg:px-8 py-4 flex items-center justify-between rounded-full border border-white/70 bg-white/[0.78] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            <a href="/alternative" className="flex items-center gap-3" aria-label="Moore Consultants home">
              <img src="/moore-consultants-logo.png" alt="Moore Consultants" className="h-9 w-auto" />
            </a>
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-8 text-xs tracking-widest uppercase text-[#4a4a4a]">
              <a href="#about" className="hover:text-[#2a9dbe] transition-colors">About</a>
              <a href="#services" className="hover:text-[#2a9dbe] transition-colors">Services</a>
              <a href="#process" className="hover:text-[#2a9dbe] transition-colors">Process</a>
              <a href="#results" className="hover:text-[#2a9dbe] transition-colors">Results</a>
              <a
                href="#contact"
                className="bg-[#4a4a4a] text-white px-5 py-3 rounded-lg hover:bg-[#2a9dbe] transition-colors"
              >
                Book Consultation
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* ── HERO ── full-bleed cinematic opening */}
      <section ref={heroRef} className="relative min-h-[110vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translateY(${heroParallax}px) scale(1.1)` }}
        >
          <img
            src="/Hero.jpg"
            alt="Completed Adelaide property development"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-12 pb-24 lg:pb-32">
          <div
            data-reveal
            className="max-w-3xl"
            style={{ opacity: 0, transform: "translateY(40px)", transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <span className="inline-block text-white/60 text-[11px] tracking-[0.5em] uppercase mb-6">
              Adelaide&apos;s Property Development Partner
            </span>

            <h1 className="text-white leading-[0.95] mb-8" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 300, letterSpacing: "-0.03em" }}>
              From Theory
              <br />
              <span className="font-normal" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
                to Reality.
              </span>
            </h1>

            <p className="text-white/70 text-lg lg:text-xl max-w-xl leading-relaxed mb-10" style={{ fontWeight: 300 }}>
              The only property development consultancy in Australia that walks beside you — from first site visit to final settlement.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-[#2a9dbe] text-white px-8 py-4 rounded-full text-[13px] font-medium tracking-wider uppercase transition-all duration-300 hover:bg-[#238baa] hover:shadow-[0_8px_30px_rgba(42,157,190,0.3)]"
              >
                Book Free Consultation
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-white/70 text-[13px] tracking-wide border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div
            data-reveal
            className="mt-16 lg:mt-20 rounded-2xl overflow-hidden"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 px-6 lg:px-0">
              {stats.map((s, i) => (
                <div key={i} className="px-6 lg:px-10 py-6 text-center">
                  <div className="text-white text-3xl lg:text-4xl mb-1" style={{ fontWeight: 200 }}>{s.value}</div>
                  <div className="text-white/50 text-[11px] tracking-[0.2em] uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8fafb] to-transparent z-20 pointer-events-none" />
      </section>

      {/* ── BELIEF SHIFT ── */}
      <div className="relative -mt-16 z-30">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          <div
            data-reveal
            className="py-20 lg:py-28"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)" }}
          >
            <p className="text-[#4a4a4a]/40 text-[11px] tracking-[0.5em] uppercase mb-8">The Shift</p>
            <h2
              className="text-[#4a4a4a] leading-[1.15] mb-8"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em" }}
            >
              Most aspiring developers stay stuck in <em style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>theory</em> — endlessly consuming courses, podcasts, and spreadsheets.
            </h2>
            <p className="text-[#4a4a4a]/60 text-lg lg:text-xl leading-relaxed max-w-2xl" style={{ fontWeight: 300 }}>
              Moore Consultants exists for the few who are ready to move. We don&apos;t sell information.
              We walk beside you through every decision, every council meeting, every contract —
              until keys are handed over and profit is banked.
            </p>
          </div>
        </div>
      </div>

      {/* ── ABOUT GUY ── organic asymmetric layout */}
      <div id="about" className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-[10%] top-1/4 w-[60%] h-[60%] rounded-full opacity-[0.04]" style={{ background: "radial-gradient(circle, #2a9dbe, transparent 70%)" }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div
              data-reveal
              className="lg:col-span-5 relative"
              style={{ opacity: 0, transform: "translateY(30px) rotate(1deg)", transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.12)]">
                <img src="/guy-moore-portrait.jpg" alt="Guy Moore on site" className="w-full aspect-[3/4] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div
                className="absolute -bottom-6 -right-4 lg:-right-8 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.6)", animation: "alt-float 6s ease-in-out infinite" }}
              >
                <div className="text-[#2a9dbe] text-3xl font-light">163%</div>
                <div className="text-[#4a4a4a]/60 text-[10px] tracking-[0.2em] uppercase">Best Return</div>
              </div>
            </div>

            <div
              data-reveal
              className="lg:col-span-7"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s" }}
            >
              <p className="text-[#2a9dbe] text-[11px] tracking-[0.5em] uppercase mb-6">Meet Your Partner</p>
              <h2 className="text-[#4a4a4a] leading-[1.1] mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 300, letterSpacing: "-0.02em" }}>
                Guy Moore
              </h2>
              <p className="text-[#4a4a4a] text-xl lg:text-2xl mb-8" style={{ fontWeight: 300 }}>
                Built and Sold Over $23M in New Adelaide Homes in 7 Years
              </p>
              <div className="w-16 h-px bg-[#2a9dbe]/30 mb-8" />
              <p className="text-[#4a4a4a]/60 leading-[1.8] mb-10 max-w-xl text-[15px]">
                Guy has spent the past seven years building and selling new homes across Adelaide&apos;s
                coastal suburbs. He is not a course seller or a theorist — he is an active developer who
                works alongside a small number of clients each year, sharing the same strategies, sites,
                and financial models he uses in his own business.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-10">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div className="text-[#4a4a4a] text-2xl lg:text-3xl mb-1" style={{ fontWeight: 200 }}>{s.value}</div>
                    <div className="text-[#4a4a4a]/40 text-[10px] tracking-[0.2em] uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FULL-BLEED IMAGE INTERLUDE ── */}
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <img src="/alternative-aerial.jpg" alt="Aerial view of active coastal development" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #f8fafb 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.55) 65%, #f8fafb 100%)" }} />
        <div className="absolute inset-0 flex items-center justify-center" data-reveal style={{ opacity: 0, transform: "translateY(20px)", transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)" }}>
          <div className="max-w-3xl mx-6 px-8 text-center">
            <p className="text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase mb-6">Guy Moore</p>
            <p className="text-white" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1.5, textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}>
              &ldquo;Most buyers see a block of land. I see setback requirements, easement constraints, slope percentages, and council overlays.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          SECOND HALF — radically different animation system below
         ══════════════════════════════════════════════════════════════ */}

      {/* ── SERVICES ── organic staggered bento with hover micro-interactions */}
      <div id="services" className="relative py-24 lg:py-40 overflow-hidden">
        {/* ambient drifting glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(42,157,190,0.04), transparent 70%)", animation: "alt-glow-pulse 8s ease-in-out infinite" }} />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div data-anim="slide-right" className="mb-20 lg:mb-28 max-w-2xl">
            <p className="text-[#2a9dbe] text-[11px] tracking-[0.5em] uppercase mb-6 font-mono">Index 01 · Services</p>
            <h2 className="text-[#4a4a4a] leading-[1.05] mb-6" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Choose the level of
              <br />
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>partnership</span> that matches your goals.
            </h2>
            <div className="h-px bg-gradient-to-r from-[#2a9dbe]/40 to-transparent" data-anim="scale-in" style={{ transformOrigin: "left", "--delay": "0.3s" } as React.CSSProperties} />
          </div>

          {/* asymmetric bento grid */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {/* service 01 — large hero card */}
            <div
              data-anim="scale-in"
              className="lg:col-span-7 group relative rounded-[2rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_rgba(42,157,190,0.12)] cursor-default"
              style={{ "--delay": "0.1s", background: "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(248,250,251,0.6))", backdropFilter: "blur(20px)", border: "1px solid rgba(74,74,74,0.06)" } as React.CSSProperties}
            >
              <div className="p-10 lg:p-14 relative z-10">
                <div className="flex items-start justify-between mb-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(42,157,190,0.2)]" style={{ background: "rgba(42,157,190,0.08)" }}>
                    <svg className="w-6 h-6 text-[#2a9dbe]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={services[0].icon} /></svg>
                  </div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#2a9dbe] font-mono mt-2">{services[0].tag}</span>
                </div>
                <span className="text-[#2a9dbe]/10 text-[120px] absolute -top-4 -right-2 leading-none pointer-events-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>01</span>
                <h3 className="text-[#4a4a4a] text-2xl lg:text-3xl mb-4" style={{ fontWeight: 400, lineHeight: 1.15 }}>{services[0].title}</h3>
                <p className="text-[#4a4a4a]/50 text-[16px] leading-[1.8] mb-10 max-w-lg">{services[0].body}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-[#2a9dbe] text-[13px] tracking-wide group-hover:gap-4 transition-all duration-500">
                  Learn more
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2a9dbe] to-[#2a9dbe]/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>

            {/* service 02 + 03 stacked */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
              {services.slice(1).map((svc, i) => (
                <div
                  key={i}
                  data-anim="counter-spin"
                  className="group relative rounded-[1.5rem] overflow-hidden transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1 cursor-default flex-1"
                  style={{ "--delay": `${0.2 + i * 0.15}s`, background: i === 1 ? "linear-gradient(135deg, #1a1a1a, #252525)" : "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: `1px solid ${i === 1 ? "rgba(42,157,190,0.15)" : "rgba(74,74,74,0.06)"}` } as React.CSSProperties}
                >
                  <div className="p-8 lg:p-10 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{ background: i === 1 ? "rgba(42,157,190,0.15)" : "rgba(42,157,190,0.08)" }}>
                        <svg className="w-5 h-5 text-[#2a9dbe]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={svc.icon} /></svg>
                      </div>
                      <span className={`text-[10px] tracking-[0.3em] uppercase font-mono ${i === 1 ? "text-[#2a9dbe]" : "text-[#2a9dbe]"}`}>{svc.tag}</span>
                    </div>
                    <h3 className={`text-xl mb-3 ${i === 1 ? "text-white" : "text-[#4a4a4a]"}`} style={{ fontWeight: 400, lineHeight: 1.2 }}>{svc.title}</h3>
                    <p className={`text-[14px] leading-relaxed mb-6 ${i === 1 ? "text-white/50" : "text-[#4a4a4a]/50"}`}>{svc.body}</p>
                    <a href="#contact" className="inline-flex items-center gap-2 text-[#2a9dbe] text-[13px] tracking-wide group-hover:gap-3 transition-all duration-300">
                      Learn more <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2a9dbe] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── TEXTURE STRIP with parallax quote ── */}
      <div className="relative h-[40vh] lg:h-[50vh] overflow-hidden">
        <img src="/alternative-texture.jpg" alt="Architectural material detail" className="w-full h-full object-cover" style={{ transform: `translateY(${Math.max(0, (scrollY - vh * 3) * 0.15)}px)` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #f8fafb 0%, rgba(0,0,0,0.45) 35%, rgba(0,0,0,0.5) 65%, #f8fafb 100%)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-xl mx-6 px-8 text-center">
            <p className="text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase mb-6">Philosophy</p>
            <p className="text-white" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)", fontWeight: 300, letterSpacing: "0.01em", lineHeight: 1.8, textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              We don&apos;t sell information. We build alongside you — with real money, real risk, and real accountability.
            </p>
          </div>
        </div>
      </div>

      {/* ── PROCESS ── sticky heading + cascading cards (Apple-style) */}
      <div id="process" className="relative py-24 lg:py-40 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* sticky heading column */}
            <div className="lg:col-span-4 mb-12 lg:mb-0">
              <div className="lg:sticky lg:top-32">
                <p data-anim="slide-right" className="text-[#2a9dbe] text-[11px] tracking-[0.5em] uppercase mb-6 font-mono" style={{ "--delay": "0s" } as React.CSSProperties}>Index 02 · Process</p>
                <h2 data-anim="slide-right" className="text-[#4a4a4a] leading-[1.05] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 200, letterSpacing: "-0.02em", "--delay": "0.1s" } as React.CSSProperties}>
                  Your Path to
                  <br />
                  <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>Profit.</span>
                </h2>
                <p data-anim="slide-right" className="text-[#4a4a4a]/50 text-[15px] leading-relaxed max-w-sm" style={{ "--delay": "0.2s" } as React.CSSProperties}>
                  A proven five-stage framework that protects your downside and accelerates your capability — from first call to first settlement.
                </p>
              </div>
            </div>

            {/* cascading step cards */}
            <div className="lg:col-span-8 space-y-6">
              {processSteps.map((step, i) => (
                <div
                  key={i}
                  data-anim="slide-up"
                  className="group relative rounded-[1.5rem] p-8 lg:p-10 transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1"
                  style={{
                    "--delay": `${i * 0.12}s`,
                    background: "rgba(255,255,255,0.65)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(74,74,74,0.05)",
                    marginLeft: i % 2 === 1 ? "2rem" : "0",
                  } as React.CSSProperties}
                >
                  <div className="flex items-start gap-6 lg:gap-8">
                    <div data-anim="number-count" style={{ "--delay": `${i * 0.12 + 0.2}s` } as React.CSSProperties}>
                      <span className="text-[#2a9dbe]/15 text-6xl lg:text-7xl block leading-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{step.num}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-[#4a4a4a] text-xl lg:text-2xl mb-3 transition-colors duration-300 group-hover:text-[#2a9dbe]" style={{ fontWeight: 400 }}>{step.title}</h3>
                      <p className="text-[#4a4a4a]/50 text-[15px] leading-[1.8]">{step.body}</p>
                    </div>
                    <svg className="w-5 h-5 text-[#4a4a4a]/15 mt-3 transition-all duration-500 group-hover:text-[#2a9dbe] group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                  </div>
                  <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-[#2a9dbe]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS ── editorial magazine layout with counter-rotating cards */}
      <div id="results" className="relative py-24 lg:py-40 overflow-hidden" style={{ background: "linear-gradient(180deg, #f8fafb 0%, #edf2f5 30%, #edf2f5 70%, #f8fafb 100%)" }}>
        {/* twin ambient glows */}
        <div className="absolute -left-[15%] top-1/3 w-[40%] h-[40%] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(42,157,190,0.05), transparent 70%)", animation: "alt-glow-pulse 10s ease-in-out infinite" }} />
        <div className="absolute -right-[10%] bottom-1/4 w-[35%] h-[35%] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(42,157,190,0.04), transparent 70%)", animation: "alt-glow-pulse 12s ease-in-out infinite 3s" }} />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div data-anim="slide-right" className="mb-20 lg:mb-28 max-w-2xl">
            <p className="text-[#2a9dbe] text-[11px] tracking-[0.5em] uppercase mb-6 font-mono">Index 03 · Results</p>
            <h2 className="text-[#4a4a4a] leading-[1.05]" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Real People.{" "}
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>Real Profit.</span>
            </h2>
          </div>

          {/* large featured testimonial */}
          <div data-anim="scale-in" className="mb-10" style={{ "--delay": "0.1s" } as React.CSSProperties}>
            <div className="relative rounded-[2rem] overflow-hidden lg:grid lg:grid-cols-12 lg:gap-0" style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(20px)", border: "1px solid rgba(74,74,74,0.05)", boxShadow: "0 40px 80px rgba(0,0,0,0.06)" }}>
              <div className="lg:col-span-8 p-10 lg:p-16 relative">
                <span className="text-[#2a9dbe]/8 text-[180px] absolute -top-6 -left-2 leading-none pointer-events-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>&ldquo;</span>
                <blockquote className="relative z-10 text-[#4a4a4a] text-xl lg:text-2xl leading-[1.6] mb-10 pt-8" style={{ fontWeight: 300 }}>
                  {testimonials[0].quote}
                </blockquote>
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2a9dbe]/20 to-[#2a9dbe]/5 flex items-center justify-center">
                    <span className="text-[#2a9dbe] font-medium text-lg">{testimonials[0].name[0]}</span>
                  </div>
                  <div>
                    <div className="text-[#4a4a4a] font-medium">{testimonials[0].name}</div>
                    <div className="text-[#4a4a4a]/40 text-[13px]">{testimonials[0].role} · {testimonials[0].project}</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex items-center justify-center p-10 lg:p-0 lg:border-l border-[#4a4a4a]/5">
                <div className="text-center">
                  <div data-anim="number-count" className="text-[#2a9dbe] mb-2" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 200, "--delay": "0.4s" } as React.CSSProperties}>{testimonials[0].result}</div>
                  <div className="text-[#4a4a4a]/40 text-[11px] tracking-[0.3em] uppercase">Net Profit</div>
                </div>
              </div>
            </div>
          </div>

          {/* two smaller testimonials */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.slice(1).map((t, i) => (
              <div
                key={i}
                data-anim="counter-spin"
                className="group relative rounded-[1.5rem] p-8 lg:p-10 transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1"
                style={{
                  "--delay": `${0.25 + i * 0.15}s`,
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(74,74,74,0.05)",
                } as React.CSSProperties}
              >
                <span className="text-[#2a9dbe]/8 text-8xl absolute top-2 left-6 leading-none pointer-events-none" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>&ldquo;</span>
                <blockquote className="relative z-10 text-[#4a4a4a]/70 text-[15px] leading-[1.8] mb-8 pt-6">{t.quote}</blockquote>
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#2a9dbe]/15 to-[#2a9dbe]/5 flex items-center justify-center">
                      <span className="text-[#2a9dbe] font-medium text-sm">{t.name[0]}</span>
                    </div>
                    <div>
                      <div className="text-[#4a4a4a] font-medium text-[14px]">{t.name}</div>
                      <div className="text-[#4a4a4a]/40 text-[12px]">{t.role} · {t.project}</div>
                    </div>
                  </div>
                  <div data-anim="number-count" className="text-[#2a9dbe] text-2xl" style={{ fontWeight: 200, "--delay": `${0.5 + i * 0.15}s` } as React.CSSProperties}>{t.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SITE VISIT VIDEO ── cinematic dark with slide-in panels */}
      <div className="relative py-24 lg:py-40 overflow-hidden" style={{ background: "linear-gradient(180deg, #f8fafb 0%, #1a1a1a 15%, #1a1a1a 85%, #f8fafb 100%)" }}>
        <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(42,157,190,0.06), transparent 60%)", animation: "alt-glow-pulse 10s ease-in-out infinite" }} />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(42,157,190,0.04), transparent 60%)", animation: "alt-glow-pulse 12s ease-in-out infinite 4s" }} />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div data-anim="slide-right" className="lg:col-span-7" style={{ "--delay": "0s" } as React.CSSProperties}>
              <div className="relative rounded-[1.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-shadow duration-700 hover:shadow-[0_60px_120px_rgba(42,157,190,0.15)]">
                <video className="w-full aspect-video object-cover" controls poster="/aerial-view-of-residential-development-site.jpg">
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video_Revision_Request_Granted-H2mpoYTRyghufHilHZuaBqV6bLxeRm.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="text-white/25 text-[13px] mt-5 italic">A recent site assessment — Lot 2, 19 King George Avenue, Somerton Park.</p>
            </div>

            <div className="lg:col-span-5">
              <p data-anim="slide-left" className="text-[#2a9dbe] text-[11px] tracking-[0.5em] uppercase mb-6 font-mono" style={{ "--delay": "0.1s" } as React.CSSProperties}>Index 04 · On The Ground</p>
              <h2 data-anim="slide-left" className="text-white leading-[1.1] mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 200, letterSpacing: "-0.02em", "--delay": "0.2s" } as React.CSSProperties}>
                See Opportunity Where Others See
                <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 300 }}> Obstacles</span>
              </h2>
              <p data-anim="slide-left" className="text-white/40 text-[15px] leading-[1.8] mb-10" style={{ "--delay": "0.3s" } as React.CSSProperties}>
                In 90 minutes on-site, I&apos;ll give you more actionable intelligence than weeks of desktop research.
              </p>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { title: "Zoning Analysis", sub: "Development potential" },
                  { title: "Site Measurements", sub: "Dimensions & buildable area" },
                  { title: "Neighbourhood Intel", sub: "Demographics & demand" },
                  { title: "Preliminary Feasibility", sub: "On-the-spot viability" },
                ].map((item, i) => (
                  <div
                    key={i}
                    data-anim="slide-up"
                    className="rounded-xl p-4 transition-all duration-500 hover:bg-white/[0.04]"
                    style={{ "--delay": `${0.35 + i * 0.08}s`, borderLeft: "2px solid rgba(42,157,190,0.2)" } as React.CSSProperties}
                  >
                    <h4 className="text-white text-[13px] font-medium mb-1">{item.title}</h4>
                    <p className="text-white/30 text-[11px]">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── WHY MOORE ── floating bento with mixed sizes and hover glow */}
      <div className="relative py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-[10%] bottom-1/4 w-[50%] h-[50%] rounded-full" style={{ background: "radial-gradient(circle, rgba(42,157,190,0.04), transparent 70%)", animation: "alt-glow-pulse 8s ease-in-out infinite 2s" }} />
        </div>

        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div data-anim="slide-right" className="text-center mb-16 lg:mb-24">
            <p className="text-[#2a9dbe] text-[11px] tracking-[0.5em] uppercase mb-6 font-mono">Index 05 · Differentiation</p>
            <h2 className="text-[#4a4a4a] leading-[1.05]" style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Not a Course. Not a Seminar.
              <br />
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>A Partnership.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Execution-Focused", body: "We build with you, not just teach theory. Every recommendation comes from active, in-market experience.", span: "sm:col-span-2" },
              { title: "$23M Track Record", body: "Proven results across Adelaide's coastal market over seven consecutive years.", span: "" },
              { title: "Personalised", body: "One-on-one coaching, not mass courses or group webinars.", span: "" },
              { title: "Aligned Incentives", body: "Your success is our success. We only win when you win.", span: "sm:col-span-2 lg:col-span-2" },
              { title: "Active Developer", body: "Guy uses the same strategies in his own projects — real skin in the game.", span: "sm:col-span-2 lg:col-span-2" },
            ].map((d, i) => (
              <div
                key={i}
                data-anim="scale-in"
                className={`group relative rounded-[1.5rem] p-8 transition-all duration-700 hover:shadow-[0_30px_60px_rgba(42,157,190,0.08)] hover:-translate-y-1 ${d.span}`}
                style={{
                  "--delay": `${i * 0.08}s`,
                  background: "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(74,74,74,0.05)",
                } as React.CSSProperties}
              >
                <div className="absolute inset-0 rounded-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(42,157,190,0.05), transparent 70%)" }} />
                <h3 className="text-[#4a4a4a] text-lg font-medium mb-2 relative z-10 transition-colors duration-300 group-hover:text-[#2a9dbe]">{d.title}</h3>
                <p className="text-[#4a4a4a]/50 text-[15px] leading-relaxed relative z-10">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* transition strip */}
      <div className="h-16 lg:h-24" style={{ background: "linear-gradient(180deg, #f8fafb 0%, #141414 100%)" }} />

      {/* ── CONTACT ── split cinematic layout */}
      <ContactSection />

      {/* ── FOOTER ── */}
      <footer className="relative py-16 lg:py-20" style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
            <div className="flex items-center gap-3">
              <img src="/moore-consultants-logo.png" alt="Moore Consultants" className="h-8 brightness-200" />
            </div>
            <div className="flex flex-wrap gap-8">
              {["Services", "About", "Process", "Results", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-white/30 text-[13px] hover:text-white/60 transition-colors duration-300">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div className="h-px bg-white/[0.06] mb-8" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-white/20 text-[12px]">&copy; {new Date().getFullYear()} Moore Consultants. All rights reserved.</p>
            <p className="text-white/20 text-[12px]">Adelaide, South Australia</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ───────────────── CONTACT FORM ───────────────── */

function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", goal: "", budget: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleChange = useCallback(
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value })),
    [],
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    setSubmitted(false)
    setIsSubmitting(true)
    try {
      await submitContactSubmission({
        sourcePage: "/alternative",
        sourceComponent: "ContactSection",
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

  const inputCls = "w-full bg-transparent border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/25 text-[15px] focus:border-[#2a9dbe] focus:outline-none transition-all duration-300 hover:border-white/20"
  const selectCls = "w-full bg-transparent border border-white/10 rounded-xl px-6 py-4 text-white text-[15px] focus:border-[#2a9dbe] focus:outline-none transition-all duration-300 hover:border-white/20 appearance-none cursor-pointer"

  return (
    <div id="contact" className="relative py-16 lg:py-24 overflow-hidden" style={{ background: "#141414" }}>
      {/* pulsing ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(42,157,190,0.04), transparent 50%)", animation: "alt-glow-pulse 8s ease-in-out infinite" }} />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* left — large typography */}
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <p className="text-[#2a9dbe] text-[11px] tracking-[0.5em] uppercase mb-6 font-mono">Index 06 · Get Started</p>
            <h2 className="text-white leading-[1.05] mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Ready to Build Your First
              <br />
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 300 }}>Profitable Development?</span>
            </h2>
            <p className="text-white/30 text-lg leading-relaxed mb-8" style={{ fontWeight: 300 }}>
              Book a free 30-minute consultation. No obligation. No sales pitch. Just honest advice from someone who&apos;s done it.
            </p>
            <div className="flex items-center gap-6 text-white/20 text-[12px]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2a9dbe]/60" />
                Free consultation
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2a9dbe]/60" />
                No obligation
              </div>
            </div>
          </div>

          {/* right — floating form card */}
          <div className="lg:col-span-7">
            <div
              className="rounded-[2rem] p-8 lg:p-12"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="alt-name" className="sr-only">Your Name</label>
                    <input id="alt-name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange("name")} className={inputCls} required />
                  </div>
                  <div>
                    <label htmlFor="alt-email" className="sr-only">Email Address</label>
                    <input id="alt-email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange("email")} className={inputCls} required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="alt-phone" className="sr-only">Phone Number</label>
                    <input id="alt-phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange("phone")} className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="alt-goal" className="sr-only">Primary Goal</label>
                    <select id="alt-goal" value={formData.goal} onChange={handleChange("goal")} className={selectCls} required>
                      <option value="" style={{ background: "#141414" }}>Primary Goal</option>
                      <option value="first-project" style={{ background: "#141414" }}>Complete First Development</option>
                      <option value="scale" style={{ background: "#141414" }}>Scale Existing Portfolio</option>
                      <option value="learn" style={{ background: "#141414" }}>Learn the Process</option>
                      <option value="other" style={{ background: "#141414" }}>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="alt-budget" className="sr-only">Estimated Budget</label>
                  <select id="alt-budget" value={formData.budget} onChange={handleChange("budget")} className={selectCls} required>
                    <option value="" style={{ background: "#141414" }}>Estimated Budget</option>
                    <option value="under-500k" style={{ background: "#141414" }}>Under $500k</option>
                    <option value="500k-1m" style={{ background: "#141414" }}>$500k – $1M</option>
                    <option value="1m-2m" style={{ background: "#141414" }}>$1M – $2M</option>
                    <option value="over-2m" style={{ background: "#141414" }}>Over $2M</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-3 bg-[#2a9dbe] text-white py-5 rounded-xl text-[13px] font-medium tracking-wider uppercase transition-all duration-500 hover:bg-[#238baa] hover:shadow-[0_12px_40px_rgba(42,157,190,0.3)] hover:scale-[1.01] disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Book Free Consultation"}
                  <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
                {submitError && <p className="text-red-400 text-sm mt-3 text-center" role="alert">{submitError}</p>}
                {submitted && <p className="text-[#2a9dbe] text-sm mt-3 text-center" role="status">Thanks — your enquiry has been sent. We&apos;ll be in touch shortly.</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
