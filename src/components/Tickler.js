import React from "react";

function Tickler() {
  function tickle() {
    console.log("TeeHee");
  }

  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;
