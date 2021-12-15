import { React, useState, useEffect } from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert';

function LocationBar() {
  const [location, setLocation] = useState([null, null])
  const [showLocationBar, setShowLocationBar] = useState(true);
  const [currentWeatherString, setCurrentWeatherString] = useState("")
  const weatherKey = process.env.REACT_APP_WEATHER_KEY

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation([position.coords.latitude, position.coords.longitude])
    })
  }, [weatherKey]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location[0]}&lon=${location[1]}&appid=${weatherKey}&units=imperial`)
      .then(response => response.json())
      // .then(data => setCurrentWeatherString(`Currently 32°, partly cloudy`))
      .then(data => setCurrentWeatherString(`Currently ${data?.current?.temp}°, ${data?.current?.weather[0].description}`))
  }, [])

  if (showLocationBar) {
    return (
      <div className="LocationBar">
        <Alert variant="info" onClose={() => setShowLocationBar(false)} dismissible>
          <b>Current location:</b> { (location[0] && location[1] ) ? location.join(', ') : "Location not set"} <br/>
          <b>Current weather:</b> {currentWeatherString}
        </Alert>

      </div>
    );
  } else {
    return null
  }
}

export default LocationBar;
