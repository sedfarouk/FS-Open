import { useEffect, useState } from "react"
import WeatherService from "../services/WeatherService";

const Display = ({ country }) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
            async function fetchWeatherData() {
                const data = await WeatherService.getWeather(`https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)
                setWeather(data)
        }
    fetchWeatherData()
    }, [country])

    return (
        <>
            <h3>{country.name.common}</h3>

            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h4>languages:</h4>

            <ul>{Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}</ul>
            <img src={country.flags.png} alt="" />

            {
                weather ?
                    <>
                        <h3>Weather in {country.name.common}</h3>
                        <p>temperature {weather.main.temp} Celsius</p>
                        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="" />
                        <p>wind {weather.wind.speed}</p>
                    </>

                :   <p>Loading weather data...</p>
            }
        </>
    )
}

export default Display
