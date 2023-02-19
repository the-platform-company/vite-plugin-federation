import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Some dummy thing
export const DummyButton = React.lazy(() => import('remoteApp/Button'))

const RemoteButton = React.lazy(
  // Normal way of loading things
  // @ts-ignore
  // import("remote_app/Button")

  // Use new loader
  () => {
    remotesMap['myDynamicRemote'] = {
      url: 'http://localhost:3001/assets/remoteEntry.js',
      format: 'esm'
    }

    return __federation_method_ensure('myDynamicRemote')
      .then((remote) => remote.get('./Button').then((factory) => factory()))
  }
)

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <RemoteButton />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
