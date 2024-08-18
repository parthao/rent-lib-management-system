import React, { useState } from "react";
import firebaseDB from "../../Firebase.tsx";

export default function Application() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const Push = () => {
    firebaseDB
      .ref("user")
      .set({
        name: name,
        age: age,
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
        <input
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <button onClick={Push}>PUSH</button>
      </center>
    </div>
  );
}
