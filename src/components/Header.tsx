import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const Header :React.FC = () => {
  return (
    <header className='bg-blue-600 text-white p-4 shadow-md'>
        <div className="flex items-center justify-between container mx-auto">
        {/* Logo Section */}
      <div className="flex items-center">
        <img
          src={logo} // Replace with your logo URL if it's hosted
          alt="Logo"
          className="h-12 w-auto mr-4" // Adjust size of logo
        />
        <h1 className="text-white text-2xl font-semibold">Book Store</h1>
      </div>
     {/* Navigation Links */}
     <nav className="text-white">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-200">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-gray-200">Sign Up</Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header
