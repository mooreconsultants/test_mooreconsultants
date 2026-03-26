import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Moore Consultants | Property Development Consulting Australia",
  description:
    "The only property development consultancy in Australia providing personalised one-on-one coaching and end-to-end project management. From theory to reality.",
  generator: "v0.app",
  keywords: ["property development", "consulting", "Adelaide", "Australia", "real estate", "investment"],
  authors: [{ name: "Moore Consultants" }],
  openGraph: {
    title: "Moore Consultants | Property Development Consulting",
    description: "Your partner in profitable property development",
    type: "website",
    url: "https://mooreconsultants.com.au",
    images: [{ url: "https://mooreconsultants.com.au/Hero.jpg", width: 1920, height: 1080 }],
  },
  metadataBase: new URL("https://mooreconsultants.com.au"),
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/icon.svg",
  },
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
        <Script
          src="https://assets.mailerlite.com/jsonp/2222797/forms/182968166864914387/takel"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
