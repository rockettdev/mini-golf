import React from 'react'

export default function Playerlistmap({ player }, status) {
  return (
    <>
        <div className="grid grid-flow-col">
            <span className=" w-48 text-left">{player.name}</span>
            <div>
              <button className="relative left-6">-</button>
              <span className=" relative left-6 mx-7">{player.score}</span>
              <button className="relative left-6">+</button>
            </div>
        </div>
    </>
  )
}
