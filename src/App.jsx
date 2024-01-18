import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserForm from './assets/components/UserForm'
import UserDetails from './assets/components/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserForm></UserForm>
     {/* <UserDetails userNAme = "flogert" age={25} gjinia = "Male"></UserDetails> */}
    </>
  )
}

export default App
