"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { LpaEnquiryModal, type ServiceKey } from "@/components/lpa/lpa-enquiry-modal"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
]

export function LpaNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeModal, setActiveModal] = useState<ServiceKey | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-white py-6 shadow-sm",
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Image
              src="/moore-consultants-logo.png"
              alt="Moore Consultants"
              width={180}
              height={40}
              priority
              className="h-10 w-auto lg:h-12"
            />
          </a>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors hover:text-moore-gold",
                  "text-black",
                )}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setActiveModal("discovery")}
              className="px-6 py-3 text-xs tracking-widest uppercase transition-all border border-moore-gold text-moore-gold hover:bg-moore-gold hover:text-moore-navy"
            >
              Book Discovery Call
            </button>
          </div>

          <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="text-black" />
            ) : (
              <Menu className="text-black" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden fixed inset-0 bg-moore-navy z-40 transition-transform duration-500",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-moore-offwhite text-2xl tracking-widest uppercase hover:text-moore-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                setActiveModal("discovery")
              }}
              className="text-moore-offwhite text-2xl tracking-widest uppercase hover:text-moore-gold transition-colors"
            >
              Book Discovery Call
            </button>
          </div>
        </div>
      </nav>

      <LpaEnquiryModal
        service={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </>
  )
}
