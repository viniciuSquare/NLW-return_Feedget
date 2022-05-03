import { useState } from 'react'

import { Widget } from './components/Widget'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <Widget />
  )
}
