import React from "react";
import classes from "./BackgroundVideo.module.css";
import videoSource from "../Components/training3.mp4";

const Welcome = () => {
  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <h1>WELCOME TO OUR V-GYM</h1>
          <p>You can stay HOME, stay SAFE and stay FIT with our live classes</p>
          <button type="button" className="btn btn-outline-dark">
            View Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
