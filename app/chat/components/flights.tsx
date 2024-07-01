/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { type ClientMessage } from '@/app/actions/AIProvider'
import { useActions, useUIState } from 'ai/rsc'
import { type ReactNode } from 'react'

interface FlightsProps {
  flights: Array<{ id: string, flightNumber: string }>
}

export const Flights = ({ flights }: FlightsProps) => {
  console.log('render flights component')
  const { submitUserMessage } = useActions()
  const [_, setConversation] = useUIState()

  return (
    <div>
      {flights.map(result => (
        <div key={result.id}>
          <div
          className='bg-red-500 rounded-sm p-2 text-white hover:cursor-pointer'
            onClick={async () => {
            //   const { display } = await submitUserMessage(
            //     `lookupFlight ${result.flightNumber}`
            //   )
            //   setMessages((messages: ReactNode[]) => [...messages, display])
              const response = await submitUserMessage(`lookupFlight ${result.flightNumber}`)
              setConversation((currentConversation: ClientMessage[]) => [
                ...currentConversation,
                response
              ])
            }}
          >
            {result.flightNumber}
          </div>
        </div>
      ))}
    </div>
  )
}
