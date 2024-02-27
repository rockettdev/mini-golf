import React from 'react'
import { useNavigate } from 'react-router-dom';

function Settings() {

    const navigate = useNavigate();

    // Clears all local storage including the login token, thus logging out the user

    const logout = () => {
        localStorage.clear();
        navigate("/")
    }

  return (
    <>
    <div className="flex flex-wrap justify-center bg-main-bg bg-cover h-screen">
    <h1 className="fixed top-40 text-white font-custom text-4xl"> Settings </h1>
        <div className="grid gap-4 mt-80 w-2/5 h-14 rounded-lg text-white text-center font-custom text-lg">
            <button onClick={logout} className="grid justify-center mt-10 pt-2 pb-2 bg-gradient-to-t from-red-900 to-red-600 rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">LOGOUT</button>
        </div>
    </div>
</>
    )
}

export default Settings