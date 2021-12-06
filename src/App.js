import { React } from 'react';
import './App.css';
import LocationBar from './LocationBar'
import CarActions from './CarActions'

function App() {
  function handleStartStop(event) {
    console.log("handleStartStop", handleStartStop)
    console.log(event.target.id)
  }

  return (
    <div className="App">
      <LocationBar />
      <CarActions handleStartStop={handleStartStop} />
    </div>
  );
}

export default App;
