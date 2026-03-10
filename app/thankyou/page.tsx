import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Instagram, Linkedin, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You | Moore Consultants",
  description:
    "Thank you for contacting Moore Consultants. Guy reviews every enquiry personally and aims to respond within one business day.",
}

const nextSteps = [
  {
    title: "Your enquiry has been received",
    description: "Your details have landed with Moore Consultants and the team now has everything needed to review your enquiry properly.",
  },
  {
    title: "Guy reviews your situation personally",
    description: "There is no call centre and no sales handoff. Guy personally reviews each enquiry before making contact.",
  },
  {
    title: "You will hear back within one business day",
    description: "Expect a reply within one business day with the best next step for your situation and how to move forward.",
  },
]

const contactOptions = [
  {
    title: "Email Guy Directly",
    value: "gmoore@mooreconsultants.com.au",
    href: "mailto:gmoore@mooreconsultants.com.au",
    icon: Mail,
  },
  {
    title: "Connect on LinkedIn",
    value: "linkedin.com/in/gmoore",
    href: "https://www.linkedin.com/in/gmoore/",
    icon: Linkedin,
  },
  {
    title: "Message on Instagram",
    value: "@moore_consultants_sa",
    href: "https://www.instagram.com/moore_consultants_sa/",
    icon: Instagram,
  },
]

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-moore-offwhite text-moore-navy">
      <div className="relative overflow-hidden border-b border-moore-charcoal/10 bg-moore-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,172,108,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_30%)]" />

        <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 lg:px-12">
          <Link href="/" className="flex items-center">
            <Image
              src="/moore-consultants-logo.png"
              alt="Moore Consultants"
              width={180}
              height={40}
              priority
              className="h-10 w-auto lg:h-12"
            />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-moore-offwhite/80 transition-colors hover:text-moore-gold"
          >
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <section className="relative mx-auto max-w-[1100px] px-6 pb-20 pt-10 text-center lg:px-12 lg:pb-28 lg:pt-16">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-moore-gold/40 bg-moore-gold/10">
            <CheckCircle2 className="h-8 w-8 text-moore-gold" />
          </div>

          <p className="mb-5 text-xs uppercase tracking-[0.38em] text-moore-gold">Thank You</p>
          <h1 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-moore-offwhite lg:text-6xl">
            Your enquiry is in and Guy will be in touch shortly.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-moore-offwhite/75 lg:text-lg">
            Thanks for reaching out to Moore Consultants. Every enquiry is reviewed personally, and you can expect a
            response within one business day.
          </p>
        </section>
      </div>

      <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-12 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-moore-charcoal/10 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.36em] text-moore-gold">What Happens Next</p>
            <h2 className="font-serif text-3xl leading-tight text-moore-navy lg:text-4xl">
              Clear next steps, no chasing required.
            </h2>

            <div className="mt-10 space-y-6">
              {nextSteps.map((step, index) => (
                <div key={step.title} className="flex gap-5 border-t border-moore-charcoal/10 pt-6 first:border-t-0 first:pt-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-moore-navy text-sm font-medium text-moore-offwhite">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-moore-navy">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-moore-charcoal/75">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-moore-charcoal/10 bg-[#f8f5ef] p-8 lg:p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.36em] text-moore-gold">Need To Reach Out First?</p>
              <h2 className="font-serif text-3xl leading-tight text-moore-navy">Contact details while you wait.</h2>
              <p className="mt-4 text-base leading-7 text-moore-charcoal/75">
                If your enquiry is time-sensitive, use any of the options below before Guy makes contact.
              </p>
            </div>

            {contactOptions.map(({ title, value, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center justify-between gap-4 border border-moore-charcoal/10 bg-white p-6 transition-colors hover:border-moore-gold"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-moore-charcoal/10 text-moore-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-moore-charcoal/55">{title}</p>
                    <p className="mt-1 text-base text-moore-navy">{value}</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-moore-charcoal/40" />
              </a>
            ))}

            <div className="flex items-start gap-4 border border-moore-charcoal/10 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center border border-moore-charcoal/10 text-moore-navy">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-moore-charcoal/55">Location</p>
                <p className="mt-1 text-base text-moore-navy">Adelaide, South Australia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-moore-charcoal/10 pt-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.36em] text-moore-gold">Meanwhile</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-moore-charcoal/75">
              Feel free to head back to the main site if you would like to review services, case studies, or more about
              Guy&apos;s Adelaide development experience.
            </p>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-3 bg-moore-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.26em] text-moore-white transition-colors hover:bg-moore-blue"
          >
            Return to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
