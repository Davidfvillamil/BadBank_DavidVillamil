import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//import del Router

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Componentes 
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { Createaccount } from './components/Createaccount'
import { Balance } from './components/Balance'
import { Deposit } from './components/Deposit'
import { Withdraw } from './components/withdraw'
import { Alldata } from './components/Alldata'
import { Home } from './components/home'

//Contextos
import { FormContext, FormCard } from './context.jsx/context'




function App() {

  const[balance,setBalance] = useState(0)
  const[transctions, setTransactions] = useState([])

  const handletransaction = (transaction) => {
    setTransactions([...transctions,transaction])
  }

  const [usuarios, setUsuarios] = useState([])
  const [usuarioActivo, setUsuarioActivo] = useState('')

  return (
    <FormContext.Provider value={''}>
    
      <Router>
        <Navbar/>
          
      </Router>
      
    </FormContext.Provider>
  )
}

export default App
