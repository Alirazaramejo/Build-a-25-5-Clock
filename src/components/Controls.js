import React from 'react'

const Controls = ({ activeStatus, handleReset }) => {
  const [active, setActive] = activeStatus
  return (
    <div className="controls-wrapper">
      <button id="start_stop" onClick={() => setActive(!active)}>
        {active ? <span>&#10074;&#10074;</span> : <span>&#9658;</span>}
      </button>
      <button id="reset" onClick={handleReset}>
        &#8635;
      </button>
    </div>
  )
}

export default Controls;
