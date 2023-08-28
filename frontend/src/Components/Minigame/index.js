import { useState } from "react";


function Minigame () {

    const [playerNameStatus, setPlayerNameStatus] = useState(false)
    const [playerScore, setPlayerScore] = useState({})


    const handleNameChange = (e) => {
        const { name } = e.target;

        setPlayerScore({
            ...playerScore,
            [name]: 0
        });}

    return (
        <>
        {playerNameStatus === false && 
        <input 
        value={playerScore.name}
        onChange={handleNameChange}
        aria-label="Enter Player Name" 
        type="name"
        autoComplete="none" 
        className="text-sm text-gray-base w-60
                py-5 px-4 h-2 border border-gray-200 
                rounded mb-2" />
        }
        </>
    )

}

export default Minigame