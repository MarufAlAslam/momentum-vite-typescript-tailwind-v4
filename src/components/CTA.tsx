// import { useRef, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { Globe } from './ui/globe'

const CTA = () => {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="md:px-12 px-5 max-w-[1400px] mx-auto">
        <div className="bg-white rounded-[32px] overflow-hidden border border-[#e2e8f0] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* Left Content */}
            <div className="p-12 lg:p-20 pb-0 lg:pb-20 z-10 relative">
              <h2 className="text-[28px] lg:text-[36px] xl:text-[48px] font-medium text-[#020617] mb-6 leading-tight">
                Start Building with<br className="hidden lg:block" />Momentum
              </h2>
              <p className="text-[18px] lg:text-[20px] text-[#475569] mb-8 leading-relaxed">
                Momentum empowers you to unleash your creativity and build anything you can imagine.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#020617] border border-[#e2e8f0] rounded-full text-[16px] font-medium hover:bg-[#f8fafc] transition-all shadow-sm">
                <ArrowRight className="w-5 h-5" />
                Contact sales
              </button>
            </div>

            {/* Right Globe - Video */}
            <div className='pt-0 lg:pt-20 flex justify-end'>
              <div className='ml-auto w-4/5 md:mt-0 mt-6 md:w-1/2 lg:w-full'>
                <Globe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
