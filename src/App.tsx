import { useLenis } from '@/hooks/useLenis'
import { motion } from 'framer-motion'

function App() {
  useLenis()

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Welcome to Momentum
          </h1>
          <p className="text-xl text-neutral-400">
            React + Vite + TypeScript + Tailwind v3 + Framer Motion + Lenis
          </p>
        </motion.div>
      </section>

      {/* Demo Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-neutral-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl font-bold mb-6">Smooth Scrolling</h2>
          <p className="text-lg text-neutral-400">
            Powered by Lenis for buttery smooth scroll animations. Try scrolling to feel the difference!
          </p>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">Feature {item}</h3>
              <p className="text-neutral-400">
                Add your custom components here. This setup is ready for shadcn/ui components.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-neutral-500 border-t border-neutral-800">
        <p>Ready to build something amazing!</p>
      </footer>
    </div>
  )
}

export default App
