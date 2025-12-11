import { useLenis } from '@/hooks/useLenis'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Features from '@/components/Features'
import Discover from '@/components/Discover'
import SimpleText from '@/components/SimpleText'
import Testimonials from '@/components/Testimonials'

function App() {
  useLenis()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Discover />
        <SimpleText />
        <Testimonials />
      </main>
    </div>
  )
}

export default App
