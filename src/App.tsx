import Home from './templates/Home'

import './App.css'
import { ReactQueryProvider } from './providers/react-query-provider'

function App() {
  return (
    <ReactQueryProvider>
      <Home />
    </ReactQueryProvider>
  )
}

export default App
