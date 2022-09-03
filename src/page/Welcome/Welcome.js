import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-area">
        <div className="welcome-title">Welcome</div>
        <Link to="/movie/Harry Potter/years/1">
          <button className="welcome-btn">Watch now</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
