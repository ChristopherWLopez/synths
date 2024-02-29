import React from "react";

const Osc1 = ({change, settings}) => {
    let { frequency } = settings
  return (
    <div className="control">
        <h2>Osc1</h2>

        <div className="parameters">
            <input
                value={frequency}
            ></input>
        </div>
    </div>
  )
}

export default Osc1
