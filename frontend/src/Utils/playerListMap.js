import React from 'react'
import { ACTIONS } from '../Components/Minigame/index.js'

export default function Playerlistmap({ player, status, dispatch }) {

  return (
    <>
      {status === false &&
        <div >
          <span className=" w-48 text-center">{player.name}</span>
        </div>
      }

      {status === true && 
        <div className="grid grid-flow-col">
          <span className=" w-48 text-left">{player.name}</span>
          <div>
            <button className="relative left-6">-</button>
            <span className=" relative left-6 mx-7">{player.score}</span>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT_SCORE, payload: { id: player.id }  })} className="relative left-6">+</button>
          </div>
        </div>
    }

    </>
  )
}
