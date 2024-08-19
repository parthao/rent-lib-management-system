import React, { useState } from "react";
import "../../css/toggleswitch.css"; // Optional for styling

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-switch" onClick={toggleSwitch}>
      <div className={`switch ${isOn ? "on" : "off"}`}>
        <span className="switch-handle"></span>
      </div>
      <p>{isOn ? "ON" : "OFF"}</p>
    </div>
  );
};

export default ToggleSwitch;
