import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { motion } from 'framer-motion'
import heroBg from '@/assets/hero-bg.svg'
import heroImage from '@/assets/hero-big.avif'

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Top Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 mb-8"
          >
            <span className="text-[12px] font-normal text-[#475569]">
              ✨ We released V2 open API
            </span>
            <a 
              href="#changelog" 
              className="text-[12px] font-normal text-[#3B82F6] hover:underline inline-flex items-center gap-1"
            >
              See changelog
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5">
                <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[28px] lg:text-[48px] xl:text-[64px] leading-[38px] lg:leading-[58px] xl:leading-[74px] font-medium text-[#020617] mb-6 max-w-4xl"
          >
            Access all your AI tools in a single platform
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[18px] lg:text-[20px] font-normal text-[#292f38] mb-10 max-w-2xl"
          >
            Foster a collaborative environment where teams can manage all their ai tools on a unified platform.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 mb-16 w-full lg:w-auto px-6 lg:px-0"
          >
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-[15px] font-normal text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all"
            >
              <Play className="w-4 h-4 fill-current" />
              See how it works
            </button>
            <button className="w-full lg:w-auto px-6 py-3 text-[15px] font-normal text-white bg-[#020617] rounded-full hover:bg-[#020617]/90 transition-all">
              Start for free
            </button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-[1280px] p-2.5 lg:p-6 rounded-[16px] lg:rounded-[28px]"
            style={{ backgroundColor: '#f9fafb' }}
          >
            <img 
              src={heroImage} 
              alt="Platform interface" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/QtjU4V_o8eg?si=aS0qDdYbne-GdOIG&autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
