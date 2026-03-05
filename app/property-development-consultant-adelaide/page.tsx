import type { Metadata } from "next"
import { PdcaLandingPage } from "@/components/pdca/pdca-landing-page"

export const metadata: Metadata = {
  title: "Property Development Consultant Adelaide | Moore Consultants",
  description:
    "Adelaide's trusted property development consultant. Personalised one-on-one coaching, feasibility analysis, and end-to-end project management. $23M+ in completed projects. Book a free consultation.",
  keywords: [
    "property development consultant adelaide",
    "best property development consultant adelaide",
    "property development consultant adelaide near me",
    "trusted property development consultant adelaide",
    "property development adelaide",
    "property development coaching adelaide",
  ],
  openGraph: {
    title: "Property Development Consultant Adelaide | Moore Consultants",
    description:
      "Adelaide's trusted property development consultant. Personalised coaching and end-to-end project management. $23M+ in completed projects.",
    type: "website",
  },
}

export default function PropertyDevelopmentConsultantAdelaidePage() {
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
                name: "Property development consultant Adelaide",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Moore Consultants is Adelaide's leading property development consultancy, founded by Guy Moore — an active developer with over $23M in completed residential projects across Adelaide's coastal suburbs. Unlike course sellers or theorists, Guy works alongside a small number of clients each year, providing personalised one-on-one coaching from site acquisition through to profitable sale. Every recommendation comes from real, in-market experience in Adelaide's property landscape.",
                },
              },
              {
                "@type": "Question",
                name: "Best property development consultant Adelaide",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Moore Consultants is widely regarded as the best property development consultant in Adelaide because of one critical difference: Guy Moore is an active developer, not a course seller. With $23M+ in new homes built and sold across Adelaide's coastal market over seven consecutive years, he brings proven, current market knowledge to every client engagement. Clients receive personalised feasibility analysis, hands-on project management, and direct access to the same strategies, builder networks, and financial models Guy uses in his own developments.",
                },
              },
              {
                "@type": "Question",
                name: "Property development consultant Adelaide near me",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Moore Consultants is based in Adelaide, South Australia, and works exclusively within the Adelaide metropolitan area — with particular expertise in the coastal corridor from Glenelg to Somerton Park, Brighton, and surrounding suburbs. Guy Moore conducts in-person site visits, attends council meetings alongside clients, and provides on-the-ground guidance throughout every stage of your development project. Whether you are in the western suburbs, inner south, or northern Adelaide, Moore Consultants offers local, face-to-face property development consulting.",
                },
              },
              {
                "@type": "Question",
                name: "Trusted property development consultant Adelaide",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Trust in property development consulting comes from transparency and proven results. Moore Consultants earns that trust by sharing real project financials, conducting site visits to completed developments, and maintaining aligned incentives with every client. Guy Moore has guided first-time developers to successful completions with documented profits, and he continues to invest his own capital in Adelaide developments alongside his clients. With a seven-year track record, verifiable results, and a commitment to personalised coaching over mass-market courses, Moore Consultants is Adelaide's most trusted property development consultancy.",
                },
              },
            ],
          }),
        }}
      />
      <PdcaLandingPage />
    </>
  )
}
