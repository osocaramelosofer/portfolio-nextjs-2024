'use server'
interface ISearchPlacesProps {
  destination: string
  budget: string
  //   dateFrom: Date
  //   dateTo: Date
  people?: number | null
  details?: string | null
}
const BASE_URL = 'http://localhost:3000'
export async function searchPlaces ({ destination, budget, people, details }: ISearchPlacesProps) {
  'use server'
  try {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    const raw = JSON.stringify({
      destination,
      budget,
      dateFrom: new Date().toString(),
      dateTo: new Date().toString(),
      people,
      details,
      inputMessages: []
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      cache: 'no-cache'
    }
    const placesResponse = await fetch(`${BASE_URL}/api/v1/babelon/search-places`, requestOptions)
    const jsonResponse = await placesResponse.json()
    return jsonResponse
  } catch (error) {
    return null
  }
}
