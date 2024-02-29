import './App.css';
import React, {useState} from 'react'
import Osc1 from './components/Osc1';


let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

const App = () => {

  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type
  });

  const changeOsc1 = e =>{
    let {value, id} = e.target;
    setOsc1Settings({...osc1Settings, [id]: value});
  }

  return (
    <div className='App'>
      {/* Headers of the Osc and the buttons to start them */}

      <h1>Starting the Osc</h1>
      {/* Button to start the oscillator Using the button and the function `onClick calling the method */}
        <button
          onClick={osc1.start()}
        >Start Osc1</button>

      {/* Button to stop the oscillator  */}
      <h1>Stop</h1>
        <button
          onClick={osc1.stop()}
          >Stop Osc1</button>

      {/* Showing the components themselves and using the props to assign the methods */}
      <Osc1
      change={changeOsc1}
      />
    </div>
  )
}

export default App

