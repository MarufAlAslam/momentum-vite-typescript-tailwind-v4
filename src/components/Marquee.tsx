// import { motion } from 'framer-motion'
import { Marquee } from './ui/marquee'
import blockly from '@/assets/blockly.png'
import cloudly from '@/assets/cloudly.png'
import camera from '@/assets/camera.png'
import codelify from '@/assets/codelify.png'
import startup from '@/assets/startup.png'

const logos = [
  { name: 'Blockly', src: blockly },
  { name: 'Cloudly', src: cloudly },
  { name: 'Camera', src: camera },
  { name: 'Codelify', src: codelify },
  { name: 'Startup', src: startup },
]

const LogoMarquee = () => {
  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="md:px-12">
        <p className="text-center text-[16px] font-normal text-[#64748b] mb-12">
          Used by thousands of fast-growing startups.
        </p>

        <div className="relative overflow-hidden">
          {/* Left fade - hidden on mobile */}
          <div className="block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          
          {/* Right fade - hidden on mobile */}
          <div className="block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Seamless infinite scroll (magicui Marquee) - faster on mobile */}
          <Marquee reverse pauseOnHover className="[--duration:15s] flex items-center">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-5">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 lg:h-10 w-auto transition-opacity"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default LogoMarquee
