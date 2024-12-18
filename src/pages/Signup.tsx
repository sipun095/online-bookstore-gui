import axios from 'axios';
import React, { useState } from 'react'

interface SignupData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string,
}
const Signup: React.FC = () => {
    const [formData, setFormData] = useState<SignupData>({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const apiUrl = `${import.meta.env.VITE_AUTH_SERVICE_URL}`;
        e.preventDefault();
        setError('');
        setSuccess('');
        console.log(formData)
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try{
          const response= await axios.post(apiUrl+"/register",formData);
          setSuccess('User registered successfully');  
          console.log(response.data)
          setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
        }catch(error){
            setError("Error registering user");
            console.log(error)
        }
        //backend call

        
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 bg-gradient-to-r from-blue-400 to-purple-500'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full sm:w-96'  >
                <h2 className='text-2xl font-bold text-center mb-4'>Sign Up</h2>
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                {success && <p className="text-green-500 text-sm text-center">{success}</p>}
                <form onSubmit={handleSubmit} className='space-y-4'>
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
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
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

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
