import { useRef, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import globeVideo from '@/assets/globe.mp4'

function Globe() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startTime = useRef(0)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      startX.current = e.clientX
      startTime.current = video.currentTime
      video.pause()
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      
      const deltaX = e.clientX - startX.current
      const sensitivity = 0.01 // Adjust for faster/slower scrubbing
      const newTime = startTime.current + (deltaX * sensitivity)
      
      // Clamp between 0 and video duration
      video.currentTime = Math.max(0, Math.min(newTime, video.duration))
    }

    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false
        video.play()
      }
    }

    container.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing">
      <video
        ref={videoRef}
        src={globeVideo}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover pointer-events-none"
      />
    </div>
  )
}

const CTA = () => {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="px-12 max-w-[1400px] mx-auto">
        <div className="bg-white rounded-[32px] overflow-hidden border border-[#e2e8f0] relative">
          <div className="grid grid-cols-2 gap-0 items-center">
            {/* Left Content */}
            <div className="p-20 z-10 relative">
              <h2 className="text-[36px] font-medium text-[#020617] mb-6 leading-tight">
                Start Building with<br />Momentum
              </h2>
              <p className="text-[20px] text-[#475569] mb-8 leading-relaxed">
                Momentum empowers you to unleash your creativity and build anything you can imagine.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#020617] border border-[#e2e8f0] rounded-full text-[16px] font-medium hover:bg-[#f8fafc] transition-all shadow-sm">
                <ArrowRight className="w-5 h-5" />
                Contact sales
              </button>
            </div>

            {/* Right Globe - Video */}
            <div className='pt-20'>
              <Globe />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
