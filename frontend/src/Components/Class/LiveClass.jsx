import React from "react";

LiveClass = (props) => {
  // props to take the link of the class from the database

  return (
    <div className="App">
      <iframe
        width="90%"
        height="600px"
        src={props}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default LiveClass;
