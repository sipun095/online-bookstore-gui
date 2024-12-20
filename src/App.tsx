import React from 'react'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

const App :React.FC = () => {
  return (
    <BrowserRouter>
    <div className='flex flex-col min-h-screen'>
     <Header></Header>
     <main className='flex-grow'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
     </main>
     <Footer></Footer>
     </div>
    </BrowserRouter>
  )
}

export default App

