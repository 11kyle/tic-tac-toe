import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { GameContextProvider } from "@/context/GameContext"
import { PlayerContextProvider } from "@/context/PlayerContext"

// const inter = Inter({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tic-Tac-Toe",
  description: "A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <GameContextProvider>
          <PlayerContextProvider>
            {children}
          </PlayerContextProvider>
        </GameContextProvider>
      </body>
    </html>
  )
}
