import { React, useEffect } from 'react';
import './App.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Tools( {startStopEvents, triggerRefreshEvents} ) {

  function deleteAllEvents() {
    startStopEvents.map((event) => {
      fetch(`http://localhost:4000/starts-stops/${event.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        console.log(`Deleted ${event.id}`)
        triggerRefreshEvents()
      });
    })
  }

  return (
    <div className="Tools">
      <ButtonGroup vertical>
        <Button onClick={deleteAllEvents} variant="outline-danger">{`⚠️ Delete all ${startStopEvents?.length} events`}</Button>
      </ButtonGroup>
    </div>
  )
}

export default Tools;
