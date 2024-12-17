import React from "react";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-border">
        <div className="logo-text">
          <h1>
            HTML<span className="and-symbol">&</span>CSS
          </h1>
          <p>design and build websites</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
