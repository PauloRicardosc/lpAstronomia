import Home from './templates/Home'
import Cart from './templates/Cart'
import Register from './templates/Cart'
import Box from './templates/Cart'
import Typography from './templates/Cart'



import './App.css'
import { ReactQueryProvider } from './providers/react-query-provider'
import Loja from './Pages'


function App() {
  return (
    <ReactQueryProvider>
     <Loja />
    </ReactQueryProvider>
  )
}

export default App
