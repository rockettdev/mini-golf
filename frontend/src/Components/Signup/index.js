import '../../App.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Signup () {

    const [formData, setFormData] = useState({ email: '', username: '', password: '' });
    const [registerCompletion, setRegisterCompletion] = useState('')


    const handleChange = (e) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }


    return (
    <>
        <div className="h-screen flex flex-col 
                    items-center justify-center bg-main-bg bg-cover">
            <p class="text-white text-4xl mb-20 pb-20 font-custom">
              Create Account
            </p>
            <form>
                <div className="flex justify-center">
                    <input 
                        value={formData.email}
                        onChange={handleChange}
                        aria-label="Enter your email address" 
                        type="email"
                        placeholder="Email address" 
                        className="text-sm text-gray-base w-60
                                mr-3 py-5 px-4 h-2 border 
                                border-gray-200 rounded mb-2" />                    
                </div>
                <div className="flex justify-center">
                    <input 
                        value={formData.username}
                        onChange={handleChange}
                        aria-label="Enter your Username" 
                        type="username" 
                        placeholder="Username" 
                        class="text-sm text-gray-base w-60
                                mr-3 py-5 px-4 h-2 border 
                                border-gray-200 rounded mb-2" />
                </div>
                <div className="flex justify-center">
                    <input 
                        value={formData.username}
                        onChange={handleChange}
                        aria-label="Enter your password" 
                        type="password" 
                        placeholder="Password"
                        class="text-sm text-gray-base mr-3 w-60
                                py-5 px-4 h-2 border border-gray-200 
                                rounded mb-2" />
                </div>
                <div className="flex justify-center">
                    <button class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 mb-20 rounded items-center">Submit</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default Signup