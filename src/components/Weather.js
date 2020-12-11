import React, { useState } from 'react';
import axios from 'axios'

import WeatherResult from './WeatherResult';

function Weather() {

    const [zip, setZip] = useState('');
    const [weather, setWeather] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault()
        //We will call the API using axios
        let url =`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
        axios.get(url)
        .then(result => {
            // Set state
            setWeather(result.data)
        })
        .catch(err => {
            console.log(err)
        })
;
    }

    //Conditionally render a weather result component
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Find weather in your area in the United States</h1>
                {weather ? <WeatherResult  weather={weather} /> : null }
                <label htmlFor="zip">Zipcode: </label>
                <input type="text" name="zip" id="zip" onChange={e => setZip(e.target.value)} />
                <input type="submit" value="Find Weather" />
            </form>
        </div>
    )
}

export default Weather;