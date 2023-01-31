import { useState } from 'react'
import './App.css'

import Parent from './components/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Parent />
  )
}

export default App
