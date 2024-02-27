import './App.css';
import React from 'react'

let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter = actx.createBiquadFilter();

const App = () => {

  const [osc1Settings, setosc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type
  });

  const changeOsc1 = e =>{
    let {value, id} = e.target;
    setosc1Settings({...osc1Settings, [id]: value});
  }
  
  return (
    <div>
      

    </div>
  )
}

export default App

