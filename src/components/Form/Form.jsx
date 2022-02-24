import React from "react";
import "./form.css";
import ExitLogo from "./ExitLogo";
import { useState } from "react";

const Form = (props) => {
  const [uinput, setUInput] = useState(0);
  console.log(uinput);

  return (
    <>
      <div className="bg">
        <ExitLogo />

        <div className="progressbar">
          <div className="inner-div"></div>
          <div className="inner-div1"></div>
          <div className="inner-div1"></div>
          <div className="inner-div1"></div>
          <div className="inner-div1"></div>
          <div className="inner-div1"></div>
        </div>
        <div className="line1">
          <p>
            You’re just a few clicks away from finding the perfect gift! First
            things first…
          </p>
        </div>
        <div className="quest">
          <p>How old is the person you’re shopping for?</p>
        </div>
        <input
          onChange={(e) => setUInput(e.target.value)}
          className="input-age"
          type="number"
        ></input>
        <div>
          <button onClick={props.data} className="ctn-btn">
            CONTINUE
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
