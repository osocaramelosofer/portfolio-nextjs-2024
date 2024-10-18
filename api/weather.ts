export const weatherAPI = {
  getCurrentWeather: async () => {
    try {
      const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
      }

      const response = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=19.32662497069621&longitude=-98.16619161186732&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m&timezone=auto&forecast_days=1',
        requestOptions
      )
      const { current, current_units, timezone } = await response.json()
      const [continent, city] = timezone.split('/')
      const currentWeather = {
        temperature: current.temperature_2m,
        timezone,
        apparentTemperature: current.apparent_temperature,
        windSpeed: current.wind_speed_10m,
        precipitation: current.precipitation,
        rain: current.rain,
        temperatureUnit: current_units.temperature_2m,
        apparentTemperatureUnit: current_units.apparent_temperature,
        precipitationUnit: current_units.precipitation,
        rainUnit: current_units.rain,
        windUnit: current_units.wind_speed_10m
      }
      return currentWeather
    } catch (error) {
      return null
    }
  }
}
