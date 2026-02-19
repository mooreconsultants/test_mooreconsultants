import { Linkedin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-moore-navy py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pb-12 border-b border-moore-offwhite/10">
          {/* Logo */}
          <div className="mb-8 lg:mb-0">
            <div className="flex flex-col">
              <span className="text-moore-offwhite text-sm tracking-[0.3em] font-light">MOORE</span>
              <span className="text-moore-gold text-[10px] tracking-[0.2em]">CONSULTANTS</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-8 lg:gap-12 mb-8 lg:mb-0">
            {["Services", "Case Studies", "About", "Process", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-moore-offwhite/70 text-sm tracking-wide hover:text-moore-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[Linkedin, Instagram, Facebook].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 border border-moore-offwhite/20 flex items-center justify-center text-moore-offwhite/70 hover:border-moore-gold hover:text-moore-gold transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-8">
          <p className="text-moore-offwhite/50 text-sm mb-4 lg:mb-0">© 2025 Moore Consultants. All rights reserved.</p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="text-moore-offwhite/50 text-sm hover:text-moore-gold transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="mt-4 lg:mt-0">
            <p className="text-moore-offwhite/50 text-sm">Adelaide, South Australia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
