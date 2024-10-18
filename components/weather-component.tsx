/* eslint-disable @typescript-eslint/no-floating-promises */
import { weatherAPI } from '@/api/weather'
import { Skeleton } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { IoLocationSharp } from 'react-icons/io5'

export function WeatherComponent() {
  const [weather, setWeather] = useState<any | null>(null)
  useEffect(() => {
    const fetchWeather = async () => {
      const weather = await weatherAPI.getCurrentWeather()
      console.log(weather)
      setWeather(weather)
    }
    fetchWeather()
  }, [])
  return (
    <>
      <div className="flex items-center gap-x-2">
        <IoLocationSharp className="rounded-lg  bg-black p-2 text-4xl text-white" />
        <span className="font-lexed text-lg font-semibold">
          My Location Weather
        </span>
      </div>
      <div className="flex flex-col items-center ">
        {!weather?.temperature ? (
          <Skeleton className="rounded-lg">
            <div className="h-24 w-40 rounded-lg bg-default-300"></div>
          </Skeleton>
        ) : (
          <span className="font-lexed text-6xl font-semibold">
            {weather.temperature} {weather.temperatureUnit}
          </span>
        )}

        {/* <span>Tlaxcala Mexico</span> */}
        {weather !== null && <span>{weather.timezone}</span>}
        <div className="flex gap-x-4 rounded-full bg-white px-4 py-1 text-black">
          <div className="flex flex-col items-center justify-center">
            <span className="">
              {weather?.apparentTemperature} {weather?.apparentTemperatureUnit}
            </span>
            <span>feels like</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>
              {weather?.windSpeed} {weather?.windUnit}
            </span>
            <span>wind</span>
          </div>
        </div>
      </div>
    </>
  )
}
