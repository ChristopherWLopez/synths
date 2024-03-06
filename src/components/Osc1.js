import React from 'react'

const Osc1 = ({changeFreq,freq}) => {

  return (
    <div>
      <input onChange={changeFreq}
      freq={freq}
      max="5000"
       type="range" id="frequency"></input>
    </div>
  )
}

export default Osc1

