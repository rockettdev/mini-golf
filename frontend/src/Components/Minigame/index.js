import { useReducer, useState } from "react";
import Playerlistmap from "../../Utils/playerListMap";

let id = 0

export const ACTIONS = {
    ADD_PLAYER: 'add-player',
    INCREMENT_SCORE: 'increment-score'
}

function newPlayer(name) {
    return { id: id += 1, name: name, score: 0}
}

function reducer(players, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ACTIONS.ADD_PLAYER:
            return [...players, newPlayer(action.payload.name)]
        case ACTIONS.INCREMENT_SCORE:
            return players.map(player => {
                if (player.id === action.payload.id) {
                    return {...player, score: player.score += 1}
                }
                return player
            })
    }

}

function Minigame () {

    const [playerNameStatus, setPlayerNameStatus] = useState(false)
    const [name, setName] = useState('')
    const [players, dispatch] = useReducer(reducer, [])

    console.log(players)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_PLAYER, payload: { name: name } })
        setName('')
    }

    const startGame = () => {
        setPlayerNameStatus(true)
    }

        console.log(players)

    return (
        <>
        <div className="h-screen flex flex-col 
                    items-center justify-center bg-main-bg bg-cover">
            {playerNameStatus === false &&
            <>
                <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-2xl w-4/5  h-40">
                    <h1 className="font-custom mt-4 text-2xl text-white text-center">Add a New Player</h1>
                    <form>
                        <input 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoComplete="none"
                        placeholder="Player's First Name"
                        className="text-sm text-gray-base w-50
                                py-5 px-4 mx-4 h-2 border border-gray-200 
                                rounded mt-6" />
                        <button onClick={handleSubmit} className="bg-green-700 text-white hover:bg-blue-400 font-bold py-1 px-2 mt-3 mb-10 ml-2 rounded items-centerbg">Submit</button>
                    </form>
                </div>
                <h1 className="font-custom text-white text-3xl pt-10 mb-5">Player List</h1>
                <ul className="font-custom text-white text-center text-2xl h-72">
                    {players.map(player => {
                     return <Playerlistmap key={player.id} player={player} status={playerNameStatus} dispatch={dispatch} />
                    }
                    )}
                </ul>
                <button onClick={startGame} className="font-custom text-lg text-white h-12 w-28 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500 via-cyan-700 to-blue-400 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl"> Start Game </button>
            </>
            }

            {playerNameStatus === true &&
            <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-2xl w-4/5  h-40">
                <h1 className="font-custom mt-4 text-2xl text-white text-center">Add a New Player</h1>
                <ul className="font-custom text-white text-center text-2xl h-72">
                    {players.map(player => {
                     return <Playerlistmap key={player.id} player={player} status={playerNameStatus} dispatch={dispatch} />
                    }
                    )}
                </ul>
            </div>
            }

        </div>

                </>
    )

}

export default Minigame