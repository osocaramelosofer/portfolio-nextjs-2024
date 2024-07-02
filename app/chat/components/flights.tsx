/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { type ClientMessage } from '@/app/actions/AIProvider'
import { Button } from '@nextui-org/react'
import { useActions, useUIState } from 'ai/rsc'

interface FlightsProps {
  flights: Array<{ id: string, flightNumber: string }>
  destination: string
  source: string
}

export const Flights = ({ flights, destination, source }: FlightsProps) => {
  console.log('render flights component')
  const { submitUserMessage } = useActions()
  const [_, setConversation] = useUIState()

  return (
    <div className='flex flex-col '>
        <p>This are the current flights
            from: <strong>{source} </strong>
            to: <strong>{destination}</strong>
        </p>
        <p>Click to see the details</p>
        <div className='flex flex-1'>
            {flights.map(result => (
            <div key={result.id}>
               <Button
               color="danger"
               onPress={async () => {
                 const response = await submitUserMessage(`lookupFlight ${result.flightNumber}`)
                 setConversation((currentConversation: ClientMessage[]) => [
                   ...currentConversation,
                   response
                 ])
               }}
               >
                {result.flightNumber}
              </Button>
              {/* <div
              className='bg-sky-400 rounded-sm py-4 text-white hover:cursor-pointer'
                  onClick={async () => {
                    const response = await submitUserMessage(`lookupFlight ${result.flightNumber}`)
                    setConversation((currentConversation: ClientMessage[]) => [
                      ...currentConversation,
                      response
                    ])
                  }}
              >
                  {result.flightNumber}
              </div> */}
            </div>
            ))}
        </div>

    </div>
  )
}
