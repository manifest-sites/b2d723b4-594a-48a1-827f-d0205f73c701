import { useState, useEffect } from 'react'
import Monetization from './components/monetization/Monetization'
import ChickenApp from './components/ChickenApp'

function App() {

  return (
    <Monetization>
      <ChickenApp />
    </Monetization>
  )
}

export default App