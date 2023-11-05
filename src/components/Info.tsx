import { Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'

export default function Info() {
  const [open, setOpen] = useState(true)

  return (
    <Transition show={open} as={Fragment}
      enter="linear duration-1000"
      enterFrom="-translate-y-6"
      enterTo="translate-y-0"
      leave="linear duration-1000"
      leaveFrom="translate-y-0"
      leaveTo="-translate-y-[88px]"
    >
      <div className="transition-all transform fixed top-0 left-0 right-0 flex items-center justify-between gap-x-6 bg-light-yellow px-6 py-2.5 sm:pr-3.5 lg:pl-8">
        <p className="text-sm leading-6 text-white">
          <strong className="font-semibold">Notice</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          New Game (vs CPU) is currently unavailable.
        </p>
        <button 
          type="button" 
          className="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setOpen(false)}  
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </Transition>
  )
}
