import { Twitter, Facebook, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white py-16">
      <div className="px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 gap-16 mb-16">
          {/* Left Section - Newsletter */}
          <div>
            <h3 className="text-[24px] font-semibold text-[#020617] mb-8" style={{ fontFamily: 'Ubuntu, sans-serif' }}>
              Momentum
            </h3>
            <div className="mb-4">
              <div className="flex gap-2 w-2/3">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="flex-1 px-4 py-3 rounded-full border border-[#e2e8f0] text-[14px] text-[#64748b] focus:outline-none focus:border-[#94a3b8]"
                  style={{ backgroundColor: 'rgb(249, 250, 251)' }}
                />
                <button className="px-6 py-3 bg-[#020617] text-white rounded-full text-[14px] font-medium hover:bg-[#1e293b] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
            <p className="text-[14px] text-[#64748b]">
              No Spam. Just Product updates.
            </p>
          </div>

          {/* Right Section - 3 Columns */}
          <div className="grid grid-cols-3 gap-12">
            {/* Product Column */}
            <div>
              <h4 className="text-[16px] font-semibold text-[#020617] mb-6">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-[14px] text-[#64748b] hover:text-[#020617] transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] text-[#64748b] hover:text-[#020617] transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] text-[#64748b] hover:text-[#020617] transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] text-[#64748b] hover:text-[#020617] transition-colors">
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-[16px] font-semibold text-[#020617] mb-6">Support</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-[14px] text-[#64748b] hover:text-[#020617] transition-colors">
                    Help Desk
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] text-[#64748b] hover:text-[#020617] transition-colors">
                    Public roadmap
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] text-[#64748b] hover:text-[#020617] transition-colors">
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-[16px] font-semibold text-[#020617] mb-6">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-[14px] text-[#64748b] hover:text-[#020617] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[14px] text-[#64748b] hover:text-[#020617] transition-colors">
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media Icons */}
        <div className="flex justify-between items-center">
          <p className="text-[14px] text-[#64748b]">
            Momentum. All right reserved. © 2024
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#94a3b8] flex items-center justify-center hover:bg-[#64748b] transition-colors">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#94a3b8] flex items-center justify-center hover:bg-[#64748b] transition-colors">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#94a3b8] flex items-center justify-center hover:bg-[#64748b] transition-colors">
              <Youtube className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
