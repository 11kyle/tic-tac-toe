"use client"

import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IconO } from './icons/icon-o'
import { Button } from './Button'
import { IconX } from './icons/icon-x'
import clsx from 'clsx'

type BannerProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  winner: "x" | "o" | null
  handleQuit: () => void
  handleReset: () => void
  player1: "x" | "o"
}
export default function Banner({ open, setOpen, winner, handleQuit, handleReset, player1 }: BannerProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden bg-semi-dark-navy px-4 pb-10 pt-10 text-left shadow-xl transition-all sm:my-8 w-full md:py-12">
                <div className="flex flex-col items-center justify-center">
                  {winner 
                    ? (
                      <>
                        {/* <h2 className="body md:header-xs font-bold uppercase text-silver">{player1 === winner ? "You Won!" : "Oh no, you lost..."}</h2> */}
                        <h2 className="body md:header-xs font-bold uppercase text-silver">{player1 === winner ? "Player 1 Wins!" : "Player 2 Wins!"}</h2>
                        <div className="flex items-center justify-center gap-2 md:gap-6 mt-4 mb-6">
                          {winner === "x"
                            ? (
                              <IconX className="w-[30px] md:w-16 h-[30px] md:h-16 fill-light-blue" />
                            )
                            : (
                              <IconO className="w-[30px] md:w-16 h-[30px] md:h-16 fill-light-yellow" />
                            )
                          }
                          <span 
                            className={clsx(
                              winner === "x" && "text-light-blue",
                              winner === "o" && "text-light-yellow",
                              "heading-md md:heading-lg"
                            )}
                          >
                            Takes the round
                          </span>
                        </div>
                      </>
                    ) : (
                      <span className="heading-md md:heading-lg text-silver mb-6">
                        Round Tied
                      </span>
                    )
                  }
                  
                  <div className="space-x-4">
                    <Button 
                      variant="secondary" 
                      color="silver"
                      onClick={handleQuit}
                    >Quit</Button>
                    <Button 
                      variant="secondary"
                      className="!shadow-[inset_0px_-4px_0px_0px_rgba(204,139,19,1.0)]"
                      onClick={handleReset}
                    >Next Round</Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
