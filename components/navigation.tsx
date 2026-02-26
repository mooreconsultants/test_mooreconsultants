"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-moore-navy/95 backdrop-blur-md py-4 rounded-b-2xl" : "bg-transparent py-6",
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#" className="flex flex-col">
          <span
            className={cn(
              "text-sm tracking-[0.3em] font-light transition-colors",
              isScrolled ? "text-moore-offwhite" : "text-moore-navy lg:text-moore-offwhite",
            )}
          >
            MOORE
          </span>
          <span
            className={cn(
              "text-[10px] tracking-[0.2em] transition-colors",
              isScrolled ? "text-moore-gold" : "text-moore-charcoal lg:text-moore-gold",
            )}
          >
            CONSULTANTS
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-12">
          {["Services", "Case Studies", "About", "Process"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className={cn(
                "text-xs tracking-widest uppercase transition-colors hover:text-moore-gold",
                isScrolled ? "text-moore-offwhite/80" : "text-moore-offwhite/80",
              )}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              "px-6 py-3 rounded-xl text-xs font-medium tracking-widest uppercase transition-all bg-moore-gold text-moore-white hover:bg-moore-blue shadow-md",
              isScrolled
                ? "bg-moore-gold text-moore-white hover:bg-moore-blue"
                : "bg-moore-gold text-moore-white hover:bg-moore-blue",
            )}
          >
            Book Consultation
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-moore-offwhite" : "text-moore-navy"} />
          ) : (
            <Menu className={isScrolled ? "text-moore-offwhite" : "text-moore-navy"} />
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
          {["Services", "Case Studies", "About", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-moore-offwhite text-2xl tracking-widest uppercase hover:text-moore-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
