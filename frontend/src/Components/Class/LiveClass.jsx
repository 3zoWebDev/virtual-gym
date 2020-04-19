import React, { useState, useCallback } from "react";
import ClassCard from "./ClassCard";
// http://localhost:5000/api/class/video/token
// This component is going to show a lobby or a room based on whether the user has entered a username and room name
const LiveClass = () => {
  // take props from class card (user and class name)
  const [token, setToken] = useState(null);
  const username = "Ghadeer";
  const roomName = "Earth";
  //   const token = "79303";
  // should be in higher component to take the user and the class name
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const data = await fetch("http://localhost:5000/api/class/video/token", {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        res.json();
        console.log(res);
      });
      setToken(data.token);
    },
    [username, roomName]
  );

  const handleLogout = useCallback((event) => {
    setToken(null);
  }, []);

  return (
    <div>
      {/* <ClassCard
        handleSubmit={handleSubmit}
      /> */}
      {/* On class card */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  ); // we'll build up our response later
};

export default LiveClass;
