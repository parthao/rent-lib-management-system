import React, { useEffect, useState } from "react";
import firebaseDB from "../../Firebase.tsx";
import ToggleSwitch from "../MacroComponent/ToggleSwitch.tsx";
import Accordion from "../MacroComponent/Accordion.tsx";
import PropertyService from "../../Services/Property.service.tsx";

export default function Application() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const Push = () => {
    firebaseDB
      .ref("Home")
      .set({
        FirstRoom: name,
      })
      .catch(alert);
  };

  useEffect(() => {
    PropertyService.PropertyWithRoomsList().then((data) => {
      setData(data.data);
    });
  }, []);

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

      {data.map((property) => (
        <Accordion title={property.propertyName}>
          {property.rooms.map(() => (
            <div>
              <ToggleSwitch></ToggleSwitch>
            </div>
          ))}
        </Accordion>
      ))}
    </div>
  );
}
