"use client"

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { IconRestart } from "./icons/iconRestart";
import { Logo } from "./icons/logo";
import { IconXOutline } from "./icons/icon-x-outline";
import { IconOOutline } from "./icons/icon-o-outline";
import { IconO } from "./icons/icon-o";
import { IconX } from "./icons/icon-x";
import Banner from "./Banner";

type GameProps = {
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  player1: "x" | "o"
}

type Square = {
  id: number
  isMarked: boolean
  value: null | "x" | "o"
}

let initialState = [
  {
    id: 0,
    isMarked: false,
    value: null,
  },
  {
    id: 1,
    isMarked: false,
    value: null,
  },
  {
    id: 2,
    isMarked: false,
    value: null,
  },
  {
    id: 3,
    isMarked: false,
    value: null,
  },
  {
    id: 4,
    isMarked: false,
    value: null,
  },
  {
    id: 5,
    isMarked: false,
    value: null,
  },
  {
    id: 6,
    isMarked: false,
    value: null,
  },
  {
    id: 7,
    isMarked: false,
    value: null,
  },
  {
    id: 8,
    isMarked: false,
    value: null,
  },
]

const winConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6],
]

export function Game({ setIsPlaying }: GameProps) {
  const [squares, setSquares] = useState<Square[]>(initialState)
  const [playerTurn, setPlayerTurn] = useState<"x" | "o">("x")
  const [player1, setPlayer1] = useState<"x" | "o">("x")
  const [winner, setWinner] = useState<"x" | "o" | null>(null)
  const [open, setOpen] = useState<boolean>(false)

  const handleTurn = (activeSquare: Square) => {
    if (!activeSquare.isMarked) {
      const newSquares = [...squares].map(square => {
        if (activeSquare.id === square.id) {
          return {...square, isMarked: true, value: playerTurn}
        } else {
          return square
        }
      })

      setSquares(newSquares)
    }
    setPlayerTurn(playerTurn === "x" ? "o" : "x")
  }

  const handleReset = () => {
    setOpen(false) // close banner
    setSquares(initialState) // clear game board
    setPlayerTurn("x") // player x always goes first
    setWinner(null)
  }

  const handleQuit = () => {
    setOpen(false) // close banner
    setIsPlaying(false) // return to GameMenu
    setWinner(null)
  }

  const checkForWin = () => {
    for (let i = 0; i < winConditions.length; i++) {
      // console.log(winConditions[i])
      // console.log(
      //   winConditions[i].every(currentValue => squares[currentValue].value && squares[currentValue].value === squares[winConditions[i][0]].value)
      // )
      const winningPlayer = squares[winConditions[i][0]].value

      const isWinner = winConditions[i].every(currentValue => 
        squares[currentValue].value && 
        squares[currentValue].value === squares[winConditions[i][0]].value)
      
      if (isWinner) {
        setWinner(winningPlayer)

        setOpen(true) // show game finished banner
        // console.log(winningPlayer, "Wins!")
        break // game is finished
      }
      if (squares.every(square => square.value)) {
        setOpen(true)
        break
      }
    }
  }

  useEffect(() => {
    checkForWin()
  }, [squares])

  return (
    <>
      <div className="md:w-[460px] flex flex-col gap-y-5">
        <div className="grid grid-cols-3">
          <div className="self-center">
            <Logo />
          </div>
          <span className="h-[52px] flex items-center justify-center gap-3 rounded-[10px] bg-semi-dark-navy shadow-[inset_0px_-4px_0px_0px_rgba(16,33,42,1.0)] text-center text-silver body heading-xs">
            {playerTurn === "x"
              ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.7231 3.30608L16.6939 0.276913C16.3247 -0.0923043 15.7261 -0.0923043 15.3569 0.276913L10 5.63378L4.64314 0.276913C4.27392 -0.0923043 3.6753 -0.0923043 3.30608 0.276913L0.276913 3.30608C-0.0923043 3.6753 -0.0923043 4.27392 0.276913 4.64314L5.63378 10L0.276913 15.3569C-0.0923043 15.7261 -0.0923043 16.3247 0.276913 16.6939L3.30608 19.7231C3.6753 20.0923 4.27392 20.0923 4.64314 19.7231L10 14.3662L15.3569 19.7231C15.7261 20.0923 16.3247 20.0923 16.6939 19.7231L19.7231 16.6939C20.0923 16.3247 20.0923 15.7261 19.7231 15.3569L14.3662 10L19.7231 4.64314C20.0923 4.27392 20.0923 3.6753 19.7231 3.30608Z" fill="#A8BFC9"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10ZM5.92593 10C5.92593 7.74995 7.74995 5.92593 10 5.92593C12.25 5.92593 14.0741 7.74995 14.0741 10C14.0741 12.25 12.25 14.0741 10 14.0741C7.74995 14.0741 5.92593 12.25 5.92593 10Z" fill="#A8BFC9"/>
                </svg>
              )
            }
            Turn
          </span>
          <Button 
            color="silver" 
            variant="secondary" 
            className="w-[52px] h-[52px] place-self-end"
            onClick={() => handleReset()}
          >
            <IconRestart />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {[...squares].map(square => (
            <div 
              key={square.id} 
              className="group w-24 h-24 md:w-[140px] md:h-[140px] grid place-content-center rounded-[15px] bg-semi-dark-navy shadow-[inset_0px_-8px_0px_0px_rgba(16,33,42,1.0)]"
              onClick={() => handleTurn(square)}
            >
              {square.isMarked ? (
                <div className="-mt-2">
                  {square.value === "x" 
                    ? <IconX className="w-12 md:w-16 h-12 md:h-16" />
                    : <IconO className="w-12 md:w-16 h-12 md:h-16" />
                  }
                </div>
              ) : (
                <div className="group-hover:visible invisible -mt-2">
                  {playerTurn === "x"
                    ? <IconXOutline className="w-12 md:w-16 h-12 md:h-16" />
                    : <IconOOutline className="w-12 md:w-16 h-12 md:h-16" />
                  }
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-x-5">
          <div className="h-16 md:h-[72px] flex flex-col items-center justify-center  rounded-[15px] bg-light-blue">
            <span className="text-dark-navy body uppercase -mb-2">X (You)</span>
            <span className="text-dark-navy heading-md">14</span>
          </div>
          <div className="h-16 md:h-[72px] flex flex-col items-center justify-center rounded-[15px] bg-silver">
            <span className="text-dark-navy body uppercase -mb-2">Ties</span>
            <span className="text-dark-navy heading-md">32</span>
          </div>
          <div className="h-16 md:h-[72px] flex flex-col items-center justify-center rounded-[15px] bg-light-yellow">
            <span className="text-dark-navy body uppercase -mb-2">0 (CPU)</span>
            <span className="text-dark-navy heading-md">11</span>
          </div>
        </div>
      </div>
      {/* After game finish banner */}
      <Banner 
        open={open}
        setOpen={setOpen}
        winner={winner}
        handleQuit={handleQuit}
        handleReset={handleReset}
      />
    </>
  )
}
