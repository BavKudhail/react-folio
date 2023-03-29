import React, { Component } from "react";
import video from "../assets/ciurlionis.mp4";

export class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
        <div
          className="content"
          style={{
            fontFamily: "Sofia, sans-serif",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "grey",
          }}
        >
          <h1>Welcome to my page </h1>
          <div>
            <p
              style={{
                fontSize: "30px",
              }}
            >
              "Seek the wisdom that will untie your knot. Seek the path that
              demands your whole being." - Rumi
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
