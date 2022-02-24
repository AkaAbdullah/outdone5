import React from "react";
import exit from "./exit.svg";
import "./step2.css";

const ExitLogo = () => {
  return (
    <>
      <div className="crossdiv">
        <a href="/">
          <img
            src={exit}
            className="exit-icon"
            style={{ width: "20px", height: "20px" }}
            alt="exit"
          ></img>
        </a>
      </div>
    </>
  );
};

export default ExitLogo;
