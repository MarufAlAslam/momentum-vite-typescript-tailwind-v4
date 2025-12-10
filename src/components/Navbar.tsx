import Link from "./Link"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b" style={{ borderBottomColor: 'rgba(0, 0, 0, 0.08)' }}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-[60px]">
          {/* Left side - Logo and Navigation Links */}
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-[22px] font-bold font-ubuntu leading-none" style={{ color: '#030616' }}>
                Momentum
              </h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features">Features</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#blog">Blog</Link>
              <Link href="#changelog">Changelog</Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-6">
            <button className="text-[15px] font-normal text-gray-600 hover:text-gray-900 transition-colors">
              Sign in
            </button>
            <button className="px-5 py-2.5 text-[15px] font-normal text-white bg-[#030616] rounded-full hover:bg-[#030616]/90 transition-all">
              Get template
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
