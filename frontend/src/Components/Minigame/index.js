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
        <div className="h-screen flex flex-col 
                    items-center justify-center bg-main-bg bg-cover">
            {playerNameStatus === false &&
            <>
                <h1 className="font-custom text-3xl text-white">Submit a New Player</h1>
                <input 
                value={playerScore.name}
                onChange={handleNameChange}
                autoComplete="none" 
                className="text-sm text-gray-base w-60
                        py-5 px-4 h-2 border border-gray-200 
                        rounded mt-12 mb-64" />
            </>
            }
        </div>

                </>
    )

}

export default Minigame