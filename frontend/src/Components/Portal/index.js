import { useNavigate } from "react-router-dom"

function Portal () {

    const navigate = useNavigate();

    const newGame = () => {
        navigate("/newgame")
    }

    return (
        <>
            <div className="flex flex-wrap justify-center bg-main-bg bg-cover h-screen">
            <h1 className="fixed top-40 text-white font-custom text-4xl"> Welcome ... </h1>
                <div className="grid grid-cols-2 gap-4 mt-80 w-4/5 h-2/5 rounded-lg text-white text-center font-custom text-lg">
                    <button onClick={newGame} className="grid mt-10 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">NEW GAME</button>
                    <button className="grid mt-10 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">STATS</button>
                    <button className="grid mb-10 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">LEADERBOARDS</button>
                    <button className="grid mb-10 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black to-green-500 rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">SETTINGS</button>
                </div>
            </div>
        </>
    )
}

export default Portal