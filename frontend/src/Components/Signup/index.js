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
            <form autoComplete="new-password">
                <div className="flex justify-center">
                    <input 
                        value={formData.email}
                        onChange={handleChange}
                        name="email"
                        aria-label="Enter your email address" 
                        type="email"
                        autoComplete="off" 
                        placeholder="Email address" 
                        className="text-sm text-gray-base w-60
                                 py-5 px-4 h-2 border 
                                border-gray-200 rounded mb-2" />                    
                </div>
                <div className="flex justify-center">
                    <input 
                        value={formData.username}
                        onChange={handleChange}
                        name="username"
                        aria-label="Enter your Username" 
                        type="username"
                        autoComplete="off" 
                        placeholder="Username" 
                        className="text-sm text-gray-base w-60
                                 py-5 px-4 h-2 border 
                                border-gray-200 rounded mb-2" />
                </div>
                <div className="flex justify-center">

                    <input 
                        value={formData.password}
                        onChange={handleChange}
                        name="password"
                        aria-label="Enter your password" 
                        type="password"
                        autoComplete="none" 
                            placeholder="Password"
                        className="text-sm text-gray-base w-60
                                py-5 px-4 h-2 border border-gray-200 
                                rounded mb-2" />
                </div>
                
                    {registerCompletion.status === undefined && <p className="text-center text-white text-sm"><span className="font-semibold">Already Have an Account?</span> <Link to="/"><b>Log In</b></Link></p>} 
                    {registerCompletion.status === 403 && <p className="text-center text-red-700 font-semibold text-base">Email Already In Use</p>}
                    {registerCompletion.status === 409 && <p className="text-center text-red-700 font-semibold">Username Already Exists</p>}
                    {registerCompletion.status === 500 && <p className="text-center text-red-700 font-semibold">Server Error, Please try again later</p>}


                <div className="flex justify-center">
                    <button 
                    class=" bg-green-700 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 mb-20 rounded items-center"
                    onClick={register}>Submit</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default UserRegister