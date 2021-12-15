import { React } from 'react';
import './App.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function CarActions({ handleStartStop }) {
  return (
    <div className="CarActions">
      <ButtonGroup size="lg" vertical>
        <Button id="start" onClick={handleStartStop} variant="outline-success">Start</Button>
        <Button id="stop" onClick={handleStartStop} variant="outline-danger">Stop</Button>
      </ButtonGroup>
    </div>
  )
}

export default CarActions;
