import { motion } from 'framer-motion'
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

const Marquee = () => {
  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="px-12">
        <p className="text-center text-[16px] font-normal text-[#64748b] mb-12">
          Used by thousands of fast-growing startups.
        </p>

        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Seamless infinite scroll - animate from -50% to 0% */}
          <motion.div
            className="flex gap-[54px] items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate logos twice for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-auto opacity-40 hover:opacity-60 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Marquee
