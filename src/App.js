import { React, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './About'
import LocationBar from './LocationBar'
import CarActions from './CarActions'
import EventHistory from './EventHistory'
import Tools from './Tools'
import Button from 'react-bootstrap/Button';

function App() {
  const [startStopEvents, setStartStopEvents] = useState(null)
  const [eventsShouldBeUpdated, setEventsShouldBeUpdated] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/starts-stops?_sort=time&_order=desc')
      .then(response => response.json())
      .then(data => setStartStopEvents(data))
  }, [eventsShouldBeUpdated])

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
        triggerRefreshEvents()
      })
  }

  function triggerRefreshEvents() {
    setEventsShouldBeUpdated(Math.random())
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <span>
            Keyfob 🔑
          </span>
          <Link to="/">About</Link>
          <Link to="/car-actions">Car Actions</Link>
          <Link to="/tools">Tools</Link>
        </nav>
        <Switch>
          <Route path="/car-actions">
            <LocationBar />
            <CarActions handleStartStop={handleStartStop} />
            <EventHistory startStopEvents={startStopEvents} />
          </Route>
          <Route path="/tools">
            <Tools startStopEvents={startStopEvents} triggerRefreshEvents={triggerRefreshEvents} />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
