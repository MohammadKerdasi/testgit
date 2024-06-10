import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>
        nahla
      </h1>

      <h1>
        osama
      </h1>

      <h2>mohammad</h2>
      <h3>nahla</h3>
      <h2>mmm</h2>


      <h2>099</h2>

      <h3>added h3</h3>

      <h2>added h2</h2>
      
      <h1>osama added</h1>


      <h5>hhhh</h5>
      <h1>hehehe</h1>

      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>

    </>
  )
}

export default App
