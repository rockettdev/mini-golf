import { useNavigate } from "react-router-dom"
import flag from '../../Assets/flag.png'
import settings from '../../Assets/settings.png'
import stats from '../../Assets/stats.png'
import leaderboard from '../../Assets/leaderboard.png'
import { useEffect } from "react"

let user = localStorage.getItem("user")

function Portal () {

    useEffect(() => {
        user = localStorage.getItem("user")
    },[user])

    const navigate = useNavigate();

    const newGame = () => {
        navigate("/newgame")
    }

    const settingsPage = () => {
        navigate("/settings")
    }

    return (
        <>
            <div className="flex flex-wrap justify-center bg-main-bg bg-cover h-screen">
            <h1 className="fixed top-40 text-white font-custom text-4xl"> Welcome {user} </h1>
                <div className="grid grid-cols-2 gap-4 mt-80 w-4/5 h-2/5 rounded-lg text-white text-center font-custom text-lg">
                    <button onClick={newGame} className="grid justify-center pt-2 pb-2 mt-10 bg-gradient-to-t from-green-900 to-emerald-500 rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">NEW GAME<img src={flag} className=" h-20" alt="ye"></img></button>
                    <button className="grid justify-center mt-10 pt-2 pb-2 bg-gradient-to-t from-green-900 to-emerald-500 rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">STATS<img src={stats} className=" h-20" alt="ye"></img></button>
                    <button className="grid justify-center pt-2 mb-10 bg-gradient-to-t from-green-900 to-emerald-500 rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">LEADERBOARD<img src={leaderboard} className=" h-24 pl-3.5 pb-1" alt="ye"></img></button>
                    <button onClick={settingsPage} className="grid justify-center pt-2 mb-10 bg-gradient-to-t from-green-900 to-emerald-500 rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl">SETTINGS<img src={settings} className=" h-20" alt="ye"></img></button>
                </div>
            </div>
        </>
    )
}

export default Portal