import { React } from 'react';
import './App.css';
import Accordion from 'react-bootstrap/Accordion';

function EventHistory({ startStopEvents }) {

  const eventItems = startStopEvents?.map((event) => {
    return (
      <Accordion.Item eventKey={event.id} key={event.id}>
        <Accordion.Header>Event #{event.id}</Accordion.Header>
        <Accordion.Body>{event.type} event at {event.time}</Accordion.Body>
      </Accordion.Item>
    )
  })

  return (
    <div className="EventHistory">
      <Accordion>
        {eventItems}
      </Accordion>
    </div>
  )
}

export default EventHistory;
