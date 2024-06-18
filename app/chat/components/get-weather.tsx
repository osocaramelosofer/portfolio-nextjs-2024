'use server'

import { createStreamableUI } from 'ai/rsc'

export async function getWeather () {
  console.log('get weather function:')
  const weatherUI = createStreamableUI()

  weatherUI.update(<div style={{ color: 'gray' }}>Loading...</div>)

  setTimeout(() => {
    weatherUI.done(<div>Its a sunny day!</div>)
  }, 1000)

  return await weatherUI.value
}
