import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App :React.FC = () => {
  return (
    <BrowserRouter>
     <Header></Header>
     <main className='w-full'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
     </main>
    </BrowserRouter>
  )
}

export default App

