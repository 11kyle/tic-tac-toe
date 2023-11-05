"use client"

import { createContext, useContext, useState } from "react";

type Player = "x" | "o"

type PlayerContext = {
  player1: Player
  setPlayer1: React.Dispatch<React.SetStateAction<Player>>
}

const PlayerContext = createContext<PlayerContext | null>(null)

type PlayerContextProps = {
  children: React.ReactNode
}

export function PlayerContextProvider({ children }: PlayerContextProps) {
  const [player1, setPlayer1] = useState<"x" | "o">("x")

  return (
    <PlayerContext.Provider 
      value={{ 
        player1, 
        setPlayer1
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayerContext = () => {
  const context = useContext(PlayerContext)

  if (!context) {
    throw new Error(
      "usePlayerContext must be used inside PlayerContextProvider"
    )
  }

  return context
}