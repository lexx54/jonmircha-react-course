import React , { useState } from 'react'

const HooksCounter = (props) => {
  const [counter, setCounter] = useState(0);
  const sum = (e) => setCounter(counter + 1);
  const substract = e => setCounter(counter - 1);

  return (
    <>
      <h2>Hooks - useState</h2>
      <p>{props.title}</p>
      <nav>
        <button onClick={sum}> - </button>
        <button onClick={substract}> + </button>
      </nav>
      <h3>{counter}</h3>
    </>
  )
}

HooksCounter.defautProps = {
  title: "CLicks"
}

export default HooksCounter

