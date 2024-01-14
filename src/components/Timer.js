import React from 'react'
import moment from 'moment'

const Timer = ({ currentMode, currentTime }) => {
  const [mode] = currentMode
  const [time] = currentTime
  return (
    <section>
      <h2 id="timer-label">{mode === 'session' ? 'Session' : 'Break'}</h2>,
      <h3 id="time-left">{moment(time).format('mm:ss')}</h3>
    </section>
  )
}

export default Timer;
