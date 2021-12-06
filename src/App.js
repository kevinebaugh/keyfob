import { React } from 'react';
import './App.css';
import LocationBar from './LocationBar'
import CarActions from './CarActions'

function App() {
  function handleStartStop(event) {
    console.log("handleStartStop", handleStartStop)
    console.log(event.target.id)

    const eventInfo = {
      type: event.target.id,
      time: Date.now(),
      location: null
    }

    fetch("http://localhost:3001/starts-stops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventInfo),
    })
      .then((r) => r.json())
      .then((response) => console.log(response))
  }

  return (
    <div className="App">
      <LocationBar />
      <CarActions handleStartStop={handleStartStop} />
    </div>
  );
}

export default App;
