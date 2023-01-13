import React from "react";
import Tickler from "./Tickler";
import MultiButton from "./MultiButton";
import Hello from "./Hello";
import Madem from "./Madem";
import ChangeItUp from "./ChangeItUp";
import Login from "./Login";

function App() {
  return (
    <div>
      <h3>onClick</h3>
      <Tickler />
      <hr />

      <MultiButton />
      <hr />
      <Hello />
      <Madem />
      <hr />

      <h3>onChange</h3>
      <ChangeItUp />
      <hr />

      <h3>onSubmit</h3>
      <Login />
      <hr />
    </div>
  );
}

export default App;
