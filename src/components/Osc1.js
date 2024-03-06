import React from 'react'

const Osc1 = ({changeFreq}) => {
  return (
    <div>
      <input onChange={changeFreq}
      max="5000"
       type="range" id="frequency"></input>
    </div>
  )
}

export default Osc1

