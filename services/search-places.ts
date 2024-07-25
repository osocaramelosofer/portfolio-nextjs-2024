'use server'

import { type FoursquareSchemaType } from '@/lib/types/FoursquareSchema'

interface ISearchPlacesProps {
  destination: string
  details: string
  category: string
}
interface IResponse {
  success: boolean
  suggestedPlaces?: string[]
  places?: FoursquareSchemaType[]
  error?: {
    message: string
    detail: string
    code: string
  }
}
const BASE_URL = 'http://localhost:3000'
export async function searchPlaces ({ destination, details, category }: ISearchPlacesProps): Promise<IResponse | null> {
  'use server'
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const raw = JSON.stringify({
      destination,
      category,
      details
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      cache: 'no-cache'
    }
    const response = await fetch(`${BASE_URL}/api/v1/babelon/search-places/v2`, requestOptions)

    // Handle error request
    if (!response.ok) {
      const jsonErr = await response.json()
      throw new Error(jsonErr.error.message ?? 'Unknown Error')
    }

    return await response.json()
  } catch (error: any) {
    console.log(error)
    return {
      success: false,
      error: {
        message: 'fail to fetch places',
        detail: error.message ??  'unknown error',
        code: 'FETCH_ERROR'
      }
    }
  }
}
