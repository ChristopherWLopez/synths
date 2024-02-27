import './App.css';
import React from 'react'

let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);


const App = () => {
  return (
    <div>
      
    </div>
  )
}

export default App

