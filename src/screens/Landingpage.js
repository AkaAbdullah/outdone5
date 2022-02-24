import React from "react";
import "./landingscreen.css";
import '../components/typicalinput.css'
import MainImage from "../components/MainImage";
import Typical from "react-typical";
import { useState } from "react";
 
const Landingpage = (props) => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <div className="maindiv">
        <div className="columns">
          <div className="div-prop column is-4 ">
            <p className="font-style ">
              Gift with <br />
              Confidence
            </p>
            <p className="slogan-paragraph">Special occasions are stressful.</p>
            <p className="slogan-paragraph">
              Outdone's Ai-powered gift recommender
            </p>
            <p className="slogan-paragraph">
              gives you one less thing to worry about.
            </p>
            <p className="slogan-paragraph">
              But don't just take our word for it...
            </p>
            <p className="question">How old is the person</p>
            <p className="question2">you're shopping for?</p>
            <div>
            <div onClick={() => setStatus(true)} className="typicalstyle">
      {status ? (
        <input
          onChange={(e) => props.data2(e.target.value)}
          className="inputmain"
          type="number"
        ></input>
      ) : (
        <Typical
          steps={["16", 1000, "25", 1000, "35", 1000, "18", 1000, "60", 1000]}
          loop={Infinity}
          wrapper="p"
        />
      )}
    </div>
    <div>
              <button onClick={props.data} className="continue-button">
                CONTINUE
              </button>
            </div>
            </div>
          </div>
          <MainImage />
        </div>
      </div>
    </>
  );
};

export default Landingpage;

// onClick={() => {setPage((currPage) =>currPage +1)}}
