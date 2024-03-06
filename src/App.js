// import './App.css';
import React, {useState} from 'react'
import Osc1 from './components/Osc1';


// want this in a parent component, we only want it to render once.
let actx = new AudioContext();
let out = actx.destination;
let osc1 = actx.createOscillator();
let gain1 = actx.createGain();
let filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

const App = () => {

  const [osc1Frequency, setOsc1Frequency] = useState(
    osc1.frequency.value);
    
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type,
    Q: filter.Q.value,
    gain: filter.gain.value
  });

  // Change the Osc1 frequency
  const changeOsc1Freq =(e)=>{
    console.log(e.target.value);
    let {value} = e.target;
    osc1.frequency.value = value;
  }

  const changeOsc1 = e =>{
    let {value, id} = e.target;
    setOsc1Settings({...osc1Settings, [id]: value});

    osc1[id].value = value;
  }

  const changeOsc1Type =e=>{
    let {id}= e.target;
    setOsc1Settings({...osc1Settings, type: id});
    osc1.type = id;
  }
  return (
    <div className='App'>
      {/* Headers of the Osc and the buttons to start them */}

      <h1>Starting the Osc</h1>
      {/* Button to start the oscillator Using the button and the function `onClick calling the method */}
        <button
          onClick={()=>osc1.start()}
        >Start Osc1</button>

      {/* Button to stop the oscillator  */}
      <h1>Stop</h1>
        <button
          onClick={()=>osc1.stop()}
          >Stop Osc1</button>

      {/* Showing the components themselves and using the props to assign the methods */}
      <Osc1
      freq={osc1.frequency.value}
      change={changeOsc1}
      settings={osc1Settings}
      changeType={changeOsc1Type}
      changeFreq={changeOsc1Freq}/>


    </div>
  )
}

export default App

