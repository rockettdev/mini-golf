import '../../App.css'
import { Link } from 'react-router-dom';
import putterpal from '../../Assets/putterpal.png'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home () {

    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [loginCompletion, setLoginCompletion] = useState('')
    const navigate = useNavigate();    


    const handleChange = (e) => {
        const { value, name } = e.target;

        setLoginData({
            ...loginData,
            [name]: value
        });
    }

    const login = (e) => {
        e.preventDefault();

        fetch('http://localhost:4000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(loginData)
          })
          .then(res => {
            setLoginCompletion(res)
           return res.json()
        })
        .then((data) => localStorage.setItem("token", data.data) )
        .then(() => navigate('/portal'))
    }

    console.log(loginData);

    return (
    <>
        <div className="flex flex-wrap justify-center bg-main-bg bg-cover h-screen">
            <h1 className="flex-row w-screen self-center mt-20">
                <img className="mx-auto" alt="" src={putterpal} width={320}/>
            </h1>
            <div className="mt-20">
                <form>
                    <div className="flex justify-center">
                        <input 
                            value={loginData.email}
                            onChange={handleChange}
                            name="email"
                            aria-label="Enter your email address" 
                            type="email"
                            placeholder="Email address" 
                            className="text-sm text-gray-base w-60
                                    py-5 px-2 h-2 border 
                                    border-gray-200 rounded mt-20 mb-2"/>                    
                    </div>
                    <div className="flex justify-center">
                        <input 
                            value={loginData.password}
                            onChange={handleChange}
                            name="password"
                            aria-label="Enter your password" 
                            type="password" 
                            placeholder="Password"
                            className="text-sm text-gray-base w-60
                                    py-5 px-2 h-2 border border-gray-200 
                                    rounded mb-2"/>
                    </div>
                </form>
                   <p className="text-white text-sm pt-3 text-center">New to PutterPal? <Link to="signup"><b>Create Account</b></Link></p>
                <div className="flex justify-center">
                    <button 
                    className="flex-row w-24 h-14 bg-white mt-20 rounded-2xl text-black text-lg font-semibold"
                    onClick={(e) => login(e)}
                    >Log In</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home