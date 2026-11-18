import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Moore Consultants | Cybersecurity, AI & Technology Advisory",
  description: "Independent cybersecurity, AI and technology consulting in Adelaide, Australia. Enterprise experience, government insight and practical business-focused advice.",
  keywords: ["cybersecurity consulting", "AI strategy", "technology consulting", "IT advisory", "Adelaide", "government cybersecurity", "Australia"],
  authors: [{ name: "Moore Consultants" }],
  alternates: { canonical: "https://mooreconsultants.com.au" },
  openGraph: {
    title: "Moore Consultants | Cybersecurity, AI & Technology Advisory",
    description: "Complex technology. Clearer decisions. Better outcomes.",
    type: "website",
    url: "https://mooreconsultants.com.au",
  },
  metadataBase: new URL("https://mooreconsultants.com.au"),
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }], apple: "/icon.svg" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_playfairDisplay.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
