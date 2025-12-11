import { useLenis } from '@/hooks/useLenis'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Features from '@/components/Features'

function App() {
  useLenis()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
      </main>
    </div>
  )
}

export default App
