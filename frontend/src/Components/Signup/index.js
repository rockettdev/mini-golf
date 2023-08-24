import '../../App.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function UserRegister () {

    const [formData, setFormData] = useState({ email: '', username: '', password: '' });
    const [registerCompletion, setRegisterCompletion] = useState('')


    const handleChange = (e) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const register = async (e) => {
        e.preventDefault();

        console.log('hello');
        console.log(formData)

        const response = await fetch('http://localhost:4000/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(formData)
          })

          console.log(response)

          setRegisterCompletion(response)
    }

    console.log(formData);

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
                        name="email"
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
                        name="username"
                        aria-label="Enter your Username" 
                        type="username" 
                        placeholder="Username" 
                        className="text-sm text-gray-base w-60
                                mr-3 py-5 px-4 h-2 border 
                                border-gray-200 rounded mb-2" />
                </div>
                <div className="flex justify-center">

                    {registerCompletion.status === 403 && <p>Username Already Exists</p>}
                    {registerCompletion.status === 409 && <p>Email Already Exists</p>}
                    {registerCompletion.status === 500 && <p>Server Error, Please try again later</p>}

                    <input 
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                        aria-label="Enter your password" 
                        type="password" 
                        placeholder="Password"
                        className="text-sm text-gray-base mr-3 w-60
                                py-5 px-4 h-2 border border-gray-200 
                                rounded mb-2" />
                </div>
                <div className="flex justify-center">
                    <button 
                    class="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 mb-20 rounded items-center"
                    onClick={register}>Submit</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default UserRegister