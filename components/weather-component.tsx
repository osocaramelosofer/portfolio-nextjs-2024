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
      <div className="flex flex-col items-center gap-2">
        {weather === null ? (
          <Skeleton className="rounded-lg">
            <div className="h-24 w-40 rounded-lg bg-default-300"></div>
          </Skeleton>
        ) : (
          <span className="font-lexed text-3xl font-semibold lg:text-6xl">
            {Math.round(weather.temperature)} {weather.temperatureUnit}
          </span>
        )}

        <span className="font-lexend">Tlaxcala Mexico</span>
        <div className="flex gap-x-4 rounded-full bg-white px-4 py-1 font-lexend text-black">
          <div className="flex flex-col items-center justify-center">
            <span className="">
              {Math.round(weather?.apparentTemperature)}
              {weather?.apparentTemperatureUnit}
            </span>
            <span>feels like</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span>
              {Math.round(weather?.windSpeed)} {weather?.windUnit}
            </span>
            <span>wind</span>
          </div>
        </div>
      </div>
    </>
  )
}
