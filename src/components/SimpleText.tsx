import { motion } from 'framer-motion'

const SimpleText = () => {
  return (
    <section className="py-20 bg-white">
      <div className="px-12 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-[64px] font-medium text-[#030712] mb-6 leading-[74px]">
            All AI tools are just in one<br />place and simple to use
          </h2>
          <p className="text-[20px] font-normal text-[#475569] leading-relaxed">
            Get started with AI quickly and easily with<br />all your tools at your fingertips.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SimpleText
