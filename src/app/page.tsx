"use client"

import { Game } from '@/components/Game'
import { GameMenu } from '@/components/GameMenu'
import Info from '@/components/Info'
import { useGameContext } from '@/context/GameContext'

export default function Home() {
  const { inProgress } = useGameContext()

  return (
    <>
      <Info />
      <main className="flex min-h-screen flex-col items-center justify-center p-6">
        {inProgress ? (
          <Game />
        ) : (
          <GameMenu />
        )}
      </main>
    </>
  )
}
