import { React, useState, useEffect } from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert';

function LocationBar() {
  const [location, setLocation] = useState([null,null])
  const [showLocation, setShowLocation] = useState(true);


  function getLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation([position.coords.latitude, position.coords.longitude])
    })
    console.log("process.env", process.env.REACT_APP_VAR)
  }

  useEffect(() => {
    getLocation()
  }, []);

  if (showLocation) {
    return (
      <div className="App">
        <Alert variant="info" onClose={() => setShowLocation(false)} dismissible>
          Current location: { (location[0] && location[1] ) ? location.join(',') : "Location not set"}
        </Alert>

      </div>
    );
  } else {
    return null
  }
}

export default LocationBar;
