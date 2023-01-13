import React from 'react'

function Hello() {
    function sayHi() {
        console.log("Sasa Mresh!")
    }
  return (
   <button onClick={sayHi}>Chokozaa</button>
  )
}

export default Hello