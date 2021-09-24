import React, { useState } from 'react'

const Hour = ({hour}) => (<p><b>{hour}</b></p>)

const ClockHook = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);
  let interval = null;

  const start = (e) => {
    interval = setInterval(()=>setHour(new Date().toLocaleTimeString()),1000);
    setVisible(true);
  }

  const stop = () => {
    clearInterval(interval)
    setVisible(false)
  };
  return (
    <>
      <h2>Clock with hooks</h2>
      {visible && <Hour hour={hour}/>}
      <div>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
      </div>
    </>
  )
}

export default ClockHook
