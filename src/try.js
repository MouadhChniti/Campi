import { useState } from 'react';



const Switch = () => {
  const [clicked, setCliked ]= useState(true)
  const buttonSwitched = () => {
      setCliked(!clicked)
  }

  return (
     <>
      {clicked? <h1>hello</h1>:<h3>switched</h3>}
          <button onClick={buttonSwitched}>switch</button>

     </>
  )
}
 export default Switch; 
