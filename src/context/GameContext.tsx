"use client"

import { createContext, useContext, useState } from "react";

type GameContext = {
  inProgress: boolean
  setInProgress: React.Dispatch<React.SetStateAction<boolean>>
}

const GameContext = createContext<GameContext | null>(null)

type GameContextProviderProps = {
  children: React.ReactNode
}

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [inProgress, setInProgress] = useState<boolean>(false)

  return (
    <GameContext.Provider 
      value={{ 
        inProgress, 
        setInProgress 
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGameContext = () => {
  const context = useContext(GameContext)

  if(!context) {
    throw new Error(
      "useGameContext must be used inside GameContextProvider"
    )
  }

  return context
}