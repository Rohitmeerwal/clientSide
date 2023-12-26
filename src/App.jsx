import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Header from './componets/header'
import Login from './pages/login'
import Registration from './pages/registration'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/registration' element={<Registration/>}/>
     {/* <Route path='/logout' element={<Logout/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
