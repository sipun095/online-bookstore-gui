import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface LoginData {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const [formData, setFormData] = useState<LoginData>({
        username: "",
        password: "",
    })
    const [error,setError]=useState<string>("");
    const navigate=useNavigate();
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const{name,value}=e.target;
        setFormData((prev)=>({...prev,[name]:value}));
    }

    
    const handleSubmit= async (e:React.FormEvent)=>{
      e.preventDefault();
      setError("");
      try {
        const response=await axios.post("url",formData);
        const{token}=response.data;
        localStorage.setItem('authToken',token);
        navigate('/home');
      } catch (error) {
        setError('/home');
      }
      console.log(formData);
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login