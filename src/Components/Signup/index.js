import '../../App.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Signup () {

    const [formData, setFormData] = useState({ email: '', username: '', password: '' });
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [registrationError, setRegistrationError] = useState('');

    const validateEmail = (email) => {
        const emailRegex =
          /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
        return emailRegex.test(email);
      };
    
      const validatePassword = (password) => {
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
      };

    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
          if (value === '') {
            setEmailError('Email address is required');
          } else if (!validateEmail(value)) {
            setEmailError('Invalid email address');
          } else {
            setEmailError('');
          }
        } else if (name === 'password') {
          if (value === '') {
            setPasswordError('Password is required');
          } else if (!validatePassword(value)) {
            setPasswordError(
              'Password must contain at least eight characters, including at least one capital letter, one number and one special character'
            );
          } else {
            setPasswordError('');
          }
        }
        setFormData({ ...formData, [name]: value });
      };

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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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