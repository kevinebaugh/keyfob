import { React, useState, useEffect } from 'react';
import './App.css';
import LocationBar from './LocationBar'
import CarActions from './CarActions'
import EventHistory from './EventHistory'

function App() {
  const [startStopEvents, setStartStopEvents] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/starts-stops')
      .then(response => response.json())
      .then(data => setStartStopEvents(data))
  }, [startStopEvents])

  function handleStartStop(event) {
    const eventInfo = {
      type: event.target.id,
      time: new Date()
    }

    fetch("http://localhost:4000/starts-stops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventInfo)
    })
      .then((response) => response.json() )
      .then((response) => {
        setStartStopEvents(Object.assign(startStopEvents, response))
      })
  }

  return (
    <div className="App">
      <LocationBar />
      <CarActions handleStartStop={handleStartStop} />
      <EventHistory startStopEvents={startStopEvents} />
    </div>
  );
}

export default App;
