import { React, useState, useEffect } from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert';

function LocationBar() {
  const [location, setLocation] = useState([null, null])
  const [showLocation, setShowLocation] = useState(true);
  const weatherKey = process.env.REACT_APP_WEATHER_KEY

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation([position.coords.latitude, position.coords.longitude])

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location[0]}&lon=${location[1]}&appid=${weatherKey}&units=imperial`)
        .then(response => response.json())
        .then(data => console.log(`Currently ${data?.current?.temp}°, ${data?.current?.weather[0].description}`))
    })
  }, []);

  if (showLocation) {
    return (
      <div className="App">
        <Alert variant="info" onClose={() => setShowLocation(false)} dismissible>
          Current location: { (location[0] && location[1] ) ? location.join(', ') : "Location not set"}
        </Alert>

      </div>
    );
  } else {
    return null
  }
}

export default LocationBar;
