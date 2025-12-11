import { motion } from 'framer-motion'
import { Zap, Rocket, FileText } from 'lucide-react'
import discoverImage from '@/assets/discover.avif'

const Discover = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-12 max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[64px] font-semibold text-[#030712] mb-4 leading-tight">
            Discover unlimited creative<br />possibilities
          </h2>
          <p className="text-[20px] font-normal text-[#475569]">
            Your go-to source for quick and accurate responses<br />and top notch resources base
          </p>
        </motion.div>

        {/* Image with wrapper like hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full p-6 rounded-[28px] mb-16"
          style={{ backgroundColor: '#f9fafb' }}
        >
          <img 
            src={discoverImage} 
            alt="Discover creative possibilities" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </motion.div>

        {/* Bottom Features */}
        <div className="grid grid-cols-3 gap-8">
          {/* Get instant answers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-[#f1f5f9]">
              <Zap className="w-6 h-6 text-[#030712]" />
            </div>
            <h3 className="text-[20px] font-medium text-[#030712] mb-3">
              Get instant answers
            </h3>
            <p className="text-[16px] text-[#475569]">
              Say goodbye to endless searching and waiting for replies with our tool.
            </p>
          </motion.div>

          {/* Find creative inspiration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-[#f1f5f9]">
              <Rocket className="w-6 h-6 text-[#030712]" />
            </div>
            <h3 className="text-[20px] font-medium text-[#030712] mb-3">
              Find creative inspiration
            </h3>
            <p className="text-[16px] text-[#475569]">
              Our tool empowers you to break through creatives and discover fresh ideas.
            </p>
          </motion.div>

          {/* Chat with any type of document */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-[#f1f5f9]">
              <FileText className="w-6 h-6 text-[#030712]" />
            </div>
            <h3 className="text-[20px] font-medium text-[#030712] mb-3">
              Chat with any type of document
            </h3>
            <p className="text-[16px] text-[#475569]">
              Simply upload your document, ask questions, seek clarification, or discuss ideas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Discover
