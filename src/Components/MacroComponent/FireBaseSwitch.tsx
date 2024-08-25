import React, { useState } from "react";
import firebaseDB from "../../Firebase.tsx";
import "../../css/toggleswitch.css"; // Optional for styling

const FireBaseSwitch = ({ Reference, Field }: FireBaseSwitchProps) => {
  const [isOn, setIsOn] = useState(false);

  const frieSwitch = () => {
    setIsOn(!isOn);

    firebaseDB
      .ref(Reference)
      .update({
        [Field]: !isOn == true ? 1 : 0, // Set the key dynamically using the Field prop and the current state
      })
      .catch(alert);
  };

  return (
    <div className="toggle-switch" onClick={frieSwitch}>
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-handle"></span>
      </div>
      <p>{isOn ? "ON" : "OFF"}</p>
    </div>
  );
};

export default FireBaseSwitch;
