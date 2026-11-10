import { useState } from 'react'
import '../App.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      Count is {count}
    </button>
  )
}

export default Counter
