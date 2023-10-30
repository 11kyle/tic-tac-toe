import { Button } from "./Button";
import PlayerToggle from "./PlayerToggle";
import { Logo } from "./icons/logo";

type GameMenuProps = {
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  setPlayer1: React.Dispatch<React.SetStateAction<"x" | "o">>
}

export function NewGameMenu({ setIsPlaying, setPlayer1 }: GameMenuProps) {
  return (
    <div className="md:w-[460px] flex flex-col gap-10">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="rounded-[15px] bg-semi-dark-navy shadow-[inset_0px_-8px_0px_0px_rgba(16,33,42,1.0)] px-6 pt-6 pb-[30px]">
        <h2 className="text-silver text-center heading-xs">PICK PLAYER 1’S MARK</h2>
        <PlayerToggle 
          setPlayer1={setPlayer1}
        />
        {/* <div className="w-full h-[72px] rounded-[10px] bg-dark-navy mt-6 mb-[17px]"></div> */}
        <span className="block text-center text-silver body text-opacity-50">REMEMBER : X GOES FIRST</span>
      </div>
      <div className="space-y-5">
        <Button data-test="new-game-cpu-btn">New Game (vs CPU)</Button>
        <Button data-test="new-game-p2p-btn" color="blue" onClick={() => setIsPlaying(true)}>New Game (vs Player)</Button>
      </div>
    </div>
  )
}
