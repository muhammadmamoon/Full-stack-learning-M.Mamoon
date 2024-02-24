import react from 'react'

import './App.css'
import TraficLightes from './Destructing/TraficLightes'
import State from './Hooks/state'

function App() {
  return (
    <div>
            <TraficLightes {...lights} />
            <State/>
        </div>
  )
}

export default App
