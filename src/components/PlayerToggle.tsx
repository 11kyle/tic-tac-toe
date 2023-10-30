import React, { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { IconX } from './icons/icon-x'
import { IconO } from './icons/icon-o'
import clsx from 'clsx'

const players = [
  {
    id: 0,
    value: "x",
    icon: IconX
  },
  {
    id: 1,
    value: "o",
    icon: IconO
  },
]

type PlayerToggleProps = {
  setPlayer1: React.Dispatch<React.SetStateAction<"x" | "o">>
}

export default function PlayerToggle({ setPlayer1 }: PlayerToggleProps) {
  const [selected, setSelected] = useState(players[0])

  useEffect(() => {
    if (selected.value === "x" || selected.value === "o") {
      setPlayer1(selected.value)
    }
  }, [selected])

  return (
    // <div className="w-full p-2">
      <div className="w-full rounded-[10px] bg-dark-navy p-2 mt-6 mb-[17px]">
      {/* <div className="mx-auto w-full max-w-md"> */}
        <RadioGroup value={selected} onChange={setSelected} data-test="player-selection">
          <RadioGroup.Label className="sr-only">Player Selection</RadioGroup.Label>
          <div className="flex justify-center items-center">
            {players.map((player) => (
              <RadioGroup.Option
                key={player.id}
                value={player}
                className={({ active, checked }) =>
                  `${
                    active
                      ? ''
                      : ''
                  }
                  ${checked ? 'bg-silver' : 'bg-dark-navy hover:bg-semi-dark-navy'}
                    grid place-content-center w-full h-[54px] rounded-[10px] cursor-pointer`
                }
              >
                {({ active, checked }) => (
                  <player.icon 
                  className={clsx(
                    checked ? ' fill-dark-navy' : 'fill-silver',
                    'w-8 h-8'
                  )}
                />
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      {/* </div> */}
    </div>
  )
}
