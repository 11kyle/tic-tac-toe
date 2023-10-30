"use client"

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { IconRestart } from "./icons/icon-restart";
import { Logo } from "./icons/logo";
import { IconXOutline } from "./icons/icon-x-outline";
import { IconOOutline } from "./icons/icon-o-outline";
import { IconO } from "./icons/icon-o";
import { IconX } from "./icons/icon-x";
import Banner from "./Banner";
import clsx from "clsx";

type GameProps = {
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  player1: "x" | "o"
}

type Square = {
  id: number
  isMarked: boolean
  value: null | "x" | "o"
  isPartOfWin: boolean
}

let initialState = [
  {
    id: 0,
    isMarked: false,
    value: null,
    isPartOfWin: false,
  },
  {
    id: 1,
    isMarked: false,
    value: null,
    isPartOfWin: false,
  },
  {
    id: 2,
    isMarked: false,
    value: null,
    isPartOfWin: false,
  },
  {
    id: 3,
    isMarked: false,
    value: null,
    isPartOfWin: false,
  },
  {
    id: 4,
    isMarked: false,
    value: null,
    isPartOfWin: false,
  },
  {
    id: 5,
    isMarked: false,
    value: null,
    isPartOfWin: false,
  },
  {
    id: 6,
    isMarked: false,
    value: null,
    isPartOfWin: false,
  },
  {
    id: 7,
    isMarked: false,
    value: null,
    isPartOfWin: false,
  },
  {
    id: 8,
    isMarked: false,
    value: null,
    isPartOfWin: false,
  },
]

const initialScore = {
  x: 0,
  o: 0,
  tie: 0,
}

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
  const [winner, setWinner] = useState<"x" | "o" | null>(null)
  const [score, setScore] = useState(initialScore)
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
      setPlayerTurn(playerTurn === "x" ? "o" : "x")
    }
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
    // setWinner(null)
  }

  // Loop through the winConditions array
  // Loop through the line and check for a win
  const checkForWin = () => {
    for (let i = 0; i < winConditions.length; i++) {
      // console.log(winConditions[i])
      // console.log(
      //   winConditions[i].every(currentValue => squares[currentValue].value && squares[currentValue].value === squares[winConditions[i][0]].value)
      // )
      const winningPlayer = squares[winConditions[i][0]].value

      const isWinner = winConditions[i].every(currentValue => 
        squares[currentValue].value && // value cannot be null
        squares[currentValue].value === squares[winConditions[i][0]].value)
      
      if (isWinner) {
        if (!winner) { // prevent useEffect from triggering
          let newSquares: Square[] = [...squares]

          for (let j = 0; j < winConditions[i].length; j++) {
            newSquares = [...newSquares].map(square => {
              if (square.id === winConditions[i][j]) {
                return {...square, isPartOfWin: true}
              } else {
                return square
              }
            })

            // setSquares(newSquares)
          }
          setSquares(newSquares)

          // update score
          switch (winningPlayer) {
            case "x":
              setScore({...score, 
                x: score.x + 1
              })
              break;
            case "o":
              setScore({...score, 
                o: score.o + 1
              })
              break;
            default:
              console.log("error, something went wrong with updating the score on x or o win")
              break;
          }
        }

        setWinner(winningPlayer)
        setOpen(true) // show game finished banner
        break // game is finished
      }

      // check for tie game
      if (squares.every(square => square.value)) {
        setOpen(true)
        setScore({...score,
          tie: score.tie + 1
        })
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
          <span className="w-24 md:w-[140px] h-10 md:h-[52px] place-self-center flex items-center justify-center gap-2 md:gap-3 rounded-[10px] bg-semi-dark-navy text-center text-silver body heading-xs">
            {playerTurn === "x"
              ? (
                <IconX className="w-4 h-4 md:w-5 md:h-5 fill-silver" />
              ) : (
                <IconO className="w-4 h-4 md:w-5 md:h-5 fill-silver" />
              )
            }
            Turn
          </span>
          <Button 
            color="silver" 
            variant="secondary" 
            className="w-10 md:w-[52px] h-10 md:h-[52px] place-self-end grid place-content-center"
            onClick={() => handleReset()}
          >
            <IconRestart className="w-4 h-4 md:w-5 md:h-5 -mt-2" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {[...squares].map(square => (
            <div 
              key={square.id} 
              className={clsx(
                square.isPartOfWin && winner === "x" && "bg-light-blue shadow-[inset_0px_-8px_0px_0px_rgba(17,140,135,1.0)]",
                square.isPartOfWin && winner === "o" && "bg-light-yellow shadow-[inset_0px_-8px_0px_0px_rgba(204,139,19,1.0)]",
                !square.isPartOfWin && "bg-semi-dark-navy shadow-[inset_0px_-8px_0px_0px_rgba(16,33,42,1.0)]",
                "group w-24 h-24 md:w-[140px] md:h-[140px] grid place-content-center rounded-[15px] cursor-pointer"
              )}
              onClick={() => handleTurn(square)}
            >
              {square.isMarked ? (
                <div className="-mt-2">
                  {square.value === "x" 
                    ? <IconX 
                        className={clsx(
                          winner === "x" ? "fill-semi-dark-navy" : "",
                          "w-12 md:w-16 h-12 md:h-16 fill-light-blue"
                      )} 
                    />
                    : <IconO 
                        className={clsx(
                          winner === "o" ? "fill-semi-dark-navy" : "",
                          "w-12 md:w-16 h-12 md:h-16 fill-light-yellow"
                        )} 
                      />
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
            <span className="text-dark-navy heading-md">{score.x}</span>
          </div>
          <div className="h-16 md:h-[72px] flex flex-col items-center justify-center rounded-[15px] bg-silver">
            <span className="text-dark-navy body uppercase -mb-2">Ties</span>
            <span className="text-dark-navy heading-md">{score.tie}</span>
          </div>
          <div className="h-16 md:h-[72px] flex flex-col items-center justify-center rounded-[15px] bg-light-yellow">
            <span className="text-dark-navy body uppercase -mb-2">0 (CPU)</span>
            <span className="text-dark-navy heading-md">{score.o}</span>
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
