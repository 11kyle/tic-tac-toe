"use client"

import { Game } from '@/components/Game'
import { NewGameMenu } from '@/components/NewGameMenu'
import { useState } from 'react'

export default function Home() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [player1, setPlayer1] = useState<"x" | "o">("x")

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      {isPlaying
        ? <Game 
            setIsPlaying={setIsPlaying}
            player1={player1}
          />
        : <NewGameMenu 
            setIsPlaying={setIsPlaying}
            player1={player1}
          />
      }
    </main>
  )
}
