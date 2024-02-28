import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom"
import Playerlistmap from "../../Utils/playerListMap";

let id = 0
let userId = localStorage.getItem("id")

// Reducer Score Counter functions

export const ACTIONS = {
    ADD_PLAYER: 'add-player',
    INCREMENT_SCORE: 'increment-score',
    DECREMENT_SCORE: 'decrement-score'
}

// Preset object data for each new player created

function newPlayer(name) {
    return { id: id += 1, name: name, hole1: 0, hole2: 0, hole3: 0, hole4: 0, hole5: 0, hole6: 0, hole7: 0, hole8: 0, hole9: 0, hole10: 0, hole11: 0, hole12: 0, hole13: 0, hole14: 0, hole15: 0, hole16: 0, hole17: 0, hole18: 0, finalScore: 0}
}

// Reducer function to manage player scores

function reducer(players, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        // Adds new player to the array using the spread operator in order to maintain all other player data
        case ACTIONS.ADD_PLAYER:
            return [...players, newPlayer(action.payload.name)]
        // Maps the array to find the matching ID of the player attempting to increment their score, and increments the score for the current hole    
        case ACTIONS.INCREMENT_SCORE:
            return players.map(player => {
                if (player.id === action.payload.id) {
                    return {...player, [action.payload.currentHole]: player[action.payload.currentHole] += 1}
                }
                return player
            })
        // Maps the array to find the matching ID of the player attempting to decrement their score, and decrements the score for the current hole    
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

    // State storage

    const [status, setStatus] = useState({ message: '', visible: false })
    const [playerNameStatus, setPlayerNameStatus] = useState(false)
    const [name, setName] = useState('')
    const [players, dispatch] = useReducer(reducer, [])
    const [hole, setHole] = useState(1)
    const [gameCompletion, setGameCompletion] = useState('')
    const currentHole = `hole${hole}`
    const navigate = useNavigate();

    console.log(players)

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Checks if the name is blank
        if (!name.trim()) {
            // If blank, sets state to the error message and sets visibility to true
            setStatus({ message: 'Please enter a valid name.', visible: true })
            return; // Exit the function
        }

        if (name.length > 12) {
            // If character is more than 12 characters, sets state to the error message and sets visibility to true
            setStatus({ message: 'Player Name Too Long', visible: true })
            return; // Exit the function
        }
        
        // Dispatch action to add player
        dispatch({ type: ACTIONS.ADD_PLAYER, payload: { name: name } })
        
        // Reset name input field ans sets status to false
        setStatus({ message: '', visible: false })
        setName('');
    };

    const startGame = () => {
        setPlayerNameStatus(true)
    }

    // Calculates final score by adding each hole score into one variable

    const endGame = async () => {
        setHole(hole+1)
        players.forEach((player) => {
            player.finalScore += player.hole1 +
            player.hole2 +
            player.hole3 +
            player.hole4 +
            player.hole5 +
            player.hole6 +
            player.hole7 +
            player.hole8 +
            player.hole9 +
            player.hole10 +
            player.hole11 +
            player.hole12 +
            player.hole13 +
            player.hole14 +
            player.hole15 +
            player.hole16 +
            player.hole17 +
            player.hole18;
        })

        // Sorts the final score from low to high in order to correctly display the winner at the end of the game

        players.sort((player1, player2) => player1.finalScore - player2.finalScore);
    }

    // prepares the data for sending to the DB
    const packet = { players, userId }

    const submitResults = () => {

        fetch('http://localhost:4000/user/submitGame', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(packet)
          })
          .then(res => {
            setGameCompletion(res)
           return res.json()
        })
        .then(() => navigate('/portal'))
    }

    return (
        <>
        <div className="h-screen flex flex-col 
                    items-center justify-center bg-main-bg bg-cover">
            {playerNameStatus === false &&
            <>
                <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-2xl w-4/5** h-40">
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
                    {/* If the status state is set to visible and a message exists then it will display */}
                    <span className="text-white">{status.visible && <p>{status.message}</p>}</span>
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
                    {/* Conditionally renders different elements based on the hole number */}
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
            {/* End game condition */}
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

                {/* Conditionally renders based on the correct amount of players to display the final leaderboard */}

            {players[3] && 

            <div className="grid  grid-rows-6 text-white w-3/4 font-bold text-lg">
                <div>
                    <div>4th: {players[3].name}: {players[3].finalScore}</div>
                </div>
                {players[4] &&
                 <div>
                    <div>5th: {players[4].name}: {players[4].finalScore}</div>
                </div> 
                }
                {players[5] &&
                 <div>
                    <div>6th: {players[5].name}: {players[5].finalScore}</div>
                </div> 
                }
                {players[6] &&
                 <div>
                    <div>7th: {players[6].name}: {players[5].finalScore}</div>

                </div> 
                }
                {players[7] &&
                 <div>
                    <div>8th: {players[7].name}: {players[7].finalScore}</div>
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