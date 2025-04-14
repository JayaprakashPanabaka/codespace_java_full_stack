import { useState } from 'react'
import Welcome from './Module 5/React Basics/Ques_1'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>App Component</h1>
    <Welcome />
   </>
  )
}

export default App
