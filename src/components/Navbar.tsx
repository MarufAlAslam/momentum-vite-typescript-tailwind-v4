import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from "./Link"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b" style={{ borderBottomColor: 'rgba(0, 0, 0, 0.08)' }}>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-[60px]">
            {/* Left side - Logo and Navigation Links */}
            <div className="flex items-center space-x-12">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold font-ubuntu leading-none" style={{ color: '#030616' }}>
                  Momentum
                </h1>
              </div>

              {/* Navigation Links - Desktop */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link href="#features">Features</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#blog">Blog</Link>
                <Link href="#changelog">Changelog</Link>
              </div>
            </div>

            {/* Right side buttons - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <button className="text-[15px] font-normal text-gray-600 hover:text-gray-900 transition-colors">
                Sign in
              </button>
              <button className="px-5 py-2.5 text-[15px] font-normal text-white bg-[#030616] rounded-full hover:bg-[#030616]/90 transition-all">
                Get template
              </button>
            </div>

            {/* Hamburger Menu Button - Mobile */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#030616]" />
              ) : (
                <Menu className="w-6 h-6 text-[#030616]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-white/50 backdrop-blur-md pt-[60px]">
            <div className="px-6 py-8 flex flex-col h-full">
              {/* Navigation Links */}
              <nav className="flex flex-col space-y-6 mb-4">
                <a 
                  href="#features" 
                  className="text-[20px] font-normal text-[#64748b] hover:text-[#030616] transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className="text-[20px] font-normal text-[#64748b] hover:text-[#030616] transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="#blog" 
                  className="text-[20px] font-normal text-[#64748b] hover:text-[#030616] transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </a>
                <a 
                  href="#changelog" 
                  className="text-[20px] font-normal text-[#64748b] hover:text-[#030616] transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Changelog
                </a>
              </nav>

              {/* Buttons */}
              <div className="flex flex-col space-y-4">
                <button className="w-full px-6 py-2 text-[16px] font-medium text-white bg-[#030616] rounded-full hover:bg-[#030616]/90 transition-all">
                  Get template
                </button>
                <button className="text-[16px] font-normal text-[#64748b] hover:text-[#030616] transition-colors py-0">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
