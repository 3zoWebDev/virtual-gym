import React from "react";
import classes from "./BackgroundVideo.module.css";
import videoSource from "../Components/training3.mp4";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className={classes.Container}>
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={classes.Content}>
          <div className={classes.SubContent}>
            <h1>WELCOME TO OUR V-GYM</h1>
            <p>Stay HOME. Stay SAFE. Stay FIT with our live classes</p>
            {/* <button type="button" className="btn btn-outline-dark">
              View Classes
            </button> */}
            <NavLink
              to={`/ClassList`}
              className="btn btn-warning btn-block mb-3"
              variant="outline-danger"
            >
              View Classes
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
