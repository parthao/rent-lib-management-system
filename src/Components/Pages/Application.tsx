import React, { useState } from "react";
import firebaseDB from "../../Firebase.tsx";
import ToggleSwitch from "../MacroComponent/ToggleSwitch.tsx";

export default function Application() {
  const [name, setName] = useState("");

  const Push = () => {
    firebaseDB
      .ref("Home")
      .set({
        FirstRoom: name,
      })
      .catch(alert);
  };

  return (
    <div className="App" style={{ marginTop: 250 }}>
      <center>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <br />
        <br />
        <button onClick={Push}>PUSH</button>
      </center>

      <ToggleSwitch></ToggleSwitch>
    </div>
  );
}
