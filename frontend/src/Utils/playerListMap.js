import React from 'react'
import { ACTIONS } from '../Components/Minigame/index.js'

export default function Playerlistmap({ player, status, dispatch, currentHole }) {

  console.log(currentHole)

  return (
    <>
      {status === false &&
        <div >
          <span className=" w-48 text-center">{player.name}</span>
        </div>
      }

      {status === true && 
        <div className="grid grid-flow-col">
          <span className=" w-48 text-left pl-5">{player.name}</span>
          <div>
            <button onClick={() => dispatch({ type: ACTIONS.DECREMENT_SCORE, payload: { id: player.id, currentHole: currentHole } })} className="relative">-</button>
            <span className=" relative mx-7">{player[currentHole]}</span>
            <button onClick={() => dispatch({ type: ACTIONS.INCREMENT_SCORE, payload: { id: player.id, currentHole: currentHole }  })} className="relative">+</button>
          </div>
        </div>
    }

    </>
  )
}
