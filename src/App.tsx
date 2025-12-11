import { useLenis } from '@/hooks/useLenis'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'

function App() {
  useLenis()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
      </main>
    </div>
  )
}

export default App
