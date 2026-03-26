import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Subscribe to The Moore Brief | Moore Consultants",
  description:
    "A short weekly note on Adelaide property development from Guy Moore — $23M+ in completed coastal projects. No courses. No hype. Just what's actually happening.",
}

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-moore-offwhite text-moore-navy">
      {/* Nav */}
      <div className="border-b border-moore-charcoal/10 bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/moore-consultants-logo.png"
              alt="Moore Consultants"
              width={180}
              height={48}
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-moore-charcoal hover:text-moore-navy transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-[680px] px-6 py-16 lg:py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-moore-blue mb-4">
          The Moore Brief
        </p>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-moore-navy leading-tight mb-6">
          What's actually happening in Adelaide property development
        </h1>
        <p className="text-lg text-moore-charcoal leading-relaxed mb-4">
          My name is Guy Moore. Over the past seven years I've built and sold{" "}
          <strong className="text-moore-navy">$23M+ in new homes</strong> across Adelaide's coastal suburbs.
          I'm not a course seller or a consultant. I build.
        </p>
        <p className="text-lg text-moore-charcoal leading-relaxed mb-10">
          Once a week I send a short note — the real numbers behind development deals,
          what I'm seeing on the ground, and the things most developers won't tell you.
          No pitch. No fluff.
        </p>

        {/* MailerLite embed */}
        <div className="bg-white rounded-2xl border border-moore-charcoal/10 shadow-sm p-8 text-left">
          <h2 className="font-serif text-2xl font-bold text-moore-navy mb-2">
            Subscribe to The Moore Brief
          </h2>
          <p className="text-moore-charcoal text-sm mb-6">
            Free. Weekly. Unsubscribe any time.
          </p>

          {/* MailerLite embed script */}
          <div
            className="ml-embedded"
            data-form="74VoTh"
          />
        </div>

        {/* Trust signals */}
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-serif text-3xl font-bold text-moore-navy">$23M+</p>
            <p className="text-sm text-moore-charcoal mt-1">Completed Adelaide projects</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold text-moore-navy">7+</p>
            <p className="text-sm text-moore-charcoal mt-1">Years in the Adelaide market</p>
          </div>
          <div>
            <p className="font-serif text-3xl font-bold text-moore-navy">163%</p>
            <p className="text-sm text-moore-charcoal mt-1">Best cash-on-cash return</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-moore-charcoal/10 py-8 text-center">
        <p className="text-sm text-moore-charcoal">
          Moore Consultants · Adelaide, SA ·{" "}
          <a
            href="mailto:gmoore@mooreconsultants.com.au"
            className="text-moore-blue hover:underline"
          >
            gmoore@mooreconsultants.com.au
          </a>
        </p>
        <p className="text-xs text-moore-charcoal/60 mt-2">
          You can unsubscribe at any time. We respect your privacy.
        </p>
      </footer>
    </main>
  )
}
