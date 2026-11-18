import type { Metadata } from "next"
import LandingPageA from "./lpa/page"

export const metadata: Metadata = {
  title: "Moore Developments | Adelaide Property Development",
  description: "Adelaide property development, site selection, feasibility, coaching and project delivery with experienced local guidance.",
  alternates: { canonical: "https://test.mooreconsultants.com.au" },
  openGraph: { title: "Moore Developments | Adelaide Property Development", description: "Property development advisory and project management in Adelaide.", url: "https://test.mooreconsultants.com.au" },
}

export default function Home() { return <LandingPageA /> }
