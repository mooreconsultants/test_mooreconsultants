import type { Metadata } from "next"
import { PmfpdLandingPage } from "@/components/pmfpd/pmfpd-landing-page"

export const metadata: Metadata = {
  title: "Project Management for Property Development | Moore Consultants",
  description:
    "End-to-end project management for property development. From site acquisition and feasibility through to construction oversight and profitable sale. $23M+ in completed projects. Book a free consultation.",
  keywords: [
    "project management for property development",
    "best project management for property development",
    "project management for property development near me",
    "trusted project management for property development",
    "property development project management",
    "property development project manager",
  ],
  openGraph: {
    title: "Project Management for Property Development | Moore Consultants",
    description:
      "End-to-end project management for property development. $23M+ in completed projects. Personalised coaching and hands-on oversight.",
    type: "website",
  },
}

export default function ProjectManagementForPropertyDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Project management for property development",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Moore Consultants provides comprehensive project management for property development — covering every stage from site acquisition and feasibility analysis through to council approvals, builder selection, construction oversight, and profitable sale. Founded by Guy Moore, an active developer with over $23M in completed residential projects, our project management approach is grounded in real-world experience rather than textbook theory. Every client receives personalised, one-on-one guidance tailored to their specific development project, budget, and risk profile.",
                },
              },
              {
                "@type": "Question",
                name: "Best project management for property development",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The best project management for property development comes from someone who actively develops — not someone who only teaches. Moore Consultants stands apart because Guy Moore manages his own development projects using the same processes, builder networks, and financial models he shares with clients. With $23M+ in new homes built and sold over seven consecutive years, clients benefit from proven project management systems that have been refined across dozens of real developments. From DA coordination and builder contracts to construction scheduling and sales strategy, every element of our project management has been tested with real capital at stake.",
                },
              },
              {
                "@type": "Question",
                name: "Project management for property development near me",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Moore Consultants is based in Adelaide, South Australia, and provides hands-on project management for property development across the Adelaide metropolitan area. Guy Moore conducts in-person site visits, attends council meetings alongside clients, coordinates directly with builders on-site, and provides face-to-face oversight throughout every stage of the development process. Whether your project is in Adelaide's coastal suburbs, inner-city, or surrounding regions, Moore Consultants delivers local, on-the-ground project management with a proven track record of successful completions.",
                },
              },
              {
                "@type": "Question",
                name: "Trusted project management for property development",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trust in property development project management is earned through transparency, accountability, and results. Moore Consultants earns that trust by sharing real project financials from completed developments, maintaining aligned incentives with every client, and providing hands-on oversight rather than delegating to junior staff. Guy Moore has guided first-time developers to successful project completions with documented profits, and he continues to invest his own capital in developments alongside his clients. With a seven-year track record, a $23M+ portfolio of completed projects, and a commitment to personalised project management over generic consulting, Moore Consultants is the trusted choice for property development project management.",
                },
              },
            ],
          }),
        }}
      />
      <PmfpdLandingPage />
    </>
  )
}
