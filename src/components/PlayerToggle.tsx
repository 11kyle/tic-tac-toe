import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { IconX } from './icons/icon-x'
import { IconO } from './icons/icon-o'
import clsx from 'clsx'

const players = [
  {
    id: 0,
    icon: IconX
  },
  {
    id: 1,
    icon: IconO
  },
]

export default function PlayerToggle() {
  const [selected, setSelected] = useState(players[0])

  return (
    // <div className="w-full p-2">
      <div className="w-full rounded-[10px] bg-dark-navy p-2 mt-6 mb-[17px]">
      {/* <div className="mx-auto w-full max-w-md"> */}
        <RadioGroup value={selected} onChange={setSelected}>
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
