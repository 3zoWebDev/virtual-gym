import React, { Component } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";

export default class LiveClass extends Component {
  state = {
    found: {},
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/class/listClass")
      .then((res) => {
        // console.log(res.data);
        this.setState({
          found: res.data.listClass.filter(
            (element) => element._id == this.props.match.params.id
          )[0],
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.found.class_title}</h1>
        <NavLink
          as={Link}
          to={`/ClassList`}
          className="btn btn-warning btn-block mb-3"
          variant="outline-warning"
        >
          Leave Class
        </NavLink>
        {this.state.found.liveLink == undefined ? (
          <h1> No Live Link Yet! </h1>
        ) : (
          <iframe
            width="80%"
            height="500"
            src={`https://www.youtube.com/embed/${this.state.found.liveLink}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}

        {/* <iframe
        width="90%"
        height="600px"
        src={props}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      </div>
    );
  }
}
