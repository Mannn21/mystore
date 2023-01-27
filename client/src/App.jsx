import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='w-screen h-screen bg-red-300 flex justify-center items-center'>App</div>
    </div>
  )
}

export default App
