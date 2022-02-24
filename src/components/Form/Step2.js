import React from "react";
import "./step2.css";
import ExitLogo from "./ExitLogo";

const Step2 = () => {

  return (
    <>
      <div className="bg">
        <ExitLogo />
        <div className="heading-div"></div>
        <p className="heading1">Thinking about your giftgetter...</p>
        <div className="progressbar1">
          <div className="inner-divnew"></div>
          <div className="inner-div2"></div>
          <div className="inner-div1"></div>
          <div className="inner-div1"></div>
          <div className="inner-div1"></div>
          <div className="inner-div1"></div>
        </div>
        <div className="genderdiv">
          <p className="gender">How do they identify?</p>
        </div>
        <form >
          <div className="boxes">
            <div className="radio-toolbar">
              <input
                type="radio"
                id="radioApple"
                name="radioFruit"
                value="apple"
              ></input>
              <label>male</label>

              <input
                type="radio"
                id="radioBanana"
                name="radioFruit"
                value="banana"
              ></input>
              <label>female</label>

              <input
                type="radio"
                id="radioOrange"
                name="radioFruit"
                value="orange"
              ></input>
              <label>other</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step2;
