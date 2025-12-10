import { useLenis } from '@/hooks/useLenis'
import Navbar from '@/components/Navbar'

function App() {
  useLenis()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Your content here */}
      </main>
    </div>
  )
}

export default App
