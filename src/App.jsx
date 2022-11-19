import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Canvas} from 'react-three-fiber';

function App() {
  const [count, setCount] = useState(0)
  function Box(){
    return(
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="hotpink" />
      </mesh>
    )
  }
  return (
    <div className="App">
      <Canvas>
        <Box />
      </Canvas>
    </div>
  )
}

export default App
