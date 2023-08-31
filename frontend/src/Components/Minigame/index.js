import { useReducer, useState } from "react";
import Playerlistmap from "../../Utils/playerListMap";

let id = 0

export const ACTIONS = {
    ADD_PLAYER: 'add-player',
    INCREMENT_SCORE: 'increment-score',
    DECREMENT_SCORE: 'decrement-score'
}

function newPlayer(name) {
    return { id: id += 1, name: name, hole1: 0, hole2: 0, hole3: 0, hole4: 0, hole5: 0, hole6: 0, hole7: 0, hole8: 0, hole9: 0, hole10: 0, hole11: 0, hole12: 0, hole13: 0, hole14: 0, hole15: 0, hole16: 0, hole17: 0, hole18: 0, finalScore: 0}
}

function reducer(players, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ACTIONS.ADD_PLAYER:
            return [...players, newPlayer(action.payload.name)]
        case ACTIONS.INCREMENT_SCORE:
            return players.map(player => {
                if (player.id === action.payload.id) {
                    return {...player, [action.payload.currentHole]: player[action.payload.currentHole] += 1}
                }
                return player
            })
        case ACTIONS.DECREMENT_SCORE:
            return players.map(player => {
                if (player.id === action.payload.id) {
                    return {...player, [action.payload.currentHole]: player[action.payload.currentHole] -= 1}
                }
                return player
            })
    }
}

function Minigame () {

    const [playerNameStatus, setPlayerNameStatus] = useState(false)
    const [name, setName] = useState('')
    const [players, dispatch] = useReducer(reducer, [])
    const [hole, setHole] = useState(1)
    const currentHole = `hole${hole}`

    console.log(currentHole)

    console.log(players)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.ADD_PLAYER, payload: { name: name } })
        setName('')
    }

    const startGame = () => {
        setPlayerNameStatus(true)
    }

    const endGame = async () => {
        setHole(hole+1)
       await players.forEach((player) => {
            player.finalScore += player.hole1
            player.finalScore += player.hole2
            player.finalScore += player.hole3
            player.finalScore += player.hole4
            player.finalScore += player.hole5
            player.finalScore += player.hole6
            player.finalScore += player.hole7
            player.finalScore += player.hole8
            player.finalScore += player.hole9
            player.finalScore += player.hole10
            player.finalScore += player.hole11
            player.finalScore += player.hole12
            player.finalScore += player.hole13
            player.finalScore += player.hole14
            player.finalScore += player.hole15
            player.finalScore += player.hole16
            player.finalScore += player.hole17
            player.finalScore += player.hole18
        })
        players.sort((player1, player2) => player1.finalScore - player2.finalScore);
    }

    const submitResults = () => {

    }



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
                     return <Playerlistmap key={player.id} player={player} status={playerNameStatus} dispatch={dispatch} currentHole={currentHole}/>
                    }
                    )}
                </ul>
                <button onClick={startGame} className="font-custom text-lg text-white h-12 w-28 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500 via-cyan-700 to-blue-400 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 shadow-xl"> Start Game </button>
            </>
            }

            {playerNameStatus === true && hole < 19 &&
            <>
            <h1 className="font-custom text-white text-3xl mb-5">Hole <span className=" text-[32px] text-red-600">{hole}</span></h1>
                <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-2xl w-4/5  h-2/5">
                    <h1 className="font-custom mt-4 mb-10 text-2xl text-white text-center">Scorecard</h1>
                    <ul className="font-custom text-white text-center text-2xl h-72">
                        {players.map(player => {
                        return <Playerlistmap key={player.id} player={player} status={playerNameStatus} dispatch={dispatch} currentHole={currentHole} />
                        }
                        )}
                    </ul>
                </div>
                <div className="grid-flow-col mt-10 text-lg font-custom text-white">
                    {hole === 1 &&
                    <>
                        <button onClick={() => {setHole(hole+1)}} className="w-24 h-11 bg-green-700 rounded-lg">Next</button>
                    </>
                    }
                    {hole > 1 && hole < 18 &&
                    <>
                       <button onClick={() => {setHole(hole-1)}} className="w-24 h-11 mr-10 bg-red-700 rounded-lg">Back</button>
                       <button onClick={() => {setHole(hole+1)}} className="w-24 h-11 ml-10 bg-green-700 rounded-lg">Next</button>
                    </>
                    }
                    {hole === 18 &&
                    <>
                       <button onClick={() => {setHole(hole-1)}} className="w-24 h-11 mr-10 bg-red-700 rounded-lg">Back</button>
                       <button onClick={endGame} className="w-24 h-11 ml-10 bg-green-700 rounded-lg">Finish</button>
                    </>
                    }
                </div>
            </>
            }
            {playerNameStatus === true && hole === 19 &&
            <>
            <h1 className="font-custom text-white text-4xl pb-14">RESULTS</h1>
            <div className="grid grid-cols-3 w-3/4 h-1/6 font-custom text-white text-xl mb-10">
                <div className="">{players[1] && 
                    <div>
                        <div className="pt-10 text-center">{players[1].name}: {players[1].finalScore}</div>
                        <div className="h-20 bg-gradient-to-t from-gray-900 to-gray-100 text-center text-black text-4xl">2</div>
                    </div>
                }
                </div>
                <div className="">{players[0] && 
                    <div className="">
                        <div className="pt-2 text-center">{players[0].name}: {players[0].finalScore}</div>
                        <div className="h-28 bg-gradient-to-t from-yellow-900 to-yellow-300 text-center text-black text-4xl">1</div>
                    </div>
                }
                </div>
                <div className="">{players[2] && 
                    <>
                    <div className="pt-14 text-center">{players[2].name}: {players[1].finalScore}</div>
                    <div className="h-16 bg-gradient-to-t from-gray-700 to-orange-700 text-center text-black text-4xl">3</div>
                </>
                }
                </div>
            </div>

            {players[3] && 

            <div className="grid  grid-rows-6 text-white w-1/2">
                <div>
                    <div className="grid grid-cols-2">4</div>
                    <div>{players[3].name}</div>
                </div>
                {players[4] &&
                 <div>
                    <div>5</div>
                    <div>{players[4].name}</div>
                </div> 
                }
                {players[5] &&
                 <div className="grid grid-cols-2">
                    <div>6</div>
                    <div>{players[5].name}</div>
                </div> 
                }
                {players[6] &&
                 <div>
                    <div>7</div>
                    <div></div>
                </div> 
                }
                {players[7] &&
                 <div>
                    <div>8</div>
                    <div></div>
                </div> 
                }
                {players[8] &&
                 <div>
                    <div>9</div>
                    <div></div>
                </div> 
                }

            </div>
            }
            <button onClick={submitResults} className="font-custom text-white bg-green-600 rounded-2xl h-10 w-32 shadow-xl">Submit Results</button>

            </>
            }

        </div>

                </>
    )

}

export default Minigame