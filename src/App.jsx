import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Bands'
import Bands from './components/Bands';

const client = new ApolloClient({
  uri: '/query', // replace with your GraphQL server URI
  cache: new InMemoryCache()
});


function App() {
  const [count, setCount] = useState(0)
  return (
    <ApolloProvider client={client}>
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
      <Bands />
    </ApolloProvider>
  )
}

export default App
