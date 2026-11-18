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
  title: "Moore Developments | Adelaide Property Development & Project Advisory",
  description: "Adelaide property development advisory, coaching and project management. Practical guidance from site selection through to project delivery.",
  keywords: ["property development", "development advisory", "property development coaching", "project management", "Adelaide", "South Australia"],
  authors: [{ name: "Moore Developments" }],
  alternates: { canonical: "https://test.mooreconsultants.com.au" },
  openGraph: {
    title: "Moore Developments | Adelaide Property Development & Project Advisory",
    description: "Practical property development advice and project management in Adelaide.",
    type: "website",
    url: "https://test.mooreconsultants.com.au",
  },
  metadataBase: new URL("https://test.mooreconsultants.com.au"),
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
