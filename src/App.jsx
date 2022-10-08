import { useState } from 'react'
import './App.css'
import IntroCard from './components/IntroCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
  <IntroCard />
    </div>
  )
}

export default App
